if (typeof DCI == "undefined") { var DCI = {}; }
DCI.thematicmap = {
    /**
     * 界面设计
    */
    Html:
        "<div>" +           
            '<input id="start" type="date"  value="2018-05-19" />'+           
            '<datalist id="times">'+
                '<option value="00:00"><option value="00:15"><option value="00:30"><option value="00:45">'+
                '<option value="01:00"><option value="01:15"><option value="01:30"><option value="01:45">'+
                '<option value="02:00"><option value="02:15"><option value="02:30"><option value="02:45">'+
                '<option value="03:00"><option value="03:15"><option value="03:30"><option value="03:45">'+
                '<option value="04:00"><option value="04:15"><option value="04:30"><option value="04:45">'+
                '<option value="05:00"><option value="05:15"><option value="05:30"><option value="05:45">'+
                '<option value="06:00"><option value="06:15"><option value="06:30"><option value="06:45">'+
                '<option value="07:00"><option value="07:15"><option value="07:30"><option value="07:45">'+
                '<option value="08:00"><option value="08:15"><option value="08:30"><option value="08:45">'+
                '<option value="09:00"><option value="09:15"><option value="09:30"><option value="09:45">'+
                '<option value="10:00"><option value="10:15"><option value="10:30"><option value="10:45">'+
                '<option value="11:00"><option value="11:15"><option value="11:30"><option value="11:45">'+
                '<option value="12:00"><option value="12:15"><option value="12:30"><option value="12:45">'+
                '<option value="13:00"><option value="13:15"><option value="13:30"><option value="13:45">'+
                '<option value="14:00"><option value="14:15"><option value="14:30"><option value="14:45">'+
                '<option value="15:00"><option value="15:15"><option value="15:30"><option value="15:45">'+
                '<option value="16:00"><option value="16:15"><option value="16:30"><option value="16:45">'+
                '<option value="17:00"><option value="17:15"><option value="17:30"><option value="17:45">'+
                '<option value="18:00"><option value="18:15"><option value="18:30"><option value="18:45">'+
                '<option value="19:00"><option value="19:15"><option value="19:30"><option value="19:45">'+
                '<option value="20:00"><option value="20:15"><option value="20:30"><option value="20:45">'+
                '<option value="21:00"><option value="21:15"><option value="21:30"><option value="21:45">'+
                '<option value="22:00"><option value="22:15"><option value="22:30"><option value="22:45">'+
                '<option value="23:00"><option value="23:15"><option value="23:30"><option value="23:45">'+
            '</datalist>'+
        '</div>'+
        "<div>" +
            "<!--input type='button' class='route_star' id='route1'-->" +
            '<input id="hour" list="times"  style="margin:2px;width: 65px;height: 26px"/>'+
            '<span>--</span>'+
            "<!--input type='button' class='route_end' id='route2'-->" +
            '<input id="hour2" list="times"  style="margin:2px;width: 65px;height: 26px"/>'+
        '</div>'+
        "<div id='thematicmapDIV'style='height:98%;'>" +
          //热力图
        "<div style='height:25px;background:#30A4D5;margin-top:2px;width: 98%;margin-left: 3px;'>" +
              "<span style='margin-left:5px;font-size: 13px;color:white;'>热力图</span>" +
        "</div>" +
        '<div id="heatmapFeatureLayer" style="padding:5px;">' +
             '<div style="float:left;">' +
             '<input type="radio" name="heatmapFeatureLayer"  id="heatmap1" style="width: 15px;height: 15px;vertical-align: middle;margin: auto;"/>' +
             '<label style="font-weight: normal;vertical-align: middle;margin: auto;">热点图1</label>' +
             '</div>' +
             '<div style="float:left;">' +
             '<input type="radio" name="heatmapFeatureLayer"  id="heatmap2" style="width: 15px;height: 15px;vertical-align: middle;margin: auto;"/>' +
             '<label style="font-weight: normal;vertical-align: middle;margin: auto;">热点图2</label>' +
             '</div>' +
        '</div>' +
        
        //管道流向图
         "<div style='height:25px;background:#30A4D5;margin-top:10px;width: 98%;margin-left: 3px;float: left;'>" +
              "<span style='margin-left:5px;font-size: 13px;color:white;'>燃气流向图</span>" +
         "</div>" +
        '<div id="flowLayer" style="padding:5px;float: left;">' +
             '<input type="checkbox" name="flowLayer" id="flowLayer1" value="0"  style="width: 15px;height: 15px;vertical-align: middle;margin: auto;"/>' +
             '<label style="font-weight: normal;vertical-align: middle;margin: auto;">燃气流向图</label>' +
        '</div>' +
        //拥堵图
        "<div style='height:25px;background:#30A4D5;margin-top:10px;width: 98%;margin-left: 3px;float: left;'>" +
            "<span style='margin-left:5px;font-size: 13px;color:white;'>管道压力图</span>" +
       "</div>" +
       '<div id="testLayer" style="padding:5px;float: left;">' +
           '<input type="checkbox" name="testLayer" id="testLayer1" value="0"  style="width: 15px;height: 15px;vertical-align: middle;margin: auto;"/>' +
           '<label style="font-weight: normal;vertical-align: middle;margin: auto;">管道压力图</label>' +
        '</div>' +        
        //插值图
         "<div style='height:25px;background:#30A4D5;margin-top:10px;width: 98%;margin-left: 3px;float: left;'>" +
              "<span style='margin-left:5px;font-size: 13px;color:white;'>节点压力插值图</span>" +
         "</div>" +
        '<div id="interpolateLayer" style="padding:5px;float: left;">' +
             '<input type="checkbox" name="interpolatelayer" id="interploatelayer1" value="0"  style="width: 15px;height: 15px;vertical-align: middle;margin: auto;"/>' +
             '<label style="font-weight: normal;vertical-align: middle;margin: auto;">节点压力插值图</label>' +
        '</div>' +

         //预测明日压力
         "<div style='height:25px;background:#30A4D5;margin-top:10px;width: 98%;margin-left: 3px;float: left;'>" +
              "<span style='margin-left:5px;font-size: 13px;color:white;'>预测压力</span>" +
         "</div>" +
        '<div id="predictLayer" style="padding:5px;float: left;">' +
             '<input type="checkbox" name="predictlayer" id="predictlayer1"  style="width: 15px;height: 15px;vertical-align: middle;margin: auto;"/>' +
             '<label style="font-weight: normal;vertical-align: middle;margin: auto;">预测压力</label>' +
        '</div>' +

        '<button class="btn btn-default btn-xs" id="clearAllMap"  style="margin-right: 15px;height: 25px;float: right;clear: both;">重置</button>'+

        "</div>",
    /**
     * 全局变量
    */
    sign: 0,//
    
    //模块初始化函数
    Init: function (map) {
        //滚动条样式
        $("#thematicmapDIV").mCustomScrollbar({
            theme: "minimal-dark",
        });
        $("#clearAllMap").bind("click", function () {
            DCI.thematicmap.InitState(map);
        });
        //dl加载聚合效果图
        //DCI.cluster.Init(map);
        //加载管道流向图
        DCI.flow.Init(map);
        //加载热力图
        DCI.heatmap.Init(map);
        //加载插值图,压力图
        DCI.interPolate.Init(map);
        //dl加载统计图
        //DCI.chart.Init(map);
        //迁徙图
        DCI.predict.Init(map);
    },
    InitState: function (map) {
        //热力图
        if (DCI.heatmap.heatLayer1) {
            DCI.heatmap.heatLayer1.hide();
        }
        if (DCI.heatmap.heatLayer2) {
            DCI.heatmap.heatLayer2.hide();
        }
        $("[name = heatmapFeatureLayer]:radio").attr("checked", false);
       /*dl  //统计图
        if (DCI.cluster.map.getLayer("chart"))
            DCI.cluster.map.getLayer("chart").hide();
        //删掉echarts统计图
        $(".myInfoWindow").remove();
        $("[name = chartlayer]:radio").attr("checked", false);
        //dl聚合图
        if (DCI.cluster.map.getLayer("clusters"))
            DCI.cluster.map.getLayer("clusters").hide();
        $("[name = clusterlayer]:checkbox").attr("checked", false); */
        //流向图
        $("[name = flowlayer]:checkbox").attr("checked", false);
        $("#moveecharts_Map").remove();
        //插值图
        //$("[name = interpolatelayer]:checkbox").attr("checked", false);
        //$("#inter_Map").remove(); 
        $("[name = testlayer]:checkbox").attr("checked", false);
      
        //预测压力
        $("[name = predictlayer]:checkbox").attr("checked", false);
        //$("#moveecharts_Map").remove(); 
    },
        /**
     * 框选查询
     * 点 线 面 拉框 视野内
    */
    extentQuery: function (type) {
        DCI.SpatialQuery.map.setMapCursor("crosshair");
        DCI.thematicmap.InitState(map);
        switch (type) {
            case "point"://点
                DCI.SpatialQuery.drawtool.activate(esri.toolbars.Draw.POINT);
                break;
            case "polyline"://线
                DCI.SpatialQuery.drawtool.activate(esri.toolbars.Draw.POLYLINE);
                break;
            case "polygon"://面
                DCI.thematicmap.sign = 1;
                DCI.SpatialQuery.drawtool.activate(esri.toolbars.Draw.POLYGON);
                break;
            case "rectangle"://拉框
                DCI.thematicmap.sign = 1;
                DCI.SpatialQuery.drawtool.activate(esri.toolbars.Draw.EXTENT);
                break;
        }
    },


}