import { Stack, useNavigation } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function ProfileLayout() {
  const navigation = useNavigation()
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Profile",
          headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen' as never)} style={{ marginRight: 15 }}>
            <Text>Go</Text>
          </TouchableOpacity>
        }}
      />
    </Stack>
  );
}
