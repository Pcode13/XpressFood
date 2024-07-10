//import liraries
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';

// create a component
const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <RootNavigator />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default App;
