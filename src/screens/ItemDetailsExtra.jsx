import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

const ItemDetailsExtra = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground
      source={{ uri: 'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77702090284.jpg' }}
      style={styles.backgroundImage}
      >
        <View style={styles.box}>
        <Image
          source={{ uri: item.img }}
          style={styles.image}
        />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.level}>Level: {item.level}</Text>
        </View>

      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
  },
  backgroundImage: {
    flex: 1,
    width: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  box: {
    backgroundColor: '#ffffff',
    width: 250,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  level: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ItemDetailsExtra;
