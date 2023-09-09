import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

const ItemDetails = ({ route }) => {
  const { item } = route.params;
  console.log('Item exibido:', item)

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={{ uri: 'https://pporg-cdn.nullcontent.net/monthly_2020_10/bodybg.png.35133a318c0dfd5ae9713dabcdccd4a3.png' }}
        style={styles.backgroundImage}
        >

        <View style={styles.topBar}>
        <Text style={styles.title}>P
        <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaaFdhJy0RipdVyyOvSw1COe_Mw7BBJFm-cw&usqp=CAU' }}
            style={styles.logo}
        />
        KE-DEX</Text>
        </View>

        <View style={styles.container}>
          <Image
            source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${item.url.split('/')[6]}.gif` }}
            style={styles.image}
          />
        </View>
        <View style={styles.box}>
        <Text style={styles.name}>NOME: {item.name}</Text>
        <Text style={styles.id}>ID: {item.url.split('/')[6]}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};


/*
return (
    <View style={styles.container}>
      <Image
        source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png` }}
        style={styles.image}
      />
      <Text style={styles.name}>{item.name}</Text>
      <Text>ID: {item.id}</Text>
    </View>
  );
};
*/


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  backgroundImage: {
    flex: 1,
    width: 400,
  },
  loading: {
    color: '#00D2ff',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    backgroundColor: '#0E0E0E',
    padding: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
  },

  topBar: {
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    height: 80,
  },
  title: {
    color: '#ffffff',
    fontSize: 60,
    fontWeight: 'bold',
  },
  logo: {
    width: 50,
    height: 50,
  },

  box: {
    backgroundColor: '#101010C0',
    borderRadius: 10,
    borderColor: '#000000D0',
    borderWidth: 4,
    height: 300,
    padding: 20,
    margin: 10,
  },
  
  image: {
    width: 300,
    height: 300,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    paddingBottom: 6,
    paddingHorizontal: 10,
    alignSelf: 'center',
  },
  id: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#FFFFFF50',
    borderRadius: 50,
    width: 100,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
});

export default ItemDetails;
