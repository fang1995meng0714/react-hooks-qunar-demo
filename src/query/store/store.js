import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { h0 } from '../../common/fp';
console.log(h0(new Date()))

export default createStore(
    combineReducers(reducer),
    {
        from: null,
        to: null,
        departDate: h0(new Date())
    },
    applyMiddleware(thunk)
)