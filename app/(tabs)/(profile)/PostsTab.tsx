import React from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { Image, ScrollView } from 'tamagui';


const PostsTab = () => {
    const { width } = useWindowDimensions();

    return (

        <ScrollView>
            <View style={styles.grid}>

                {Array.from({ length: 21 }).map((_, index) => (
                    <Image
                        borderWidth={1}
                        borderColor={'white'}
                        key={index}
                        source={{
                            uri: 'https://picsum.photos/200/300',
                            width: width / 3,
                            height: width / 3,
                        }}
                    />
                ))}

            </View>
        </ScrollView>


    )
}

export default PostsTab

const styles = StyleSheet.create({
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
})