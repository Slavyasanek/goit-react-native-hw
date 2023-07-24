import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import sample from '../../assets/sample1.jpg'
import { useState } from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

export const CreatePostsScreen = () => {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [photo, setPhoto] = useState(null)

    const addPhoto = () => {
        photo ? setPhoto(null) : setPhoto(sample)
    }
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.cameraContainer}>
                    <View style={styles.camera}>
                        <View style={styles.imageWrapper}>
                            <Image source={photo} style={styles.image} />
                        </View>
                        <TouchableOpacity style={styles.buttonAdd} onPress={addPhoto}>
                            <Ionicons name="camera" size={24} color={photo ? '#FFFFFF' : '#BDBDBD'} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.photoExistance}>{photo ? 'Редагувати фото' : 'Завантажити фото'}</Text>
                <View style={styles.form}>
                    <TextInput
                        placeholder="Назва..."
                        style={styles.input}
                        placeholderTextColor="#BDBDBD"
                        value={title}
                        onChangeText={setTitle} />
                    <View style={styles.inputLocationContainer}>
                        <TextInput
                            placeholder="Місцевість..."
                            style={[styles.input, styles.inputLocation]}
                            placeholderTextColor="#BDBDBD"
                            value={location}
                            onChangeText={setLocation} />
                        <Feather name="map-pin" size={20} color={'#BDBDBD'} style={styles.iconLocation} />
                    </View>
                </View>
                <TouchableOpacity style={[styles.publishBtn,
                photo && title && location && { backgroundColor: '#FF6C00' }]}>
                    <Text style={[styles.publishBtnText,
                    photo && title && location && { color: '#FFFFFF' }]}>
                        Опублікувати</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.deletBtn}>
                <Feather name="trash-2" size={24} color={'#BDBDBD'}/>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 30,
        justifyContent: 'space-between'
    },
    cameraContainer: {
        position: 'relative',
        height: 240,
        overflow: 'hidden',
        backgroundColor: '#F6F6F6',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#E8E8E8',
        borderRadius: 8,
    },
    camera: {
        height: 240,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageWrapper: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderColor: '#FFFFFF',
        borderWidth: 1,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 8,
    },
    buttonAdd: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    photoExistance: {
        color: '#BDBDBD',
        fontSize: 16,
        fontFamily: 'Roboto_400Regular',
        marginTop: 8,
    },
    form: {
        gap: 16,
        marginTop: 30
    },
    input: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
        lineHeight: 19,
        height: 49,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderBottomColor: '#E8E8E8',
        borderStyle: 'solid',
        backgroundColor: '#FFFFFF',
    },
    inputLocationContainer: {
        position: 'relative'
    },
    inputLocation: {
        paddingLeft: 24
    },
    iconLocation: {
        position: 'absolute',
        left: 0,
        bottom: 13
    },
    publishBtn: {
        marginTop: 30,
        width: '100%',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        height: 51
    },
    publishBtnText: {
        fontSize: 16,
        fontFamily: 'Roboto_400Regular',
        color: '#BDBDBD'
    },
    deletBtn: {
        alignSelf: 'center'
    }
})