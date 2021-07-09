
import React from "react";
import './Detail.css';

function Detail() {
    return (
        <div className="detail">
            <div className="content">
                <div className="left">
                    <p className="city">北京</p>
                    <p className="time">20:00</p>
                    <p className="date">2021</p>
                </div>
                <div className="middle">
                    <p className="train-name">D17</p>
                    <p className="train-mid">时刻</p>
                    <p className="train-time">耗时</p>
                </div>
                <div className="right">
                    <p className="city">北京</p>
                    <p className="time">20:00</p>
                    <p className="date">20</p>
                </div>
            </div>
        </div>
    )
}

export default Detail;