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

function App(props) {
  const {from, to, isCitySelectorVisible} = props;

  const onBack=()=> {
    console.log(23423)
  }
  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack}></Header>
      </div>
      <form className="form" action="">
        <Journey from={from} to={to} />
        <DepartDate />
        <HighSpeed />
        <Submit />
      </form>
      <CitySelector 
        show={isCitySelectorVisible}
      />
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
)(App)
