import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { h0 } from '../../common/fp';
import {ORDER_DEPART} from "./actions";

export default createStore(
    combineReducers(reducer),
    {
        from: null,
        to: null,
        departDate: h0(new Date()),
        orderType: ORDER_DEPART,
        trainList: [],
        highSpeed: false,
        onlyTickets: false
    },
    applyMiddleware(thunk)
)