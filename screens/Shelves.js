import React from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import { BooksData } from '../Data/book-data';

export default function Shelves() {
    return (
        <View style={styles.container}>
            <FlatList
                data={BooksData}
                renderItem={({ item }) => (
                    <View style={styles.book}>
                        <Image
                            style={styles.itemThumb}
                            source={item.imageUri}
                            resizeMode='contain'
                        />
                  
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                numColumns={2} 
                key={'_'} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 10,
    },
    book: {
        flex: 1,
        flexDirection: 'column',
        margin: 10,
        alignItems: 'center',
        marginBottom: -20,
    },
    title: {
        fontSize: 16,
        color: '#000',
        marginTop: -25,
        marginLeft:-100,
        textAlign: 'left',
    },
    itemThumb: {
        width: 150, 
        height: 225, 
        resizeMode: 'cover',
    },
});
