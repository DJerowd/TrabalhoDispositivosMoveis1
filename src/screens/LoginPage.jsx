import { React, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (email && password) {
      setError('');
      onLogin();
    } else {
      setError('Por favor, preencha todos os campos em falta.');
    }
  };

  return (
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: 300,
    height: 50,
    backgroundColor: '#626262',
    borderColor: '#00000070',
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
    color: '#FF0000D0',
    fontSize: 20,
    fontWeight: 'bold',
  },
  error: {
    color: '#FF0000D0',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default LoginPage;