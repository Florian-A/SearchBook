import React, { useEffect, useState } from "react";
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemeProvider } from "react-native-elements";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function BookDetails(props: any) {
  const [bookTitle, setBookTitle] = useState(null);
  const [bookImage, setBookImage] = useState(null);
  const [bookBuyLink, setBookBuyLink] = useState(null);

  useEffect(() => {
    let selectedBook = props.dataBooks.items.filter(
      (book) => book.id == props.route.params.params.bookId
    );
    setBookTitle(selectedBook[0].volumeInfo.title);
    setBookImage(
      selectedBook[0].volumeInfo.imageLinks
        ? selectedBook[0].volumeInfo.imageLinks.thumbnail
        : "https://reactnative.dev/img/tiny_logo.png"
    );
    setBookBuyLink(selectedBook[0].saleInfo.buyLink);
    console.log(selectedBook[0].saleInfo.buyLink);
    return () => {
      setBookTitle(null);
      setBookImage(null);
      setBookBuyLink(null);
    };
  });

  const handleClick = (url: string) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      }
    });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      paddingTop: 30,
    },
    title: {
      fontSize: 22,
      color: "#000",
      marginTop: 20,
      fontWeight: "900",
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
      marginTop: 200,
      paddingStart: 100,
      paddingEnd: 100,
    },
    buttonText: {
      fontSize: 16,
    },
    image: {
      width: 250,
      height: 250,
      borderColor: "#999999",
      borderWidth: 1,
      padding: 5,
      borderRadius: 10,
    },
  });

  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Image source={{ uri: bookImage }} style={styles.image} />
        <Text style={styles.title}>{bookTitle}</Text>
        {bookBuyLink ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleClick(bookBuyLink)}
          >
            <Text style={styles.buttonText}>Acheter</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button}
            disabled={true}
          >
            <Text style={styles.buttonText}>Non achetable</Text>
          </TouchableOpacity>
        )}
      </View>
    </ThemeProvider>
  );
}

const mapStateToProps = (state: any) => {
  return {
    dataBooks: state.bookReducer.dataBooks,
  };
};

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
