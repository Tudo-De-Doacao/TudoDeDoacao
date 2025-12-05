import { Pressable, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function FloatingButton({ onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Icon name="message-circle" size={28} color="#351313" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 100, 
    right: 20,
    width: 65,
    height: 65,
    borderRadius: 50,
    backgroundColor: "#FFC0B8",
    justifyContent: "center",
    alignItems: "center",

    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});