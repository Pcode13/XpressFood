import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {colors} from '../global/styles';
import {Icon} from '@rneui/themed';

const PressableButton = ({
  onPress,
  text,
  customStyle,
  testID,
  disabled,
  IconName,
  customTextStyle,
}) => {
  return (
    <Pressable
      style={({pressed}) => [
        {
          backgroundColor: pressed ? colors.grey1 : colors.buttons,
        },
        styles.pressable,
        customStyle,
      ]}
      onPress={onPress}
      testID={testID}
      disabled={disabled}>
      <Icon
        style={{alignSelf: 'center', marginRight: 5}}
        name={IconName}
        type="font-awesome"
        color={colors.white}
        size={20}
      />
      <Text style={[styles.text, customTextStyle]}>{text}</Text>
    </Pressable>
  );
};

export default PressableButton;

const styles = StyleSheet.create({
  pressable: {
    borderRadius: 8,
    padding: 6,
    height: 45,
    width: '90%',
    color: colors.buttons,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  text: {
    fontSize: 18,
    color: colors.white,
    fontWeight: '500',
  },
});
