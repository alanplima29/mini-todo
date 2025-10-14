import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <ActionSheetProvider>
      <View style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <Stack
          screenOptions={{
            headerTitleAlign: "center",
          }}
        >
          <Stack.Screen name="index" options={{ title: "Mini To-Do" }} />
          <Stack.Screen name="details" options={{ title: "Detalhes" }} />
          <Stack.Screen name="settings" options={{ title: "Configurações" }} />
        </Stack>
      </View>
    </ActionSheetProvider>
  );
}
