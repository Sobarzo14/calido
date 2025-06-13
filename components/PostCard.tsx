import { Card, Image, Text } from '@rneui/base'
import React from 'react'
import { StyleSheet } from 'react-native'


const PostCard = () => {
    return (
        <Card>
            <Card.Title>Post Title</Card.Title>
            <Card.Divider />
            <Image
                source={{ uri: 'https://example.com/image.jpg' }}
                style={{ width: '100%', height: 200 }}
                resizeMode="cover"
            />
            <Text style={{ marginBottom: 10 }}>
                This is a brief description of the post content.
            </Text>
            <Text style={{ color: 'blue' }}>Read more...</Text>
        </Card>
    )
}

export default PostCard

const styles = StyleSheet.create({})