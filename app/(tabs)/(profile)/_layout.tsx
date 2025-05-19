import { Stack } from "expo-router";
import React, { Component } from "react";

export default class ProfileLayout extends Component {
  render() {
    return (
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "Profile",
          }}
        />
      </Stack>
    );
  }
}
