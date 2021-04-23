import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Accueil from "./screens/acceuil";
import Allplanets from "./screens/Allplanets";
import DetailsPlanets from "./screens/DetailsPlanets";
const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer style={{ backgroundColor: "black" }}>
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
				<Stack.Screen name="AllPlanets" component={Allplanets} />
				<Stack.Screen name="DetailsPlanets" component={DetailsPlanets} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
