import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home';
import Test from './src/screens/Test';

//Assigne l'object qui fournit un moyen pour lapplication de faire la transition entre les écrans.
const Stack = createStackNavigator();

//Affichage de la vue de l'application.
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Livre pour les enfants" component={Home} />
      <Stack.Screen name="Test" component={Test} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
