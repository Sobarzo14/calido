import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const windowWidth = Dimensions.get("window").width;

const ProfilePage = () => {
  return (
    <SafeAreaView>
      <View className="profilePhotos" style={styles.profilePhotos}>
        <Image
          style={styles.backgroundImage}
          source={{
            uri: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?cs=srgb&dl=pexels-olly-762020.jpg&fm=jpg",
          }}
          resizeMode="cover"
          blurRadius={5}
        />
        <Image
          style={styles.profilePicture}
          source={{
            uri: "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg",
          }}
        />
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
    </SafeAreaView>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  profilePhotos: {
    width: "100%",
    backgroundColor: "black",
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
    gap: 20,
  },
  statistics: {
    flexDirection: "row",
  },
});
