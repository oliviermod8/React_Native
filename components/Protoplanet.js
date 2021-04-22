import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
	Text,
	View,
	StyleSheet,
	Image,
	Dimensions,
	Button,
} from "react-native";
// import plantsInfo from "./planets";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Protoplanet = ({ item, navigation, itemIdentifiant }) => {
	const image = { uri: item.imgUrl };
	return (
		<View style={styles.centeredView}>
			<Image source={image} style={styles.image} />
			<Text style={styles.texteBig}>{item.nom}</Text>
			<Text style={styles.texteLatin}>"En latin {item.latin}"</Text>
			<Text style={styles.texteNormal}>{item.temperature}</Text>

			<TouchableOpacity
				onPress={() => navigation.navigate("DetailsPlanets", { itemId: 5 })}
			>
				<View style={styles.buttonAcceuil}>
					<Text style={styles.textbuttonAccount}>{item.id}</Text>
				</View>
			</TouchableOpacity>
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
	buttonAcceuil: {
		marginTop: 5,
		backgroundColor: "transparent",
		borderColor: "white",
		borderWidth: 1,
		borderRadius: 2,
		paddingHorizontal: 15,
		paddingVertical: 5,
	},
	textbuttonAccount: {
		color: "#ffffff",
		fontSize: 15,
	},
});
