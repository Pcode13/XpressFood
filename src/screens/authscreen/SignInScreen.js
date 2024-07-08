//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {colors, parameters, title} from '../../global/styles';
import Header from '../../components/Header';
import {TextInput} from 'react-native';
import * as Animatable from 'react-native-animatable';
// create a component
const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Header title={'SIgnIn'} type="arrow-left" />
      <View style={{marginLeft: 20, marginTop: 10}}>
        <Text style={title}>Sign In</Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={styles.text1}>Please enter mail and password</Text>
        <Text style={styles.text1}>Register with your account</Text>
      </View>
      <View style={{marginTop: 20}}>
        <View>
          <TextInput style={styles.TextInput1} placeholder="Email" />
        </View>
        <Animatable.View>
          <TextInput style={styles.TextInput2} placeholder="Password" />
        </Animatable.View>
        <Animatable.View>
          <TextInput style={styles.TextInput2} placeholder="Password" />
        </Animatable.View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: colors.grey3,
    fontSize: 16,
  },
  TextInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
  },
  TextInput2: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
  },
});

//make this component available to the app
export default SignInScreen;
