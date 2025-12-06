import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Card from "./CardDon";
import styles from "../styles";
import colors from "../styles/color";
import typog from "../styles/type";

export default function PendingDonationCard({ title, content, iconName, dataCard }) {

  if (!dataCard || dataCard.length === 0) {
    return null;
  }

  return (
    <View style={{ marginVertical: 16 }}>
      {/* Cabeçalho do card */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 16,
          marginBottom: 8,
        }}
      >
        <Icon name={iconName} size={24} color={colors.active} />
        <Text
          style={{
            ...typog.txtDrw,
            marginLeft: 8,
            flex: 1,
          }}
        >
          {title}
        </Text>
      </View>

      {/* Corpo do card - Lista horizontal */}
      <FlatList
        data={dataCard}
        keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
        renderItem={({ item }) => (
          <Card
            name={item.name || item.donation_name}
            description={item.description || item.donation_description}
            location={item.location || item.donation_location}
            image={`http://10.215.204.95:8000/storage/${item.image || item.donation_image}`}
            status={item.status}
          />
        )}
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 16,
          alignItems: "center",
          gap: 32,
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}