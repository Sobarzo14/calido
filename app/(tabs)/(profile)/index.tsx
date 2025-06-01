import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet
} from "react-native";

import ProfileDetails from "./ProfileDetails";

import ProfileTabs from "./ProfileTabs";

const ProfilePage = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ProfileDetails />

        <ProfileTabs />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({

});
