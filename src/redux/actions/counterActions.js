import { ADD_ONE } from "../constants";
import { MINUS_ONE } from "../constants";

export const addOneAction = () => {
  return {
    type: ADD_ONE
  };
};

export const minusOneAction = () => {
  return {
    type: MINUS_ONE
  };
};
