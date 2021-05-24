import React, {useState, useEffect } from 'react';
import "./CitySelector.css";

function CitySelector() {
    return (
        <div className="city-selector">
            <div className="city-serch">
                <div className="search-back">
                    <svg width="42" height="42">
                        <polyline 
                            points="25,13 16,21 25,29"
                            stroke="#fff"
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>
                </div>
                <div className="search-input-wrapper">
                <input type="text" className="search-input" placeholder="城市、车站的中文或拼音"/>
                </div>
            </div>
        </div>
    )
}

export default CitySelector;