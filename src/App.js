import React from 'react';
import DepartDate from './depart-date/DepartDate';
import Header from './header/Header';
import HighSpeed from './high-speed/HighSpeed';
import Journey from './journey/Journey';

function App() {

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
      </form>
    </div>
  )
}


export default App;
