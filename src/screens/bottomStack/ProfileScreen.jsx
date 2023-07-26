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

const renderItem = ({ item }) => <Post item={item} />

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
                <FlatList
                    ListHeaderComponent={
                        <View style={styles.userInfoContainer}>
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
                        </View>
                    }
                    style={styles.posts}
                    data={samples}
                    keyExtractor={(sample => sample.id)}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false} />
            </Background>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoContainer: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginTop: 150
    },
    profileName: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 30,
        letterSpacing: 1,
        color: '#212121',
        marginTop: 86,
        textAlign: 'center',
        marginBottom: 30
    },
    avatar: {
        position: 'absolute',
        top: -60,
        width: 120,
        height: 120,
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
    },
    imageAvatar: {
        width: '100%',
        height: '100%',
        borderRadius: 16,
        resizeMode: 'cover',
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
    iconLogOut: {
        position: 'absolute',
        right: 16,
        top: 22,
    },
})