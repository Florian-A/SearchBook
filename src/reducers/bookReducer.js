const initialState = {
    searchText: null,
    dataBooks: {}
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
                ...state
            }
        default:
            return state
    }
}

export default bookReducer;