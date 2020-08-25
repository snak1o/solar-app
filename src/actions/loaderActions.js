import { SHOW_LOADER, HIDE_LOADER } from "./types";

export const showLoader = () => {
  console.log("show loader emited");
  return {
    type: SHOW_LOADER,
  };
};

export const hideLoader = () => {
  console.log("hideLoader emited");
  return {
    type: HIDE_LOADER,
  };
};
