import { View, Image, StyleSheet, Text, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from "react-native";
import { useState, useEffect } from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";

export const CreatePostsScreen = () => {
    const navigation = useNavigation();
    const [title, setTitle] = useState('');
    const [photo, setPhoto] = useState('');

    const [location, setLocation] = useState('');
    const [coordinates, setCoordinates] = useState(null);

    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);


    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            await MediaLibrary.requestPermissionsAsync();
            setHasPermission(status === "granted");
        })();
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
              console.log("Permission to access location was denied");
            }
      
            let locationData = await Location.getCurrentPositionAsync({});
            const coords = {
              latitude: locationData.coords.latitude,
              longitude: locationData.coords.longitude,
            };
            setCoordinates(coords);
          })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    } else if (hasPermission === false) {
        return <Text>Надайте доступ до камери</Text>;
    }

    const takePhoto = async () => {
        if (cameraRef) {
            const { uri } = await cameraRef.takePictureAsync();
            await MediaLibrary.createAssetAsync(uri);
            setPhoto(uri);
        }
    }

    const deletePhoto = () => {
        setPhoto('');
    }

    const turnCamera = () => {
        setType(
            type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
        );
    }

    const deleteAll = () => {
        setPhoto('');
        setTitle('');
        setLocation('');
        setCoordinates('');
    }

    const sendPhoto = () => {
        navigation.navigate("Posts", {photo, title, location, coordinates});
        deleteAll();
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={{ flexGrow: 1 }}>
                    <View style={styles.cameraContainer}>
                        <Camera style={styles.camera} ref={setCameraRef} type={type}>
                            {photo && (<View style={styles.imageWrapper}>
                                <Image source={{ uri: photo }} style={styles.image} />
                            </View>)}
                            <TouchableOpacity style={[styles.buttonAdd,
                            !photo ? { backgroundColor: '#ffffff' }
                                : { backgroundColor: 'rgba(255, 255, 255, 0.3)' }]} onPress={takePhoto}>
                                <Ionicons name="camera" size={24} color={photo ? '#FFFFFF' : '#BDBDBD'} />
                            </TouchableOpacity>
                        </Camera>
                    </View>
                    <View style={styles.photoEditors}>
                        <Text style={styles.photoExistance} onPress={deletePhoto} disabled={!photo}>{photo ? 'Редагувати фото' : 'Завантажте фото'}</Text>
                        <TouchableOpacity onPress={turnCamera}>
                            <Ionicons name="repeat-outline" size={24} color={'#BDBDBD'} />
                        </TouchableOpacity>
                    </View>
                    <KeyboardAvoidingView style={styles.form} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
                    </KeyboardAvoidingView>
                    <TouchableOpacity style={[styles.publishBtn,
                    (photo && title && location) ? { backgroundColor: '#FF6C00' } : { backgroundColor: '#F6F6F6' }]}
                    onPress={sendPhoto}>
                        <Text style={[styles.publishBtnText,
                        photo && title && location && { color: '#FFFFFF' }]}>
                            Опублікувати</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.deletBtn} onPress={deleteAll}>
                    <Feather name="trash-2" size={24} color={'#BDBDBD'} />
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 30,
        justifyContent: 'flex-end',
        backgroundColor: '#ffffff'
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
    photoEditors: {
        flexDirection: 'row',
        marginTop: 8,
        justifyContent: 'space-between'
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
        resizeMode: 'cover',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 8,
    },
    buttonAdd: {
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
        alignSelf: 'center',
        backgroundColor: '#F6F6F6',
        borderRadius: 20,
        width: 70,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    }
})