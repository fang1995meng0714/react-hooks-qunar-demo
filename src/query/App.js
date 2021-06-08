import React, { useCallback, useEffect, useState } from 'react';
import Header from '../compoonents/header/Header';
import Nav from '../compoonents/nav/Nav';
import axios from 'axios';
import "../mock/mocker";
import List from './compoonents/list/List';
import Bottom from './compoonents/bottom/Bottom';

function App(props) {
    const [trainList, setTrainList] = useState([]);
    const onBack = useCallback(() => {
        window.history.back();
    }, []);

    useEffect(() => {
        axios.get("/rest/query")
        .then((res) => {
            let response = res.data.data.dataMap;
            let trains = response.directTrainInfo.trains;
            setTrainList(trains)
        })
    }, [])
    return (
        <div>
            <div className="header-wrapper">
                <Header title={`北京 ⇀ 上海`} onBack={onBack}/>
            </div>
            <Nav />
            <List list={trainList}/>
            <Bottom />
        </div>
    )
}

export default App;