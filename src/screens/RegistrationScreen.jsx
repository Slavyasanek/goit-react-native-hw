import { StyleSheet, SafeAreaView, Image, ImageBackground, View, Text } from "react-native";
import background from '../assets/bci.jpg'

export const RegistrationScreen = () => {
    return (
    <SafeAreaView style={styles.container}>
        <ImageBackground
            source={background}
            resizeMode="cover"
            style={styles.back}>
                <Text>Hi</Text>
            <View style={styles.wrapper}>
                <View style={styles.avatar}>
                    <Image source={null}/>
                </View>
                <Text style={styles.title}>Реєстрація</Text>
            </View>
        </ImageBackground>
    </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    back: {
        flex: 1,
        justifyContent: 'flex-end',
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
        left: '50%',
        transform: [{translateX: -50}]
    },
    title: {
        color: '#212121',
        fontFamily: 'Roboto_500Medium',
        textAlign: 'center',
        fontSize: 30
    }
})