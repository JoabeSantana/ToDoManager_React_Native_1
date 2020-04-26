/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.bigBlue}>Big Blue</Text>
      <Text style={styles.smallRed}>Small Red</Text>
    </View>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', alignItems: 'center'
  }, bigBlue: {
    color: 'blue',
    fontSize: 50
  },
  smallRed: {
    color: 'red',
    fontSize: 20
  }
});

export default App;
