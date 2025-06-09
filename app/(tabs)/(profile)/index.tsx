import React from "react";
import {
  StyleSheet, View
} from "react-native";

import ProfileDetails from "./ProfileDetails";
import ProfileTabs from "./ProfileTabs";

const ProfilePage = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ProfileDetails />

      <ProfileTabs />
    </View >
  );
};

export default ProfilePage;

const styles = StyleSheet.create({

});
