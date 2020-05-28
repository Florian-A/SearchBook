import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SearchBar } from 'react-native-elements';

class SearchBox extends React.Component {
    

    constructor()
    {
        super();
        this.state = {
            searchName: null,
        };
    
    }

    //Permet d'enregister dans le state les modifications effectues dans la barre de recherche ainsi que de les passer au composant parent.
    updateSearch = searchName => {
        this.setState({ searchName });
        this.props.updateState(this.state);
    };

    //Permet de lancer la recherche apres validation de la barre de recherche (SearchBar)
    sendSearch = searchName => {
        this.setState({ searchName });
        this.props.navigateToBookList(this.state.searchName);
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
            inputContainerStyle={styles.searchBarInputContainer}
            onChangeText={this.updateSearch}
            value={searchName}
            onSubmitEditing={this.sendSearch}

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
        backgroundColor: '#F2F2F2',
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },
    searchBarInputContainer: {
        backgroundColor: '#FFF',
        borderColor: '#909293',
        borderStyle:"solid",
        borderWidth: 1,
        borderBottomWidth: 1

    }
  });

export default SearchBox;