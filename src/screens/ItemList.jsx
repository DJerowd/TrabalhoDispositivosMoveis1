
import axios from 'axios';
import { React, useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import ItemDetails from './ItemDetails';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const navigation = useNavigation();

// Request da API e formatação de páginas
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=${(currentPage - 1) * itemsPerPage}&limit=${itemsPerPage}`)
      .then((response) => {
        setItems(response.data.results);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [currentPage]);


// Card dos itens
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => handleItemPress(item)}
    >
      <Image
        source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.url.split('/')[6]}.png` }}
        style={styles.image}
      />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.id}>ID: {item.url.split('/')[6]}</Text>
    </TouchableOpacity>
  );


// Direcionamento ao clicar em um item
  const handleItemPress = (item) => {
    console.log('Item Pressed:', item);
    navigation.navigate('ItemDetails', { item });
  };

// Controle de paginas
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  
return (
    <View style={{ flex: 1 }}>
      <ImageBackground
      source={{ uri: 'https://cutewallpaper.org/21/pokemon-sky-background/Pixel-Sky-Backgrounds,-HD-Wallpapers-++-wallpaper-.jpg' }}
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
      {loading ? (
        <Text style={styles.loading}>Carregando...</Text>
      ) : (
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
      )}
    </View>
    
    <View style={styles.pageBar}>
      <TouchableOpacity style={styles.pageButton} onPress={handlePrevPage}>
        <Text style={styles.pageButtonText}>Página Anterior</Text>
      </TouchableOpacity>

      <Text style={styles.pageText}>|Página {currentPage}|</Text>

      <TouchableOpacity style={styles.pageButton} onPress={handleNextPage}>
        <Text style={styles.pageButtonText}>Próxima Página</Text>
      </TouchableOpacity>
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
    paddingHorizontal: 10,
    flexDirection: 'column',
  },
  backgroundImage: {
    flex: 1,
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

  item: {
    backgroundColor: '#000000D0',
    padding: 4,
    margin: 14,
    borderRadius: 20,
    alignItems: 'center',
  },
  image: {
    backgroundColor: '#000000',
    width: 330,
    height: 330,
    margin: 4,
    borderRadius: 20,
  },
  name: {
    color: '#00D2ff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  id: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 4,
  },

  pageBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageButton: {
    backgroundColor: '#000000',
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  pageButtonText: {
    color: '#00D2ff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pageText: {
    backgroundColor: '#000000',
    paddingVertical: 10,
    color: '#00D2ff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


export default ItemList;