import { React, useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import axios from 'axios';

const ItemDetails = ({ route }) => {
  const { item } = route.params;
  console.log('Item displayed:', item.name, item.url.split('/')[6])
  const [isShiny, setIsShiny] = useState(false);
  const [types, setTypes] = useState([]);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [abilities, setAbilities] = useState([]);

// Função para coletar as informações no endereço
  useEffect(() => {
    const fetchPokemonTypes = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${item.url.split('/')[6]}/`);
        const typesData = response.data.types.map((typeData) => typeData.type.name);
        const weightData = response.data.weight;
        const heightData = response.data.height;
        const abilitiesData = response.data.abilities.map((abilityData) => abilityData.ability.name);
        setTypes(typesData);
        setWeight(weightData);
        setHeight(heightData);
        setAbilities(abilitiesData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPokemonTypes();
  }, [item]);


// Ativa e desativa a condição 'Shiny'
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
        <Text style={styles.info}>Tipos: {types.join(', ')}</Text>
        <Text style={styles.info}>Peso: {weight / 10} kg</Text>
        <Text style={styles.info}>Altura: {height / 10} m</Text>
        <Text style={styles.info}>Habilidades: {abilities.join(', ')}</Text>

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
  },
  backgroundImage: {
    flex: 1,
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
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'cent',
  },
  toggleButtonText: {
    color: '#F0F0F0D0',
    fontSize: 30,
    fontWeight: 'bold',
  },

  image: {
    width: 300,
    height: 300,
    marginBottom: 50,
  },

  box: {
    backgroundColor: '#101010C0',
    borderRadius: 10,
    borderColor: '#000000D0',
    borderWidth: 4,
    padding: 10,
    margin: 4,
    marginHorizontal: 4,
  },
  id: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#090909',
    borderColor: '#000000D0',
    borderWidth: 2,
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 2,
    alignSelf: 'center',
  },
  info: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#090909',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginTop: 10,
    width: 330,
    alignSelf: 'center',
  },
});

export default ItemDetails;
