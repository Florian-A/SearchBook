import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SearchBar } from 'react-native-elements';

function SearchBox(props) {

    const styles = StyleSheet.create({
        view: {
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
            borderStyle: "solid",
            borderWidth: 1,
            borderBottomWidth: 1

        }
    });

    return (
        <View style={styles.view}>
            <SearchBar
                placeholder="Entrez le nom d'un livre"
                lightTheme="true"
                containerStyle={styles.searchBarContainer}
                inputContainerStyle={styles.searchBarInputContainer}
                onChangeText={props.onChangeText}
                value={props.value}
                onSubmitEditing={props.onSubmitEditing}
            />
        </View>
    )
}

export default SearchBox;