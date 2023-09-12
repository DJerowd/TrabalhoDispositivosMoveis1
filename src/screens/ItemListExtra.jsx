import axios from 'axios';
import { React, useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ItemListExtra = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

// Request da API
  useEffect(() => {
    axios.get('https://digimon-api.vercel.app/api/digimon')
      .then((response) => {
        setItems(response.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

// Card dos itens
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => handleItemPress(item)}
    >
      <Image
        source={{ uri: item.img }}
        style={styles.image}
      />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.level}>Level: {item.level}</Text>
    </TouchableOpacity>
  );

// Direcionamento ao clicar em um item
  const handleItemPress = (item) => {
    console.log('Item Pressed:', item);
    navigation.navigate('ItemDetailsExtra', { item });
  };

// Formatação da listagem em colunas
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
    <View style={{ flex: 1 }}>
      <View style={styles.topBar}>
      <Image
        source={{ uri: `https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Digimon_Logo.svg/1200px-Digimon_Logo.svg.png` }}
        style={styles.logo}
      />
      </View>
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
            keyExtractor={(item) => item.name}
            contentContainerStyle={styles.listContainer}
          />
        )}
      </View>
    </View>
  );
  };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBar: {
    backgroundColor: '#FF5000',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 70,
  },
  loading: {
    color: '#000000A0',
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  
  listContainer: {
    paddingHorizontal: 4,
    paddingTop: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  
  item: {
    backgroundColor: '#ffffff',
    padding: 2,
    alignItems: 'center',
    width: 160,
    marginHorizontal: 6,
    marginVertical: 6,
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
  });
  
export default ItemListExtra;
