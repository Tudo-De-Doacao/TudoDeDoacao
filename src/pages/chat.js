import React, { useState, useEffect, useRef } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  Pressable, 
  FlatList, 
  KeyboardAvoidingView, 
  Platform,
  ActivityIndicator,
  Alert
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useRoute, useNavigation } from "@react-navigation/native";

import { getMessages, sendMessage } from "../../services/api/messages";
import { getUserId } from "../../src/data/getUser";
import { 
  confirmDonationByDonor, 
  confirmDonationByRecipient,
  getDonationConfirmationStatus 
} from "../../services/api/confirmations";

export default function Chat() {
  const route = useRoute();
  const navigation = useNavigation();
  const flatListRef = useRef(null);

  const recipientId = route.params?.recipientId || 1;
  const recipientName = route.params?.recipientName || "Atendimento";
  const donationId = route.params?.donationId; // ID da doação associada
  const isDonor = route.params?.isDonor; // true se é o doador, false se é o recebedor

  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);
  
  // Estados de confirmação
  const [donorConfirmed, setDonorConfirmed] = useState(false);
  const [recipientConfirmed, setRecipientConfirmed] = useState(false);
  const [confirmationLoading, setConfirmationLoading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    loadUserId();
  }, []);

  useEffect(() => {
    if (currentUserId) {
      loadMessages();
      if (donationId) {
        loadConfirmationStatus();
      }
    }
  }, [currentUserId, recipientId, donationId]);

  useEffect(() => {
    if (!currentUserId || !donationId) return;

    const interval = setInterval(() => {
      loadMessages(true);
      loadConfirmationStatus(true);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentUserId, recipientId, donationId]);

  const loadUserId = async () => {
    const uid = await getUserId();
    setCurrentUserId(uid);
  };

  const loadConfirmationStatus = async (silent = false) => {
    if (!donationId) return;

    try {
      const status = await getDonationConfirmationStatus(donationId);
      if (status) {
        setDonorConfirmed(status.donor_confirmed);
        setRecipientConfirmed(status.recipient_confirmed);
        setIsCompleted(status.status === 'disable' || status.status === 'completed');
      }
    } catch (error) {
      if (!silent) {
        console.error('Erro ao carregar status:', error);
      }
    }
  };

  const loadMessages = async (silent = false) => {
    if (!silent) setLoading(true);
    
    try {
      const data = await getMessages(recipientId);
      
      const formattedMessages = data.map(msg => ({
        id: msg.id.toString(),
        text: msg.text,
        sender: msg.sender_id.toString() === currentUserId ? "user" : "other",
        timestamp: msg.created_at,
        read_at: msg.read_at
      }));

      setMessages(formattedMessages);
      
      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 100);
    } catch (error) {
      if (!silent) {
        Alert.alert("Erro", "Não foi possível carregar as mensagens");
      }
    } finally {
      if (!silent) setLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (!text.trim() || sending) return;

    const messageText = text.trim();
    setText("");

    const optimisticMessage = {
      id: `temp-${Date.now()}`,
      text: messageText,
      sender: "user",
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, optimisticMessage]);
    setSending(true);

    try {
      const response = await sendMessage({
        recipientId,
        text: messageText
      });

      setMessages(prev => 
        prev.map(msg => 
          msg.id === optimisticMessage.id 
            ? { ...msg, id: response.id?.toString() || msg.id }
            : msg
        )
      );

      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 100);
    } catch (error) {
      setMessages(prev => prev.filter(msg => msg.id !== optimisticMessage.id));
      Alert.alert("Erro", "Não foi possível enviar a mensagem. Tente novamente.");
      setText(messageText);
    } finally {
      setSending(false);
    }
  };

  const handleConfirmReceipt = async () => {
    if (!donationId) {
      Alert.alert('Erro', 'Doação não identificada');
      return;
    }

    const confirmTitle = isDonor 
      ? 'Confirmar Entrega'
      : 'Confirmar Recebimento';
    
    const confirmMessage = isDonor
      ? 'Você confirma que entregou esta doação?'
      : 'Você confirma que recebeu esta doação?';

    Alert.alert(
      confirmTitle,
      confirmMessage,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Confirmar',
          onPress: async () => {
            setConfirmationLoading(true);
            try {
              const result = isDonor
                ? await confirmDonationByDonor(donationId)
                : await confirmDonationByRecipient(donationId);

              if (result) {
                await loadConfirmationStatus();
                
                if (isDonor) {
                  setDonorConfirmed(true);
                } else {
                  setRecipientConfirmed(true);
                }
              }
            } catch (error) {
              console.error('Erro ao confirmar:', error);
            } finally {
              setConfirmationLoading(false);
            }
          }
        }
      ]
    );
  };

  const handleClose = () => {
    navigation.goBack();
  };

  // Verifica se deve mostrar o botão de confirmação
  const showConfirmButton = () => {
    if (!donationId || isCompleted) return false;
    
    if (isDonor) {
      return !donorConfirmed;
    } else {
      return !recipientConfirmed;
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#FFE0E0" }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      {/* HEADER */}
      <View
        style={{
          height: 60,
          backgroundColor: "#FFB8B8",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 16,
          elevation: 4,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#351313", flex: 1 }}>
          {recipientName}
        </Text>

        <Pressable onPress={handleClose}>
          <Icon name="x" size={26} color="#351313" />
        </Pressable>
      </View>

      {/* STATUS DE CONFIRMAÇÃO */}
      {donationId && !isCompleted && (
        <View
          style={{
            backgroundColor: '#FFF3E0',
            padding: 12,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 12, color: '#F57C00', fontWeight: '600' }}>
              Status da Entrega
            </Text>
            <View style={{ flexDirection: 'row', marginTop: 6, gap: 8 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon 
                  name={donorConfirmed ? "check-circle" : "circle"} 
                  size={16} 
                  color={donorConfirmed ? "#4CAF50" : "#999"} 
                />
                <Text style={{ fontSize: 11, marginLeft: 4, color: '#666' }}>
                  Doador
                </Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon 
                  name={recipientConfirmed ? "check-circle" : "circle"} 
                  size={16} 
                  color={recipientConfirmed ? "#4CAF50" : "#999"} 
                />
                <Text style={{ fontSize: 11, marginLeft: 4, color: '#666' }}>
                  Recebedor
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}

      {/* DOAÇÃO FINALIZADA */}
      {isCompleted && (
        <View
          style={{
            backgroundColor: '#E8F5E9',
            padding: 12,
            alignItems: 'center',
          }}
        >
          <Icon name="check-circle" size={24} color="#4CAF50" />
          <Text style={{ fontSize: 14, color: '#2E7D32', fontWeight: '600', marginTop: 4 }}>
            Doação Concluída! 🎉
          </Text>
        </View>
      )}

      {/* MENSAGENS */}
      {loading && messages.length === 0 ? (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" color="#D93036" />
          <Text style={{ marginTop: 10, color: "#351313" }}>Carregando mensagens...</Text>
        </View>
      ) : (
        <>
          <FlatList
            ref={flatListRef}
            data={messages}
            keyExtractor={(item) => item.id}
            style={{ flex: 1, paddingHorizontal: 12 }}
            contentContainerStyle={{ paddingVertical: 10 }}
            onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
            ListEmptyComponent={
              <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 50 }}>
                <Icon name="message-circle" size={60} color="#D93036" />
                <Text style={{ marginTop: 16, color: "#351313", fontSize: 16 }}>
                  Nenhuma mensagem ainda
                </Text>
                <Text style={{ marginTop: 8, color: "#666", fontSize: 14 }}>
                  Envie uma mensagem para começar
                </Text>
              </View>
            }
            renderItem={({ item }) => (
              <View
                style={{
                  alignSelf: item.sender === "user" ? "flex-end" : "flex-start",
                  backgroundColor: item.sender === "user" ? "#D93036" : "#FFF",
                  padding: 12,
                  borderRadius: 12,
                  marginVertical: 4,
                  maxWidth: "80%",
                  elevation: 1,
                }}
              >
                <Text
                  style={{
                    color: item.sender === "user" ? "#FFF" : "#351313",
                    fontSize: 16,
                  }}
                >
                  {item.text}
                </Text>
                
                {item.timestamp && (
                  <Text
                    style={{
                      color: item.sender === "user" ? "#FFE0E0" : "#999",
                      fontSize: 11,
                      marginTop: 4,
                      alignSelf: "flex-end"
                    }}
                  >
                    {new Date(item.timestamp).toLocaleTimeString('pt-BR', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </Text>
                )}
              </View>
            )}
          />

          {/* BOTÃO DE CONFIRMAÇÃO */}
          {showConfirmButton() && (
            <View style={{ paddingHorizontal: 10, paddingVertical: 8, backgroundColor: "#FFE0E0" }}>
              <Pressable
                onPress={handleConfirmReceipt}
                disabled={confirmationLoading}
                style={{
                  backgroundColor: confirmationLoading ? "#CCC" : "#4CAF50",
                  padding: 14,
                  borderRadius: 25,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {confirmationLoading ? (
                  <ActivityIndicator size="small" color="#FFF" />
                ) : (
                  <>
                    <Icon name="check-circle" size={20} color="#FFF" />
                    <Text style={{ color: '#FFF', fontSize: 16, fontWeight: 'bold', marginLeft: 8 }}>
                      {isDonor ? 'Confirmar Entrega' : 'Confirmar Recebimento'}
                    </Text>
                  </>
                )}
              </Pressable>
            </View>
          )}

          {/* INPUT DE MENSAGEM */}
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              backgroundColor: "#FFB8B8",
              alignItems: "center",
            }}
          >
            <TextInput
              placeholder="Digite sua mensagem..."
              value={text}
              onChangeText={setText}
              onSubmitEditing={handleSendMessage}
              returnKeyType="send"
              multiline
              maxLength={500}
              editable={!sending}
              style={{
                flex: 1,
                backgroundColor: "#FFF",
                borderRadius: 25,
                paddingHorizontal: 16,
                paddingVertical: 10,
                minHeight: 45,
                maxHeight: 100,
                fontSize: 16,
              }}
            />

            <Pressable
              onPress={handleSendMessage}
              disabled={!text.trim() || sending}
              style={{
                width: 45,
                height: 45,
                borderRadius: 25,
                marginLeft: 8,
                backgroundColor: (!text.trim() || sending) ? "#FFB8B8" : "#D93036",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {sending ? (
                <ActivityIndicator size="small" color="#FFF" />
              ) : (
                <Icon name="send" size={22} color="#FFF" />
              )}
            </Pressable>
          </View>
        </>
      )}
    </KeyboardAvoidingView>
  );
}