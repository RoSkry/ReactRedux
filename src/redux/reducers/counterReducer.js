import { ADD_ONE } from "../constants";
import { MINUS_ONE } from "../constants";

const initialState = {
  value: 0
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        value: state.value + 1
      };
    case MINUS_ONE:
      return {
        ...state,
        value: state.value - 1
      };
    default:
      return state;
  }
};
