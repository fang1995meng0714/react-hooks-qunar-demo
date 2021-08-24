import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import classnames from 'classnames';
import leftPad from 'left-pad';
import './Schedule.css';
import "../../../mock/mocker";
import axios from 'axios';

function ScheduleRow(props) {
    const {
        index,
        station,
        arriveTime,
        departTime,
        stay,

        isStartStation,
        isEndStation,
        isDepartStation,
        isArriveStation,
        beforeDepartStation,
        afterArriveStation,
    } = props;

    return (
        <li>
            <div
                className={classnames('icon', {
                    'icon-red': isDepartStation || isArriveStation,
                })}
            >
                {isDepartStation
                    ? '出'
                    : isArriveStation
                    ? '到'
                    : leftPad(index, 2, 0)}
            </div>
            <div
                className={classnames('row', {
                    grey: beforeDepartStation || afterArriveStation,
                })}
            >
                <span
                    className={classnames('station', {
                        red: isArriveStation || isDepartStation,
                    })}
                >
                    {station}
                </span>
                <span
                    className={classnames('arrtime', {
                        red: isArriveStation,
                    })}
                >
                    {isStartStation ? '始发站' : arriveTime}
                </span>
                <span
                    className={classnames('deptime', {
                        red: isDepartStation,
                    })}
                >
                    {isEndStation ? '终到站' : departTime}
                </span>
                <span className="stoptime">
                    {isStartStation || isEndStation ? '-' : stay + '分'}
                </span>
            </div>
        </li>
        
    )
}

ScheduleRow.propTypes = {};

function Schedule(props) {
    const { date, trainNumber, departStation, arriveStation } = props;

    const [scheduleList, setScheduleList] = useState([]);

    useEffect(() => {
        const obj = {
            trainNumber,
            departStation,
            arriveStation,
            date
        }

        axios.post("/rest/schedule", JSON.stringify(obj))
        .then((res) => {
            const data = res.data;
            let departRow;
            let arriveRow;
            for (let i = 0; i < data.length; ++i) {
                if (!departRow) {
                    if (data[i].station === departStation) {
                        departRow = Object.assign(data[i], {
                            beforeDepartStation: false,
                            isDepartStation: true,
                            afterArriveStation: false,
                            isArriveStation: false,
                        });
                    } else {
                        Object.assign(data[i], {
                            beforeDepartStation: true,
                            isDepartStation: false,
                            afterArriveStation: false,
                            isArriveStation: false,
                        });
                    }
                } else if (!arriveRow) {
                    if (data[i].station === arriveStation) {
                        arriveRow = Object.assign(data[i], {
                            beforeDepartStation: false,
                            isDepartStation: false,
                            afterArriveStation: false,
                            isArriveStation: true,
                        });
                    } else {
                        Object.assign(data[i], {
                            beforeDepartStation: false,
                            isDepartStation: false,
                            afterArriveStation: false,
                            isArriveStation: false,
                        });
                    }
                } else {
                    Object.assign(data[i], {
                        beforeDepartStation: false,
                        isDepartStation: false,
                        afterArriveStation: true,
                        isArriveStation: false,
                    });
                }

                Object.assign(data[i], {
                    isStartStation: i === 0,
                    isEndStation: i === data.length - 1,
                });
            }
            setScheduleList(data)
            
        })
        .catch(function (error) {
            console.log(error);
          });
    }, [date, trainNumber, departStation, arriveStation])

    return (
        <div className="schedule">
            <div className="dialog">
                <h1>列车时刻表</h1>
                <div className="head">
                    <span className="station">车站</span>
                    <span className="deptime">到达</span>
                    <span className="arrtime">发车</span>
                    <span className="stoptime">停留时间</span>
                </div>
                <ul>
                    {
                        scheduleList.map((schedule, index) => {
                            return (
                                <ScheduleRow 
                                    key={schedule.station}
                                    index={index + 1}
                                    {...schedule}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

Schedule.propTypes = {
    date: PropTypes.number,
    trainNumber: PropTypes.string,
    departStation: PropTypes.string,
    arriveStation: PropTypes.string,
};

export default Schedule;