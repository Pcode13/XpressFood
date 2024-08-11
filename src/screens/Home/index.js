//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/Header';
import {Icon, withBadge} from '@rneui/themed';
import ToggleButton from '../../components/ToggleButton';
import {colors, title} from '../../global/styles';
import IconHeader from '../../components/IconHeader';
import CountDown from 'react-native-countdown-component';
import CategoriesCards from '../../components/CategoriesCards';

import {filterdata, restaurantsData} from '../../global/data';
import FoodCard from '../../components/FoodCard';

const SCREEN_WIDTH = Dimensions.get('window').width;
const Home = ({navigation}) => {
  const [selectIndex, setSelectIndex] = useState(0);
  const [isDelivery, setIsDelivery] = useState('');
  const handleToggle = value => {
    console.log('Toggle state:', value);
    setIsDelivery(value);
  };
  console.log('Toggle state:', restaurantsData);
  return (
    <View style={styles.container}>
      <Header
        isLeftIcon={true}
        leftIcon="menu"
        onLeftIconClick={() => navigation.toggleDrawer()}
        title={'XPressFood'}
        titleCenter={true}
        isRightIcon={true}
        onRightIconClick={{}}
      />
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <View style={styles.header}>
          <ToggleButton onToggle={handleToggle} />
        </View>

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
            style={{marginHorizontal: 10}}
            renderItem={({item}) => (
              <View>
                <CategoriesCards
                  item={item}
                  selectIndex={selectIndex}
                  setSelectIndex={setSelectIndex}
                />
              </View>
            )}
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

        <View>
          <View style={styles.optionView}>
            <Text style={styles.options}>Options Changing in</Text>
            <CountDown
              until={3600}
              size={15}
              timeToShow={['M', 'S']}
              timeLabels={{m: 'Min', s: 'Sec'}}
            />
          </View>

          <FlatList
            data={restaurantsData}
            extraData={selectIndex}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.image}
                  restaurantName={item.restaurantName}
                  faraway={item.faraway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberReview={item.numberReview}
                />
              </View>
            )}
          />
        </View>

        <View style={{margin: 10}}>
          <IconHeader title={'Promotion Available'} iconName={'sale'} />
        </View>

        <View>
          <FlatList
            data={restaurantsData}
            extraData={selectIndex}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.image}
                  restaurantName={item.restaurantName}
                  faraway={item.faraway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberReview={item.numberReview}
                />
              </View>
            )}
          />
        </View>

        <View style={{margin: 10}}>
          <IconHeader title={'Restaurant in your area'} iconName={'home'} />
        </View>

        <View style={{width: SCREEN_WIDTH, paddingTop: 10}}>
          {restaurantsData.map(item => (
            <View key={item.id} style={{paddingBottom: 20}}>
              <FoodCard
                screenWidth={SCREEN_WIDTH * 0.95}
                images={item.image}
                restaurantName={item.restaurantName}
                faraway={item.faraway}
                businessAddress={item.businessAddress}
                averageReview={item.averageReview}
                numberReview={item.numberReview}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      {isDelivery === 'delivery' && (
        <View style={styles.floatButtonView}>
          <TouchableOpacity
            onPress={() => navigation.navigate('RestaurantMap')}>
            <Icon name="place" type="material" color={colors.black} size={30} />
            <Text style={{fontWeight: '500', color: colors.black}}>Map</Text>
          </TouchableOpacity>
        </View>
      )}
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
  header: {backgroundColor: colors.white, paddingBottom: 5},
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
  options: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.grey1,
    marginTop: 10,
  },
  optionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  floatButtonView: {
    position: 'absolute',
    bottom: 20,
    right: 10,
    backgroundColor: colors.buttons,
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//make this component available to the app
export default Home;
