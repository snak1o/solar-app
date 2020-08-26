import axios from "axios";
import { showLoader, hideLoader } from "./loaderActions";
import { PLANETS_FETCH } from "./types";
import ip from "../config/ip";

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

export const setPlanets = (payload) => {
  return {
    type: PLANETS_FETCH,
    payload,
  };
};
