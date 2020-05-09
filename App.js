import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Greeter from './components/Greeter';

export default function App() {
  return (
    <View style={styles.container}>
      <Greeter greeting="Hello World!" buttonTitle="Click me!" />
      <Greeter greeting="Hello Universe!" buttonTitle="Tap me!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
