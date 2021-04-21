import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View, Image, TouchableOpacity, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Universe !</Text>
      <TouchableOpacity onPress={() => console.log('Image')}>
      <Image style={{ width: 414, height: 780 }} source={require('./assets/system.jpg')}/>
      </TouchableOpacity>
      <Button title="Click Me" onPress={() => console.log('Button tap')} />
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
  text: {
    color: '#ffffff',
    fontSize:50,
    position : 'absolute'
  }
});
