const Mock = require('mockjs')
const dayjs = require('dayjs');

module.exports = Mock.mock('/rest/cities', 'get', (options) => {
    const ret = Mock.mock(require('./rest/cities.json'))
    return {
        status:200,
        data:ret
    }
})

module.exports = Mock.mock('/rest/search', 'post', (options) => {
    return {
        result: [{
            key: '芜湖',
            display: '芜湖'
        }, {
            key: '井冈山',
            display: '井冈山',
        }, {
            key: '铁岭',
            display: '铁岭',
        }],
    }
})

let o = 1;
module.exports = Mock.mock('/rest/query', 'post', (options) => {
    let response = Mock.mock(require('./rest/query.json'));
    o++;
    if(o % 2=== 0) {
        response.dataMap.directTrainInfo.trains = response.dataMap.directTrainInfo.trains.reverse();
    }
    
    return {
        status:200,
        data:response
    } 
})
module.exports = Mock.mock('/rest/ticket', 'post', (options) => {
    const body = JSON.parse(options.body);
    const {date} = body;

    const json = {
        detail: {
            departTimeStr: '07:15',
            arriveTimeStr: '11:47',
            arriveDate: dayjs(date).valueOf(),
            durationStr: '4小时32分'
        },
        candidates: [{
            type: '二等座',
            priceMsg: '443.5',
            ticketsLeft: '有票',
            channels: [{
                name: '快速预订',
                desc: '含40元出行保障 快速出票 迅捷无忧'
            }, {
                name: '普通预订',
                desc: '出票较慢，高峰期需要排队'
            }]
        }, {
            type: '一等座',
            priceMsg: '748.5',
            ticketsLeft: '有票',
            channels: [{
                name: '快速预订',
                desc: '含40元出行保障 快速出票 迅捷无忧'
            }, {
                name: '普通预订',
                desc: '出票较慢，高峰期需要排队'
            }]
        }, {
            type: '商务座',
            priceMsg: '1403.5',
            ticketsLeft: '5张',
            channels: [{
                name: '快速预订',
                desc: '含40元出行保障 快速出票 迅捷无忧'
            }, {
                name: '普通预订',
                desc: '出票较慢，高峰期需要排队'
            }]
        }]
    };

    return json
})

module.exports = Mock.mock('/rest/schedule', 'post', (options) => {
    const json = [{
        station: '北京南',
        arriveTime: null,
        departTime: '07:20',
        stay: null,
    }, {
        station: '天津南',
        arriveTime: '07:54',
        departTime: '07:56',
        stay: 2,
    }, {
        station: '南京南',
        arriveTime: '11:51',
        departTime: '11:53',
        stay: 2,
    }, {
        station: '上海虹桥',
        arriveTime: '13:08',
        departTime: null,
        stay: null,
    }];

    return json;
})

module.exports = Mock.mock('/rest/order', 'post', (options) => {
    const body = JSON.parse(options.body);
    const {date} = body;
        return {
            departTimeStr: '07:15',
            arriveTimeStr: '11:47',
            arriveDate: dayjs(date).valueOf(),
            durationStr: '4小时32分',
            price: 483.5,
        };
})
