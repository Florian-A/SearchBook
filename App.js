import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home';
import BookList from './src/screens/BookList';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Recherche de livres" component={Home} />
        <Stack.Screen name="BookList" options={{ title: 'Liste des livres', }} component={BookList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;