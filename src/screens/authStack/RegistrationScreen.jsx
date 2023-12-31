import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity, Platform, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from "react-native";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { FormButton } from "../../components/FornButton";
import { EmailInput } from "../../components/EmailInput";
import { PasswordInput } from "../../components/PasswordInput";
import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/operations";

export const RegistrationScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [focusedInput, setFocusedInput] = useState(null);
    const [avatar, setAvatar] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const onSignUp = () => {
        if (email === '' || passwd === '' || login === '' || !avatar) {
            return;
        }
        const newUser = { email, passwd, login, avatar };
        try {
            setIsLoading(true);
            dispatch(signUp(newUser));
        } catch (error) {
            return;
        } finally {
            setIsLoading(false);
        }
        setEmail('');
        setPasswd('');
        setLogin('');
    }

    const loadAvatar = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
        if (!result.canceled) {
            setAvatar(result.assets[0].uri);
        }
    }

    const deleteAvatar = () => {
        setAvatar(null);
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
                keyboardVerticalOffset={-100}>
                <View style={styles.container}>
                    <Background>
                        <View style={styles.wrapper}>
                            <View style={styles.avatar}>
                                {avatar && <Image
                                    source={{ uri: avatar }}
                                    style={styles.imageAvatar} />}
                                {!avatar ?
                                    <TouchableOpacity
                                        style={styles.icon}
                                        onPress={loadAvatar}>
                                        <Ionicons name="add-circle-outline"
                                            size={25}
                                            color={'#FF6C00'} />
                                    </TouchableOpacity>
                                    : <TouchableOpacity
                                        style={[styles.icon, avatar && styles.iconDelete]}
                                        onPress={deleteAvatar}>
                                        <Ionicons name="close-outline"
                                            size={20}
                                            color={'#BDBDBD'} />
                                    </TouchableOpacity>}
                            </View>
                            <Text style={styles.title}>Реєстрація</Text>
                            <View style={styles.form}>
                                <TextInput
                                    style={[styles.input, focusedInput === 'login' && styles.blurBorder]}
                                    keyboardType="default"
                                    placeholder="Логін"
                                    placeholderTextColor={'#BDBDBD'}
                                    onChangeText={setLogin}
                                    value={login}
                                    onFocus={() => setFocusedInput('login')}
                                    onBlur={() => setFocusedInput(null)} />
                                <EmailInput
                                    value={email}
                                    changeMethod={setEmail}
                                    onFocus={() => setFocusedInput('email')}
                                    onBlur={() => setFocusedInput(null)}
                                    focusedInput={focusedInput} />
                                <PasswordInput
                                    changeMethod={setPasswd}
                                    value={passwd}
                                    isPasswordHidden={isPasswordHidden}
                                    showPasswd={() => setIsPasswordHidden(!isPasswordHidden)}
                                    onFocus={() => setFocusedInput('password')}
                                    onBlur={() => setFocusedInput(null)}
                                    focusedInput={focusedInput}
                                />
                            </View>
                            <FormButton text={'Зареєструватися'} method={onSignUp} disabled={isLoading ? true : false}/>
                            <Text style={styles.link}
                                onPress={() => navigation.navigate('Login')}>Вже є акаунт? Увійти</Text>
                        </View>
                    </Background>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        backgroundColor: 'white',
        paddingTop: 92,
        paddingBottom: 78,
        paddingRight: 15,
        paddingLeft: 16,
        position: 'relative',
        width: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
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
    title: {
        color: '#212121',
        fontFamily: 'Roboto_500Medium',
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 32,
    },
    form: {
        flexDirection: 'column',
        rowGap: 16,
        marginBottom: 33,
    },
    input: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        width: '100%',
        padding: 16,
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
        height: 50,
        backgroundColor: '#F6F6F6'
    },
    link: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
        color: '#1B4371',
        textAlign: 'center',
        marginTop: 16,
    },
    blurBorder: {
        borderColor: '#FF6C00',
        backgroundColor: '#ffffff'
    },
})