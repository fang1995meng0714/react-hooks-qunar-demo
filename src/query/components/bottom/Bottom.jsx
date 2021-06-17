import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {ORDER_DEPART} from "./../../store/actions";
import './Bottom.css';

function Bottom(props) {
    const {
            toggleOrderType, 
            toggleHighSpeed,
            orderType, 
            highSpeed
        } = props;

    return (
        <div className="bottom">
            <div className="bottom-filters">
                <span 
                    className="item" 
                    onClick={toggleOrderType}
                >
                    <i className="icon">&#xf065;</i>
                    {orderType === ORDER_DEPART ? '出发 早→晚' : '耗时 短→长'}
                </span>
                <span 
                    className={classnames("item", {'item-on': highSpeed})}
                    onClick={toggleHighSpeed}
                >
                    <i className="icon">{highSpeed ? '\uf43f' : '\uf43e'}</i>
                        只看高铁动车
                </span>
                <span className="item">
                    <i className="icon">&#xf43d;</i>
                    只看有票
                </span>
                <span className="item">
                    <i className="icon">&#xf0f7;</i>
                    综合筛选
                </span>
            </div>
        </div>
    )
}

export default Bottom;
Bottom.propTypes = {
    toggleOrderType: PropTypes.func.isRequired, 
    orderType: PropTypes.number.isRequired, 
    highSpeed: PropTypes.bool.isRequired
}