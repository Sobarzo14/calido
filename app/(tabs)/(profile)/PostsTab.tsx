import React from 'react';
import { Image, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';


const PostsTab = () => {
    const { width } = useWindowDimensions();

    return (

        <ScrollView>
            <View style={styles.grid}>

                {Array.from({ length: 21 }).map((_, index) => (
                    <Image
                        key={index}
                        source={{ uri: `https://picsum.photos/seed/${index}/200/200` }}
                        style={{
                            width: (width - 32) / 3, // 32 is for padding
                            height: (width - 32) / 3,
                            marginBottom: 2,
                        }
                        }
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