import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider, Button } from 'react-native-elements';
import SearchBox from '../components/SearchBox';

class Home extends React.Component {
    
    constructor()
    {
      super();
      this.state = {
          searchName:null
      };
    }

    //Permet de mettre a jours le state actuel depuis un composant enfant.
    updateFromChildState = (state) => {
      this.setState({
          searchName: state.searchName,
      });
    }

    navigateToBookList = (searchName) => {
      this.props.navigation.navigate("BookList",  {params: { searchName: searchName } })
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
                <SearchBox updateState={this.updateFromChildState} navigateToBookList={this.navigateToBookList}></SearchBox>
                <Button buttonStyle={styles.searchButton} title="Rechercher" onPress={ () => this.navigateToBookList(this.state.searchName) }></Button>
            </View>
            </ThemeProvider>     
        )
    }

}

//Stylisage du composant.
const styles = StyleSheet.create({
    container: {
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
    searchButton: {
      marginTop: 10,
      paddingLeft: 15,
      paddingRight: 15,
    }
  });

export default Home;