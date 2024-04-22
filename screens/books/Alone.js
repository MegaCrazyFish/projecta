import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Button, TouchableOpacity} from 'react-native';
import MyAppHeading from '../../components/MyAppHeading';



export default function CurrentReading({navigation}){
    return(
        <SafeAreaView style={styles.container} >
        <MyAppHeading headingStyle="h2">Chapter211 He is back.</MyAppHeading>
        <View style={styles.content} >
            <Text>Myth = Does Hair of the Dog work?{"\n"}
                神话 = 打狗草真的有效吗？{"\n"}{"\n"}
                
                Voice Over:{"\n"}
                旁白：{"\n"}{"\n"}

                In this myth our hero drinks copious amounts of alcohol and becomes the life of the party...
                在这个神话中，我们的英雄喝了大量的酒，成为了派对的焦点...{"\n"}{"\n"}

                ...But as we all know the party doesn't last forever, and the next morning our hero is feeling pretty grim...
                ...但是我们都知道派对不会永远持续，第二天早上我们的英雄感觉非常不舒服...{"\n"}{"\n"}

                ...So he crawls back to the fridge to locate the same poison he had the night before.
                ...所以他爬回冰箱，找到了他前一晚喝的同样的酒。{"\n"}{"\n"}

                He chugs down one more glass of last night's party beverage  returning himself to genuine super hero status!
                他大口喝下了前一晚的派对饮料 - 使自己恢复到真正的超级英雄状态!{"\n"}
            </Text>
            <TouchableOpacity 
                style={styles.customButton} 
                onPress={() => navigation.navigate('chapter212')}>
                <Text style={styles.buttonText}>Next Chapter</Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    content: {
        padding: 15,
    },
    customButton: {
        marginTop: 20, 
        backgroundColor: '#70A288', 
        paddingVertical: 10, 
        paddingHorizontal: 20,
        borderRadius: 5, 
        alignItems: 'center', 
    },
    buttonText: {
        color: '#FFFFFF', 
        fontSize: 16, 
    },
});
