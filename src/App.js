import React, {useState, useEffect } from 'react';
import DepartDate from './depart-date/DepartDate';
import Header from './header/Header';
import HighSpeed from './high-speed/HighSpeed';
import Journey from './journey/Journey';
import Submit from './submit/Submit';
import axios from 'axios'
import "./mock/mocker";

function App() {
  useEffect(() => {
  	//get请求
    axios.get('/rest/cities').then(res => {
        console.log(res.data)
    })
  }, [])

  const onBack=()=> {
    console.log(23423)
  }
  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack}></Header>
      </div>
      <form className="form" action="">
        <Journey></Journey>
        <DepartDate></DepartDate>
        <HighSpeed></HighSpeed>
        <Submit></Submit>
      </form>
    </div>
  )
}


export default App;
