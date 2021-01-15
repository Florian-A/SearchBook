const initialState = {
    searchText: null,
    dataBooks: null
};

function bookReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_SEARCHTEXT':
            console.log(state)
            return {
                ...state,
                searchText: action.value
            }
        case 'UPDATE_DATABOOKS':
            return {
                ...state,
                dataBooks: action.value
            }
        default:
            return state
    }
}

export default bookReducer;