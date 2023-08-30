import { React, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {SafeAreaView, View, Text, StyleSheet } from 'react-native';
import LoginPage from './src/screens/LoginPage';
import ItemList from './src/screens/ItemList';
import ItemDetails from './src/screens/ItemDetails';
import LoginPageExtra from './src/screens/LoginPageExtra';
import ItemListExtra from './src/screens/ItemListExtra';

const Tab = createBottomTabNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };


  return (
    <SafeAreaView style={styles.container}>
      {isLoggedIn ? (
        <ItemListExtra />
      ) : (
        <LoginPageExtra onLogin={handleLogin} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#202020',
  },
});

export default App;

/*
      Projeto Disciplina Desenvolvimento de aplicativos móveis - 4o período

  Descrição geral

    - O projeto consiste na elaboração de um aplicativo, utilizando a tecnologia React Native, utilizando
     as linguagens de programação JavaScript ou TypeScript. O projeto poderá ser criado utilizando React 
     Native CLI ou Expo.
    - O projeto será EM DUPLAS ou INDIVIDUAL. Cabe ao acadêmico decidir.
    - A entrega será via GitHub: vocês devem subir o código no GitHub e enviar o link pelo portal.
    - ATENÇÃO, TRABALHOS EM FORMATO .ZIP OU .RAR DENTRO DO GITHUB NÃO SERÃO AVALIADOS. 
    - Subam os códigos de forma correta, e frequentemente, não apenas um único commit com todo o trabalho.
    - Trabalhos feitos em duplas terão uma avaliação extra: devem ter commits dos dois acadêmicos no GitHub. 
    - Se tiver commits apenas de um, ou uma grande diferença entre os dois alunos, a nota será prejudicada.

Projeto

  O projeto deverá ter a seguinte estrutura:

      Página com formulário para login, incluindo email e senha. Validação se ambos os campos
    estão preenchidos antes do envio para a página principal do app. O login será fictício, não
    será vinculado a nenhuma API.
      
      Página Home: listagem de itens, exibindo ao menos: uma imagem e 2 informações sobre o
    item. Os dados deverão vir de uma API, e devem ser paginados via backend.
      
      Página de detalhes sobre o item: deve ser acessada através da página de listagem (ao
    clicar no item da listagem), e conter dados vindos de uma API.
    

    
      Página extra: Nessa página vocês podem escolher renderizar uma outra listagem
    (requisitando uma API diferente da página Home), outra tela com detalhes, tela com
    formulário. Fica a cargo do aluno, o requisito é ela ser visualmente diferente e possuir
    dados/requests diferentes das outras duas 2 telas.
      
      Navegação: O projeto deve conter algum tipo de navegação entre páginas: tabs, drawer
    ou stack.
    
      CSS será avaliado! Não precisam criar as telas mais bonitas, mas devem aplicar estilos
    para ficar visualmente agradável. Será permitida a utilização de bibliotecas externas, seja
    para funcionalidades ou componentes.


    API: https://pokeapi.co/api/v2/pokemon
*/