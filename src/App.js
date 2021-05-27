import React, {useState, useEffect } from 'react';
import DepartDate from './depart-date/DepartDate';
import Header from './header/Header';
import HighSpeed from './high-speed/HighSpeed';
import Journey from './journey/Journey';
import Submit from './submit/Submit';
import { connect } from "react-redux";
import axios from 'axios';
import CitySelector from "./city-selector/CitySelector";
import "./mock/mocker";
import {showCitySelectorAction, hideCitySelectorAction, setSelectedCityAction, changeFromToAction} from "./store/actions"

function App(props) {
  const {from, to, isCitySelectorVisible, showCitySelector, setSelectedCity, hideCitySelector, changeFromTo} = props;
  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票"></Header>
      </div>
      <form className="form" action="">
        <Journey from={from} to={to} showCitySelector={showCitySelector} changeFromTo={changeFromTo}/>
        <DepartDate />
        <HighSpeed />
        <Submit />
      </form>
      <CitySelector 
        show={isCitySelectorVisible}
        back={hideCitySelector}
        setSelectedCity={setSelectedCity}
      />
    </div>
  )
}


export default connect(
  function mapStateToProps(state) {
    console.log(state);
    return state;
  },
  function mapDispatchToProps(dispatch, ownProps) {
    return {
      showCitySelector(val) {
        const action = showCitySelectorAction(val);
        dispatch(action)
      },
      hideCitySelector(val) {
        const action = hideCitySelectorAction();
        dispatch(action)
      },
      setSelectedCity(val) {
        const action = setSelectedCityAction(val);
        dispatch(action);
      },
      changeFromTo() {
        const action = changeFromToAction();
        dispatch(action);
      },
    }
  }
)(App)
