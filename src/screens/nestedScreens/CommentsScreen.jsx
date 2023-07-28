import { Keyboard, KeyboardAvoidingView, StyleSheet, FlatList, View, TouchableWithoutFeedback, Image, TextInput, TouchableOpacity } from "react-native";
import sample1 from '../../assets/sample1.jpg';
import ava from '../../assets/ava_sample.jpg';
import { Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";


const samples = [{
    id: 1,
    text: 'Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!',
    date: '09 червня, 2020 | 08:40',
    photo: sample1
},
{
    id: 2,
    text: 'A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.',
    date: '09 червня, 2020 | 08:40',
    photo: ava
},
{
    id: 3,
    text: 'Thank you! That was very helpful!',
    date: '09 червня, 2020 | 08:40',
    photo: sample1
},
{
    id: 4,
    text: 'Thank you! That was very helpful!',
    date: '09 червня, 2020 | 08:40',
    photo: sample1
},
{
    id: 5,
    text: 'Thank you! That was very helpful!',
    date: '09 червня, 2020 | 08:40',
    photo: sample1
},
{
    id: 6,
    text: 'Thank you! That was very helpful!',
    date: '09 червня, 2020 | 08:40',
    photo: sample1
}
]
export const CommentsScreen = () => {
    const [commentText, setCommentText] = useState('');

    return (<TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.mainWrapper}
            keyboardVerticalOffset={-250}>
            <View style={styles.imageWrapper}>
                <Image source={sample1} style={styles.image} />
            </View>
            <FlatList
                data={samples}
                style={{gap: 24}}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={[styles.comment, item.id === 2 ? styles.simgleCommentAuthor : styles.singleComment]}>
                        <Image source={item.photo} style={styles.commentImage} />
                        <View style={[styles.commentWrapper, item.id === 2 && styles.commentWrapperAuthor]}>
                            <Text style={styles.commentText}>
                                {item.text}
                            </Text>
                            <Text style={[styles.commentDate, item.id === 2 && styles.commentDateAuthor]}>
                                {item.date}
                            </Text>
                        </View>
                    </View>

                )}
            />
            <View style={styles.form}>
                <TextInput
                    placeholder="Коментувати..."
                    placeholderTextColor={'#BDBDBD'}
                    style={styles.input}
                    value={commentText}
                    onChangeText={setCommentText}
                />
                <TouchableOpacity style={styles.btnSend}>
                    <Feather name="arrow-up" size={20} color={'#fff'} />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    </TouchableWithoutFeedback>)
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    mainWrapper: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 30,
        paddingBottom: 16,
        backgroundColor: '#FFFFFF',
    },
    imageWrapper: {
        borderRadius: 8,
        width: '100%',
        height: 240,
        overflow: 'hidden',
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    comment: {
        gap: 16,
        marginBottom: 24,
    },
    singleComment: {
        flexDirection: 'row',
    },
    simgleCommentAuthor: {
        flexDirection: 'row-reverse',
    },
    commentImage: {
        borderRadius: 50,
        width: 28,
        height: 28,
        resizeMode: 'cover'
    },
    commentWrapper: {
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
        maxWidth: 300,
        borderRadius: 6,
        borderTopLeftRadius: 0,
        padding: 16,
    },
    commentWrapperAuthor: {
        borderTopLeftRadius: 6,
        borderTopRightRadius: 0,
    },
    commentText: {
        color: '#212121',
        fontSize: 13,
        fontFamily: 'Roboto_400Regular',
        lineHeight: 18,
        marginBottom: 8,
    },
    commentDate: {
        textAlign: 'right',
        color: '#BDBDBD',
        fontSize: 10,
        fontFamily: 'Roboto_400Regular',
    },
    commentDateAuthor: {
        textAlign: 'left'
    },
    input: {
        backgroundColor: '#F6F6F6',
        borderRadius: 100,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#F6F6F6',
        height: 50,
        padding: 16,
        fontFamily: 'Roboto_500Medium',
        fontSize: 16
    },
    form: {
        position: 'relative',
        marginTop: 20,
    },
    btnSend: {
        position: 'absolute',
        backgroundColor: '#FF6C00',
        borderRadius: 50,
        width: 34,
        height: 34,
        top: 8,
        right: 8,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
