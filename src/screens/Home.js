import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SearchBox from '../components/SearchBox';
import { ThemeProvider } from 'react-native-elements';

class Home extends React.Component {
    
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
                <View style={styles.presentation}>
                <Text style={[styles.presentationText,{ fontSize: 20,}]} >Bienvenue dans Livre pour les Enfants !</Text>
                <Text style={[styles.presentationText,{ fontSize: 16,}]}>Vous pouvez rechercher un livre par son nom.</Text>
                </View>
                <SearchBox></SearchBox>
                <Button title="test" onPress={ () => this.props.navigation.navigate("Test")}></Button>
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
      marginTop: -120 
    },
    presentation: {
      padding: 30,
    },
    presentationText: {
      marginBottom: 10,
      textAlign: "center",
    },
  });

export default Home;