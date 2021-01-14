import React, { useState } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { ThemeProvider, ListItem } from 'react-native-elements';

function BookList(props) {

  const [datas, setDatas] = useState(null);

  getDatas = (searchText) => {
    if (!datas !== null) {
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchText}`,
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
          setDatas(() => (result))
        }
        )
        .catch((error) => {
          console.log(error);
        });
    };

  }

  viewBook = () => {
    if (datas !== null) {
      return (
        <View>
          {
            datas.items.map((book, i) => (

              <ListItem key={i} bottomDivider>
                <Image
                  source={{ uri: book.volumeInfo.imageLinks.thumbnail }}
                  style={{ width: 50, height: 50 }}
                />
                <ListItem.Content>
                  <ListItem.Title>{book.volumeInfo.title}</ListItem.Title>
                  <ListItem.Subtitle>{'Editeur: ' + book.volumeInfo.publisher + ' Publication: ' + book.volumeInfo.publishedDate}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>


            ))
          }
        </View>
      )
    }
    else {
      getDatas(props.route.params.params.searchName);
    }
  }

  return (
    <ThemeProvider>
      <View>
        <ScrollView>
          {viewBook()}
        </ScrollView>
      </View>
    </ThemeProvider>
  )

}

export default BookList;