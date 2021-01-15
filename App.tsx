import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './src/store';

import Home from './src/screens/Home';
import BookList from './src/screens/BookList';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <SafeAreaProvider>
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="BookList" options={{ title: 'Liste des livres', }} component={BookList} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}
