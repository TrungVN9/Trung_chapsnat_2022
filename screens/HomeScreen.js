import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function HomeScreen({ navigation }) {
  return (
    // <View style={styles.homeScreen}>
    //   <Text style={styles.homeScreenText}>Home Screen</Text>
    //   <Button title="Go to Chat Screen" onPress={() => navigation.navigate('ChatScreen')}/>
    // </View>
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={() => navigation.navigate("Chat")}
      >
        <Text style={styles.item}>My conversation 1</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  // homeScreen: {
  //   flex: 1, 
  //   alignItems: 'center', 
  //   justifyContent: 'center',
  // },
  // homeScreenText: {
  //   fontSize: 32,
  // },
  container:{
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});