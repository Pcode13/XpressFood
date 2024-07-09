//import liraries
import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {colors, parameters, title} from '../../global/styles';
import Header from '../../components/Header';
import CustomTextInput from '../../components/TextInput';
import PressableButton from '../../components/Button';

const SignInScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [password, setPassword] = useState('');
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Header
        isLeftIcon={true}
        leftIcon="arrow-left"
        onLeftIconClick={() => navigation.goBack()}
        title={'Login'}
        titleCenter={true}
      />
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={styles.text1}>Please enter mail and password</Text>
        <Text style={styles.text1}>Register with your account</Text>
      </View>
      <View style={{marginVertical: 20}}>
        <CustomTextInput
          leftIcon={'user'}
          title={'Username'}
          placeholder="Username"
          value={username}
          setValue={setUsername}
          onFocus={() => setIsUsernameFocused(true)}
          onBlur={() => setIsUsernameFocused(false)}
          customStyle={isUsernameFocused && styles.inputFocused}
        />
        <CustomTextInput
          title={'Password'}
          placeholder="Password"
          leftIcon={'key'}
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
          type="password"
          isPassword={true}
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
          customStyle={isPasswordFocused && styles.inputFocused}
        />
      </View>
      <View>
        <PressableButton
          text={'Login'}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      <View style={{alignItems: 'center', margin: 10}}>
        <Text style={{...styles.text1, textDecorationLine: 'underline'}}>
          Forget Password ?
        </Text>
      </View>
      <View style={{alignItems: 'center', margin: 10}}>
        <Text
          style={{...styles.text1, fontWeight: 'bold', color: colors.black}}>
          OR
        </Text>
      </View>
      <View style={{marginVertical: 10}}>
        <PressableButton
          text={'Sign In With Facebook'}
          IconName={'facebook'}
          customStyle={styles.customButtonStyle}
        />
      </View>
      <View style={{marginVertical: 10}}>
        <PressableButton
          text={'Sign In With Google'}
          IconName={'google'}
          customStyle={styles.customButtonStyle2}
        />
      </View>
      <View style={styles.tabview}>
        <View>
          <Text style={styles.texttitle}> New on Xpressed Food ?</Text>
        </View>
        <Pressable>
          <Text style={[styles.texttitle, {fontWeight: '600', marginLeft: 5}]}>
            Create a account
          </Text>
        </Pressable>
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
  inputFocused: {
    borderColor: colors.buttons,
    borderWidth: 1.5,
  },
  customButtonStyle: {
    backgroundColor: '#4285F4',
  },
  customButtonStyle2: {
    backgroundColor: '#FBBC05',
  },
  texttitle: {
    alignItems: 'center',
    color: colors.black,
    fontSize: 16,
  },
  tabview: {
    flexDirection: 'row',
    alignSelf: 'center',
    margin: 10,
  },
});

//make this component available to the app
export default SignInScreen;
