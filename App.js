import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home';
import BookList from './src/screens/BookList';

//Assigne l'object qui fournit un moyen pour lapplication de faire la transition entre les écrans.
const Stack = createStackNavigator();

//Affichage de la vue de l'application.
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Livre pour les enfants" component={Home} />
      <Stack.Screen name="BookList" options={{title: 'Liste des livres',}} component={BookList} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
