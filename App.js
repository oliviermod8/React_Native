import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
  View,
  Button,
  Alert,
  Modal,
  Pressable,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import DetailsPlanets from "./screens/DetailsPlanets";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
  //   <SafeAreaView style={styles.container}>
  //   <ScrollView style={styles.scrollView}>
  //     <DetailsPlanets/>
  //   </ScrollView>
  // </SafeAreaView>
  <View style={styles.container}>

    <DetailsPlanets/>

</View>
      

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },

});
