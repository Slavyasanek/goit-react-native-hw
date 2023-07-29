import { Text, Image, StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import sample from '../../assets/ava_sample.jpg';
import sample1 from '../../assets/sample1.jpg'
import sample2 from '../../assets/sample2.jpg'
import sample3 from '../../assets/sample3.jpg'
import { Post } from "../../components/Post";
// import { useEffect, useState } from "react";

const renderItem = ({ item }) => <Post item={item} />

const samples = [
    {
        id: 1, photo: sample1, title: 'sample1', comments: 4, location: 'Ukraine', likes: 100, coordinates: {
            latitude: 50.48970919824854,
            longitude: 30.47152248518646,
        }
    },
    {
        id: 2, photo: sample2, title: 'sample1', comments: 4, location: 'Ukraine', likes: 100,
        coordinates: {
            latitude: 50.48970919824854,
            longitude: 30.47152248518646,
        }
    },
    {
        id: 3, photo: sample3, title: 'sample1', comments: 4, location: 'Ukraine', likes: 100,
        coordinates: {
            latitude: 50.48970919824854,
            longitude: 30.47152248518646,
        }
    }
]

export const PostsScreen = ({ route: { params } }) => {
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     if (params) {
    //         setPosts(prevState => [...prevState, params]);
    //     }
    // }, [params])

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                ListHeaderComponent={
                    <View style={styles.user}>
                        <Image source={sample} style={styles.userImage} />
                        <View>
                            <Text style={styles.userName}>Natali Romanova</Text>
                            <Text style={styles.userEmail}>email@example.com</Text>
                        </View>
                    </View>}
                data={samples}
                keyExtractor={(sample => sample.id)}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false} />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 30,
        paddingHorizontal: 16
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 16,
        marginRight: 8,
        resizeMode: 'cover'
    },
    userName: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 13,
        color: '#212121'
    },
    userEmail: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 11,
        color: 'rgba(33, 33, 33, 0.8)'
    },
})