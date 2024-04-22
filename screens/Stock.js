import { StyleSheet, View, Text} from 'react-native';

export default function Stock(){
    return(
        <View style={styles.container}>
            <Text>Stocks</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start',
        paddingTop:50,
    }
});