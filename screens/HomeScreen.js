import React from "react";
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView } from "react-native";
import { BookStyleData } from '../Data/bookStyle-data';
import MyAppHeading from "../components/MyAppHeading";

export default function HomeScreen({ navigation }) {
    
    const firstTwoBooks = BookStyleData.slice(0, 2);
    const otherBooks = BookStyleData.slice(2); 

    return (
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}>
              <Text style={styles.welcomeText}>Welcome back, Fred</Text>
              <Text style={styles.resumeText}>Resume your journey</Text>
              
              {firstTwoBooks.map((book) => (
                  <TouchableOpacity 
                  key={book.id} 
                  style={styles.bookLayer} 
                  onPress={() => navigation.navigate('Bookmark', {
                      bookId: book.id,
                      imageUri: book.imageUri,
                      title: book.title,
                      author: book.author,
                      chapter: book.chapter,
                  })}>
                      <Image style={styles.bookImage} source={book.imageUri}/>
                      <View style={styles.bookInfo}>
                          <Text style={styles.bookTitle}>{book.title}</Text>
                          <Text>{book.author}</Text>
                          <Text>{book.chapter}</Text>
                      </View>
                  </TouchableOpacity>
              ))}

           
              <Text style={styles.hotPicksTitle}>Hot picks for you this week</Text>
              
              {otherBooks.map((book) => (
                  <TouchableOpacity 
                      key={book.id} 
                      style={styles.bookLayer} 
                      onPress={() => navigation.navigate('Bookmark')}>
                      <Image style={styles.bookImage} source={book.imageUri}/>
                      <View style={styles.bookInfo}>
                          <Text style={styles.bookTitle}>{book.title}</Text>
                          <Text>{book.author}</Text>
                          <Text>{book.chapter}</Text>
                      </View>
                  </TouchableOpacity>
              ))}
          </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:'#fff',
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        alignSelf: 'stretch',
        marginBottom: 10,
        marginTop:20,
        paddingHorizontal: 20,
    },
    resumeText: {
        fontSize: 18,
        fontWeight: 'normal',
        textAlign: 'left',
        alignSelf: 'stretch',
        marginBottom: -20,
        paddingHorizontal: 20,
    },
    bookLayer: {
        flexDirection: 'row',
        marginBottom: 15,
        alignItems: 'center',
        alignSelf: 'stretch', 
        paddingHorizontal: 20,
        marginBottom: -50, 
    },
    bookImage: {
        width: 100,
        height: 150,
        resizeMode: 'contain',
    },
    bookInfo: {
        marginLeft: 10,
        flex: 1,
    },
    bookTitle: {
        fontWeight: 'bold',
    },
    hotPicksTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        alignSelf: 'stretch',
        marginBottom: -30,
        paddingHorizontal: 20,
        marginTop:50,
    },
});

