import { Pressable, Text, StyleSheet, View } from "react-native";
import colors from "../styles/color";

export default function RequestButton({ onPress }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Pedir Doação</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 90, 
    width: "100%",
    alignItems: "center",
    zIndex: 9999,
    elevation: 9999,
  },
  button: {
    backgroundColor: "#D93036",
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 30,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  text: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "DGrotesque",
  },
});