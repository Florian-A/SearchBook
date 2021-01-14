import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider, Button } from 'react-native-elements';
import SearchBox from '../components/SearchBox';

function Home(props) {

  const [searchText, setSearchText] = useState();

  navigateToBookList = (text) => {
    props.navigation.navigate("BookList", { params: { searchName: text } })
  }

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      marginTop: -120
    },
    presentation: {
      padding: 30,
    },
    presentationText: {
      marginBottom: 10,
      textAlign: "center",
      fontSize: 20,
    },
    searchButton: {
      marginTop: 10,
      paddingLeft: 15,
      paddingRight: 15,
    }
  });

  return (
    <ThemeProvider>
      <View style={styles.container}>
        <View style={styles.presentation}>
          <Text style={[styles.presentationText]} >Bienvenue !</Text>
          <Text style={[styles.presentationText, { fontSize: 16, }]}>Vous pouvez rechercher un livre par son nom.</Text>
        </View>
        <SearchBox />
        <Button buttonStyle={styles.searchButton} title="Rechercher" onPress={() => navigateToBookList(searchText)}></Button>
      </View>
    </ThemeProvider >
  )
}

export default Home;