import { StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from "react-native";
import { Background } from "../../components/Background";
import { FormButton } from "../../components/FornButton";
import { EmailInput } from "../../components/EmailInput";
import { PasswordInput } from "../../components/PasswordInput";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/operations";

export const LoginScreen = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [focusedInput, setFocusedInput] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const onLogin = () => {
        if (email === '' || passwd === '') {
            return;
        }
        const user = { email, passwd };
        try {
            setIsLoading(true);
            dispatch(signIn(user));
        } catch (error) {
            return;
        } finally {
            setIsLoading(false)
        }
        setEmail('');
        setPasswd('');
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
                            <Text style={styles.title}>Увійти</Text>
                            <View style={styles.form}>
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
                            <FormButton text={'Увійти'} method={onLogin} disabled={isLoading ? true : false} />
                            <Text style={styles.link}
                                onPress={() => navigation.navigate('Registration')}>Немає акаунту? Зареєструватися</Text>
                        </View>
                    </Background>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback >)
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        backgroundColor: 'white',
        paddingTop: 32,
        paddingBottom: 111,
        paddingHorizontal: 15,
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