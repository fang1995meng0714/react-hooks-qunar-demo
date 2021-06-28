import React, {useCallback}  from 'react';
import Header from "./../components/header/Header";
import './App.css';

function App() {
    const onBack = useCallback(() => {
        window.history.back();
    })

    return (
        <div className="app">
            <div className="header-wrapper">
                <Header title="432" onBack={onBack}/>
            </div>
        </div>
    )
}

export default App;