import React from "react";
import { plantsInfo } from "./planets";
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
} from "react-native";

function protoPlanet() {
	return (
		<View style={styles.centeredView}>
			<ImageBackground
				source={require("./assets/universe.jpeg")}
				style={styles.image}
			>
				<Text style={styles.modalText}>La terre</Text>
				<Text style={styles.modalP}>
					La Terre est avant tout une planète du Système solaire mais le terme
					est utilisé dans plusieurs domaines.
				</Text>

				{/* Show modal */}
				<Pressable
					style={[styles.button, styles.buttonClose]}
					onPress={() => setModalVisible(!modalVisible)}
				>
					{/* Hide modal */}
					<Text style={styles.textStyle}>Hide Modal</Text>
				</Pressable>
			</ImageBackground>
		</View>
	);
}

export default protoPlanet;
