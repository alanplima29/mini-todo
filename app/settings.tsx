import { Link } from "expo-router";
import { StyleSheet, View, Text } from "react-native";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Configurações</Text>
      <Text style={styles.p}>Aqui vamos colocar preferências depois.</Text>

      <Link href="/" style={styles.link}>
        Voltar para Home
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: "center", gap: 12 },
  h1: { fontSize: 24, fontWeight: "700" },
  p: { fontSize: 16 },
  link: { color: "#1565c0", marginTop: 8, fontSize: 16 },
});
