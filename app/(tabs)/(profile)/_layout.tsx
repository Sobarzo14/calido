import { Link } from '@react-navigation/native';
import { Stack } from "expo-router";
import React from "react";


export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Profile",
          headerRight: () => <Link screen="SettingsScreen" params={{ id: 'jane' }}>
            Go
          </Link>,
        }}
      />
    </Stack>
  );
}
