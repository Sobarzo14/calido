import { useColorScheme } from "@/hooks/useColorScheme";
import { defaultConfig } from '@tamagui/config/v4';
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "react-native-reanimated";
import { createTamagui, TamaguiProvider } from 'tamagui';


export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in developme nt.
    return null;
  }
  const config = createTamagui(defaultConfig)
  return (
    <TamaguiProvider config={config}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </TamaguiProvider>
  );
}
