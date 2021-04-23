import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { FlatList, View, StyleSheet, Dimensions } from "react-native";
import plantsInfo from "../components/planets";
import Protoplanet from "../components/Protoplanet";

const windowWidth = Dimensions.get("window").width;

const Allplanets = () => {
	return (
		<View>
			<FlatList
				data={plantsInfo}
				horizontal
				renderItem={({ item }) => <Protoplanet item={item} />}
				style={styles.vueP}
				contentContainerStyle={{
					justifyContent: "center",
				}}
			/>
		</View>
	);
};

export default Allplanets;

const styles = StyleSheet.create({
	vueP: {
		width: windowWidth,
		backgroundColor: "black",
	},
});
