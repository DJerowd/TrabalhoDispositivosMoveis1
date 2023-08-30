import axios from 'axios';
import { React, useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then((response) => {
        setItems(response.data.results);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);



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

  

return (
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 10,
    marginTop: 15,
    flexDirection: 'column',
    backgroundColor: '#202020',
  },
  item: {
    backgroundColor: '#A0A0A0',
    padding: 6,
    margin: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  image: {
    backgroundColor: '#000000',
    width: 300,
    height: 300,
    margin: 10,
  },
  name: {
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
  },
  url: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  loading: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ItemList;