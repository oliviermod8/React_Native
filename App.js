import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Accueil from "./screens/acceuil";
import VuePlanets from "./screens/vuePlanets";
import Allplanets from "./components/Allplanets";
import DetailsPlanets from './screens/DetailsPlanets'
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
        <Stack.Screen name="DetailsPlanets" component={DetailsPlanets} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

