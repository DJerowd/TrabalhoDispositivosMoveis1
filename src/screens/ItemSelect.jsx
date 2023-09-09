import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LoginPage from './LoginPage';
import LoginPageExtra from './LoginPageExtra';

const ItemSelect = ({ navigation }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemPress = (item) => {
    console.log('Item Pressed:', item);
    navigation.navigate(item);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione um item:</Text>

        <TouchableOpacity
          style={styles.pokedexButton}
          onPress={() => handleItemPress('LoginPage')}
        >
          <Text style={styles.buttonText}>POKEDEX</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.digimonButton}
          onPress={() => handleItemPress('LoginPageExtra')}
        >
          <Text style={styles.buttonText}>DIGIMON</Text>
        </TouchableOpacity>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  pokedexButton: {
    backgroundColor: '#A01010',
    padding: 100,
    marginHorizontal: 10,
    marginBottom: 40,
  },
  digimonButton: {
    backgroundColor: '#4040A0',
    padding: 100,
    marginHorizontal: 10,
    marginBottom: 40,
  },
  buttonText: {
    color: '#E0E0E0E0',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default ItemSelect;
