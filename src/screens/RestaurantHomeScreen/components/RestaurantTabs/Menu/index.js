import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import { Icon,color } from '@rneui/base';
import { specialData,menuData } from '../../../../../global/data';

import { colors } from '../../../../../global/styles';
const Menu = ({navigation,restaurant,onPress}) => {

 
    return (
        <View style ={styles.container}>
           <View>
               {specialData.map((items)=>

                    <View key = {items.key} style ={styles.view1}>
                        <TouchableOpacity onPress ={onPress}>
                            <View style ={styles.view2}>
                                <Icon name ='star' type = "material-community" color ="gold" />
                                <Text style = {styles.text1}>{items.title}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
               )
               }
           </View>

           <View>
               {menuData.map((items)=>

                    <View key = {items.key} style ={styles.view1}>
                        <TouchableOpacity onPress ={onPress}>
                            <View style ={styles.view2}>
                                <Text style = {styles.text1}>{items.title}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
               )
               }
           </View>
        </View>
    )
}


export default Menu


const styles = StyleSheet.create({

container:{
    flex:1,
    marginTop:20
},
  view1:{ paddingHorizontal:10, },

  view2:{flexDirection:"row",
        alignItems:"center",
        borderBottomWidth:1,
        padding:10,
        borderBottomColor:colors.grey5
       },
    
    text1:{
        color:colors.black,
        fontSize:15,
        // fontWeight:"bold"
    }


})