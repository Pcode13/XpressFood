//import liraries
import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Modal, TextInput, FlatList, TouchableOpacity, Keyboard, Image } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { Icon } from '@rneui/themed';
import { colors } from '../../../global/styles';
import { useNavigation } from '@react-navigation/native';
import { filterdata } from '../../../global/data';
import filter from 'lodash/filter'

// create a component
const SearchComponent = () => {

    const navigation = useNavigation();
    const [data, setData] = useState([...filterdata])
    const [modalVisible, setModalVisible] = useState(false)
    const [textInputFossued, setTextInputFossued] = useState(true)
    const textInput = useRef(0)


    const contains = ({name},query)=>{

        if (name.toLowerCase().includes(query.toLowerCase())){
            return true
        }
        return false
    }
    
    
    const handleSearch = text =>{
       
        const dataS = filter(filterdata, userSearch =>{
            
            return contains(userSearch,text)
        })
    
        setData([...dataS])
    }

  

    return (
        <View style={{ alignItems: "center" }}>
            <TouchableWithoutFeedback
                onPress={() => {
                    setModalVisible(true)
                }}
            >
                <View style={styles.SearchArea}>
                    <Icon name="search"
                        style={styles.searchIcon}
                        type="material"
                        iconStyle={{ marginLeft: 5 }}
                        size={32}
                    />
                    <Text style={{ fontSize: 15 }}>What are you looking for ?</Text>
                </View>
            </TouchableWithoutFeedback>

            <Modal
                animationType="fade"
                transparent={false}
                visible={modalVisible}
            >
                <View style={styles.modal}>
                    <View style={styles.view1}>
                        <View style={styles.TextInput}>
                            <Animatable.View
                                animation={textInputFossued ? "fadeInRight" : "fadeInLeft"}
                                duration={400}
                            >
                                <Icon name={textInputFossued ? "arrow-back" : "search"}
                                    onPress={() => {
                                        if (textInputFossued)
                                            setModalVisible(false)
                                        setTextInputFossued(true)
                                    }}
                                    style={styles.icon2}
                                    type="material"
                                    iconStyle={{ marginRight: 5 }}
                                />
                            </Animatable.View>

                            <TextInput
                                style={{ width: "90%" }}
                                placeholder=""
                                autoFocus={false}
                                ref={textInput}

                                onFocus={() => {
                                    setTextInputFossued(true)
                                }}

                                onBlur={() => {
                                    setTextInputFossued(false)
                                }}

                                onChangeText={handleSearch}
                            />

                            <Animatable.View
                                animation={textInputFossued ? "fadeInLeft" : ""}
                                duration={400}
                            >
                                <Icon
                                    name={textInputFossued ? "cancel" : null}
                                    iconStyle={{ color: colors.grey3 }}
                                    type="material"

                                    onPress={() => {
                                        textInput.current.clear()
                                        // handleSearch()          
                                    }}
                                />
                            </Animatable.View>
                        </View>
                    </View>


                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => {
                                    Keyboard.dismiss
                                    navigation.navigate("SearchResultScreen",{item:item.name})
                                    setModalVisible(false)
                                    setTextInputFossued(true)
                                }} >
                                <View style={styles.view2}>
                                    <Image source={item.image} style={styles.image} />
                                    <Text style={styles.text}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id}

                    />


                </View>
            </Modal>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    text1: {
        color: colors.grey3,
        fontSize: 16
    },

    TextInput: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 0,
        borderColor: "#86939e",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignContent: "center",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10

    },

    SearchArea: {
        marginTop: 10,
        width: "94%",
        height: 50,
        backgroundColor: colors.grey5,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.black,
        flexDirection: "row",
        alignItems: "center"
    },

    searchIcon: {
        fontSize: 24,
        padding: 5,
        color: colors.grey2,
    },

    view1: {
        height: 70,
        justifyContent: "center",

        paddingHorizontal: 10,
    },

    view2: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
    },

    icon2: {
        fontSize: 24,
        padding: 5,
        color: colors.grey2,
    },
    modal: {
        flex: 1
    },
    image: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        backgroundColor: 'white',
        borderRadius: 40,
    },
    text: { color: colors.grey1, fontSize: 15, marginLeft: 10 }
});

//make this component available to the app
export default SearchComponent;
