import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { onBoardImgData } from '../Data/onBoard-data';

function OnboardScreen1({ navigation }) {
  const screenData = onBoardImgData.find(screen => screen.id === '001');

  return (
    <View style={styles.container}>
      <View style={styles.skipButton}>
        <TouchableOpacity onPress={() => navigation.replace('Home')}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
      {screenData && <Image source={screenData.imageUri} style={styles.image} />}
      <Text style={styles.welcomeText}>Welcome to Rainbowo</Text>
      <View style={styles.nextButton}>
        <TouchableOpacity onPress={() => navigation.navigate('OnboardScreen2')}>
          <Text style={styles.nextText}>Next</Text>
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
  welcomeText: {
    fontSize: 20, 
    color: '#000', 
    marginTop: 20, 
    fontWeight: 'bold', 
    textAlign: 'center', 
  },
});

export default OnboardScreen1;


