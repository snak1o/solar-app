// BASE IMPORT FOR COMBINE REDUCERS
import { combineReducers } from "redux";

// IMPORT REDUCERS
import loadingReducer from "./loadingReducer";
import planetsReducer from "./planetsReducer";

// EXPORT ALL OUR REDUCERS AS ONE OBJECT
export default combineReducers({
  loader: loadingReducer,
  planets: planetsReducer,
});
