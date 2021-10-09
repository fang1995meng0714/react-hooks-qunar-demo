import React, {useCallback, useEffect}  from 'react';
import Header from "./../components/header/Header";
import Detail from '../components/detail/Detail.jsx';
import './App.css';
import Candidate from './components/candidate/Candidate';
import Schedule from './components/schedule/Schedule';
import axios from 'axios';
import "../mock/mocker";
import { connect } from 'react-redux';
import dayjs from 'dayjs';
import URI from 'urijs';
import { 
    setArriveDate, 
    setDepartDate, 
    setTrainNumber, 
    setArriveStation, 
    setDepartStation, 
    setDepartTimeStr,
    setArriveTimeStr,
    setDurationStr,
    setTickets,
    toggleIsScheduleVisible
} from './store/actions';
import { h0 } from '../common/fp';
import { bindActionCreators } from 'redux';
import { TrainContext } from './context';

function App(props) {
    const {
        departDate,
        trainNumber,
        arriveDate,
        departTimeStr,
        arriveTimeStr,
        departStation,
        arriveStation,
        durationStr,
        isScheduleVisible,
        tickets,
        dispatch
    } = props


    const onBack = useCallback(() => {
        window.history.back();
    })

    useEffect(() => {
        const queries = URI.parseQuery(window.location.search);
        const { aStation, dStation, date, trainNumber } = queries;

        dispatch(setArriveStation(aStation));
        dispatch(setDepartStation(dStation));
        dispatch(setTrainNumber(trainNumber));
        dispatch(setDepartDate(h0(dayjs(date).valueOf())));
    }, [])

    useEffect(() => {
        document.title = trainNumber;
    }, [trainNumber])

    useEffect(() => {  
        let obj= {
            date:  dayjs(departDate).format('YYYY-MM-DD'),
            trainNumber
        }

        axios.post("/rest/ticket", JSON.stringify(obj))
        .then((res) => {
            const data = res.data;
            console.log(data);
            const { detail, candidates } = data;
            const {
                departTimeStr,
                arriveTimeStr,
                arriveDate,
                durationStr,
            } = detail;

            dispatch(setDepartTimeStr(departTimeStr));
            dispatch(setArriveTimeStr(arriveTimeStr));
            dispatch(setArriveDate(arriveDate));
            dispatch(setDurationStr(durationStr));
            dispatch(setTickets(candidates));
        })
    }, [departDate, trainNumber])

    const detailCbs = bindActionCreators(
        {
            toggleIsScheduleVisible
        },
        dispatch
    )

    return (
        <div className="app">
            <div className="header-wrapper">
                <Header title={trainNumber} onBack={onBack}/>
            </div>
            <div className="nav-wrapper">
                232424
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
                    <span className="left"></span>
                    <span
                        className="schedule"
                        onClick={() => detailCbs.toggleIsScheduleVisible()}
                    >
                        时刻表
                    </span>
                    <span className="right"></span>
                </Detail>
            </div>
            <TrainContext.Provider
                value={{
                    trainNumber,
                    departStation,
                    arriveStation,
                    departDate,
                }}
            >
                <Candidate tickets={tickets} />
            </TrainContext.Provider>
            {isScheduleVisible && 
                <div 
                    className="mask"
                    onClick={() => dispatch(toggleIsScheduleVisible())}
                >
                    <Schedule
                        date={departDate}
                        trainNumber={trainNumber}
                        departStation={departStation}
                        arriveStation={arriveStation}
                    />
                </div>
            }
        </div>
    )
}

export default connect(
    function mapStateToProps(state) {
        return state;
    },
    function mapDispatchToProps(dispatch) {
        return {dispatch};
    }
)(App);