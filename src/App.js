import React, {useState, useEffect } from 'react';
import DepartDate from './depart-date/DepartDate';
import Header from './header/Header';
import HighSpeed from './high-speed/HighSpeed';
import Journey from './journey/Journey';
import Submit from './submit/Submit';
import { connect } from "react-redux";
import axios from 'axios';
import CitySelector from "./city-selector/CitySelector"
import "./mock/mocker";
import {showCitySelectorAction} from "./store/actions"

function App(props) {
  console.log(props)
  const {from, to, isCitySelectorVisible, showCitySelector} = props;

  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票"></Header>
      </div>
      <form className="form" action="">
        <Journey from={from} to={to} showCitySelector={showCitySelector}/>
        <DepartDate />
        <HighSpeed />
        <Submit />
      </form>
      <CitySelector 
        show={isCitySelectorVisible}
        back={showCitySelector}
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
      showCitySelector(val) {
        const action = showCitySelectorAction(val);
        dispatch(action)
      }
    }
  }
)(App)
