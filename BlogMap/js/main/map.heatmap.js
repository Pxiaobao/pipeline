if (typeof DCI == "undefined") { var DCI = {}; }
DCI.heatmap = {        
    map: null,
    heatLayer1: null,
    heatLayer2: null,
    //heatmapFeatureLayer: null,//注释原先热力图从地图服务获取数据源构造
        //模块初始化函数
        Init:function(map){
            DCI.heatmap.map = map;
            /*//构造热力图的数据源从地图服务获取
            //var serviceURL = "http://localhost:6080/arcgis/rest/services/dlsde/FeatureServer/0";
            var serviceURL = "http://localhost:6080/arcgis/rest/services/dlsearch/MapServer/0";
            var heatmapFeatureLayerOptions = {
                mode: esri.layers.FeatureLayer.MODE_SNAPSHOT,
                outFields: ["NAME", "KIND"]
                //infoTemplate: infoTemplate
            };
            var heatmapFeatureLayer = new esri.layers.FeatureLayer(serviceURL, heatmapFeatureLayerOptions);
            heatmapFeatureLayer.id = "heatmap";
            var heatmapRenderer = new esri.renderers.HeatmapRenderer({
                field: "KIND",
                colors: ["rgba(0, 0, 255, 0)", "rgb(0, 0, 255)", "rgb(255, 0, 255)", "rgb(255, 0, 0)"],
                blurRadius: 12,
                maxPixelIntensity: 250,
                minPixelIntensity: 10
            });
            //监听check点击事件
            $("[name = heatmapFeatureLayer]:checkbox").bind("click", function () {
                if ($("input[type='checkbox']").is(':checked')) {
                    if (DCI.heatmap.map.getLayer("heatmap")) {
                        DCI.heatmap.map.getLayer("heatmap").show();
                    } else {
                        heatmapFeatureLayer.setRenderer(heatmapRenderer);
                        DCI.heatmap.map.addLayer(heatmapFeatureLayer);
                    }
                }
                else {
                    if (DCI.heatmap.map.getLayer("heatmap"))
                        DCI.heatmap.map.getLayer("heatmap").hide();
                }
            })*/
            //从json格式构造热力图数据源
            var featureSet = new esri.tasks.FeatureSet(food);//food为模拟数据源json，直接从food.js文件读取
            //this.createHeatMapByFeatureLayer(map, featureSet);
            var T = this;
            //监听check点击事件
            //$("[name = heatmapFeatureLayer]:radio").bind("click", function () {
            $("#heatmapFeatureLayer input").bind("click", function () {
                //if ($("input[type='radio']").is(':checked')) {
                if (this.checked) {
                    switch (this.id) {
                        case "heatmap1":
                            if (DCI.heatmap.heatLayer1) {
                                DCI.heatmap.heatLayer1.show();
                                DCI.heatmap.heatLayer2.hide();
                            } else {
                                if (DCI.heatmap.heatLayer2)
                                    DCI.heatmap.heatLayer2.hide();
                                T.createHeatMapByFeatureLayer(map, featureSet);
                            }
                            break;
                        case "heatmap2":
                            if (DCI.heatmap.heatLayer2) {
                                DCI.heatmap.heatLayer2.show();
                                DCI.heatmap.heatLayer1.hide();
                            }
                            else {
                                if (DCI.heatmap.heatLayer1)
                                    DCI.heatmap.heatLayer1.hide();
                                T.createHeatMapByJS(map, featureSet);
                            }
                            break;
                        default:
                            break;
                    }
                }
                else {
                }
            })

        },
       /**
        * 创建热力图
        * 依赖arcgis api的FeatureLayer
        */
        createHeatMapByFeatureLayer: function (map, featureSet) {
            var layerDefinition = {
                "geometryType": "esriGeometryPoint",
                "fields": [
                    {
                        "name": "FID",
                        "type": "esriFieldTypeOID",
                        "alias": "FID"
                       },
                       {
                        "name": "tid",
                        "type": "esriFieldTypeDouble",
                        "alias": "tid"
                       },
                       {
                        "name": "taddress",
                        "type": "esriFieldTypeString",
                        "alias": "taddress",
                        "length": 254
                       },
                       {
                        "name": "tkpa",
                        "type": "esriFieldTypeDouble",
                        "alias": "tkpa"
                       }
                ]
            }
            var featureCollection = {
                layerDefinition: layerDefinition,
                featureSet: featureSet
            };
            var heatLayer = DCI.heatmap.heatLayer1 = new esri.layers.FeatureLayer(featureCollection);
            heatLayer.opacity = 0.85;
            heatLayer.id = "heatmap";
            var heatmapRenderer = new esri.renderers.HeatmapRenderer({
                field: "tkpa",
                //colors: ["rgba(0, 0, 255, 0)", "rgb(0, 0, 255)", "rgb(255, 0, 255)", "rgb(255, 0, 0)"],
                //colors: ['#00f', '#0ff', '#0f0', '#ff0', '#f00'],//默认热力图分级颜色值
                colors: ['rgba(0, 0, 255, 0)', '#0ff', '#0f0', '#ff0', '#f00'],//默认热力图分级颜色值
                blurRadius: 5,//默认10
                maxPixelIntensity: 250,//默认100
                minPixelIntensity: 10//默认0
            });
            heatLayer.setRenderer(heatmapRenderer);
            map.addLayer(heatLayer);
        },
       /**
        * 创建热力图
        * 依赖开源js库heatmap.js
        */
        createHeatMapByJS: function (map, featureSet) {
            // create heat layer
            var heatLayer = DCI.heatmap.heatLayer2 = new heatmap.HeatmapLayer({
                "useLocalMaximum": false,
                config: {
                    "radius": 40,
                    "valueField": "tkpa",
                    "gradient": {
                        0.45: "rgb(000,000,255)",
                        0.55: "rgb(000,255,255)",
                        0.65: "rgb(000,255,000)",
                        0.95: "rgb(255,255,000)",
                        1.00: "rgb(255,000,000)"
                    }
                },
                "map": map,
                "opacity": 0.85
            }, "heatLayerDIV");
            // set heatmap data
            heatLayer.setData(featureSet.features);
            // add heat layer to map
            map.addLayer(heatLayer);
        }

}