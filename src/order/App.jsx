import React, {useCallback}  from 'react';
import Header from "./../components/header/Header";
import Detail from '../components/detail/Detail.jsx';
import './App.css';
import { connect } from 'react-redux';
import URI from 'urijs';

function App(props) {
    const {
        trainNumber
    } = props;
    console.log(trainNumber);

    const onBack = useCallback(() => {
        window.history.back();
    }, []);


    return (
        <div className="app">
            <div className="header-wrapper">
                <Header title="订单填写" onBack={onBack} />
            </div>
            <div>
                <Detail />
            </div>
        </div>
    )
}

export default connect(
    function mapStateToProps(state) {
        return state;
    },
    function mapDispatchToProps(dispatch) {
        return { dispatch };
    }
)(App);