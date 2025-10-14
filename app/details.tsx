import { useLocalSearchParams, Link } from "expo-router";
import { StyleSheet, View, Text } from "react-native";

export default function DetailsScreen() {
  const { id, title } = useLocalSearchParams<{ id?: string; title?: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Detalhes</Text>
      <Text style={styles.p}>ID recebido: {id ?? "-"}</Text>
      <Text style={styles.p}>Título recebido: {title ?? "-"}</Text>

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
