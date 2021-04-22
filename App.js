import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, ImageBackground,TouchableOpacity, Text, View, Button } from "react-native";
import Acceuil from './screens/acceuil'



const image = {
  uri:
    "https://images.unsplash.com/photo-1540198163009-7afda7da2945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80",
};
export default function App() {
  return (
   <>
   <Acceuil />
   </>
  );
}
