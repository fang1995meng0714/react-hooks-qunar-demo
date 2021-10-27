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
    setDepartTimeStr,
    setPrice
} from "./store/actions";
import axios from 'axios';
import Ticket from './components/ticket/Ticket';


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
        durationStr,
        price
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
    },[])

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
        axios.post(url, JSON.stringify(obj)).then(res => {
            const {
                departTimeStr,
                arriveTimeStr,
                arriveDate,
                durationStr,
                price,
            } = res.data;
            
            dispatch(setDepartTimeStr(departTimeStr));
            dispatch(setArriveTimeStr(arriveTimeStr));
            dispatch(setArriveDate(arriveDate));
            dispatch(setDurationStr(durationStr));
            dispatch(setPrice(price));
        })
    }, [departStation, arriveStation, seatType, departDate])

    return (
        <div className="app">
            <div className="header-wrapper">
                <Header title="订单填写" onBack={onBack} />
            </div>
            <div className="detail-wrapper">
                <Detail 
                     departDate={departDate}
                     arriveDate={arriveDate}
                     departTimeStr={departTimeStr}
                     arriveTimeStr={arriveTimeStr}
                     trainNumber={trainNumber}
                     departStation={departStation}
                     arriveStation={arriveStation}
                     durationStr={durationStr}
                >
                    <span
                        style={{ display: 'block' }}
                        className="train-icon"
                    ></span>
                </Detail>
                <Ticket price={price} type={seatType}></Ticket>
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