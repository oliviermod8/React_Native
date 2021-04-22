import React from "react";
// import { plantsInfo } from "./planets";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
// import plantsInfo from "./planets";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Protoplanet = ({ item }) => {
	const image = { uri: item.imgUrl };
	return (
		<View style={styles.centeredView}>
			<Image source={image} style={styles.image} />
			<Text style={styles.texteBig}>{item.nom}</Text>
			<Text style={styles.texteLatin}>"En latin {item.latin}"</Text>
			<Text style={styles.texteNormal}>{item.temperature}</Text>
			<Text style={styles.texteNormal}>{item.id}</Text>
		</View>
	);
};

export default Protoplanet;

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
		backgroundColor: "black",
	},
	image: {
		width: windowWidth,
		height: windowHeight / 2,
		justifyContent: "center",
		top: windowHeight - windowHeight / 3,
		position: "absolute",
	},
	texteBig: {
		alignItems: "center",
		fontSize: 70,
		textAlign: "center",
		color: "white",
		paddingBottom: "5%",
		fontWeight: "100",
	},
	texteLatin: {
		alignItems: "center",
		fontSize: 30,
		textAlign: "center",
		color: "white",
		paddingBottom: "3%",
	},
	texteNormal: {
		alignItems: "center",
		fontSize: 30,
		textAlign: "center",
		color: "white",
	},
});
