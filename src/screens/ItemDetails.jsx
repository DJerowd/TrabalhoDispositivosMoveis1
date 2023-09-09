import { React, useState } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const ItemDetails = ({ route }) => {
  const { item } = route.params;
  const [isShiny, setIsShiny] = useState(false);
  console.log('Item displayed:', item.name, item.url.split('/')[6])

// Ativa a condição 'Shiny'
  const toggleShiny = () => {
    setIsShiny((prevIsShiny) => !prevIsShiny);
  };
  
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

        <TouchableOpacity onPress={toggleShiny} style={styles.toggleButton}>
          <Text style={styles.toggleButtonText}>
            {isShiny ? '★' : '☆'}
          </Text>
        </TouchableOpacity>

        <View style={styles.container}>
          
          <Image
            source={{
              uri: isShiny
                ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${item.url.split('/')[6]}.png`
                : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.url.split('/')[6]}.png`,
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.box}>
        <Text style={styles.id}>ID: {item.url.split('/')[6]}       {item.name}</Text>


        </View>
      </ImageBackground>
    </View>
  );
};

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
    color: '#ffffff',
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

  toggleButton: {
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleButtonText: {
    color: '#F0F0F0D0',
    fontSize: 40,
    fontWeight: 'bold',
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
    width: 340,
    height: 340,
  },
  id: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#090909',
    borderColor: '#000000D0',
    borderWidth: 2,
    borderRadius: 50,
    paddingBottom: 6,
    paddingHorizontal: 20,
    paddingVertical: 8,
    alignSelf: 'center',
  },
});

export default ItemDetails;
