import React, { useCallback, useEffect } from 'react';
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
    setDepartDate,
    toggleOrderType,
    setTrainList,
    setHighSpeed,
    toggleHighSpeed,
    toggleOnlyTickets,
    setTicketTypes,
    setTrainTypes,
    setCheckedTicketTypes,
    setDepartStations,
    setArriveStations,
    setCheckedTrainTypes,
    setCheckedDepartStations,
    setCheckedArriveStations,
    setDepartTimeStart,
    setDepartTimeEnd,
    setArriveTimeStart,
    setArriveTimeEnd,
    toggleIsFiltersVisible
} from "./store/actions";
import URI from 'urijs';
import { bindActionCreators } from 'redux';
import { h0 } from '../common/fp';
import dayjs from 'dayjs';
import useNav from "../costom-hooks/useNav";
import { useMemo } from 'react';

function App(props) {
    const {
        trainList, 
        from, 
        to,
        dispatch, 
        departDate, 
        orderType, 
        highSpeed,
        onlyTickets,
        ticketTypes,
        trainTypes,
        departStations,
        arriveStations,
        checkedTicketTypes,
        checkedTrainTypes,
        checkedDepartStations,
        checkedArriveStations,
        departTimeStart,
        departTimeEnd,
        arriveTimeStart,
        arriveTimeEnd,
        isFiltersVisible
    } = props;
    const onBack = useCallback(() => {
        window.history.back();
    }, []);

    const {isPrevDisabled, isNextDisabled} = useNav(
        departDate
    )

    useEffect(() => {
        const queries = URI.parseQuery(window.location.search);
        const {from, to, date, highSpeed} = queries;
        dispatch(setFrom(from));
        dispatch(setTo(to));
        dispatch(setHighSpeed(highSpeed === 'true'));
        dispatch(setDepartDate(h0(dayjs(date).valueOf())))
    }, [])

    useEffect(() => {
        const queryJson = {
            from: from,
            to: to,
            date: dayjs(departDate).format('YYYY-MM-DD'),
            highSpeed: highSpeed,
            orderType: orderType,
            onlyTickets: onlyTickets,
            checkedTicketTypes: Object.keys(checkedTicketTypes).join(),
            checkedTrainTypes:Object.keys(checkedTrainTypes).join(),
            checkedDepartStations:Object.keys(checkedDepartStations).join(),
            checkedArriveStations:Object.keys(checkedArriveStations).join(),
            departTimeStart,
            departTimeEnd,
            arriveTimeStart,
            arriveTimeEnd,
        };

        axios.post("/rest/query", JSON.stringify({queryJson}))
            .then((res) => {
                let result = res.data.data;
                const {
                    dataMap: {
                        directTrainInfo: {
                            trains,
                            filter: {
                                ticketType,
                                trainType,
                                depStation,
                                arrStation,
                            },
                        },
                    },
                } = result;
                dispatch(setTrainList(trains));
                dispatch(setTicketTypes(ticketType));
                dispatch(setTrainTypes(trainType));
                dispatch(setDepartStations(depStation))
                dispatch(setArriveStations(arrStation))
            })
    }, [
        from, 
        to,
        departDate,
        highSpeed,
        orderType,
        onlyTickets,
        checkedTicketTypes,
        checkedTrainTypes,
        checkedDepartStations,
        checkedArriveStations,
        departTimeStart,
        departTimeEnd,
        arriveTimeStart,
        arriveTimeEnd,
    ])

    const bottomCbs = useMemo(() => {
        return bindActionCreators({
            toggleOrderType,
            toggleHighSpeed,
            toggleOnlyTickets,
            setCheckedTicketTypes,
            setCheckedTrainTypes,
            setCheckedDepartStations,
            setCheckedArriveStations,
            setDepartTimeStart,
            setDepartTimeEnd,
            setArriveTimeStart,
            setArriveTimeEnd,
            toggleIsFiltersVisible
        },dispatch)
    }, [])

    return (
        <div>
            <div className="header-wrapper">
                <Header title={`${from} ⇀ ${to}`} onBack={onBack}/>
            </div>
            <Nav 
                date={departDate}
                isPrevDisabled={isPrevDisabled}
                isNextDisabled={isNextDisabled}
            />
            <List list={trainList}/>
            <Bottom 
                orderType={orderType}
                highSpeed={highSpeed}
                onlyTickets={onlyTickets}
                ticketTypes={ticketTypes}
                trainTypes={trainTypes}
                checkedTicketTypes={checkedTicketTypes}
                checkedTrainTypes={checkedTrainTypes}
                departStations={departStations}
                arriveStations={arriveStations}
                checkedDepartStations={checkedDepartStations}
                checkedArriveStations={checkedArriveStations}
                departTimeStart={departTimeStart}
                departTimeEnd={departTimeEnd}
                arriveTimeStart={arriveTimeStart}
                arriveTimeEnd={arriveTimeEnd}
                isFiltersVisible={isFiltersVisible}
                {...bottomCbs}
            />
        </div>
    )
}

export default connect(
    function mapStateToProps(state) {
        return state;
    },
    function mapDispatchToProps(dispatch) {
        return {
            dispatch,
        };
    }
)(App);