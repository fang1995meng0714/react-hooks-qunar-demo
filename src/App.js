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
import {showCitySelectorAction, hideCitySelectorAction, setSelectedCityAction, changeFromToAction, fetchCityDataAction} from "./store/actions"
import {store} from "./store/store"

function App(props) {
  const {from, to, isCitySelectorVisible, showCitySelector, setSelectedCity, hideCitySelector, changeFromTo} = props;
  console.log(props)

  useEffect(() => {
    // axios.get("/rest/cities")
    //     .then((res) => {
    //         const cityData = res.data.data;
    //         console.log(cityData)
    //     })
    const action = fetchCityDataAction;
    store.dispatch(action); 
  }, [])

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
        // fetchCityData={fetchCityData ||{}}
      />
    </div>
  )
}


export default connect(
  function mapStateToProps(state) {
    console.log(state);
    return state;
  },
  function mapDispatchToProps(dispatch) {
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
      }
    }
  }
)(App)
