import {combineReducers} from 'redux';
import { appReducer } from "../redux/reducers/appReducer";
import { counterReducer } from "../redux/reducers/counterReducer";

export const rootReducer=combineReducers({
    appReducer,counterReducer
})