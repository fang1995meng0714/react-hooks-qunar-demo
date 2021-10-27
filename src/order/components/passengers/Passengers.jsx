import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import './Passengers.css';

function Passenger(props) {
    const {
        id,
        name,
        onUpdate,
        licenceNo,
        birthday
    } = props;

    return (
        <li className="passenger">
            <i className="delete">
                -
            </i>
            <ol className="items">
                <li className="item">
                    <label className="label name">姓名</label>
                    <input 
                        type="text"
                        className="input name"
                        placeholder="乘客姓名"
                        value={name}
                        onChange={e => onUpdate(id, { name: e.target.value })}
                    />
                    <label 
                        className="ticket-type"
                    >
                        成人票
                    </label>
                </li>
                <li className="item">
                    <label className="label licenceNo">身份证</label>
                    <input
                        type="text"
                        className="input licenceNo"
                        placeholder="证件号码"
                        value={licenceNo}
                        onChange={e =>
                            onUpdate(id, { licenceNo: e.target.value })
                        }
                    />
                </li>
                <li className="item arrow">
                    <label className="label gender">性别</label>
                    <input
                        type="text"
                        className="input gender"
                        placeholder="请选择"
                        // onClick={() => showGenderMenu(id)}
                        // value={
                        //     gender === 'male'
                        //         ? '男'
                        //         : gender === 'female'
                        //         ? '女'
                        //         : ''
                        // }
                        readOnly
                    />
                </li>
                <li className="item">
                    <label className="label birthday">出生日期</label>
                    <input
                        type="text"
                        className="input birthday"
                        placeholder="如 19951015"
                        value={birthday}
                        onChange={e =>
                            onUpdate(id, { birthday: e.target.value })
                        }
                    />
                </li>
                <li className="item arrow">
                    <label className="label followAdult">同行成人</label>
                    <input
                        type="text"
                        className="input followAdult"
                        placeholder="请选择"
                        // value={followAdultName}
                        // onClick={() => showFollowAdultMenu(id)}
                        readOnly
                    />
                </li>
            </ol>
        </li>
    )
}

function Passengers(props) {
    const {
        passengers,
        createAdult,
        createChild,
        updatePassenger
    } = props;

    const nameMap = useMemo(() => {
        const ret = {};
        for(const passenger of passengers) {
            ret[passenger.id] = passenger.name;
        }
        return ret;
    }, [passengers]);

    return (
        <div className="passengers">
            <ul>
                {
                    console.log(passengers)
                }
                {
                    passengers.map(passenger => {
                        return (
                            <Passenger
                                {...passenger}
                                key={passenger.id}
                                followAdultName={nameMap[passenger.followAdult]}
                                onUpdate={updatePassenger}
                            />
                        )
                    })
                }
            </ul>
            <section className="add">
                <div className="adult" onClick={createAdult}>
                    添加成人
                </div>
                <div className="child" onClick={createChild}>
                    添加儿童
                </div>
            </section>
        </div>
    )
}

Passengers.propTypes = {
    passengers: PropTypes.array.isRequired,
    createAdult: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
}

export default Passengers