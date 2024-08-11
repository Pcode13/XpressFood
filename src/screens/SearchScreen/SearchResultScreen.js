//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions ,FlatList} from 'react-native';
import SearchResultCard from './components/SerachResultCard';
import { restaurantsData } from '../../global/data';
const SCREEN_WIDTH = Dimensions.get('window').width;
import { colors } from '../../global/styles';

// create a component
const SearchResultScreen = ({ route }) => {

    return (
        <View style={styles.container}>
        <View>
        <FlatList 
                     style ={{backgroundColor:colors.cardbackground}}
                    data = {restaurantsData}
                    keyExtractor ={(item,index)=>index.toString()}
                    renderItem ={({item,index})=> (

                        <SearchResultCard
                            screenWidth = {SCREEN_WIDTH}
                            images = {item.image}
                            averageReview ={item.averageReview}
                            numberOfReview ={item.numberReview}
                            restaurantName ={item.restaurantName}
                            farAway ={item.faraway}
                            businessAddress ={item.businessAddress}
                            productData ={item.productData}
                            // OnPressRestaurantCard ={()=>{navigation.navigate("RestaurantHomeScreen",{id:index,restaurant:item.restaurantName})}}
                        />
                                    
                          )}

                     ListHeaderComponent ={
                        <View>
                            <Text style ={styles.listHeader}>{restaurantsData.length} Result for {route.params.item}</Text>
                        </View>
                     }   

                     showsVerticalScrollIndicator ={false}
                />
        </View>
            {/* <SearchResultCard
                screenWidth={SCREEN_WIDTH}
                images = {restaurantsData[0].image}
            /> */}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {

        flex: 1,
         paddingTop:20

    },
    listHeader:{color :colors.grey1,
        fontSize:20,
        paddingHorizontal:10,
        paddingVertical:10,
        fontWeight:"bold"
}
});

//make this component available to the app
export default SearchResultScreen;
