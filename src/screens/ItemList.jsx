import axios from 'axios';
import { React, useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=${(currentPage - 1) * itemsPerPage}&limit=${itemsPerPage}`)
      .then((response) => {
        setItems(response.data.results);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [currentPage]);


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
      <Text style={styles.url}>{item.url}</Text>
    </TouchableOpacity>
  );

  const handleItemPress = (item) => {
    // Implemente a ação que deseja quando um item é pressionado
    console.log('Item Pressed:', item.name);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  
return (
    <View>
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
    <View style={styles.pageSelection}>

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
    paddingHorizontal: 4,
    flexDirection: 'column',
  },
  backgroundImage: {
    flex: 1,
  },
  loading: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },

  topBar: {
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    height: 100,
    paddingTop: 20,
  },
  title: {
    color: '#E0E0E0',
    fontSize: 60,
    fontWeight: 'bold',
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 20,
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
    width: 350,
    height: 350,
    margin: 4,
    borderRadius: 20,
  },
  name: {
    color: '#00D2ff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  url: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
    paddingBottom: 4,
  },

  pageSelection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageButton: {
    backgroundColor: '#000000',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  pageButtonText: {
    color: '#00D2ff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  pageText: {
    backgroundColor: '#000000',
    paddingVertical: 10,
    color: '#00D2ff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


export default ItemList;