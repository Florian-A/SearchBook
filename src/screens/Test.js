import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'react-native-elements';

class Test extends React.Component {
    
    constructor()
    {
        super();
        this.state = {
        };
    }

    //Affichage de la vue avec definition du style.
    render() {

        //Assignantion de variables depuis le parent.
        const { searchName } = this.props.route.params.params;

        return (
            <ThemeProvider>
              <View style={styles.container}>
                <Text>{searchName}</Text>
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