// ACTION'S TYPES
import { SHOW_LOADER, HIDE_LOADER } from "./types";

// ACTION SHOW THE LOADER
export const showLoader = () => {
  return {
    type: SHOW_LOADER,
  };
};

// ACTION HIDE THE LOADER
export const hideLoader = () => {
  return {
    type: HIDE_LOADER,
  };
};
