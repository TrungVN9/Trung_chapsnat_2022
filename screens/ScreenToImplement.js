import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function ScreenToImplement({ route, navigation }) {

  return (
    <View style={styles.screenToImplement}>
      <Text style={styles.screenToImplementText}>{"blahblahblah"}</Text>
      <Button title="Go Back to Home Screen" onPress={() => navigation.popToTop()} />
    </View>
  );
}

const styles = StyleSheet.create({
  screenToImplement: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  screenToImplementText: {
    fontSize: 32,
  },
});