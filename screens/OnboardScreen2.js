import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { onBoardImgData } from '../Data/onBoard-data';

function OnboardScreen2({ navigation }) {
  const screenData = onBoardImgData.find(screen => screen.id === '002');

  return (
    <View style={styles.container}>
      <View style={styles.skipButton}>
        <TouchableOpacity onPress={() => navigation.replace('Home')}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
      {screenData && <Image source={screenData.imageUri} style={styles.image} />}
      <Text style={styles.descriptionText}>Create your adventurous library</Text>
      <View style={styles.nextButton}>
        <TouchableOpacity onPress={() => navigation.replace('Login')}>
          <Text style={styles.nextText}>Finish</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  skipButton: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  nextButton: {
    position: 'absolute',
    bottom: 50,
    right: 20,
  },
  skipText: {
    fontSize: 16,
    color: '#007BFF',
  },
  nextText: {
    fontSize: 16,
    color: '#007BFF',
  },
  descriptionText: {
    fontSize: 18, 
    color: '#000', 
    marginTop: 20, 
    fontWeight: 'bold', 
    textAlign: 'center', 
  },
});

export default OnboardScreen2;



