import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {colors} from '../global/styles';
import {useNavigation} from '@react-navigation/native';
const ToggleButton = ({onToggle}) => {
  const navigation = useNavigation();
  const [isDeliverySelected, setDeliverySelected] = useState(true);
  const [isPickupSelected, setPickupSelected] = useState(false);

  const handleDeliveryToggle = () => {
    setDeliverySelected(true);
    setPickupSelected(false);
    onToggle && onToggle('delivery');
  };

  const handlePickupToggle = () => {
    // setPickupSelected(true);
    setDeliverySelected(false);
    onToggle && onToggle('pickup');
    navigation.navigate('RestaurantMap');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, isDeliverySelected && styles.active]}
        onPress={handleDeliveryToggle}
        activeOpacity={0.8}>
        <Text style={styles.label}>Delivery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, isPickupSelected && styles.active]}
        onPress={handlePickupToggle}
        activeOpacity={0.8}>
        <Text style={styles.label}>Pick Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  active: {
    backgroundColor: colors.buttons,
    borderColor: colors.buttons,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },
});

export default ToggleButton;
