import React, { useEffect, useMemo } from 'react';
import DepartDate from './depart-date/DepartDate';
import Header from './header/Header';
import HighSpeed from './high-speed/HighSpeed';
import Journey from './journey/Journey';
import Submit from './submit/Submit';
import { connect } from "react-redux";
import CitySelector from "./city-selector/CitySelector";
import "./mock/mocker";
import { bindActionCreators } from 'redux';
import {showCitySelectorAction, hideCitySelectorAction, setSelectedCityAction, changeFromToAction, fetchCityDataAction} from "./store/actions"
import {store} from "./store/store";

function App(props) {
  const {from, to, 
        isCitySelectorVisible, 
        setSelectedCity, 
        hideCitySelector, 
        cityData,
        dispatch,
        departDate
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

  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票"></Header>
      </div>
      <form className="form" action="">
        <Journey from={from} to={to} {...cbs}/>
        <DepartDate time={departDate}/>
        <HighSpeed />
        <Submit />
      </form>
      <CitySelector 
        show={isCitySelectorVisible}
        back={hideCitySelector}
        cityData={cityData}
        setSelectedCity={setSelectedCity}
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
      dispatch
    }
  }
)(App)
