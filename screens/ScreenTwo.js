import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function ScreenTwo({ navigation }) {
  return (
    <View style={styles.screenTwo}>
      <Text style={styles.screenTwoText}>Screen Two</Text>
      <Button title="Go to the next screen!" onPress={() => navigation.navigate('?????')} />
      <Button title="Go Back To Screen One" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  screenTwo: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  screenTwoText: {
    fontSize: 32,
  },
});