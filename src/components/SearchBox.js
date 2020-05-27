import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SearchBar } from 'react-native-elements';

class SearchBox extends React.Component {
    
    state = {
        searchName: null,
    };

    constructor()
    {
        super();
    }

    //Permet d'enregister dans le state les modifications effectues dans la barre de recherche ainsi que de les passer au composant parent.
    updateSearch = searchName => {
        this.setState({ searchName });
        this.props.updateState(this.state);
    };

    render() {
        
        //Assignation de la variable search au state.
        const { searchName } = this.state;
        
        //Affichage de la vue.
        return (
            <View  style={styles.container}>
            <SearchBar
            placeholder="Entrez le nom d'un livre" lightTheme="true" 
            containerStyle={styles.searchBarContainer}
            onChangeText={this.updateSearch}
            value={searchName}
          />
          </View>
     
        )
    }

}

//Stylisage du composant.
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: '90%',
    },
    searchBarContainer: {
        backgroundColor: '#F5FCFF',
        borderTopWidth: 0,
        borderBottomWidth: 0,
    }
  });

export default SearchBox;