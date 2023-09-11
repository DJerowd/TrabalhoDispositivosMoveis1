import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

const ItemDetailsExtra = ({ route }) => {
  const { item } = route.params;
  console.log('Item displayed:', item.name)
  
  return (
    <View style={styles.container}>
      <ImageBackground
      source={{ uri: 'https://i.pinimg.com/originals/76/5b/7c/765b7c2c847900a86e7d03430d091c02.jpg' }}
      style={styles.backgroundImage}
      >
        <Image
        source={{ uri: `https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Digimon_Logo.svg/1200px-Digimon_Logo.svg.png` }}
        style={styles.logo}
      />
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.imageBox}>
        <Image
          source={{ uri: item.img }}
          style={styles.image}
        />
        </View>
        <Text style={styles.level}>Level: {item.level}</Text>
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
  
  name: {
    backgroundColor: '#00AA00',
    color: '#F0F0F0',
    borderColor: '#F0F0F0',
    borderWidth: 2,
    borderRadius: 20,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    textShadowColor: '#000000',
    textShadowRadius: 30,    
  },

  logo: {
    width: 300,
    height: 70,
    marginBottom: 50,
  },
  imageBox: {
    width: 320,
    height: 240,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#A05000',
    borderWidth: 4,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    backgroundColor: '#000000',
  },

  level: {
    backgroundColor: '#00A0A0',
    color: '#F0F0F0',
    borderColor: '#F0F0F0',
    borderWidth: 2,
    borderRadius: 20,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 140,
    paddingHorizontal: 20,
    paddingVertical: 10,
    textShadowColor: '#000000',
    textShadowRadius: 30,   
  },
});

export default ItemDetailsExtra;
