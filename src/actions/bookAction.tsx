export const updateSearchText = (value) => {
    return {
        type: 'UPDATE_SEARCHTEXT',
        value : value
    }
}

export const updateDataBooks = (value) => {
    return {
        type: 'UPDATE_DATABOOKS',
        value : value
    }
}

export const getBookDatas = (searchText) => {
    return async (dispatch) => {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchText}`)
        const data = await response.json();
        dispatch(updateDataBooks(data));
    }
}

export const resetBookDatas = () => {
    return async (dispatch) => {
        dispatch(updateDataBooks(null));
    }
}