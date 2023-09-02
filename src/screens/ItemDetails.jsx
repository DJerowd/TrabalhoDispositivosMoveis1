import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ItemDetails = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.url.split('/')[6]}.png` }}
        style={styles.image}
      />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.url}>{item.url}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  description: {
    fontSize: 18,
    marginHorizontal: 32,
    marginTop: 16,
    textAlign: 'center',
  },
});

export default ItemDetails;