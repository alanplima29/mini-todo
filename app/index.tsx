import { Link, useRouter } from "expo-router";
import { useMemo, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";
import { TaskItem } from "../src/components/TaskItem";
import { colors, spacing } from "../src/theme";

type Task = { id: string; title: string; done?: boolean };

export default function HomeScreen() {
  const router = useRouter();

  const initial: Task[] = useMemo(
    () => [
      { id: "1", title: "Revisar código Projeto" },
      { id: "2", title: "Comprar Ração" },
      { id: "3", title: "Iniciar CRUD - BackEnd" },
      { id: "4", title: "Ir à academia" },
      {
        id: "5",
        title: "Responder Emails pendentes",
      },
    ],
    []
  );

  const [tasks, setTasks] = useState<Task[]>(initial);

  const openDetails = (id: string) => {
    const t = tasks.find((x) => x.id === id);
    router.push({
      pathname: "/details",
      params: { id, title: t?.title ?? "" },
    });
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
    Alert.alert("Tarefa excluída!");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.title}>Mini To-Do</Text>
        <Link href="/settings" style={styles.link}>
          Configurações
        </Link>
      </View>

      <FlatList
        contentContainerStyle={styles.listContent}
        data={tasks}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: spacing.sm }} />}
        renderItem={({ item }) => (
          <TaskItem
            id={item.id}
            title={item.title}
            onPress={openDetails}
            onDelete={deleteTask}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  header: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: { fontSize: 24, fontWeight: "800", color: colors.text },
  link: { color: "#1565c0", fontSize: 16, fontWeight: "600" },
  listContent: { padding: spacing.md, paddingTop: spacing.sm },
});
