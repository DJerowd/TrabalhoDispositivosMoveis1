import axios from 'axios';
import { React, useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ItemListExtra = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://digimon-api.vercel.app/api/digimon')
      .then((response) => {
        setItems(response.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);



  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('ItemDetails', { item })}
    >
      <Image
        source={{ uri: item.img }}
        style={styles.image}
      />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.level}>Level: {item.level}</Text>
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
    backgroundColor: '#ffffff',
    padding: 6,
    margin: 10,
    borderRadius: 6,
    flexDirection: 'column',
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
  level: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  loading: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ItemListExtra;