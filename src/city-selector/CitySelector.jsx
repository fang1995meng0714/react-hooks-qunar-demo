import React, {useState, useEffect, memo } from 'react';
import axios from "axios";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./CitySelector.css";

const CityItem = memo(function CityItem(props) {
    const {name} = props;
    return (
        <li className="city-li">
            {name || ""}
        </li>
    )
})
CityItem.propTypes = {
    name: PropTypes.string.isRequired
}

const CitySection = memo(function CitySection(props) {
    const {title, citys} = props
    return (
        <ul className="city-ul">
            <li className="city-li">{title}</li>
            {citys.map(item => {
                return (
                    <CityItem
                        key={item.name}
                        name={item.name}
                    />
                )
            })}
        </ul>
    )
})

CitySection.propTypes = {
    citys: PropTypes.array,
    title: PropTypes.string.isRequired
}

const AlphaIndex = memo(function AlphaIndex(props) {
    const {alpha} = props;
    return (
        <i className="city-index-item">{alpha}</i>
    )
})

const alphabet = Array.from(new Array(26), (ele, index) => {
    return String.fromCharCode(65 + index)
})

const CityList = memo(function CityList(props) {
    const {sections} = props;
    console.log(sections)
    return (
        <div className="city-list">
            <div className="city-cate">
                {sections.map(section => {
                    return (
                        <CitySection 
                            key={section.title}
                            citys={section.citys || []}
                            title={section.title}
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
                        />
                    );
                })}
            </div>
        </div>
    )
})
CityList.propTypes = {
    sections:PropTypes.array.isRequired,
}

const CitySelector = memo(function CitySelector(props) {
    const {show} = props
    const [cityData, setCityData] = useState(null)
    useEffect(() => {
        axios.get("/rest/cities")
            .then((res) => {
                const cityData = res.data.data;
                // console.log(cityData)
                setCityData(cityData)
            })
    }, [])

    const outputCitySections = () => {
        if(cityData) {
            return (
                <CityList 
                    sections={cityData.cityList}
                />
            ) 
        }
        
        return <div>error</div>;
    }
    return (
        <div className={classnames("city-selector" , {hidden: !show})}>
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
            {outputCitySections()}
        </div>
    )
})

export default CitySelector;