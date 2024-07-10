//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Pressable,
} from 'react-native';
import Header from '../../components/Header';
import {Icon, withBadge} from '@rneui/themed';
import ToggleButton from '../../components/ToggleButton';
import {colors, title} from '../../global/styles';
import IconHeader from '../../components/IconHeader';

import {filterdata} from '../../global/data';
import {Image} from 'react-native';

// create a component
const Home = ({navigation}) => {
  const [selectIndex, setSelectIndex] = useState(0);
  const handleToggle = value => {
    console.log('Toggle state:', value);
    // Implement your logic based on toggle state change here
  };

  const renderItem = ({item}) => {
    return (
      <Pressable onPress={() => setSelectIndex(item.id)}>
        <View style={styles.cardView}>
          <Image source={item.image} style={styles.image} />
          <Text
            style={
              selectIndex === item.id
                ? {...styles.selectTitle}
                : {...styles.title}
            }>
            {item.name}
          </Text>
        </View>
      </Pressable>
    );
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
        <View>
          <FlatList
            data={filterdata}
            renderItem={renderItem}
            extraData={selectIndex}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={{margin: 10}}>
          <IconHeader
            title={'Free Delivery Now '}
            iconName={'truck-delivery'}
          />
        </View>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  title: {
    fontSize: 16,
    color: colors.black,
    fontWeight: '500',
  },
  selectTitle: {
    fontSize: 16,
    color: colors.buttons,
    fontWeight: '800',
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    backgroundColor: 'white',
    borderRadius: 40,
  },
  cardView: {
    margin: 5,
    paddingHorizontal: 5,
    alignItems: 'center',
  },
});

//make this component available to the app
export default Home;
