import React, { useCallback, useEffect } from 'react';
import Header from '../compoonents/header/Header';
import Nav from '../compoonents/nav/Nav';
import axios from 'axios';
import "../mock/mocker";

function App(props) {
    const onBack = useCallback(() => {
        window.history.back();
    }, []);

    useEffect(() => {
        axios.get("/rest/query")
        .then((res) => {
            console.log(res)
        })
    }, [])

    return (
        <div>
            <div className="header-wrapper">
                <Header title={`北京 ⇀ 上海`} onBack={onBack}/>
            </div>
            <Nav></Nav>
        </div>
    )
}

export default App;