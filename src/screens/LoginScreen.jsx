import { SafeAreaView, StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Alert } from "react-native";
import { Background } from "../components/Background";
import { FormButton } from "../components/FornButton";
import { EmailInput } from "../components/EmailInput";
import { PasswordInput } from "../components/PasswordInput";
import { useState } from "react";

export const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [focusedInput, setFocusedInput] = useState(null);

    const onLogin = () => {
        if (email === '' || passwd === '') {
            Alert.alert('Something is missed');
            return;
        }
        Alert.alert(`data: email - ${email}, passwd - ${passwd}`);
        setEmail('');
        setPasswd('');
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <Background>
                    <View style={styles.wrapper}>
                        <Text style={styles.title}>Увійти</Text>
                        <View style={styles.form}>
                            <KeyboardAvoidingView
                                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                                <EmailInput
                                    value={email}
                                    changeMethod={setEmail}
                                    onFocus={() => setFocusedInput('email')}
                                    onBlur={() => setFocusedInput(null)}
                                    focusedInput={focusedInput} />
                            </KeyboardAvoidingView>
                            <KeyboardAvoidingView
                                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                                <PasswordInput
                                    changeMethod={setPasswd}
                                    value={passwd}
                                    isPasswordHidden={isPasswordHidden}
                                    showPasswd={() => setIsPasswordHidden(!isPasswordHidden)}
                                    onFocus={() => setFocusedInput('password')}
                                    onBlur={() => setFocusedInput(null)}
                                    focusedInput={focusedInput}
                                />
                            </KeyboardAvoidingView>
                        </View>
                        <FormButton text={'Увійти'} method={onLogin} />
                        <Text style={styles.link}>Немає акаунту? Зареєструватися</Text>
                    </View>
                </Background>
            </SafeAreaView>
        </TouchableWithoutFeedback>)
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        backgroundColor: 'white',
        paddingTop: 32,
        paddingBottom: 111,
        paddingRight: 15,
        paddingLeft: 16,
        position: 'relative',
        width: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
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
    link: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
        color: '#1B4371',
        textAlign: 'center',
        marginTop: 16,
    }
})