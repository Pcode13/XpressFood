import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import { colors } from '../../../global/styles'

const ProductCard = ({ productName, price, image }) => {
    return (
        <View style={styles.view1}>
            <View style={styles.view2}>
                <View style={styles.view3}>
                    <Text style={styles.text1}>{productName}</Text>
                    <Text style={styles.text1}>Price: {price}</Text>
                </View>
                <View style={styles.view4}>
                    <Image style={styles.image} source={image} />
                </View>
            </View>
        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({

    view1: {
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        margin: 5,
        width: 210,
        padding: 10,
        borderRadius:16
    },

    view2: {
        flexDirection: "row",
        padding: 0,
        justifyContent: "space-between"
    },

    view3: {
        justifyContent: "space-between",
        width: 110
    },

    text1: {
        fontSize: 15,
        color: colors.grey1,
    },

    view4: {
        width: 75,
        height: 65
    },

    image: {
        height: 65,
        width: 75
    }


})