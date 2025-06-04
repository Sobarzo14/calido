import React from "react";
import {
  ScrollView,
  StyleSheet
} from "react-native";

import { Link } from '@react-navigation/native';
import ProfileDetails from "./ProfileDetails";
import ProfileTabs from "./ProfileTabs";

const ProfilePage = () => {
  return (
    <ScrollView>
      <ProfileDetails />

      <ProfileTabs />
      <Link screen="Profile" params={{ id: 'jane' }}>
        Go to Jane's profile
      </Link>
    </ScrollView >
  );
};

export default ProfilePage;

const styles = StyleSheet.create({

});
