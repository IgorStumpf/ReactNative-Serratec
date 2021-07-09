import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { COLORS } from "../Global/styles/theme";

import { Home } from "../screens/Home";

const { Navigator, Screen } = createStackNavigator();
export const AuthRoutes = () => {
	return (
		<Navigator
			headerMode="none"
			screenOptions={{
				cardStyle: {
					backgroundColor: COLORS.backgroundColor,
				},
			}}
		>
			<Screen name="Home" component={Home} />
		</Navigator>
	);
};
