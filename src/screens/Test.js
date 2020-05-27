import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'react-native-elements';

class Test extends React.Component {
    
    state = {
    };

    constructor(props)
    {
        super(props);
    }

    //Affichage de la vue avec definition du style.
    render() {
        return (
            <ThemeProvider>
            <View style={styles.container}>
                <Text>Test</Text>
            </View>
            </ThemeProvider>     
        )
    }

}

//Stylisage du composant.
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F5FCFF',
      justifyContent: 'center',
      alignItems: 'center',
      flex:1,
    },
  });

export default Test;