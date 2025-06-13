import EventCard from "@/components/EventCard";
import React, { Component } from "react";
import { ScrollView, View } from "react-native";

export default class Events extends Component {
  render() {
    return (
      <View style={{ flex: 1, padding: 16 }}>
        <ScrollView>
          <EventCard name="Hello" date={Date.now()} author="Me" />
          <EventCard name="Goodbye" date={new Date()} author="Me" />
          <EventCard name="Hello" date={new Date} author="Me" />
        </ScrollView>
      </View>
    );
  }
}
