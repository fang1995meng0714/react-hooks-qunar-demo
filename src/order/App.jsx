import React, {useCallback, useEffect}  from 'react';
import Header from "./../components/header/Header";
import Detail from '../components/detail/Detail.jsx';
import './App.css';
import dayjs from 'dayjs';
import { connect } from 'react-redux';
import URI from 'urijs';
import "../mock/mocker";
import {
    setTrainNumber,
    setDepartStation,
    setArriveStation,
    setSeatType,
    setDepartDate,
    setArriveTimeStr,
    setArriveDate,
    setDurationStr,
    fetchInitial
} from "./store/actions";
import { setDepartTimeStr } from '../ticket/store/actions';


function App(props) {
    const {
        dispatch,
        trainNumber,
        departStation,
        arriveStation,
        seatType,
        departDate,
        arriveDate,
        departTimeStr,
        arriveTimeStr,
        durationStr
    } = props;
    

    const onBack = useCallback(() => {
        window.history.back();
    }, []);

    useEffect(() => {
        const queries = URI.parseQuery(window.location.search);
        const {trainNumber, dStation, aStation, type, date} = queries;

        dispatch(setTrainNumber(trainNumber));
        dispatch(setDepartStation(dStation));
        dispatch(setArriveStation(aStation));
        dispatch(setSeatType(type));
        dispatch(setDepartDate(dayjs(date).valueOf()));
    })

    useEffect(() => {
        document.title = trainNumber;
    }, [trainNumber]);

    useEffect(() => {
        const obj = {
            dStation: departStation,
            aStation: arriveStation,
            type: seatType,
            date: dayjs(departDate).format('YYYY-MM-DD')
        }
        const url = "/rest/order";
        fetchInitial(url, obj)
    }, [departStation, arriveStation, seatType, departDate])

    return (
        <div className="app">
            <div className="header-wrapper">
                <Header title="订单填写" onBack={onBack} />
            </div>
            <div>
                <Detail 
                     departDate={departDate}
                     arriveDate={arriveDate}
                     departTimeStr={departTimeStr}
                     arriveTimeStr={arriveTimeStr}
                     trainNumber={trainNumber}
                     departStation={departStation}
                     arriveStation={arriveStation}
                     durationStr={durationStr}
                />
            </div>
        </div>
    )
}

export default connect(
    function mapStateToProps(state) {
        return state;
    },
    function mapDispatchToProps(dispatch) {
        return { dispatch };
    }
)(App);