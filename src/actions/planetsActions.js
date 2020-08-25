import axios from "axios";
import { showLoader, hideLoader } from "./loaderActions";
import { PLANETS_FETCH } from "./types";

export const getPlanets = () => {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch(setPlanets(response.data));
      dispatch(hideLoader());
    } catch (error) {
      dispatch(hideLoader());
    }
  };
};

export const setPlanets = (payload) => {
  return {
    type: PLANETS_FETCH,
    payload,
  };
};
