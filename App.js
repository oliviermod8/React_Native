import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/mercury.jpeg')} style={styles.image}/>
      <Image source={require('./assets/earth.jpeg')} style={styles.image}/>
      <Image source={require('./assets/moon.jpeg')} style={styles.image}/>
      <Image source={require('./assets/mars.jpeg')} style={styles.image}/>
      <Image source={require('./assets/jupiter.jpeg')} style={styles.image}/>
      <Image source={require('./assets/uranus.jpeg')} style={styles.image}/>
      <Image source={require('./assets/neptune.jpeg')} style={styles.image}/>
      <Text style={styles.text}>Hello universe !</Text>
      <Image source={require('./assets/sun.jpeg')} style={styles.image}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    height: 90,
    width:90,
  },
  text: {
    color: '#fff',
    height: 120,
    fontSize:50,
    display : 'flex',
    position : 'absolute'
  }
});
