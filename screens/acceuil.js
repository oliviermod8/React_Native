import { StatusBar } from "expo-status-bar";
import React from "react";
import {
	StyleSheet,
	ImageBackground,
	TouchableOpacity,
	Text,
	View,
	Button,
	Alert,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SimpleAnimation } from "react-native-simple-animations";

const image = {
	uri:
		"https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
};
export default function acceuil({ navigation }) {
	return (
		<View style={styles.container}>
			<ImageBackground source={image} style={styles.image}>
				<SimpleAnimation
					delay={500}
					duration={1000}
					fade
					staticType="zoom"
					animateOnUpdate
				>
					<Text style={styles.title}>Universe</Text>
					<TouchableOpacity
						onPress={() => navigation.push("AllPlanets")}
						style={styles.content}
					>
						<View style={styles.buttonAcceuil}>
							<Text style={styles.textbuttonAccount}>Explore</Text>
						</View>
					</TouchableOpacity>
				</SimpleAnimation>
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
	title: {
		alignItems: "center",
		fontSize: 70,
		letterSpacing: 5,
		textAlign: "center",
		color: "#ffffff",
		fontWeight: "100",
	},
	content: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	buttonAcceuil: {
		marginTop: 5,
		backgroundColor: "transparent",
		borderColor: "white",
		borderWidth: 1,
		borderRadius: 5,
		paddingHorizontal: 15,
		paddingVertical: 5,
		marginTop: "5%",
		width: "50%",
	},
	textbuttonAccount: {
		color: "#ffffff",
		fontSize: 18,
		textAlign: "center",
	},
});
