//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground, Dimensions, TouchableWithoutFeedback, ImageBackgroundComponent } from 'react-native';

import SearchComponent from './components/SearchComponent';
import { filterdata } from '../../global/data';
import { colors } from '../../global/styles';
import IconHeader from '../../components/IconHeader';
import SearchCard from './components/SearchCard';

const SCREEN_WIDTH = Dimensions.get('window').width;

// create a component
const SearchScreen = ({navigation}) => {




  return (
    <View style={styles.container}>
      <SearchComponent />
      <View style={{ marginTop: 10 }}>
        <View>
          <FlatList

            data={filterdata}
            renderItem={({ item }) => <SearchCard item={item} onPress={()=>navigation.navigate('SearchResultScreen',{item:item.name})} />}
            numColumns={2}
            contentContainerStyle={{ gap: 5, padding: 12 }}
            columnWrapperStyle={{ gap: 5 }}
            ListHeaderComponent={
              <IconHeader title={'Top Categories'} iconName={'silverware'} />
            }
            ListFooterComponent={<Footer />}
          />
        </View>
      </View>
    </View>
  );
};

const Footer = ({navigation}) => {
  return (
    <View style={{ marginTop: 20, marginBottom: 30 }}>

      <View style={{}}>
        <FlatList
          style={{ marginBottom: 10 }}
          data={filterdata}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate("SearchResultScreen", { item: item.name })
              }}
            >
              <View style={styles.imageView}>
                <ImageBackground
                  style={styles.image}
                  source={item.image}
                >

                  <View style={styles.textView}>
                    <Text style={{ color: colors.cardbackground, fontWeight: '600' }}>{item.name}</Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          )}
          contentContainerStyle={{ gap: 5, padding: 0 }}
          columnWrapperStyle={{ gap: 5 }}
          horizontal={false}
          showsverticalScrollIndicator={false}
          numColumns={2}
          ListHeaderComponent={<View style={{ margin: 5 }}>
            <IconHeader title={'More categories'} iconName={'silverware'} />
          </View>}

        />
      </View>


    </View>

  )
}




const styles = StyleSheet.create({
  container: { flex: 1, marginBottom: 10 },
  imageView: {
    borderRadius: 20,
    justifyContent: "center",
    alignContent: 'center',
    width: SCREEN_WIDTH * 0.44,
    height: SCREEN_WIDTH * 0.44,
    margin: SCREEN_WIDTH * 0.010,
    marginBottom: SCREEN_WIDTH * 0.020,

  },

  image: {
    height: SCREEN_WIDTH * 0.44,
    width: SCREEN_WIDTH * 0.4475,
    borderRadius: 10,
  },

  listHeader: {
    fontSize: 16,
    color: colors.grey3,
    paddingBottom: 10,
    marginLeft: 12

  },

  textView: {
    height: SCREEN_WIDTH * 0.4475,
    width: SCREEN_WIDTH * 0.4475,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'rgba(52, 52, 52,0.3)'
  },


})

//make this component available to the app
export default SearchScreen;
