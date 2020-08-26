const { PLANETS_FETCH } = require("../actions/types");

const initialState = {
  planets: [],
};

const planetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLANETS_FETCH:
      return { ...state, planets: state.planets.concat([action.payload]) };
    default:
      return state;
  }
};
export default planetsReducer;
