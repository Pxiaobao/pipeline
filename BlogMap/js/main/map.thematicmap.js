if (typeof DCI == "undefined") { var DCI = {}; }
DCI.thematicmap = {
    /**
     * 界面设计
    */
    Html:
        
        '<input id="start" type="date" value="2018-01-29" />'+
        '<input id="hour" type="text"  style="width: 50px;height: 26px"/>'+
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

/*         "<!-- 框选设置 -->" +
        "<div class='spatialquery_menu_tool'>" +
            "<ul>" +
              "<li class='spatialqueryPtool' onclick='DCI.thematicmap.extentQuery(\"polygon\")'><a href='javascript:void(0)' class='downloadlayerbg'><span class='bpolylabel'></span>多边形框选</a></li>" +
              "<li class='menupubline'></li>" +
              "<li class='spatialqueryRtool' onclick='DCI.thematicmap.extentQuery(\"rectangle\")'><a href='javascript:void(0)' class='downloadlayerbg'><span class='brectanglelabel'></span>矩形框选</a></li>" +
              "<li class='menupubline'></li>" +
              "<li class='spatialqueryCtool' onclick='DCI.thematicmap.InitState(map)'><a href='javascript:void(0)' class='downloadlayerbg'><span class='dellabel'></span>清空</a></li>" +
            "</ul>" +
        "</div>" +    */     
/*dl 
        //聚合图
         "<div style='height:25px;background:#30A4D5;margin-top:10px;width: 98%;margin-left: 3px;float: left;'>" +
              "<span style='margin-left:5px;font-size: 13px;color:white;'>聚合图</span>" +
         "</div>" +
        '<div id="clusterLayer" style="padding:5px;float: left;">' +
             '<input type="checkbox" name="clusterlayer" id="clusterlayer1" value="0"  style="width: 15px;height: 15px;vertical-align: middle;margin: auto;"/>' +
             '<label style="font-weight: normal;vertical-align: middle;margin: auto;">聚合图</label>' +
        '</div>' +

        //统计图
         "<div style='height:25px;background:#30A4D5;margin-top:10px;width: 98%;margin-left: 3px;float: left;'>" +
              "<span style='margin-left:5px;font-size: 13px;color:white;'>统计图</span>" +
         "</div>" +
        '<div id="chartLayer" style="padding:5px;float: left;">' +
            '<div style="float:left;">' +
               '<input type="radio" name="chartlayer"  id="chartlayer1" style="width: 15px;height: 15px;vertical-align: middle;margin: auto;" />' +
               '<label style="font-weight: normal;vertical-align: middle;margin: auto;">arcgis统计图</label>' +
             '</div>' +
             '<div style="float:left;clear: both;">' +
               '<input type="radio" name="chartlayer"  id="chartlayer2" style="width: 15px;height: 15px;vertical-align: middle;margin: auto;"/>' +
               '<label style="font-weight: normal;vertical-align: middle;margin: auto;">echarts统计图</label>' +
             '</div>' +
        '</div>' +
*/
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