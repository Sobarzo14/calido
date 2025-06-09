import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { H4, ScrollView, Text, YStack } from 'tamagui'

const SettingsScreen = () => {
    return (
        <SafeAreaView>

            <ScrollView>
                <YStack
                    borderColor={''}>
                    <H4 fontWeight='bold'>Account Settings</H4>
                    <Text borderBottomWidth={0.25} flex={1} padding={12}>Edit Profile</Text>
                    <Text borderBottomWidth={0.25} flex={1} padding={12}>Change Password</Text>
                    <Text borderBottomWidth={0.25} flex={1} padding={12}>Managed Linked Accounts</Text>
                    <Text borderBottomWidth={0.25} flex={1} padding={12}>Email and Phone</Text>
                    <Text borderBottomWidth={0.25} flex={1} padding={12}>Push Notifications</Text>
                </YStack>
                <YStack
                    borderColor={''}>
                    <H4 fontWeight='bold'>Discovery Preferences</H4>
                    <Text borderBottomWidth={0.25} flex={1} padding={12}>Location Settings</Text>
                    <Text borderBottomWidth={0.25} flex={1} padding={12}>Visibility</Text>
                    <Text borderBottomWidth={0.25} flex={1} padding={12}>Email and Phone</Text>
                </YStack>
                <YStack
                    borderColor={''}>
                    <H4 fontWeight='bold'>App Preferences</H4>
                    <Text borderBottomWidth={0.25} flex={1} padding={12}>Theme</Text>
                    <Text borderBottomWidth={0.25} flex={1} padding={12}>Language</Text>
                </YStack>
                <YStack
                    borderColor={''}>
                    <H4 fontWeight='bold'>App Preferences</H4>
                    <Text borderBottomWidth={0.25} flex={1} padding={12}>Theme</Text>
                    <Text borderBottomWidth={0.25} flex={1} padding={12}>Language</Text>
                </YStack>
                <YStack
                    borderColor={''}>
                    <H4 fontWeight='bold'>Privacy & Security</H4>
                    <Text borderBottomWidth={0.25} flex={1} padding={12}>Blocked Users</Text>
                    <Text borderBottomWidth={0.25} flex={1} padding={12}>Delete Account or Request Data Export</Text>
                </YStack>
                <YStack
                    borderColor={''}>
                    <H4 fontWeight='bold'>Courses</H4>
                    <Text borderBottomWidth={0.25} flex={1} padding={12}>Manage My Courses</Text>
                    <Text borderBottomWidth={0.25} flex={1} padding={12}>Download Options</Text>
                    <Text borderBottomWidth={0.25} flex={1} padding={12}>Default Playback Settings</Text>
                </YStack>
                <YStack
                    borderColor={''}>
                    <H4 fontWeight='bold'>Feedback & Support</H4>
                    <Text borderBottomWidth={0.25} flex={1} padding={12}>Report a Problem</Text>
                    <Text borderBottomWidth={0.25} flex={1} padding={12}>Send Feedback</Text>
                    <Text borderBottomWidth={0.25} flex={1} padding={12}>FAQs / Help Center</Text>
                    <Text borderBottomWidth={0.25} flex={1} padding={12}>Contact Support</Text>
                </YStack>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({
})