import { applyMiddleware, combineReducers, createStore } from "redux";
import bookReducer from "./reducers/bookReducer";
import thunk from "redux-thunk";

const middleware = [thunk];
let store = createStore(
  combineReducers({ bookReducer }),
  applyMiddleware(...middleware)
);

export default store;
