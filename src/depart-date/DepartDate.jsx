import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import './DepartDate.css';

export default function DepartDate(props) {
    return (
        <div className="depart-date">
            <input type="hidden" name="date" value={"2021-05-21"}/>
            {'2021-05-21'}<span className="depart-week">{"周五(今天)"}</span>
        </div>
    )
}