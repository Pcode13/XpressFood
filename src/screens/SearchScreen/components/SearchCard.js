//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, Image, Dimensions, ImageBackground } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
import { colors } from '../../../global/styles';

const SearchCard = ({ item, onPress }) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <ImageBackground
                source={item.image}
                style={styles.image}
                resizeMode="contain"
            >

                <Text style={styles.title}>{item.name}</Text>

            </ImageBackground>
        </Pressable>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        maxWidth: '50%',
        borderWidth: 0.5,
        borderColor: colors.grey4
    },
    image: {
        width: SCREEN_WIDTH * 0.40,
        height: SCREEN_WIDTH * 0.44,
        aspectRatio: 1,
        alignSelf: 'center',
    },
    title: {
        fontWeight: '500',
        fontSize: 16,
        color: colors.black,
    },

});

//make this component available to the app
export default SearchCard;
