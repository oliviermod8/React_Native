import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { Screen } from "react-native"
import Accueil from "./screens/acceuil";
import VuePlanets from "./screens/vuePlanets";
import Allplanets from "./components/Allplanets";

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer >
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{
				headerTransparent: true,
					headerTintColor: "#ffffff",
					headerTitleStyle: {
						fontSize: 15,
					},
				}}
			>
				<Stack.Screen name="Home" component={Accueil} />
				<Stack.Screen name="VuePlanets" component={VuePlanets} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
