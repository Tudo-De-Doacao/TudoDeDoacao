import React, { useState } from "react";
import { View, Text, TextInput, Pressable, FlatList, KeyboardAvoidingView, Platform } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const sendMessage = () => {
    if (!text.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      text,
      sender: "user",
    };

    setMessages([...messages, newMessage]);
    setText("");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#FFE0E0" }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >

      {/* HEADER FIXO */}
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
          Atendimento
        </Text>

        <Pressable onPress={() => {}}>
          <Icon name="x" size={26} color="#351313" />
        </Pressable>
      </View>

      {/* LISTA DE MENSAGENS */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        style={{ flex: 1, paddingHorizontal: 12 }}
        contentContainerStyle={{ paddingVertical: 10 }}
        renderItem={({ item }) => (
          <View
            style={{
              alignSelf: item.sender === "user" ? "flex-end" : "flex-start",
              backgroundColor: item.sender === "user" ? "#D93036" : "#FFF",
              padding: 10,
              borderRadius: 12,
              marginVertical: 4,
              maxWidth: "80%",
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
          </View>
        )}
      />

      {/* INPUT FIXO EMBAIXO */}
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
          style={{
            flex: 1,
            backgroundColor: "#FFF",
            borderRadius: 25,
            paddingHorizontal: 16,
            height: 45,
            fontSize: 16,
          }}
        />

        <Pressable
          onPress={sendMessage}
          style={{
            width: 45,
            height: 45,
            borderRadius: 25,
            marginLeft: 8,
            backgroundColor: "#D93036",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="send" size={22} color="#FFF" />
        </Pressable>
      </View>

    </KeyboardAvoidingView>
  );
}
