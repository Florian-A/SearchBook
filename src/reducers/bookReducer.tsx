const initialState = {
  searchText: null,
  dataBooks: null,
};

function bookReducer(state = initialState, action: any) {
  switch (action.type) {
    case "UPDATE_SEARCHTEXT":
      return {
        ...state,
        searchText: action.value,
      };
    case "UPDATE_DATABOOKS":
      return {
        ...state,
        dataBooks: action.value,
      };
    default:
      return state;
  }
}

export default bookReducer;
