import axios from 'axios';
import { React, useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


/*===============================================================================
               N Ã O   E S T Á   F U N C I O N A N D O   A I N D A               
===============================================================================*/


const ItemDetails = ({ route }) => {
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    axios.get(route.params.item.url)
      .then((response) => {
        setItemDetails(response.data);
      })
      .catch((error) => console.error(error));
  }, [route.params.item.url]);

  if (!itemDetails) {
    return <Text>Carregando...</Text>;
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${itemDetails.id}.png` }}
        style={styles.image}
      />
      <Text style={styles.name}>{itemDetails.name}</Text>
      <Text>Altura: {itemDetails.height}</Text>
      <Text>Peso: {itemDetails.weight}</Text>
      <Text>Experiência base: {itemDetails.base_experience}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#626262',
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ItemDetails;