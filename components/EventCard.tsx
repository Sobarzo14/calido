import { Avatar, Card, Icon } from '@rneui/base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type EventCardProps = {
    name: string;
    date: any;
    author?: string;
}

const EventCard = ({ name, date, author }: EventCardProps) => {

    return (
        <Card>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Avatar
                    source={{ uri: 'https://reactjs.org/logo-og.png' }}
                    size={64}
                    rounded
                    containerStyle={{ marginRight: 10 }}
                />
                <View>
                    <Card.Title style={styles.title}>{name}</Card.Title>
                    <Card.FeaturedSubtitle style={styles.subtitle}>
                        {author}
                    </Card.FeaturedSubtitle>
                </View>
            </View>
            <Card.Image
                source={{
                    uri: 'https://reactjs.org/logo-og.png',
                }}
            />
            <View style={{ margin: 10, flexDirection: 'row' }}>
                <Icon
                    style={styles.postIcon}
                    name='heart-o'
                    type='font-awesome'
                    color='#517fa4'
                    size={20}
                />
                <Icon
                    style={styles.postIcon}
                    name='comment-o'
                    type='font-awesome'
                    color='#517fa4'
                    size={20}
                />
                <Icon
                    style={styles.postIcon}
                    name='share-square-o'
                    type='font-awesome'
                    color='#517fa4'
                    size={20}
                />
            </View>
            <Card.FeaturedSubtitle style={styles.subtitle}>
                <Text>
                    Event Description
                </Text>
            </Card.FeaturedSubtitle>
        </Card>
    )
}

export default EventCard

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'left',
    },
    postIcon: {
        marginRight: 10,
        marginLeft: 0,
    },
})