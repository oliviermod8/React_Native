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
} from "react-native";
const image = {
	uri:
		"https://images.unsplash.com/photo-1540198163009-7afda7da2945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80",
};
export default function App() {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<View style={styles.container}>
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert("Modal has been closed.");
					setModalVisible(!modalVisible);
				}}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<ImageBackground
							source={require("./assets/earth.jpeg")}
							style={styles.image}
						>
							<Text style={styles.modalText}>La terre</Text>
							<Text style={styles.modalP}>
								La Terre est avant tout une planète du Système solaire mais le
								terme est utilisé dans plusieurs domaines.
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
				</View>
			</Modal>

			<ImageBackground
				source={require("./assets/galaxy.png")}
				style={styles.image}
			>
				<Text style={styles.texte}>Universe</Text>

				<Pressable
					style={styles.appButtonContainer}
					onPress={() => setModalVisible(true)}
				>
					<Text style={styles.appButtonText}>Show Modal</Text>
				</Pressable>

				<StatusBar style="auto" />
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
	},

	image: {
		flex: 1,
		width: "100%",
		resizeMode: "contain",
		justifyContent: "center",
		alignItems: "center",
	},
	texte: {
		alignItems: "center",
		fontSize: 50,
		textAlign: "center",
		color: "white",
	},
	appButtonContainer: {
		elevation: 8,
		backgroundColor: "#010213",
		borderRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 12,
	},
	appButtonText: {
		fontSize: 18,
		color: "#fff",
		fontWeight: "bold",
		alignSelf: "center",
		textTransform: "uppercase",
		margin: 0,
	},

	modalView: {
		flex: 1,
		margin: 0,
		backgroundColor: "black",
		padding: 0,
		alignItems: "center",
	},
	modalText: {
		color: "white",
		fontSize: 100,
	},
	modalP: {
		color: "white",
		fontSize: 50,
		padding: 50,
		color: "black",
	},

	textStyle: {
		color: "white",
	},
});
