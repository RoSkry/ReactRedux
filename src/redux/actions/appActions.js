import { CHANGE_NAME } from "../constants";

export const changeNameAction = value => {
  return {
    type: CHANGE_NAME,
    payload: value
  };
};
