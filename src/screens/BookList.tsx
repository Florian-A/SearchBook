import React, { useEffect } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { ThemeProvider, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBookDatas, resetBookDatas } from "../actions/bookAction";

function BookList(props) {

  // useEffect(() => {
  //   //return () => { props.resetBookDatas()}
  // });

  const viewBook = () => {
    if (props.dataBooks !== null) {
      console.log("DEBUG")
      console.log(props.dataBooks)
      console.log("DEBUG")
      return (
        <View>
          {
            props.dataBooks.items.map((book, i) => (
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
      props.getBookDatas(props.searchText);
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

const mapStateToProps = (state) => {
  return {
    searchText: state.bookReducer.searchText,
    dataBooks: state.bookReducer.dataBooks
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getBookDatas, resetBookDatas }, dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)