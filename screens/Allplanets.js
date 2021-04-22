import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { FlatList, View, StyleSheet } from "react-native";
import plantsInfo from "../components/planets";
import Protoplanet from "../components/Protoplanet";

const Allplanets = ({ navigation }) => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "black",
			}}
		>
			<FlatList
				data={plantsInfo}
				renderItem={({ item }) => (
					<Protoplanet item={item} itemIdentifiant={item.id} />
				)}
			/>
		</View>
	);
};

export default Allplanets;
