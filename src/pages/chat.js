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
import { getUserId } from "../../services/data/getUser";

export default function Chat() {
  const route = useRoute();
  const navigation = useNavigation();
  const flatListRef = useRef(null);


  const recipientId = route.params?.recipientId || 1; 
  const recipientName = route.params?.recipientName || "Atendimento";

  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    async function loadUserId() {
      const userId = await getUserId();
      setCurrentUserId(userId);
    }
    loadUserId();
  }, []);

  useEffect(() => {
    if (currentUserId) {
      loadMessages();
    }
  }, [currentUserId, recipientId]);

  useEffect(() => {
    if (!currentUserId) return;

    const interval = setInterval(() => {
      loadMessages(true); 
    }, 5000);

    return () => clearInterval(interval);
  }, [currentUserId, recipientId]);

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

  const handleClose = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#FFE0E0" }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
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