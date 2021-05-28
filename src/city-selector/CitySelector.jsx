import React, {useState, useEffect, memo, useCallback } from 'react';
import axios from "axios";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./CitySelector.css";
import {store} from "../store/store";

const CityItem = memo(function CityItem(props) {
    const {name, setSelectedCity} = props;
    return (
        <li className="city-li" onClick={() => setSelectedCity(name)}>{name || ""}</li>
    )
})
CityItem.propTypes = {
    name: PropTypes.string.isRequired,
    setSelectedCity: PropTypes.func.isRequired,
}

const CitySection = memo(function CitySection(props) {
    const {title, citys, setSelectedCity} = props;
    return (
        <ul className="city-ul" data-cate={title}>
            <li className="city-li">{title}</li>
            {citys.map(item => {
                return (
                    <CityItem
                        key={item.name}
                        name={item.name}
                        setSelectedCity={setSelectedCity}
                    />
                )
            })}
        </ul>
    )
})

CitySection.propTypes = {
    citys: PropTypes.array,
    title: PropTypes.string.isRequired,
    setSelectedCity: PropTypes.func.isRequired,
}

const AlphaIndex = memo(function AlphaIndex(props) {
    const {alpha, toAlpha} = props;
    return (
        <i className="city-index-item" onClick={() => toAlpha(alpha)}>{alpha}</i>
    )
})

AlphaIndex.propTypes = {
    alpha: PropTypes.string.isRequired,
    toAlpha: PropTypes.func.isRequired,
}


const alphabet = Array.from(new Array(26), (ele, index) => {
    return String.fromCharCode(65 + index)
})

const CityList = memo(function CityList(props) {
    const {sections, setSelectedCity, toAlpha} = props;

    return (
        <div className="city-list">
            <div className="city-cate">
                {sections.map(section => {
                    return (
                        <CitySection 
                            key={section.title}
                            citys={section.citys || []}
                            title={section.title}
                            setSelectedCity={setSelectedCity}
                        />
                    )
                })}
            </div>
            <div className="city-index">
                {alphabet.map(alpha => {
                    return (
                        <AlphaIndex
                            key={alpha}
                            alpha={alpha}
                            toAlpha={toAlpha}
                        />
                    );
                })}
            </div>
        </div>
    )
})
CityList.propTypes = {
    sections:PropTypes.array.isRequired,
    setSelectedCity:PropTypes.func.isRequired,
    toAlpha: PropTypes.func.isRequired,
}

const CitySelector = memo(function CitySelector(props) {
    const {show, back, setSelectedCity, cityData} = props;
    const [searchKey, setSearchKey] = useState("");
    
     
    const toAlpha = useCallback(alpha => {
        document.querySelector(`[data-cate='${alpha}']`).scrollIntoView();
    }, []) 

    const outputCitySections = () => {
        if(cityData) {
            return (
                <CityList 
                    sections={cityData.cityList}
                    setSelectedCity={setSelectedCity}
                    toAlpha={toAlpha}
                />
            ) 
        }
        
        return <div>error</div>;
    }
    return (
        <div className={classnames("city-selector" , {hidden: !show})}>
            <div className="city-serch">
                <div className="search-back" onClick={() => back()}>
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
                    <input 
                        type="text" 
                        className="search-input" 
                        placeholder="城市、车站的中文或拼音"
                        onChange={e => setSearchKey(e.target.value)}
                    />
                </div>
            </div>
            {outputCitySections()}
        </div>
    )
})
CitySelector.propTypes = {
    show: PropTypes.bool.isRequired,
    back: PropTypes.func.isRequired,
    setSelectedCity: PropTypes.func.isRequired,
    fetchCityData: PropTypes.func.isRequired,
}

export default CitySelector;