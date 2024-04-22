import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';


export default function Bookmark({ route, navigation }) {
    const { imageUri, title, author, chapter } = route.params; 

    return (
        <View style={styles.container}>
            <Image source={imageUri} style={styles.bookImage} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.author}>{author}</Text>
            <TouchableOpacity 
                style={styles.customButton} 
                onPress={() => navigation.navigate('Alone')}>
                <Text style={styles.buttonText}>Keep Reading</Text>
            </TouchableOpacity>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
    },
    bookImage: {
        width: 300, 
        height: 300, 
        resizeMode: 'contain',
        marginBottom: -40, 
    },
    title: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10, 
    },
    author: {
        fontSize: 16,
        marginBottom: 20, 
    },
    customButton: {
        backgroundColor: '#70A288', // Button color changed to #70A288
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: '#ffffff', // Example button text color
        fontSize: 16,
    },
});

