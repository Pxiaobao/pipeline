var move_option = {
    color: ['gold', 'aqua', 'lime'],
    /*title: {
        text: '百度迁徙图ArcGIS JS API版',
        subtext: '-- Develop By WanderGIS',
        x: 'center',
        textStyle: {
            color: '#fff'
        }
    },*/
    tooltip: {
        trigger: 'item',
        formatter: '{b}'
    },
    /*legend: {
        orient: 'vertical',
        x: 'left',
        data: ['北京 Top10', '上海 Top10', '广州 Top10'],
        selectedMode: 'single',
        selected: {
            '上海 Top10': false,
            '广州 Top10': false
        },
        textStyle: {
            color: '#fff'
        }
    },*/
    /*toolbox: {
        show: true,
        orient: 'vertical',
        x: 'right',
        y: 'center',
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },*/
    dataRange: {
        show:false,
        min: 0,
        max: 100,
        calculable: true,
        color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
        textStyle: {
            color: '#fff'
        }
    },
    series: [
        {
            name: '大连市',
            type: 'map',
            roam: true,
            hoverable: false,
            mapType: 'none',
            itemStyle: {
                normal: {
                    borderColor: 'rgba(100,149,237,1)',
                    borderWidth: 0.5,
                    areaStyle: {
                        color: '#1b1b1b'
                    }
                }
            },
            data: [],
            markLine: {
                smooth: true,
                symbol: ['none', 'circle'],
                symbolSize: 1,
                itemStyle: {
                    normal: {
                        color: '#fff',
                        borderWidth: 1,
                        borderColor: 'rgba(30,144,255,0.5)'
                    }
                },
                data: [
                    [{ name: '大连基地' }, { name: '到达#1' }],
                    [{ name: '大连基地' }, { name: '到达#2' }],
                    [{ name: '大连基地' }, { name: '到达#3' }],
                    [{ name: '大连基地' }, { name: '到达#4' }],
                    [{ name: '大连基地' }, { name: '到达#5' }],
                    [{ name: '大连基地' }, { name: '到达#6' }],
                    [{ name: '大连基地' }, { name: '到达#7' }],
                    [{ name: '大连基地' }, { name: '到达#8' }],
                    [{ name: '大连基地' }, { name: '到达#9' }],
                    [{ name: '大连基地' }, { name: '到达#10' }],
                    [{ name: '大连基地' }, { name: '到达#11' }],
                    [{ name: '大连基地' }, { name: '到达#12' }],
                    [{ name: '大连基地' }, { name: '到达#13' }],
                    [{ name: '大连基地' }, { name: '到达#14' }],
                    [{ name: '大连基地' }, { name: '到达#15' }],
                    [{ name: '大连基地' }, { name: '到达#16' }],
                    [{ name: '大连基地' }, { name: '到达#17' }],
                    [{ name: '大连基地' }, { name: '到达#18' }],
                    [{ name: '大连基地' }, { name: '到达#19' }],
                    [{ name: '大连基地' }, { name: '到达#20' }]
                ],
            },
            geoCoord: {
                '大连基地': [121.931, 31.703],
                '到达#1': [121.563, 31.582],
                '到达#2': [121.579, 31.411],
                '到达#3': [121.715, 31.401],
                '到达#4': [121.746, 31.278],
                '到达#5': [121.613, 31.027],
                '到达#6': [121.768, 31.066],
                '到达#7': [121.921, 31.414],
                '到达#8': [121.941, 31.089],
                '到达#9': [121.088, 31.206],
                '到达#10': [121.214, 31.342],
                '到达#11': [121.979, 31.357],
                '到达#12': [121.091, 31.541],
                '到达#13': [121.31, 31.421],
                '到达#14': [121.649, 31.534],
                '到达#15': [121.955, 31.652],
                '到达#16': [121.512, 31.691],
                '到达#17': [121.183, 31.622],
                '到达#18': [121.288, 31.803],
                '到达#19': [121.119, 31.911],
                '到达#20': [121.133, 31.629]
            }
        },
        {
            name: '大连市 Top10',
            type: 'map',
            mapType: 'none',
            data: [],
            markLine: {
                smooth: true,
                effect: {
                    show: true,
                    scaleSize: 1,
                    period: 30,
                    color: '#fff',
                    shadowBlur: 10
                },
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        lineStyle: {
                            type: 'solid',
                            shadowBlur: 10
                        }
                    }
                },
                data: [
                    [{ name: '大连基地' }, { name: '到达#1', value: 95 }],
                    [{ name: '大连基地' }, { name: '到达#2', value: 90 }],
                    [{ name: '大连基地' }, { name: '到达#3', value: 80 }],
                    [{ name: '大连基地' }, { name: '到达#14', value: 70 }],
                    [{ name: '大连基地' }, { name: '到达#5', value: 60 }],
                    [{ name: '大连基地' }, { name: '到达#16', value: 50 }],
                    [{ name: '大连基地' }, { name: '到达#7', value: 40 }],
                    [{ name: '大连基地' }, { name: '到达#18', value: 30 }],
                    [{ name: '大连基地' }, { name: '到达#9', value: 20 }],
                    [{ name: '大连基地' }, { name: '到达#20', value: 10 }]
                ]
            },
            markPoint: {
                symbol: 'emptyCircle',
                symbolSize: function (v) {
                    return 10 + v / 10
                },
                effect: {
                    show: true,
                    shadowBlur: 0
                },
                itemStyle: {
                    normal: {
                        label: { show: false }
                    },
                    emphasis: {
                        label: { position: 'top' }
                    }
                },
                data: [
                    { name: '到达#1', value: 95 },
                    { name: '到达#2', value: 90 },
                    { name: '到达#3', value: 80 },
                    { name: '到达#14', value: 70 },
                    { name: '到达#5', value: 60 },
                    { name: '到达#16', value: 50 },
                    { name: '到达#7', value: 40 },
                    { name: '到达#18', value: 30 },
                    { name: '到达#9', value: 20 },
                    { name: '到达#20', value: 10 }
                ]
            }
        }
    ]
};