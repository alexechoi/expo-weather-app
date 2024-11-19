import { SafeAreaView, StyleSheet } from "react-native";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Weather",
          }}
        />
      </Stack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff", // Optional: Set a background color if needed
  },
});