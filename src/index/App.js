import React, { useEffect, useMemo, useCallback } from 'react';
import { connect } from "react-redux";
import DepartDate from './components/depart-date/DepartDate.jsx';
import Header from '../compoonents/header/Header';
import HighSpeed from './components/high-speed/HighSpeed';
import Journey from './components/journey/Journey';
import Submit from './components/submit/Submit';
import CitySelector from "../compoonents/city-selector/CitySelector";
import DateSelector from '../compoonents/date-selector/DateSelector';

import "../mock/mocker";
import { bindActionCreators } from 'redux';
import {showCitySelectorAction, 
        hideCitySelectorAction, 
        setSelectedCityAction, 
        changeFromToAction, 
        fetchCityDataAction,
        showDateSelectorAction,
        hideDateSelectorAction,
        setDepartDateAction,
        setHighSpeedAction
      } from "./store/actions"
import {store} from "./store/store";

function App(props) {
  const {from, to, 
        isCitySelectorVisible, 
        setSelectedCity, 
        hideCitySelector, 
        cityData,
        dispatch,
        departDate,
        isDateSelectorVisible,
        showDateSelector,
        hideDateSelector,
        setDepartDate,
        highSpeed,
        setHighSpeed
      } = props;

  const cbs = useMemo(() => {
    return bindActionCreators(
      {
        showCitySelector: showCitySelectorAction,
        changeFromTo:changeFromToAction
      }, dispatch);
  }, [])

  useEffect(() => {
    const action = fetchCityDataAction();
      
    store.dispatch(action); 
  }, [])

  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack}></Header>
      </div>
      <form className="form" action="">
        <Journey from={from} to={to} {...cbs}/>
        <DepartDate time={departDate} showCitySelector={showDateSelector}/>
        <HighSpeed highSpeed={highSpeed} toggle={setHighSpeed}/>
        <Submit />
      </form>
      <CitySelector 
        show={isCitySelectorVisible}
        back={hideCitySelector}
        cityData={cityData}
        setSelectedCity={setSelectedCity}
      />
      <DateSelector 
        show={isDateSelectorVisible}
        onBack={hideDateSelector}
        setDepartDate={setDepartDate}
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
      // showCitySelector changeFromTo  使用bindActionCreators处理
      hideCitySelector(val) {
        const action = hideCitySelectorAction();
        dispatch(action)
      },
      setSelectedCity(val) {
        const action = setSelectedCityAction(val);
        dispatch(action);
      },
      dispatch,
      showDateSelector(val) {
        const action = showDateSelectorAction(val);
        dispatch(action);
      },
      hideDateSelector(val) {
        const action = hideDateSelectorAction(val);
        dispatch(action);
      },
      setDepartDate(val) {
        const action = setDepartDateAction(val);
        dispatch(action);
      },
      setHighSpeed(val) {
        const action = setHighSpeedAction(val);
        dispatch(action);
      }
    }
  }
)(App)
