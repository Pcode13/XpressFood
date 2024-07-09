//import liraries
import React from 'react';
import {View, StyleSheet} from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';

// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <RootNavigator />
    </View>
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
