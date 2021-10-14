import { combineReducers } from "redux";
import { dictionaryReducer } from "./dictionaryReducer";

export const rootReducer = combineReducers({
    dictionary: dictionaryReducer
})