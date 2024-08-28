
import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { colors } from '../../../global/styles';
import { restaurantsData } from '../../../global/data';
import { Icon } from '@rneui/themed';


const RestaurantHeader = ({ navigation, id }) => {
    return (
        <View style={styles.container}>

            <ImageBackground
                style={styles.container}
                source={restaurantsData[id].image}

            >

                <View style={styles.view1}>
                    <View style={styles.view2}>
                        <Icon
                            name="arrow-left"
                            type="material-community"

                            size={25}

                            color={'#000000'}

                            onPress={() => navigation.goBack()}
                        />
                    </View>


                </View>

            </ImageBackground>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        height: 150
    },
    view1: {
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-between"
    },

    view2: {
        margin: 10,
        width: 40,
        height: 40,
        backgroundColor: colors.cardbackground,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    },
});

export default RestaurantHeader;
