import React from "react";
import {
  SafeAreaView,
  StyleSheet
} from "react-native";

import ProfileDetails from "./ProfileDetails";

import ProfileTabs from "./ProfileTabs";

const ProfilePage = () => {
  return (
    <SafeAreaView>
      <ProfileDetails />
      <ProfileTabs />
    </SafeAreaView>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({

});
