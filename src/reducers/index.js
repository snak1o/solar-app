import { combineReducers } from "redux";

import loadingReducer from "./loadingReducer";
import planetsReducer from "./planetsReducer";

export default combineReducers({
  loader: loadingReducer,
  planets: planetsReducer,
});
