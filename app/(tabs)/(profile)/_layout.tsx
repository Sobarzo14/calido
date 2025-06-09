import { Link, Stack, useRouter } from "expo-router";
import React from "react";
import { Text, } from 'react-native';


export default function ProfileLayout() {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Profile",
          headerRight: () => <Link href="/(tabs)/(profile)/SettingsScreen">
            <Text>Settings</Text>
          </Link>
        }}
      />
    </Stack>
  );
}
