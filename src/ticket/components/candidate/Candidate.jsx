import React  from 'react';
import PropTypes from 'prop-types';
import './Candidate.css';

function Seat(props) {
    const {
        type,
        priceMsg
    } = props;

    return(
        <li>
            <div className="bar">
                <span className="seat">{type}</span>
                <span className="price">
                    <i>￥</i>
                    {priceMsg}
                </span>
                <span className="btn">预定</span>
                <span className="num">5张</span>
            </div>
            <div className="channels">
                
            </div>
        </li>
    )
}

Seat.propTypes = {
   type: PropTypes.string.isRequired,
   priceMsg: PropTypes.string.isRequired,
}

function Candidate() {
    const tickets = [
        {
            id:0,
            priceMsg: "443.5",
            ticketsLeft: "有票",
            type: "yi等座",
        },
        {
            id:1,
            priceMsg: "443.5",
            ticketsLeft: "有票",
            type: "二等座",
        },
        {
            id:2,
            priceMsg: "443.5",
            ticketsLeft: "有票",
            type: "s等座",
        }
    ]

    return (
        <div className="candidate">
            <ul>
                {tickets.map((ticket, index) => {
                    return (
                        <Seat 
                            idx={index}
                            {...ticket}
                            key={ticket.type}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default Candidate;