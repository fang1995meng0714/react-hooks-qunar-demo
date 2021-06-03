import React from 'react';
import PropTypes from 'prop-types';
import { h0 } from '../common/fp';
import dayjs from 'dayjs';
import './DepartDate.css';

export default function DepartDate(props) {
    const {time} = props;

    const h0OfDepart = h0(time);
    const departDate = new Date(h0OfDepart);
    const departDateString = dayjs(h0OfDepart).format("YYYY-MM-DD");
    const isToday = h0OfDepart === h0();
    const weekString =
        '周' +
        ['日', '一', '二', '三', '四', '五', '六'][departDate.getDay()] +
        (isToday ? '(今天)' : '');
    return (
        <div className="depart-date">
            <input type="hidden" name="date" value={departDateString}/>
            {departDateString}<span className="depart-week">{weekString}</span>
        </div>
    )
}

DepartDate.propTypes = {
    time: PropTypes.number.isRequired,
    // onClick: PropTypes.func.isRequired,
};