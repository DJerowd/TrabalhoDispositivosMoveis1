import { React, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleItemPress = (item) => {
    console.log('Item Pressed:', item);
    navigation.navigate(item);
  };

// Validação do formato do email
  const handleLogin = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// Validação do email e senha
    if (email.match(emailPattern) && email.length >= 10 && password.length >= 6 && isValidPassword(password)) {
      setError('');
      navigation.navigate('ItemList');
    } else if (email.match(emailPattern) && email.length >= 10 && password.length >= 6 && !isValidPassword(password)) {
      setError('A senha deve conter letras e números.');
    } else if (email.match(emailPattern) && email.length >= 10 && password.length < 6) {
      setError('A senha é muito curta.');
    } else {
      setError('Todos os campos devem ser preenchidos corretamente.');
    }
    
  };

// Validação da composição da senha
  const isValidPassword = (password) => {
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    return hasLetter && hasNumber;
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
        
        <TextInput
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          style={styles.input}
        />

        <TextInput 
          placeholder="Senha"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
          style={styles.input}
        />
        
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
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
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  backgroundImage: {
    flex: 1,
  },
  error: {
    color: '#00D2ff',
    backgroundColor: '#0E0E0EA0',
    padding: 4,
    paddingHorizontal: 8,
    borderRadius: 10,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
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

  input: {
    width: 300,
    height: 50,
    backgroundColor: '#E0E0E0E0',
    borderColor: '#00000050',
    borderWidth: 4,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#000000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#00D2ff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  pageNavigation: {
    paddingHorizontal: 100,
    flexDirection: 'row',
    backgroundColor: '#000000',
  },
  activeButton: {
    backgroundColor: '#101010',
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 40,
  },
  inactiveButton: {
    backgroundColor: '#404040',
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 40,
  },
  buttonText: {
    color: '#E0E0E0E0',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default LoginPage;