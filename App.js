import React  from "react";
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ChatScreen from "./screens/ChatScreen";
import HomeScreen from "./screens/HomeScreen";
const Stack = createStackNavigator();

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Chat" component={ChatScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;