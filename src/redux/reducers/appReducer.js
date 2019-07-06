import { CHANGE_NAME } from "../constants";


const initialState = {
  name: "Petya",
  age: 21,
  city: "Kharkov"
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.payload
      };
    default:
      return state;
  }
};
