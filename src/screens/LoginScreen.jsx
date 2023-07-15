import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { Background } from "../components/Background";
import { FormButton } from "../components/FornButton";
import { EmailInput } from "../components/EmailInput";
import { PasswordInput } from "../components/PasswordInput";
import { useState } from "react";

export const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);

    return (<SafeAreaView style={styles.container}>
        <Background>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Увійти</Text>
                <View style={styles.form}>
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
                <FormButton text={'Увійти'} method={() => console.log('hi')} />
                <Text style={styles.link}>Немає акаунту? Зареєструватися</Text>
            </View>
        </Background>
    </SafeAreaView>)
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        height: '60%',
        backgroundColor: 'white',
        paddingTop: 32,
        paddingBottom: 144,
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