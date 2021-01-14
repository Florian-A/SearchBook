import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import BookList from './screens/BookList';
import { Provider } from 'react-redux';
import store from './store';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="BookList" options={{ title: 'Liste des livres', }} component={BookList} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;