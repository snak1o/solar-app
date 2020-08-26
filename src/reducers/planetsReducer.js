// ACTION'S TYPES
const { PLANETS_FETCH } = require("../actions/types");

// INITIAL STATE FOR ALL PLANETS
const initialState = {
  planets: [],
};

// PLANETS REDUCER TO ADD ALL PLANETS IN OUR GLOBAL STORE
const planetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLANETS_FETCH:
      return { ...state, planets: state.planets.concat([action.payload]) };
    default:
      return state;
  }
};
export default planetsReducer;
