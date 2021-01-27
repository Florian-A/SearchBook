export const updateSearchText = (value: string) => {
  return {
    type: "UPDATE_SEARCHTEXT",
    value: value,
  };
};

export const updateDataBooks = (value: string) => {
  return {
    type: "UPDATE_DATABOOKS",
    value: value,
  };
};

export const getBookDatas = (searchText: string) => {
  return async (dispatch: any) => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchText}`
    );
    const data = await response.json();
    dispatch(updateDataBooks(data));
  };
};

export const resetBookDatas = () => {
  return async (dispatch: any) => {
    dispatch(updateDataBooks(null));
  };
};
