import { StyleSheet, TextInput } from "react-native";

export const EmailInput = ({ value, changeMethod }) => {
    return (<>
        <TextInput
            style={styles.input}
            keyboardType="email-address"
            placeholder="Адреса електронної пошти"
            placeholderTextColor={'#E8E8E8'}
            onChangeText={changeMethod}
            value={value} />
    </>)
};

const styles = StyleSheet.create({
    input: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderStyle: 'solid',
        width: '100%',
        padding: 16,
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
        height: 50,
        backgroundColor: '#F6F6F6'
    },
    blurBorder: {
        borderColor: '#FF6C00'
    }
})