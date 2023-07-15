import { StyleSheet, ImageBackground } from "react-native";
import background from '../assets/bci.jpg'

export const Background = ({ children }) => {
    return (<>
        <ImageBackground
            source={background}
            resizeMode="cover"
            style={styles.back}>
            {children}
        </ImageBackground>
    </>)
};

const styles = StyleSheet.create({
    back: {
        flex: 1,
        justifyContent: 'flex-end',
    },
})