import { ADD_ONE } from "../constants";
import { MINUS_ONE } from "../constants";

export const addOneAction = value => {
  return {
    type: ADD_ONE
  };
};

export const minusOneAction = value => {
  return {
    type: MINUS_ONE
  };
};
