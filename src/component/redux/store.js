import { applyMiddleware, combineReducers, createStore } from "redux";
import Reducer from "./Reducer";
import thunk from "redux-thunk";
const RootReducer=combineReducers({
    Reducer
})
export const store=createStore(RootReducer,applyMiddleware(thunk));