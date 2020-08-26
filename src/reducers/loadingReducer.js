// ACTION'S TYPES
import { SHOW_LOADER, HIDE_LOADER } from "../actions/types";

// INITIAL STATE FOR LOADING
const initialState = {
  loading: true,
};

// LOADING REDUCER TO CHANGE LOADING STATE IN OUR GLOBAL STORE
const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default loadingReducer;
