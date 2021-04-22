import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import plantsInfo from "./planets";
import Protoplanet from "./Protoplanet";

const Allplanets = () => {
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
				renderItem={({ item }) => <Protoplanet item={item} />}
			/>
		</View>
	);
};

export default Allplanets;
