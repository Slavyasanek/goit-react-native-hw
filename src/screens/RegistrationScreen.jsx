import { StyleSheet, SafeAreaView, Image, View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { FormButton } from "../components/FornButton";
import { EmailInput } from "../components/EmailInput";
import { PasswordInput } from "../components/PasswordInput";
import { Background } from "../components/Background";

export const RegistrationScreen = () => {
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);

    return (
        <SafeAreaView style={styles.container}>
            <Background>
                <View style={styles.wrapper}>
                    <View style={styles.avatar}>
                        <Image
                            source={null}
                            style={styles.imageAvatar} />
                        <TouchableOpacity
                            style={styles.icon}>
                            <Ionicons name="add"
                                size={20}
                                color={'#FF6C00'} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.title}>Реєстрація</Text>
                    <View style={styles.form}>
                        <TextInput
                            style={styles.input}
                            keyboardType="default"
                            placeholder="Логін"
                            placeholderTextColor={'#E8E8E8'}
                            onChangeText={setLogin}
                            value={login} />
                        <EmailInput
                            value={email}
                            changeMethod={setEmail} />
                        <PasswordInput
                            changeMethod={setPasswd}
                            value={passwd}
                            isPasswordHidden={isPasswordHidden}
                            showPasswd={() => setIsPasswordHidden(!isPasswordHidden)}
                        />
                    </View>
                    <FormButton text={'Зареєструватися'} method={() => console.log('hi')} />
                    <Text style={styles.link}>Вже є акаунт? Увійти</Text>
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
        height: '70%',
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
        alignSelf: 'center'
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
        borderRadius: 50,
        borderColor: '#FF6C00',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 25,
        height: 25,
        zIndex: 99,
        backgroundColor: '#F6F6F6',
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
        rowGap: 8,
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
    }
})