import { createStore } from 'redux';
import bookReducer from './reducers/bookReducer';

let store = createStore(bookReducer);
export default store;