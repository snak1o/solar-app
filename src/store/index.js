import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../reducers/index";

export default store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
);
