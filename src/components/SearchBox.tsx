import React from "react";
import { StyleSheet, View } from "react-native";
import { SearchBar } from "react-native-elements";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateSearchText, resetBookDatas } from "../actions/bookAction";

function SearchBox(props: any) {
  const onChangeText = (text: string) => {
    props.resetBookDatas();
    props.updateSearchText(text);
  };

  const styles = StyleSheet.create({
    view: {
      justifyContent: "center",
      alignSelf: "center",
      width: "90%",
    },
    searchBarContainer: {
      backgroundColor: "#F2F2F2",
      borderTopWidth: 0,
      borderBottomWidth: 0,
    },
    searchBarInputContainer: {
      backgroundColor: "#FFF",
      borderColor: "#909293",
      borderStyle: "solid",
      borderWidth: 1,
      borderBottomWidth: 1,
    },
  });

  return (
    <View style={styles.view}>
      <SearchBar
        placeholder="Entrez le nom d'un livre"
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInputContainer}
        onChangeText={onChangeText}
        value={props.searchText}
      />
    </View>
  );
}

const mapStateToProps = (state: any) => {
  return {
    searchText: state.bookReducer.searchText,
  };
};

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ updateSearchText, resetBookDatas }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
