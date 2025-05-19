import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: Colors.theme.lightGray,
        tabBarActiveTintColor: Colors.theme.red,
        // tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Events",
          title: "Events",
        }}
      />
      <Tabs.Screen
        name="partners"
        options={{
          headerTitle: "Partners",
          title: "Partners",
        }}
      />
      <Tabs.Screen
        name="social"
        options={{
          headerTitle: "Social Media",
          title: "Social Media",
        }}
      />
      <Tabs.Screen
        name="classes"
        options={{
          headerTitle: "Classes",
          title: "Classes",
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          headerTitle: "Profile",
          headerShown: false,
          title: "Profile",
        }}
      />
    </Tabs>
  );
}
