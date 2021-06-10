import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers"

export default createStore(
    combineReducers(reducer),
    {
        from: null,
        to: null
    },
    applyMiddleware(thunk)
)