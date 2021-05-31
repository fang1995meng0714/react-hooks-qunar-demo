import React from 'react';
import './DateSelector.css';
import Header from './../header/Header';
import dayjs from 'dayjs';

function Month(props) {
    const {startingTimeInMonth} = props;

    const startDay = new Date(startingTimeInMonth);
    const currentDay = new Date(startingTimeInMonth);

    let days = [];

    while(startDay.getMonth() === currentDay.getMonth()) {
        days.push(currentDay.getTime());
        currentDay.setDate(currentDay.getDate() + 1);
    }

    days = new Array(startDay.getDay() ? (startDay.getDay() - 1) : 6)
        .fill(null)
        .concat(days);

    const lastDay = new Date(days[days.length - 1]);

    days = days.concat(
        new Array(lastDay.getDay() ?  7 - lastDay.getDay() : 0).fill(null)
    )
    
    var weeks = [];
    
    for (let row = 0; row < days.length / 7; row++) {
        let week = days.slice(row * 7, (row + 1) * 7);
        weeks.push(week)
    }

    return (
        <table className="date-table">
            <thead>
                <tr>
                    <td className="colSpan">
                        <h5>{startDay.getFullYear()}年{startDay.getMonth() + 1}月</h5>
                    </td>
                </tr>
            </thead>
        </table>
    )
}

export default function DateSelector() {
    const now = new Date();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    now.setDate(1);

    const monthSequence = [now.getTime()];
    
    now.setMonth(now.getMonth() + 1);
    monthSequence.push(now.getTime());

    now.setMonth(now.getMonth() + 1);
    monthSequence.push(now.getTime());

    return (
        <div className="date-selector">
            <Header title="日期选择" />
            <div className="date-selector-tables">
                {
                    monthSequence.map(month => {
                        return (
                            <Month 
                                key={month}
                                startingTimeInMonth={month}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}