import React from "react";
import Allplanets from "./components/Allplanets";
import { StyleSheet } from "react-native";
const image = {
	uri:
		"https://images.unsplash.com/photo-1540198163009-7afda7da2945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80",
};
export default function App() {
	return <Allplanets />;
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
