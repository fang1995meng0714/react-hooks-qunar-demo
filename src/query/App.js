import React, { useCallback, useEffect, useState } from 'react';
import Header from '../compoonents/header/Header';
import Nav from '../compoonents/nav/Nav';
import axios from 'axios';
import "../mock/mocker";
import List from './compoonents/list/List';
import Bottom from './compoonents/bottom/Bottom';
import { connect } from 'react-redux';
import {cityNameAction} from "./store/actions";
import URI from 'urijs';
import { bindActionCreators } from 'redux';

function App(props) {
    const {from, to, cityName,dispatch} = props;
    const [trainList, setTrainList] = useState([]);
    const onBack = useCallback(() => {
        window.history.back();
    }, []);

    useEffect(() => {
        axios.get("/rest/query")
        .then((res) => {
            let response = res.data.data.dataMap;
            let trains = response.directTrainInfo.trains;
            setTrainList(trains)
        })
    }, [])

    useEffect(() => {
        const queries = URI.parseQuery(window.location.search);
        const {from} = queries;
        dispatch(cityNameAction(from))
    }, [])

    return (
        <div>
            <div className="header-wrapper">
                <Header title={`北京 ⇀ 上海`} onBack={onBack}/>
            </div>
            <Nav />
            <List list={trainList}/>
            <Bottom />
        </div>
    )
}

export default connect(
    function mapStateToProps(state) {
        console.log(state)
        return state;
    },
    function mapDispatchToProps(dispatch) {
        return {
            dispatch,
            // cityName(val) {
            //     const action = cityNameAction(val);
            //     dispatch(action);
            // }
        };
    }
)(App);