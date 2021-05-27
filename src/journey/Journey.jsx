import React from 'react';
import switchImg from '../imgs/switch.svg';
import './Journey.css';

export default function Journey(props) {
    const {from, to, showCitySelector} = props
    return(
        <div className="journey">
            <div className="journey-station">
                <input type="text" 
                    readOnly name="from" 
                    value={from}
                    onClick={() => showCitySelector(true)}
                    className="journey-input journey-from"
                />
            </div>
            <div className="journey-switch">
                <img src={switchImg} width="70" height="40" alt="switch" />
            </div>
            <div className="journey-station">
                <input type="text" 
                    readOnly name="to" 
                    value={to}
                    onClick={() => showCitySelector(true)}
                    className="journey-input journey-to"
                />
            </div>
        </div>
    )
}