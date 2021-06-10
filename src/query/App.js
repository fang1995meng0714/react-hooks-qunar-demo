import React, { useCallback, useEffect, useState } from 'react';
import Header from '../components/header/Header';
import Nav from '../components/nav/Nav';
import axios from 'axios';
import "../mock/mocker";
import List from './components/list/List';
import Bottom from './components/bottom/Bottom';
import { connect } from 'react-redux';
import {
    setFrom, 
    setTo,
    setDepartDate
} from "./store/actions";
import URI from 'urijs';
import { bindActionCreators } from 'redux';
import { h0 } from '../common/fp';
import dayjs from 'dayjs';

function App(props) {
    const {from, to,dispatch, departDate} = props;
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
        const {from, to, date, highSpeed} = queries;
        dispatch(setFrom(from));
        dispatch(setTo(to));
        dispatch(setDepartDate(h0(dayjs(date).valueOf())))
    }, [])

    return (
        <div>
            <div className="header-wrapper">
                <Header title={`${from} ⇀ ${to}`} onBack={onBack}/>
            </div>
            <Nav 
                date={departDate}
            />
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