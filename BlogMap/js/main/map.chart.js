if (typeof DCI == "undefined") { var DCI = {}; }
DCI.chart = {
    map: null,
    chartLayer: null,
    data: [
          { code: 1, male: 25, female: 12, name: "人口比例图", x: 121.639, y: 39.563 },
          { code: 2, male: 14, female: 45, name: "人口比例图", x: 121.891, y: 39.229 },
          { code: 3, male: 88, female: 55, name: "人口比例图", x: 122.211, y: 39.813 },
          { code: 4, male: 45, female: 23, name: "人口比例图", x: 122.614, y: 39.652 },
          { code: 5, male: 8, female: 66, name: "人口比例图", x: 123.144, y: 39.865 }
    ],
    //echarts统计图表模拟数据
    jsonBarData: [
                     { GDP1: 13414, GDP2: 32684, GDP3: 235687, GDP4: 236598, GDP5: 86549, UNIT: "万元", x: 121.988, y: 39.094 },
                     { GDP1: 34514, GDP2: 52684, GDP3: 135687, GDP4: 96598, GDP5: 106549, UNIT: "万元", x: 121.844, y: 39.481 },
                     { GDP1: 789014, GDP2: 42684, GDP3: 335687, GDP4: 86598, GDP5: 96549, UNIT: "万元", x: 122.191, y: 39.533 },
                     { GDP1: 56414, GDP2: 122684, GDP3: 435687, GDP4: 136598, GDP5: 116549, UNIT: "万元", x: 122.476, y: 39.445 },
                     { GDP1: 23414, GDP2: 92684, GDP3: 535687, GDP4: 436598, GDP5: 76549, UNIT: "万元", x: 122.651, y: 39.979 }
    ],
    jsonPieData: [
              { GDP1: 89414, GDP2: 82684, GDP3: 635687, GDP4: 536598, GDP5: 66549, UNIT: "万元", x: 121.639, y: 39.563 },
              { GDP1: 111414, GDP2: 62684, GDP3: 735687, GDP4: 636598, GDP5: 126549, UNIT: "万元", x: 121.891, y: 39.229 },
              { GDP1: 23614, GDP2: 72684, GDP3: 835687, GDP4: 736598, GDP5: 136549, UNIT: "万元", x: 122.211, y: 39.813 },
              { GDP1: 93414, GDP2: 132684, GDP3: 935687, GDP4: 126598, GDP5: 146549, UNIT: "万元", x: 122.614, y: 39.652 },
              { GDP1: 63414, GDP2: 222684, GDP3: 145687, GDP4: 116598, GDP5: 156549, UNIT: "万元", x: 123.144, y: 39.865 }
    ],
    //模块初始化函数
    Init: function (map) {
        DCI.chart.map = map;
        //监听check点击事件
        //$("[name = chartlayer]:checkbox").bind("click", function () {
        //    //if ($(this).attr("checked")) {
        //	  if ($("input[type='checkbox']").is(':checked')) {
        //        if (DCI.chart.map.getLayer("chart")) {
        //            DCI.cluster.map.getLayer("chart").show();
        //        } else {
        //            DCI.chart.chartLayer = new MapChart.MapChartGraphicLayer({
        //                id: "chart",
        //                chartDiv: "map",
        //                displayOnPan: false
        //            });
        //            DCI.chart.map.addLayer(DCI.chart.chartLayer);
        //            for (var i = 0, dl = DCI.chart.data.length; i < dl; i++) {
        //                var series = [DCI.chart.data[i].male, DCI.chart.data[i].female];
        //                var chartGraphic = new MapChart.MapChartGraphic({
        //                    map: DCI.chart.map,
        //                    id: DCI.chart.data[i].code,
        //                    attribute: DCI.chart.data[i],
        //                    type: "Pie",
        //                    series: series,
        //                    sr: new esri.SpatialReference(4326)
        //                });
        //                DCI.chart.chartLayer.add(chartGraphic);
        //            }

        //        }
        //    }
        //    else {
        //        if (DCI.cluster.map.getLayer("chart"))
        //            DCI.cluster.map.getLayer("chart").hide();
        //    }
        //})
        //监听check点击事件
        $("#chartLayer input").bind("click", function () {
            if (this.checked) {
                switch (this.id) {
                    case "chartlayer1":
                        //删掉echarts统计图
                        $(".myInfoWindow").remove();
                        //显示arcgis统计图
                        DCI.chart.loadChartArcGisMap();
                        break;
                    case "chartlayer2":
                        //隐藏arcgis统计图
                        if (DCI.cluster.map.getLayer("chart"))
                            DCI.cluster.map.getLayer("chart").hide();
                        //添加echarts统计图
                        DCI.chart.loadChartBarOnMap(DCI.chart.map, 150, 180);//柱状图
                        DCI.chart.loadChartPieOnMap(DCI.chart.map, 300, 180);//饼状图
                        break;
                    default:
                        break;
                }
            }
            else {
            }
        })

    },
    loadChartArcGisMap: function () {
                if (DCI.chart.map.getLayer("chart")) {
                    DCI.cluster.map.getLayer("chart").show();
                } else {
                    DCI.chart.chartLayer = new MapChart.MapChartGraphicLayer({
                        id: "chart",
                        chartDiv: "map",
                        displayOnPan: false
                    });
                    DCI.chart.map.addLayer(DCI.chart.chartLayer);
                    for (var i = 0, dl = DCI.chart.data.length; i < dl; i++) {
                        var series = [DCI.chart.data[i].male, DCI.chart.data[i].female];
                        var chartGraphic = new MapChart.MapChartGraphic({
                            map: DCI.chart.map,
                            id: DCI.chart.data[i].code,
                            attribute: DCI.chart.data[i],
                            type: "Pie",
                            series: series,
                            sr: new esri.SpatialReference(4326)
                        });
                        DCI.chart.chartLayer.add(chartGraphic);
                    }

                }     
    },
    loadChartBarOnMap: function (map, width, height) {
        require([
                 "esri/geometry/Point",
                 //添加自定义类型的引用
                 "CustomModules/ChartInfoWindow",
                 "dojo/_base/array",
                 "dojo/dom-construct",
                 "dojo/_base/window",
                 "dojo/domReady!"
        ], function (
                     Point, ChartInfoWindow, array, domConstruct, win
             ) {

            for (var i = 0; i < DCI.chart.jsonBarData.length; i++) {
                var chartData = null;
                chartData = [];
                var nodeChart = null;
                nodeChart = domConstruct.create("div", { id: "nodeTestBar" + i, style: "width:" + width + "px;height:" + height + "px;" }, win.body());
                var myChart = echarts.init(document.getElementById("nodeTestBar" + i));

                //柱状图
                var option = {
                    tooltip: {
                        show: true
                    },
                    /*legend: {
                        data:[]
                    },*/
                    grid: {
                        /*x1:'1%',
                        x2:'1%',
                        y1:'1%',
                        y2:'3%',*/
                        x: '40%',
                        x2: '1%',
                        y: '10%',
                        y2: '1%',
                        borderWidth: '0'//网格边框

                    },
                    xAxis: [
                        {
                            type: 'category',
                            splitLine: { show: false, },//网格线
                            data: ["13年", "14年", "15年", "16年", "17年"],
                            axisLabel: {//颜色字体
                                show: true,
                                //rotate:30,
                                textStyle: {
                                    color: 'rgba(0,0,0,0.6)'
                                }
                            },
                            axisTick: {//x轴刻度
                                show: false
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            splitLine: { show: false, },//网格线
                            name: '(万元)',
                            axisLabel: {//颜色字体
                                show: true,
                                textStyle: {
                                    color: 'rgba(0,0,0,0.6)'
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            "name": "生产总值",
                            "type": "bar",
                            "barWidth": 8,
                            //itemStyle: {normal: {color: '#2466c9'}},//设置颜色
                            "data": [DCI.chart.jsonBarData[i].GDP1,
                                    DCI.chart.jsonBarData[i].GDP2,
                                    DCI.chart.jsonBarData[i].GDP3,
                                    DCI.chart.jsonBarData[i].GDP4,
                                    DCI.chart.jsonBarData[i].GDP5]
                        }
                    ]
                };

                // 为echarts对象加载数据
                myChart.setOption(option);
                var chartPoint = null;
                //var point = esri.geometry.webMercatorUtils.lngLatToXY(DCI.chart.jsonBarData[i].x, DCI.chart.jsonBarData[i].y);
                chartPoint = new Point(DCI.chart.jsonBarData[i].x, DCI.chart.jsonBarData[i].y, MapConfig.mapInitParams.spatialReference);
                var chartInfo = new ChartInfoWindow({
                    map: map,
                    chart: nodeChart,
                    chartPoint: chartPoint,
                    width: width+30,
                    height: height+25
                });
            }

        });
    },
    loadChartPieOnMap: function (map, width, height) {
        require([
                 "esri/geometry/Point",
                 //添加自定义类型的引用
                 "CustomModules/ChartInfoWindow",
                 "dojo/_base/array",
                 "dojo/dom-construct",
                 "dojo/_base/window",
                 "dojo/domReady!"
        ], function (
                     Point, ChartInfoWindow, array, domConstruct, win
             ) {

            for (var i = 0; i < DCI.chart.jsonPieData.length; i++) {
                var chartData = null;
                chartData = [];
                var nodeChart = null;
                nodeChart = domConstruct.create("div", { id: "nodeTestPie" + i, style: "width:" + width + "px;height:" + height + "px;" }, win.body());
                var myChart = echarts.init(document.getElementById("nodeTestPie" + i));

                //饼状图
                option = {
                    /*title : {
//	                            text: '某站点用户访问来源',
//	                            subtext: '纯属虚构',
//	                            x:'center'
                    },*/
                    tooltip: {
                        trigger: 'item',
                        z: 999,
                        formatter: "{a}(万元) <br/>{b} : {c} ({d}%)"
                    },
                    /*legend: {
//	                            orient : 'vertical',
//	                            x : 'left',
                        data:[]
                    },*/
                    /*toolbox: {
                        show : false,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            magicType : {
                                show: true,
                                type: ['pie', 'funnel'],
                                option: {
                                    funnel: {
                                        x: '25%',
                                        width: '50%',
                                        funnelAlign: 'left',
                                        max: 1548
                                    }
                                }
                            },
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },*/
                    calculable: false,
                    series: [
                        {
                            name: "生产总值",
                            type: "pie",
                            radius: "30%",
                            center: ["50%", "60%"],
                            data: [
                                { value: DCI.chart.jsonBarData[i].GDP1, name: "13年" },
                                { value: DCI.chart.jsonBarData[i].GDP2, name: "14年" },
                                { value: DCI.chart.jsonBarData[i].GDP3, name: "15年" },
                                { value: DCI.chart.jsonBarData[i].GDP4, name: "16年" },
                                { value: DCI.chart.jsonBarData[i].GDP5, name: "17年" }
                            ]
                        }
                    ]
                };
                // 为echarts对象加载数据
                myChart.setOption(option);
                var chartPoint = null;
                //var point = esri.geometry.webMercatorUtils.lngLatToXY(DCI.chart.jsonPieData[i].x, DCI.chart.jsonPieData[i].y);
                chartPoint = new Point(DCI.chart.jsonPieData[i].x, DCI.chart.jsonPieData[i].y, MapConfig.mapInitParams.spatialReference);
                var chartInfo = new ChartInfoWindow({
                    map: map,
                    chart: nodeChart,
                    chartPoint: chartPoint,
                    width: width+5,
                    height: height+25
                });
            }

        });
    },



}