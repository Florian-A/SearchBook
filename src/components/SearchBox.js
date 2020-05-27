import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SearchBar } from 'react-native-elements';

class SearchBox extends React.Component {
    
    state = {
        search: '',
    };

    constructor(props)
    {
        super(props);
    }

    //Permet d'enregister dans le state les modifications effectures dans la barre de recherche.
    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        
        //Assignation de la variable search au state.
        const { search } = this.state;
        
        //Affichage de la vue.
        return (
            <View  style={styles.container}>
            <SearchBar
            placeholder="Entrez le nom d'un livre" lightTheme="true" 
            containerStyle={styles.searchBarContainer}
            onChangeText={this.updateSearch}
            value={search}
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