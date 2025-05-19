import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default class ProfilePage extends Component {
  render() {
    return (
      <View className="profilePhotos">
        <Text style={{ color: "white" }}>ProfilePage</Text>
        <Text>Hello</Text>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?cs=srgb&dl=pexels-olly-762020.jpg&fm=jpg",
          }}
        />
        <Image
          source={{
            uri: "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg",
          }}
        />
        <Image
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
