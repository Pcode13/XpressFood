//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from '../../components/Header';
import {Icon, withBadge} from '@rneui/themed';
import ToggleButton from '../../components/ToggleButton';
import {colors} from '../../global/styles';
import IconHeader from '../../components/IconHeader';

// create a component
const Home = ({navigation}) => {
  const handleToggle = value => {
    console.log('Toggle state:', value);
    // Implement your logic based on toggle state change here
  };
  return (
    <View style={styles.container}>
      <Header
        isLeftIcon={true}
        leftIcon="menu"
        onLeftIconClick={() => navigation.goBack()}
        title={'XPressFood'}
        titleCenter={true}
        isRightIcon={true}
        onRightIconClick={{}}
      />
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <ToggleButton onToggle={handleToggle} />
        <View style={styles.filterView}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name={'map-marker'}
                type="material-community"
                color={colors.black}
                size={25}
              />
              <Text style={styles.text}>Thane west</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name={'clock-time-four'}
                type="material-community"
                color={colors.black}
                size={25}
              />
              <Text style={styles.text}>Now</Text>
            </View>
            <View>
              <Icon
                name={'tune'}
                type="material-community"
                color={colors.black}
                size={25}
              />
            </View>
          </View>
        </View>
        <View style={{margin: 10}}>
          <IconHeader title={'Categories'} iconName={'silverware'} />
        </View>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
  text: {
    fontSize: 16,
    color: colors.black,
    fontWeight: '500',
    margin: 2,
  },
  filterView: {
    backgroundColor: colors.grey5,
    padding: 5,
    borderRadius: 10,
    marginHorizontal: 10,
  },
});

//make this component available to the app
export default Home;
