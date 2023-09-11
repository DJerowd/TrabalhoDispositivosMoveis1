import { React, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const LoginPageExtra = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

// Validação do formato do email
  const handleLogin = () => {
    console.log('Item Pressed: Login Digimon');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// Validação do email e senha
    if (email.match(emailPattern) && email.length >= 10 && password.length >= 6 && isValidPassword(password)) {
      setError('');
      navigation.navigate('ItemListExtra');
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
      <View style={styles.container}>

        <Image
          source={{ uri: 'https://www.pngall.com/wp-content/uploads/2/Digimon-Logo-Transparent.png' }}
          style={styles.digimonLogo}
        />
        <View style={styles.box}>
          <Text style={styles.text}>Login:</Text>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F0F0F0',
  },
  box: {
    backgroundColor: '#A0A0A0A0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 150,
  },
  input: {
    width: 300,
    height: 50,
    backgroundColor: '#F0F0F0',
    borderColor: '#00000050',
    borderWidth: 4,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    width: 100,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#FF5000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#F0F0F0',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: '#171717',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 20,
  },
  digimonLogo: {
    width: 320,
    height: 154,
    marginBottom: 20,
  },
  error: {
    color: '#FF0000D0',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default LoginPageExtra;
