import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Bottom.css';

function Bottom() {
    return (
        <div className="bottom">
            <div className="bottom-filters">
                <span className="item">
                    <i className="icon">&#xf065;</i>
                    出发 早→晚
                </span>
                <span className="item">
                    <i className="icon">&#xf43f;</i>
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