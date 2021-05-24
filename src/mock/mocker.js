const Mock = require('mockjs')
const dayjs = require('dayjs');

module.exports = Mock.mock('/rest/cities', 'get', (options) => {
    const ret = Mock.mock(require('./rest/cities.json'))
    return {
        status:200,
        data:ret
    }
})

module.exports = Mock.mock('/rest/search', 'POST', (options) => {
    return {
        status:200,
    }
})

module.exports = Mock.mock('/rest/search', 'GET', (options) => {
    const { key } = options.query;
    return options.json({
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
        searchKey: key,
    });
})

module.exports = Mock.mock('/rest/query', 'GET', (options) => {
    const response = require('./rest/query.json');

    response.dataMap.directTrainInfo.trains = response.dataMap.directTrainInfo.trains.reverse();

    return options.json(response);
})

module.exports = Mock.mock('/rest/ticket', 'GET', (options) => {
    const { date } = options.query;

        return options.json({
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
        });
})

module.exports = Mock.mock('/rest/schedule', 'GET', (options) => {
    return options.json([{
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
    }]);
})

module.exports = Mock.mock('/rest/order', 'GET', (options) => {
    const { date } = options.query;
        
        return options.json({
            departTimeStr: '07:15',
            arriveTimeStr: '11:47',
            arriveDate: dayjs(date).valueOf(),
            durationStr: '4小时32分',
            price: 483.5,
        });
})

module.exports = {
    // 'POST /rest/search'(req, res) {
    //     return res.json({
    //         code: 0
    //     })
    // },

    // 'GET /rest/search'(req, res) {
    //     const { key } = req.query;
    //     return res.json({
    //         result: [{
    //             key: '芜湖',
    //             display: '芜湖'
    //         }, {
    //             key: '井冈山',
    //             display: '井冈山',
    //         }, {
    //             key: '铁岭',
    //             display: '铁岭',
    //         }],
    //         searchKey: key,
    //     });
    // },
    // 'GET /rest/query'(req, res) {
    //     const response = require('./rest/query.json');

    //     response.dataMap.directTrainInfo.trains = response.dataMap.directTrainInfo.trains.reverse();

    //     return res.json(response);
    // },
    // 'GET /rest/ticket'(req, res) {
    //     const { date } = req.query;

    //     return res.json({
    //         detail: {
    //             departTimeStr: '07:15',
    //             arriveTimeStr: '11:47',
    //             arriveDate: dayjs(date).valueOf(),
    //             durationStr: '4小时32分'
    //         },
    //         candidates: [{
    //             type: '二等座',
    //             priceMsg: '443.5',
    //             ticketsLeft: '有票',
    //             channels: [{
    //                 name: '快速预订',
    //                 desc: '含40元出行保障 快速出票 迅捷无忧'
    //             }, {
    //                 name: '普通预订',
    //                 desc: '出票较慢，高峰期需要排队'
    //             }]
    //         }, {
    //             type: '一等座',
    //             priceMsg: '748.5',
    //             ticketsLeft: '有票',
    //             channels: [{
    //                 name: '快速预订',
    //                 desc: '含40元出行保障 快速出票 迅捷无忧'
    //             }, {
    //                 name: '普通预订',
    //                 desc: '出票较慢，高峰期需要排队'
    //             }]
    //         }, {
    //             type: '商务座',
    //             priceMsg: '1403.5',
    //             ticketsLeft: '5张',
    //             channels: [{
    //                 name: '快速预订',
    //                 desc: '含40元出行保障 快速出票 迅捷无忧'
    //             }, {
    //                 name: '普通预订',
    //                 desc: '出票较慢，高峰期需要排队'
    //             }]
    //         }]
    //     });
    // },
    // 'GET /rest/schedule'(req, res) {
    //     return res.json([{
    //         station: '北京南',
    //         arriveTime: null,
    //         departTime: '07:20',
    //         stay: null,
    //     }, {
    //         station: '天津南',
    //         arriveTime: '07:54',
    //         departTime: '07:56',
    //         stay: 2,
    //     }, {
    //         station: '南京南',
    //         arriveTime: '11:51',
    //         departTime: '11:53',
    //         stay: 2,
    //     }, {
    //         station: '上海虹桥',
    //         arriveTime: '13:08',
    //         departTime: null,
    //         stay: null,
    //     }]);
    // },
    // 'GET /rest/order'(req, res) {
    //     const { date } = req.query;
        
    //     return res.json({
    //         departTimeStr: '07:15',
    //         arriveTimeStr: '11:47',
    //         arriveDate: dayjs(date).valueOf(),
    //         durationStr: '4小时32分',
    //         price: 483.5,
    //     });
    // }
};