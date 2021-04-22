import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, ImageBackground,TouchableOpacity, Text, View, Button, Alert, } from "react-native";
const image = {
  uri:
    "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
};
export default function vuePlanets() {
  return (
   <View style={styles.container}>
       <ImageBackground source={image} style={styles.image}>
       <Text style={styles.title}>Les Planètes</Text>
       <TouchableOpacity 
        onPress={() => Alert.alert('Ce n est qu un test')}>
       <View style={styles.buttonAcceuil}>
        <Text style={styles.textbuttonAccount}>de plus près</Text>
        </View>
        </TouchableOpacity>
        </ImageBackground>
   </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      width: "100%",
      resizeMode: "contain",
      justifyContent: "center",
      alignItems: "center",
    },
    title:{
      alignItems: 'center',
      fontSize: 50,
      letterSpacing : 5,
      textAlign: "center",
      color : '#ffffff'
    }, 
    buttonAcceuil: {
        marginTop : 5,
        backgroundColor : 'transparent',    
        borderColor : 'white',
        borderWidth : 1,
        borderRadius : 2,
        paddingHorizontal : 15,
        paddingVertical : 5
    },
    textbuttonAccount : {
        color : '#ffffff', 
        fontSize : 15,
    }
    })
  