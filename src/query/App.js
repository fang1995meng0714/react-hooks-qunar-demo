import React, { useCallback, useEffect, useState } from 'react';
import Header from '../compoonents/header/Header';
import Nav from '../compoonents/nav/Nav';
import axios from 'axios';
import "../mock/mocker";
import List from './compoonents/list/List';
import Bottom from './compoonents/bottom/Bottom';
import { connect } from 'react-redux';
import {setFrom, setTo} from "./store/actions";
import URI from 'urijs';
import { bindActionCreators } from 'redux';

function App(props) {
    const {from, to,dispatch} = props;
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
        const {from, to} = queries;
        dispatch(setFrom(from))
        dispatch(setTo(to))
    }, [])

    return (
        <div>
            <div className="header-wrapper">
                <Header title={`${from} ⇀ ${to}`} onBack={onBack}/>
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
        };
    }
)(App);