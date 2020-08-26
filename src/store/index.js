// CREATE GLOBAL STORE
import { createStore, compose, applyMiddleware } from "redux";
// IMPORT LIB FOR ASYNC WORK
import thunk from "redux-thunk";

// IMPORT REDUCER OBJECT
import rootReducer from "../reducers/index";

// EXPORT GLOBAL STORE WITH MIDDLEWARE
export default store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
);
