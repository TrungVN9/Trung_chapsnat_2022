import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomePage from '../screens/HomePage';
const Stack = createStackNavigator();

export default function AuthStack() {
	return (
		<NavigationContainer>
		<Stack.Navigator>
			{/* <Stack.Screen name="HomePage" component={HomePage} /> */}
			{/* <Stack.Screen name="Login" component={LoginScreen} /> */}
			<Stack.Screen name="Signup" component={SignupScreen} />
		</Stack.Navigator>
		</NavigationContainer>
	);
}