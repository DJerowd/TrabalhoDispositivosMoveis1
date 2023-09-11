import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ItemSelect = ({ navigation }) => {

// Direcionamento para a página selecionada
  const handleItemPress = (item) => {
    console.log('Item Pressed:', item);
    navigation.navigate(item);
  };

  return (
    <View style={styles.container}>

        <TouchableOpacity
          style={styles.pokedexButton}
          onPress={() => handleItemPress('LoginPage')}
        >
          <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png' }}
          style={styles.pokemonLogo}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.digimonButton}
          onPress={() => handleItemPress('LoginPageExtra')}
        >
          <Image
          source={{ uri: 'https://www.pngall.com/wp-content/uploads/2/Digimon-Logo-Transparent.png' }}
          style={styles.digimonLogo}
          />
        </TouchableOpacity>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  pokedexButton: {
    backgroundColor: '#A01010',
    paddingHorizontal: 10,
    paddingVertical: 60,
    marginHorizontal: 10,
    marginBottom: 40,
    borderRadius: 10,
    borderColor: '#6060A090',
    borderWidth: 4,
  },
  pokemonLogo: {
    width: 320,
    height: 114,
  },

  digimonButton: {
    backgroundColor: '#1010A0',
    paddingHorizontal: 10,
    paddingVertical: 40,
    marginHorizontal: 10,
    marginBottom: 40,
    borderRadius: 10,
    marginBottom: 40,
    borderColor: '#ffffff90',
    borderWidth: 4,
  },
  digimonLogo: {
    width: 320,
    height: 154,
  },
});

export default ItemSelect;
