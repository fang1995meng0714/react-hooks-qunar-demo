import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classnames from "classnames";
import './HighSpeed.css';

export default function HighSpeed(props) {
    return (
        <div className="high-speed">
            <div className="hith-speed-label">只看高铁/动车</div>
            <div className="high-speed-switch">
                <input type="hidden" name="highSpeed" />
                <div className={classnames("high-speed-track", {
                    checked: true
                })}>
                    <span
                        className={classnames('high-speed-handle', {
                            checked: false,
                        })}
                    />
                </div>
            </div>
        </div>
    )
}