import React, {useCallback}  from 'react';
import Header from "./../components/header/Header";
import Detail from '../components/detail/Detail.jsx';
import './App.css';
import Candidate from './components/candidate/Candidate';

function App() {
    const onBack = useCallback(() => {
        window.history.back();
    })

    return (
        <div className="app">
            <div className="header-wrapper">
                <Header title="432" onBack={onBack}/>
            </div>
            <div className="nav-wrapper">
                232424
            </div>
            <div className="detail-wrapper">
                <Detail 
                />
            </div>
            <Candidate />
        </div>
    )
}

export default App;