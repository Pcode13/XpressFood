/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Pressable} from 'react-native';
import {colors} from '../global/styles';
import {Icon} from '@rneui/themed';
const CustomTextInput = ({
  value,
  setValue,
  placeholder,
  leftIcon,
  onChange,
  type,
  customStyle,
  customTextinputStyle,
  isPassword = false,
  onFocus,
  onBlur,
  multiline,
  textAlignVertical,
}) => {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye-slash');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-slash');
      setIsSecureEntry(!isSecureEntry);
    } else if (rightIcon === 'eye-slash') {
      setRightIcon('eye');
      setIsSecureEntry(!isSecureEntry);
    }
  };

  return (
    <View
      style={[
        styles.inputcontainer,
        isPassword ? styles.passwordInputContainer : null,
        customStyle,
      ]}>
      <Icon
        style={{alignSelf: 'center', paddingHorizontal: 10}}
        name={leftIcon}
        type="font-awesome"
        color={colors.black}
        size={25}
      />
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholderTextColor={colors.grey3}
        placeholder={placeholder}
        style={[styles.holdertxt, customTextinputStyle]}
        secureTextEntry={isPassword ? isSecureEntry : false}
        autoCapitalize="none"
        multiline={multiline}
        autoComplete="off"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        textAlignVertical={textAlignVertical}
      />
      {isPassword && (
        <Pressable
          style={{
            position: 'absolute',
            right: 0,
          }}
          onPress={handlePasswordVisibility}>
          <Icon
            style={{alignSelf: 'center', paddingHorizontal: 5}}
            name={rightIcon}
            type="font-awesome"
            color={colors.black}
            size={25}
          />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputcontainer: {
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    height: 45,
    alignSelf: 'center',
    margin: 10,
  },
  holdertxt: {
    color: colors.buttons,
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 21,
    width: '80%',
    // marginLeft: 5,
  },
  passwordInputContainer: {
    paddingRight: 0,
  },
});

export default CustomTextInput;
