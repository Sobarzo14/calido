import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Post = () => {
    return (
        <View>
            <Image
                source={{ uri: 'https://picsum.photos/200/300' }}
                style={{ width: '100%', height: 200 }}
            />
            <View style={{ padding: 10 }}>
                <Text>Post Title</Text>
                <Text>Post description goes here. This is a sample post.</Text>
            </View>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({})