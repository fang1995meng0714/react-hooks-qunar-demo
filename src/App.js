import React from 'react';
import Header from './header/Header';
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
      </form>
    </div>
  )
}


export default App;
