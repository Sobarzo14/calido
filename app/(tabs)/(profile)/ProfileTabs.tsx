import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import AboutTab from './AboutTab';
import EventsAttendedTab from './EventsAttendedTab';
import PostsTab from './PostsTab';

const Tab = createMaterialTopTabNavigator();

const MyTabs = createMaterialTopTabNavigator({
    screens: {
        Posts: PostsTab,
        Events: EventsAttendedTab,
        About: AboutTab
    },
});

const ProfileTabs = () => {


    return (
        <Tab.Navigator>
            <Tab.Screen name="Posts" component={PostsTab} />
            <Tab.Screen name="Events" component={EventsAttendedTab} />
            <Tab.Screen name="About" component={AboutTab} />
        </Tab.Navigator>
    )
}

export default ProfileTabs

const styles = StyleSheet.create({
    tabButtons: {
        flexDirection: "row",
        justifyContent: "space-around"
    }
})