import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AppDimension from '../global/AppDimension';
import {colors} from '../global/styles';
import {Icon, withBadge} from '@rneui/themed';
const AppPrimaryHeader = props => {
  const {
    containerStyle,
    isTransparent = false,
    title = '',
    isLeftIcon = true,
    leftIcon,
    onLeftIconClick,
    titleCenter = false,
    rightIcon,
    right,
    onRightIconClick,
    isRightIcon = false,
  } = props;
  const BadgeIcon = withBadge(3)(Icon);
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={[
          styles.containerView,
          isTransparent && styles.containerTransparent,
          containerStyle,
        ]}>
        {isLeftIcon && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => onLeftIconClick()}>
            <Icon
              style={{alignSelf: 'center', margin: 5}}
              name={leftIcon}
              type="material-community"
              color={'#000000'}
              size={30}
            />
          </TouchableOpacity>
        )}
        <View
          style={{
            flex: 1,
            alignItems: titleCenter ? 'center' : 'flex-start',
            marginLeft: isLeftIcon ? 0 : 0,
            marginRight: isLeftIcon ? AppDimension.SPACING_X_10 : 0,
            alignSelf: 'center',
          }}>
          <Text
            style={[
              {
                fontSize: 18,
                color: '#000000',
                fontWeight: '500',
              },
            ]}
            numberOfLines={2}>
            {title}
          </Text>
        </View>
        {isRightIcon &&
          (right ? (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => onRightIconClick()}>
              <Icon
                style={{alignSelf: 'center', marginHorizontal: 10}}
                name={rightIcon}
                type="material-community"
                color={colors.white}
                size={25}
              />
            </TouchableOpacity>
          ) : (
            <View style={{paddingRight: 20}}>
              <BadgeIcon
                style={styles.badgeIcon}
                name={'cart'}
                type="material-community"
                color={colors.black}
                size={30}
              />
            </View>
          ))}
      </View>
    </View>
  );
};

export default AppPrimaryHeader;

const styles = StyleSheet.create({
  containerView: {
    width: '100%',
    height: AppDimension.SPACING_X_50,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.buttons,
  },
  iconContainerView: {
    marginHorizontal: AppDimension.SPACING_X_16,
    width: AppDimension.SPACING_X_40,
    height: AppDimension.SPACING_X_40,
    shadowRadius: AppDimension.SPACING_X_90,
  },
  iconContainerTouchableView: {
    width: AppDimension.SPACING_X_40,
    height: AppDimension.SPACING_X_40,
  },
  badgeIcon: {
    alignSelf: 'center',
    // marginHorizontal: 5,
  },
});
