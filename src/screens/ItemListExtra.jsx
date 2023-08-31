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


  const formatData = (data, numColumns) => {
    const numRows = Math.ceil(data.length / numColumns);
    const formattedData = Array.from({ length: numRows }, (_, rowIndex) => {
      const rowStart = rowIndex * numColumns;
      const rowEnd = rowStart + numColumns;
      return data.slice(rowStart, rowEnd);
    });
    return formattedData;
  };
  

  return (
    <View style={styles.container}>
      {loading ? (
        <Text style={styles.loading}>Carregando...</Text>
      ) : (
        <FlatList
          data={formatData(items, 2)}
          renderItem={({ item }) => (
            <View style={styles.row}>
              {item.map((itemData) => renderItem({ item: itemData }))}
            </View>
          )}
          keyExtractor={(item) => item[0].name}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
  };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#000',
    width: 400,
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingTop: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 2,
    alignItems: 'center',
    width: 180,
    margin: 4,
  },
  image: {
    backgroundColor: '#000000',
    width: 150,
    height: 150,
    marginBottom: 6,
  },
  name: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  level: {
    color: '#000000',
    fontSize: 12,
    fontWeight: 'bold',
  },
  loading: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  });

  
export default ItemListExtra;






