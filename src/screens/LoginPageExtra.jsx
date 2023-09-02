import { React, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const LoginPageExtra = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(emailPattern) && email.length >= 10 && password.length >= 6 && isValidPassword(password)) {
      setError('');
      onLogin();
    } else if (email.match(emailPattern) && email.length >= 10 && password.length >= 6 && !isValidPassword(password)) {
      setError('A senha deve conter letras e números.');
    } else if (email.match(emailPattern) && email.length >= 10 && password.length < 6 && isValidPassword(password)) {
      setError('A senha é muito curta.');
    } else {
      setError('Todos os campos devem ser preenchidos corretamente.');
    }
  };

  const isValidPassword = (password) => {
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    return hasLetter && hasNumber;
  };

  return (
    <View>
      <View style={styles.topBar}></View>
      <View style={styles.container}>

        <Image
          source={{ uri: 'https://www.pngall.com/wp-content/uploads/2/Digimon-Logo-Transparent.png' }}
          style={styles.digimonLogo}
        />
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    marginBottom: 150,
  },
  topBar: {
    backgroundColor: '#Ff5000',
    width: 400,
    height: 70,
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
    height: 150,
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