import { Avatar } from '@rneui/base';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const windowWidth = Dimensions.get("window").width;

const ProfileDetails = () => {
    return (
        <View>
            <View className="profilePhotos" style={styles.profilePhotos}>
                <Avatar
                    size={100}
                    rounded
                    source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
                >

                </Avatar>
            </View>
            <View style={styles.profileDetails}>
                <Text style={styles.name}>Abelardo Sobarzo</Text>
                <Text style={styles.username}>sobarzo_14</Text>
                <View style={styles.statisticsContainer}>
                    <View style={styles.statistics}>
                        <Text style={{ fontWeight: "600" }}>2 </Text>
                        <Text>posts</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.statistics}>
                            <Text style={{ fontWeight: "600" }}>20 </Text>
                            <Text>followers</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.statistics}>
                            <Text style={{ fontWeight: "600" }}>20 </Text>
                            <Text>following</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ProfileDetails

const styles = StyleSheet.create({
    profilePhotos: {
        width: "100%",
        paddingTop: 20,
        alignItems: "center",
    },
    backgroundImage: {
        width: windowWidth,
        height: 200,
    },
    profilePicture: {
        width: 100,
        height: 100,
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 4,
        borderRadius: "50%",
        position: "absolute",
        bottom: 20,
    },
    profileDetails: {
        flexDirection: "column",
        alignItems: "center",
        marginTop: 12,
    },
    name: {
        fontSize: 24,
        fontWeight: "200",
    },
    username: {
        fontSize: 16,
        fontWeight: "200",
    },
    details: {
        fontSize: 16,
        fontWeight: "200",
    },
    statisticsContainer: {
        margin: 24,
        flexDirection: "row",
        justifyContent: "space-around",
        gap: 20,
    },
    statistics: {
        flexDirection: "row",
    },
})