import { View } from "react-native";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import sample from '../../assets/sample1.jpg'
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export const CreatePostsScreen = () => {
    const [photo, setPhoto] = useState(null)

    const addPhoto = () => {
        photo ? setPhoto(null) : setPhoto(sample)
    }
    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <TouchableOpacity style={styles.buttonAdd} onPress={addPhoto}>
                    <Ionicons name="camera" size={24} color={photo ? '#FFFFFF' : '#BDBDBD'} />
                </TouchableOpacity>
                <Image source={photo} style={styles.image} />
            </View>
            <Text style={styles.photoExistance}>{photo ? 'Редагувати фото' : 'Завантажити фото'}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 30,
    },
    imageWrapper: {
        position: 'relative',
        borderWidth: 1,
        borderRadius: 8,
        width: '100%',
        borderColor: '#E8E8E8',
        backgroundColor: '#F6F6F6',
        height: 240,
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 8,
    },
    buttonAdd: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        // position: 'absolute',
        // left: '50%',
        // top: '50%',
        height: 60,
        width: 60,
    },
    photoExistance: {
        color: '#BDBDBD',
        fontSize: 16,
        fontFamily: 'Roboto_500Medium',
        marginTop: 8,
    }
})