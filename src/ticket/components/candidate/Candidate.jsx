import React, { memo, useState, useCallback, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import './Candidate.css';
import { TrainContext } from '../../context';

function Channel(props) {
    const {name, desc, type} = props;
    const {
        trainNumber,
        departStation,
        arriveStation,
        departDate,
    } = useContext(TrainContext);
    const src = useMemo(() => {
        let src = `order.html?trainNumber=${trainNumber}&dStation=${departStation}&aStation=${arriveStation}&type=${type}&date=${dayjs(departDate).format('YYYY-MM-DD')}`;
        return src;
    }, [type, trainNumber, departStation, arriveStation, departDate])

    return (
        <div className="channel">
            <div className="middle">
                <div className="name">{name}</div>
                <div className="desc">{desc}</div>
            </div>
            <a href={src} className="buy-wrapper">
                <div className="buy">买票</div>
            </a>
        </div>
    )
}

Channel.propTypes = {
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

function Seat(props) {
    const {
        type,
        priceMsg,
        expanded,
        onToggle,
        idx,
        ticketsLeft,
        channels
    } = props;
    console.log(props)
    return(
        <li>
            <div className="bar" onClick={() => onToggle(idx)}>
                <span className="seat">{type}</span>
                <span className="price">
                    <i>￥</i>
                    {priceMsg}
                </span>
                <span className="btn">{expanded ? "预定" : "收起"}</span>
                <span className="num">{ticketsLeft}</span>
            </div>
            <div 
                className="channels"
                style={{height: expanded ? channels.length * 55 + "px" : 0}}
            >
                {
                    channels.map(channel => {
                        return (
                            <Channel key={channel.name} {...channel} type={type}/>
                        )
                    })
                }
            </div>
        </li>
    )
}

Seat.propTypes = {
   type: PropTypes.string.isRequired,
   priceMsg: PropTypes.string.isRequired,
}

function Candidate(props) {
    const {tickets} = props;

    const [expandedIndex, setExpandedIndex] = useState(-1);

    const onToggle = useCallback(
        idx => {
            setExpandedIndex(idx === expandedIndex ? -1 : idx)
        },
        [expandedIndex]
    );

    return (
        <div className="candidate">
            <ul>
                {tickets.map((ticket, index) => {
                    return (
                        <Seat 
                            idx={index}
                            {...ticket}
                            expanded={expandedIndex === index}
                            onToggle={onToggle}
                            key={ticket.type}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default Candidate;