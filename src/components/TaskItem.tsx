import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { colors, spacing, radius } from "../theme";

type TaskItemProps = {
  id: string;
  title: string;
  onPress?: (id: string) => void;
  onDelete?: (id: string) => void;
  initialDone?: boolean;
};

export function TaskItem({
  id,
  title,
  onPress,
  onDelete,
  initialDone = false,
}: TaskItemProps) {
  const [done, setDone] = useState(initialDone); //REQUISITO 02 b
  const { showActionSheetWithOptions } = useActionSheet();

  useEffect(() => {
    console.log(`Task ${id} está agora: ${done ? "concluída" : "pendente"}`);
  }, [done, id]);

  const openMenu = () => {
    const options = ["Marcar como concluída", "Excluir", "Cancelar"];
    const destructiveButtonIndex = 1;
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      {
        options,
        destructiveButtonIndex,
        cancelButtonIndex,
        title: title,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) setDone(true);
        else if (buttonIndex === 1) onDelete?.(id);
      }
    );
  };

  return (
    <TouchableOpacity
      onPress={() => onPress?.(id)}
      onLongPress={openMenu}
      style={[styles.card, done && styles.cardDone]}
      activeOpacity={0.8}
    >
      <View style={styles.left}>
        <TouchableOpacity
          onPress={() => setDone((v) => !v)}
          style={[styles.checkbox, done && styles.checkboxOn]}
        />
      </View>

      <View style={styles.center}>
        <Text
          style={[styles.title, done && styles.titleDone]}
          numberOfLines={1}
        >
          {title}
        </Text>
        <Text style={styles.subtitle}>{done ? "Concluída" : "Pendente"}</Text>
      </View>

      <View style={styles.right}>
        <Text style={styles.chevron}>›</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  cardDone: { opacity: 0.8 },
  left: { width: 28, alignItems: "center" },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: "transparent",
  },
  checkboxOn: { backgroundColor: colors.primary },
  center: { flex: 1 },
  title: { fontSize: 16, fontWeight: "700", color: colors.text },
  titleDone: { textDecorationLine: "line-through", color: colors.textMuted },
  subtitle: { fontSize: 12, color: colors.textMuted, marginTop: 2 },
  right: { paddingLeft: spacing.sm },
  chevron: { fontSize: 24, color: colors.textMuted, marginTop: -2 },
});
