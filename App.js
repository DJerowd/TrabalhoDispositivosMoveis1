import { React } from 'react';
import ItemSelect from './src/screens/ItemSelect';
import LoginPage from './src/screens/LoginPage';
import ItemList from './src/screens/ItemList';
import ItemDetails from './src/screens/ItemDetails';
import LoginPageExtra from './src/screens/LoginPageExtra';
import ItemListExtra from './src/screens/ItemListExtra';
import ItemDetailsExtra from './src/screens/ItemDetailsExtra';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ItemSelect">
      <Stack.Screen 
          name="ItemSelect" 
          component={ItemSelect} 
          options={{
            title: 'Seleção',
            headerStyle: { backgroundColor: '#000000' },
            headerTintColor: '#E0E0E0',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen 
          name="LoginPage" 
          component={LoginPage} 
          options={{
            title: 'Login',
            headerStyle: { backgroundColor: '#000000' },
            headerTintColor: '#E0E0E0',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen
          name="ItemList"
          component={ItemList}
          options={{
            title: 'POKEDEX',
            headerStyle: { backgroundColor: '#000000' },
            headerTintColor: '#E0E0E0',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen 
          name="ItemDetails" 
          component={ItemDetails} 
          options={{
            title: 'POKEDEX',
            headerStyle: { backgroundColor: '#000000' },
            headerTintColor: '#E0E0E0',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen 
          name="LoginPageExtra" 
          component={LoginPageExtra} 
          options={{
            title: 'Login',
            headerStyle: { backgroundColor: '#FF5000' },
            headerTintColor: '#000000',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen
          name="ItemListExtra"
          component={ItemListExtra}
          options={{
            title: 'DIGIMON',
            headerStyle: { backgroundColor: '#FF5000' },
            headerTintColor: '#000000',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen 
          name="ItemDetailsExtra" 
          component={ItemDetailsExtra} 
          options={{
            title: 'DIGIMON',
            headerStyle: { backgroundColor: '#000000' },
            headerTintColor: '#E0E0E0',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

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

    
    API:  https://pokeapi.co/api/v2/pokemon
    API2: https://digimon-api.vercel.app/api/digimon
*/