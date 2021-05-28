import React from 'react';
import switchImg from '../imgs/switch.svg';
import PropTypes from 'prop-types';
import './Journey.css';

export default function Journey(props) {
    console.log(props)
    const {from, to, showCitySelector, changeFromTo} = props
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
            <div className="journey-switch" onClick={changeFromTo}>
                <img src={switchImg} width="70" height="40" alt="switch" />
            </div>
            <div className="journey-station">
                <input type="text" 
                    readOnly name="to" 
                    value={to}
                    onClick={() => showCitySelector(false)}
                    className="journey-input journey-to"
                />
            </div>
        </div>
    )
}
Journey.propTypes = {
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    showCitySelector: PropTypes.func,
    changeFromTo: PropTypes.func,
}