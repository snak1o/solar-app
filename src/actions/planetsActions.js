// ACTION'S TYPES
import { PLANETS_FETCH } from "./types";

// ACTION'S
import { showLoader, hideLoader } from "./loaderActions";

// IMPORT CUSTOM FETCH LIB
import axios from "axios";

// CONFIG
import ip from "../config/ip";

// ACTION FETCH ALL PLANETS FROM DB
export const getPlanets = () => {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const response = await axios.get("http://" + ip + "/api/planets");
      dispatch(setPlanets(response.data));
      dispatch(hideLoader());
    } catch (error) {
      console.log(error);
      dispatch(hideLoader());
    }
  };
};

// ACTION SEND ALL PLANETS DATA TO PLANETS_FETCH REDUCER
export const setPlanets = (payload) => {
  return {
    type: PLANETS_FETCH,
    payload,
  };
};
