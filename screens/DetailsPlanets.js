import React from "react";
import {
	ScrollView,
	SafeAreaView,
	Image,
	ImageBackground,
	Dimensions,
	Text,
	StyleSheet,
	View,
	TouchableOpacity,
} from "react-native";
import plantsInfo from "../components/planets";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const windowHeight = Dimensions.get("window").height;

const DetailsPlanets = ({ navigation, route }) => {
	const { itemId } = route.params;
	return (
		<SafeAreaView style={styles.bgInfo}>
			<ScrollView style={styles.item}>
				<View style={styles.containerIntro}>
					<View style={styles.containerImg}>
						<Image
							style={styles.visuelPlanet}
							source={{
								uri: `${plantsInfo[itemId].imgUrl}`,
							}}
						></Image>
					</View>

					<View style={styles.introPlanet}>
						<Text style={styles.title}>{plantsInfo[itemId].nom}</Text>
						<Text style={styles.accroche}>{plantsInfo[itemId].accroche}</Text>
					</View>
				</View>
				<View style={styles.info}>
					<Image
						style={styles.bgPlanet}
						source={{
							uri: `${plantsInfo[itemId].imgUrl}`,
						}}
					></Image>
					<View style={styles.box}>
						<Text style={styles.titleBox}>Type :</Text>
						<Text style={styles.textBox}> {plantsInfo[itemId].type} </Text>
					</View>
					<View style={styles.box}>
						<Text style={styles.titleBox}>Distance :</Text>
						<Text style={styles.textBox}> {plantsInfo[itemId].distance} </Text>
					</View>
					<View style={styles.box}>
						<Text style={styles.titleBox}>Gravité :</Text>
						<Text style={styles.textBox}> {plantsInfo[itemId].gravite} </Text>
					</View>
					<View style={styles.box}>
						<Text style={styles.titleBox}>Inclinaison :</Text>
						<Text style={styles.textBox}>
							{" "}
							{plantsInfo[itemId].inclinaison}{" "}
						</Text>
					</View>
					<View style={styles.box}>
						<Text style={styles.titleBox}>Température :</Text>
						<Text style={styles.textBox}>
							{" "}
							{plantsInfo[itemId].temperature}{" "}
						</Text>
					</View>
					<View style={styles.box}>
						<Text style={styles.titleBox}>Diametre :</Text>
						<Text style={styles.textBox}> {plantsInfo[itemId].diametre} </Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	bgInfo: {
		backgroundColor: "black",
	},
	scrollView: {
		flex: 1,
		flexDirection: "column",
		paddingVertical: 10,
		width: "100%",
	},
	back: {
		position: "absolute",
		top: 50,
		left: 10,
		width: 50,
		height: 50,
		zIndex: 200,
	},
	logoBack: {
		width: 50,
		height: 50,
	},
	containerIntro: {
		flex: 1,
		width: "100%",
		height: windowHeight,
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
	},
	containerImg: {
		height: windowHeight / 2,
		width: "100%",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
	},
	visuelPlanet: {
		width: "100%",
		height: "100%",
	},
	introPlanet: {
		flexDirection: "column",
		alignItems: "center",
		width: "80%",
		height: windowHeight / 2,
		paddingVertical: 60,
	},
	title: {
		color: "#fff",
		fontSize: 50,
		textAlign: "center",
		marginBottom: 40,
		fontWeight: "600",
		letterSpacing: 5,
	},
	accroche: {
		color: "#fff",
		fontSize: 20,
		textAlign: "justify",
	},
	planetInformation: {
		width: "80%",
	},
	info: {
		width: "100%",
		flexDirection: "row",
		flexWrap: "wrap",
		position: "relative",
	},
	bgPlanet: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: [{ translateY: -50 }, { translateX: -50 }],
		zIndex: -10,
		width: 200,
		height: 200,
	},
	box: {
		width: "42%",
		height: 200,
		margin: "4%",
		backgroundColor: "rgba(255,252,252,0.1)",
		flexDirection: "column",
		alignItems: "center",
	},
	titleBox: {
		paddingTop: 20,
		color: "white",
		fontSize: 20,
		fontWeight: "bold",
		letterSpacing: 1.3,
	},
	textBox: {
		color: "white",
		marginTop: 60,
		textTransform: "capitalize",
	},
});

export default DetailsPlanets;
