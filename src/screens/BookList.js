import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { ThemeProvider, ListItem } from 'react-native-elements';
//import { CirclesLoader } from 'react-native-indicator';

class BookList extends React.Component {
    
    constructor()
    {
        super();
        this.state = {
          datas: null
        };
    }

    //Recuperation des donnees depuis l'API de Google avec pour argument le text de recherche.
    getDatas(searchName) {
      if(!this.state.datas)
      {
        fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${searchName}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: this.query,
          }
        )
        .then(result => result.json())
        .then(result => 
          JSON.parse(JSON.stringify(result))
        )
        .then(result => { 
            this.setState(() => ({
              datas: result
            }))
          }
        )
        .catch((error) => {
          console.log(error);
        });
      };

    }

    //Vue de la liste des livres.
    Books() {
      if(this.state.datas != null)
      {
        return (
          <View>
            {
                this.state.datas.items.map((book, i) => (
                  <ListItem key={i} onPress={() => alert(book.id)} title={book.volumeInfo.title} subtitle={'Editeur: '+book.volumeInfo.publisher +' Publication: '+ book.volumeInfo.publishedDate}  bottomDivider />
                ))
            }
          </View>
        )
      }
      else
      {
        this.getDatas(this.props.route.params.params.searchName);
      }
    }

    //Affichage de la vue avec definition du style.
    render() {
      

        return (
            <ThemeProvider>
              <View style={styles.container}>
                <ScrollView>
                  {this.Books()}
                </ScrollView>
              </View>
            </ThemeProvider>     
        )
    }
}

//Stylisage du composant.
const styles = StyleSheet.create({
    container: {
    },
  });

export default BookList;