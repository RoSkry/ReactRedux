import { ADD_ONE } from "../constants";
import { MINUS_ONE } from "../constants";

export const addOneAction = value => {
  return {
    type: ADD_ONE,
    payload: value
  };
};

export const minusOneAction = value => {
  return {
    type: MINUS_ONE,
    payload: value
  };
};
