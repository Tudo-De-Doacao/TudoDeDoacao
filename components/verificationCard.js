import { View, Text, TextInput, StyleSheet } from "react-native";
import colors from "../styles/color";
import typog from "../styles/type";

export default function VerificationCard({ code, setCode }) {
  return (
    <View style={styles.overlay}>
      <View style={styles.card}>
        <Text style={typog.titleLogin}>Verificação</Text>

        <Text style={styles.label}>
          Insira o código enviado para seu e-mail
        </Text>

        <TextInput
          style={styles.input}
          placeholder="000000"
          keyboardType="numeric"
          maxLength={6}
          onChangeText={setCode}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },

  card: {
    backgroundColor: colors.background,
    padding: 25,
    borderRadius: 20,
    width: "85%",
    alignItems: "center",
    elevation: 10,
  },

  label: {
    fontSize: 14,
    color: colors.gray,
    marginTop: 10,
    marginBottom: 12,
  },

  input: {
    height: 55,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 20,
    letterSpacing: 4,
    textAlign: "center",
    width: "80%",
    color: "#000",
  },
});
