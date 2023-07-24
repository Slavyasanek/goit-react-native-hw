import { FlatList, View } from "react-native";
import { Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { Background } from '../../components/Background'
import { Feather, Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import sample from '../../assets/ava_sample.jpg'
import sample1 from '../../assets/sample1.jpg'
import sample2 from '../../assets/sample2.jpg'
import sample3 from '../../assets/sample3.jpg'
import { Post } from "../../components/Post";

const samples = [
    { id: 1, photo: sample1, title: 'sample1', comments: 4, nav: 'Ukraine', likes: 100 },
    { id: 2, photo: sample2, title: 'sample1', comments: 4, nav: 'Ukraine', likes: 100 },
    { id: 3, photo: sample3, title: 'sample1', comments: 4, nav: 'Ukraine', likes: 100 }
]

export const ProfileScreen = () => {
    const [photo, setPhoto] = useState(sample);
    return (
        <SafeAreaView style={styles.container}>
            <Background>
                <View style={styles.wrapper}>
                    <TouchableOpacity style={styles.iconLogOut}>
                        <Feather name="log-out" size={24} color={'#BDBDBD'} />
                    </TouchableOpacity>
                    <View style={styles.avatar}>
                        <Image
                            source={photo}
                            style={styles.imageAvatar} />
                        <TouchableOpacity
                            style={[styles.icon, photo && styles.iconDelete]}>
                            {!photo ? <Ionicons name="add-circle-outline"
                                size={25}
                                color={'#FF6C00'} />
                                : <Ionicons name="close-outline"
                                    size={20}
                                    color={'#BDBDBD'} />}
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.profileName}>Natalia Romanova</Text>
                    <FlatList
                        style={styles.posts}
                        data={samples}
                        keyExtractor={(sample => sample.id)}
                        renderItem={({ item }) => <Post item={item} />} />
                </View>
            </Background>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        backgroundColor: '#FFFFFF',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingTop: 92,
        marginTop: 190,
        paddingHorizontal: 16,
        position: 'relative',
        width: '100%',
    },
    avatar: {
        position: 'absolute',
        top: -60,
        backgroundColor: '#F6F6F6',
        width: 120,
        height: 120,
        borderRadius: 16,
        marginHorizontal: 'auto',
        alignSelf: 'center',
    },
    imageAvatar: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 16,
    },
    iconLogOut: {
        position: 'absolute',
        top: 22,
        right: 16
    },
    icon: {
        position: 'absolute',
        right: -12,
        bottom: 14,
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99,
        backgroundColor: '#FFFFFF',
        borderRadius: 50
    },
    iconDelete: {
        borderColor: '#E8E8E8',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    profileName: {
        color: '#212121',
        fontFamily: 'Roboto_500Medium',
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 10
    },
    posts: {
        paddingTop: 20
    }
})