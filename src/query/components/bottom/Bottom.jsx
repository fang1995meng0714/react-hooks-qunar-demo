import React, {memo} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {ORDER_DEPART} from "./../../store/actions";
import './Bottom.css';
import { useReducer } from 'react';

const Filter = memo(function Filter(props) {
    const {name, checked, value, dispatch} = props;

    return (
        <li 
            className={classnames({checked})}
            onClick={() => dispatch({value: value, type: 'toggle'})}
        >
            {name}
        </li>
    )
})

Filter.propTypes = {
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
}

const Option = memo(function Option (props) {
    const {title, options, checkedMap, dispatch} = props
    return (
        <div className="option">
            <h3>{title}</h3>
            <ul>
                {
                    options.map(option => {
                        return (
                            <Filter 
                                key={option.value}
                                {...option}
                                checked={option.value in checkedMap}
                                dispatch={dispatch}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
})

Option.propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    checkedMap: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
};

function checkedReducer(state, action) {
    const {type, value} = action;
    let newState;

    switch(type) {
        case "toggle":
            newState = {...state};
            if(value in newState) {
                delete newState[value]
            } else {
                newState[value] = true
            }
            return newState;
        case 'reset':
            return {};
        default:
    }

    return state;
}

function BottomModal(props) {
    const {
        ticketTypes, 
        trainTypes,
        checkedTicketTypes
    } = props;

    const [
        localCheckedTicketTypes,
        loaclCheckedTicketTypesDispatch
    ] = useReducer(checkedReducer, checkedTicketTypes, checkedTicketTypes => {
        return {
            ...checkedTicketTypes
        }
    })

    const optionGroup = [
        {
            title: "坐席类型",
            options: ticketTypes,
            checkedMap: localCheckedTicketTypes,
            dispatch: loaclCheckedTicketTypesDispatch
        },
        {
            title: "车次类型",
            options: trainTypes,
            checkedMap: localCheckedTicketTypes,
            dispatch: loaclCheckedTicketTypesDispatch
        },
        {
            title: "出发车站",
            options: ticketTypes,
            checkedMap: localCheckedTicketTypes,
            dispatch: loaclCheckedTicketTypesDispatch
        },
        {
            title: "到达车站",
            options: ticketTypes,
            checkedMap: localCheckedTicketTypes,
            dispatch: loaclCheckedTicketTypesDispatch
        }
    ]
    return (
        <div className="bottom-modal">
            <div className="bottom-dialog">
                <div className="bottom-dialog-content">
                    <div className="title">
                        <span>
                            重置
                        </span>
                        <span>
                            确定
                        </span>
                    </div>
                    <div className="options">
                        {
                            optionGroup.map(option => (
                                <Option 
                                    key={option.title}
                                    {...option}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

BottomModal.propTypes = {
    ticketTypes: PropTypes.array.isRequired,
    trainTypes: PropTypes.array.isRequired,
}

function Bottom(props) {
    const {
            toggleOrderType, 
            toggleHighSpeed,
            toggleOnlyTickets,
            orderType, 
            highSpeed,
            onlyTickets,
            ticketTypes,
            trainTypes
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
                <span
                    className={classnames('item', { 'item-on': onlyTickets })}
                    onClick={toggleOnlyTickets}
                >
                    <i className="icon">{onlyTickets ? '\uf43d' : '\uf43c'}</i>
                    只看有票
                </span>
                <span className="item">
                    <i className="icon">&#xf0f7;</i>
                    综合筛选
                </span>
            </div>
            <BottomModal 
                ticketTypes={ticketTypes}
                trainTypes={trainTypes}
            />
        </div>
    )
}

export default Bottom;
Bottom.propTypes = {
    toggleOrderType: PropTypes.func.isRequired,
    toggleHighSpeed: PropTypes.func.isRequired,
    toggleOnlyTickets: PropTypes.func.isRequired,
    orderType: PropTypes.number.isRequired, 
    highSpeed: PropTypes.bool.isRequired,
    onlyTickets: PropTypes.bool.isRequired,

    ticketTypes: PropTypes.array.isRequired,
    trainTypes: PropTypes.array.isRequired,
    checkedTicketTypes: PropTypes.object.isRequired,
    setCheckedTicketTypes: PropTypes.func.isRequired,
}