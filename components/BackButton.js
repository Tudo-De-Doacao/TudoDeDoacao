import { Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/index";

export default function BackButton({ route, icon }) {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate(route)}
      style={styles.backButton}
    >
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        {icon}
      </View>
    </Pressable>
  );
}
