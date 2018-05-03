/* --------------------------------地图初始信息配置-------------------------------- */
function MapConfig() { }
MapConfig.mapInitParams = {
    fullExtent: {//全图范围
        xmin: -143096.25671111175,
        ymin: -78717.36668173296,
        xmax: 146915.52409945847,
        ymax: 116505.50549815211

    },
    //标准经纬度范围
  /*   extent: {
        xmin: 121.00000,
        ymin: 31.00000,
        xmax: 121.99999,
        ymax: 31.99999
    }, */
    //城建坐标范围
    extent: {
        xmin: -86852.08486308431,
        ymin: -60429.10428917716,
        xmax: 83169.50518009579,
        ymax: 43023.185948736667

    },
    spatialReference: {
        wkid: 2379
    },
    arcgis_lods: [//城建坐标的ArcGIS的lods
        { "level": 0, "resolution": 224.8962831258996, "scale": 850000 },
        { "level": 1, "resolution": 119.06273812547626, "scale": 450000 },
        { "level": 2, "resolution": 66.1459656252646, "scale": 250000 },
        { "level": 3, "resolution": 39.687579375158755, "scale": 150000 },
        { "level": 4, "resolution": 26.458386250105836, "scale": 100000 },
        { "level": 5, "resolution": 15.875031750063501, "scale": 60000 }, 
        { "level": 6, "resolution": 10.583354500042335, "scale": 40000 },
        { "level": 7, "resolution": 5.291677250021167, "scale": 20000 }, 
        { "level": 8, "resolution": 2.910422487511642, "scale": 11000 }, 
        { "level": 9, "resolution": 1.8520870375074086, "scale": 7000 },
        { "level": 10, "resolution": 0.9260435187537043, "scale": 3500 }, 
        { "level": 11, "resolution": 0.39687579375158755, "scale": 1500 },
        { "level": 12, "resolution": 0.18520870375074083 , "scale": 700 },
        { "level": 13, "resolution": 0.13229193125052918, "scale": 500 }
      ],
}
/*WMS图层参数*/
MapConfig.params_wms = {
    urlParam: {
        version: "1.1.1",
        request: "GetMap",
        service: "WMS",
        srs: "EPSG:2435",
        styles: "default",
        layers: "0",
        format: "image/png",
        bgcolor: "ffffff",
        transparent: true,
        exceptions: "application/vnd.ogc.se_xml"
    },
    spatialReference: MapConfig.mapInitParams.spatialReference,
    initExtent: MapConfig.mapInitParams.extent,
    fullExtent: MapConfig.mapInitParams.fullExtent
};

/*导航条配置参数*/
MapConfig.sliderConfig = {
    targetId: "mapDiv",
    minValue: 0,     
    maxValue: 13,    
    startValue: 2,  
    toolbarCss: ["toolBar", "toolBar_button", "toolBar_slider", "toolBar_mark"],
    marksShow: {
        countryLevel: null,
        provinceLevel: null,
        cityLevel: null,
        streetLevel: null
    }
};
/*地图调用*/
//MapConfig.onlineMapUrl = "http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunity/MapServer";//ArcGIS在线地图服务
MapConfig.onlineMapUrl = "http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer";//ArcGIS在线地图服务
MapConfig.searchMapUrl = "http://192.168.1.55:6080/arcgis/rest/services/20180411/MapServer";//城建坐标地图服务
MapConfig.locatorUrl = "http://localhost:6080/arcgis/rest/services/dlLocator/GeocodeServer";//地理编码服务
MapConfig.routetaskUrl = "http://localhost:6080/arcgis/rest/services/dlroad/NAServer/Route";//路网服务
MapConfig.routeUrl = "http://localhost:6080/arcgis/rest/services/dlClosestFacility/NAServer/Closest%20Facility";//Closest Facility服务
MapConfig.testlayerUrl = "http://192.168.1.55:6080/arcgis/rest/services/testmap/MapServer";//测试3.11日压力图
MapConfig.testpngUrl = "http://192.168.1.55/raster/raster/output/";//插值图地址
MapConfig.pipepngUrl = "http://192.168.1.55/pipepress/raster/output/";
/*地图配置服务信息说明
 *type为地图类型，0为wmts，1为mapserver切片,2为高德地图矢量，3为高德卫星,4为天地图矢量,5为天地图卫星,6为百度地图矢量,7为百度卫星
 */
MapConfig.arcvecMap = { Url: "http://192.168.1.55:6080/arcgis/rest/services/jcsj/MapServer", labelUrl: "矢量", type: 1 };//上海矢量底图服务-ArcGIS切片格式
MapConfig.arcimgMap = { Url: "http://localhost:6080/arcgis/rest/services/dlImgMap/MapServer", labelUrl: "影像", type: 1 };//上海影像底图服务-ArcGIS切片格式
/*图层目录构造*/
/* MapConfig.zNodes = [
    { id: 1, pId: 0, name: "设施", checked: false, iconOpen: "" + getRootPath() + "Content/images/legend/1_open.png", iconClose: "" + getRootPath() + "Content/images/legend/1_close.png" },
    { id: 11, pId: 1, name: "调压器纠正", layerurl: MapConfig.searchMapUrl, layerid: "layer0", checked: false, icon: "" + getRootPath() + "Content/images/legend/0.png" },
    { id: 12, pId: 1, name: "中压节点", layerurl: MapConfig.searchMapUrl, layerid: "layer1", checked: false, icon: "" + getRootPath() + "Content/images/legend/1.png" },
    { id: 13, pId: 1, name: "门站", layerurl: MapConfig.searchMapUrl, layerid: "layer2", checked: false, icon: "" + getRootPath() + "Content/images/legend/2.png" },
    { id: 14, pId: 1, name: "中压终点", layerurl: MapConfig.searchMapUrl, layerid: "layer3", checked: false, icon: "" + getRootPath() + "Content/images/legend/3.png" },
    { id: 15, pId: 1, name: "调压器", layerurl: MapConfig.searchMapUrl, layerid: "layer4", checked: false, icon: "" + getRootPath() + "Content/images/legend/4.png" },
    { id: 16, pId: 1, name: "SCADA节点", layerurl: MapConfig.searchMapUrl, layerid: "layer7", checked: false },
    { id: 2, pId: 0, name: "管线", checked: false, iconOpen: "" + getRootPath() + "Content/images/legend/1_open.png", iconClose: "" + getRootPath() + "Content/images/legend/1_close.png" },
    { id: 21, pId: 2, name: "中压管线", layerurl: MapConfig.searchMapUrl, layerid: "layer5", checked: false, icon: "" + getRootPath() + "Content/images/legend/zy.png" },
    { id: 22, pId: 2, name: "高压管线", layerurl: MapConfig.searchMapUrl, layerid: "layer6", checked: false, icon: "" + getRootPath() + "Content/images/legend/gy.png" },
    { id: 3, pId: 0, name: "面图层", checked: false, iconOpen: "" + getRootPath() + "Content/images/legend/1_open.png", iconClose: "" + getRootPath() + "Content/images/legend/1_close.png" },
    { id: 31, pId: 3, name: "嘉定", layerurl: MapConfig.searchMapUrl, layerid: "layer8", checked: false }
]; */
MapConfig.zNodes = [
    { id: 1, pId: 0, name: "点图层", checked: false, iconOpen: "" + getRootPath() + "Content/images/legend/1_open.png", iconClose: "" + getRootPath() + "Content/images/legend/1_close.png" },
    { id: 11, pId: 1, name: "民丰绿苑大众", layerurl: MapConfig.searchMapUrl, layerid: "layer0", checked: false, icon: "" + getRootPath() + "Content/images/legend/0.png" },
    { id: 12, pId: 1, name: "五金百安上外", layerurl: MapConfig.searchMapUrl, layerid: "layer1", checked: false, icon: "" + getRootPath() + "Content/images/legend/1.png" },
    { id: 13, pId: 1, name: "宝钱永盛", layerurl: MapConfig.searchMapUrl, layerid: "layer2", checked: false, icon: "" + getRootPath() + "Content/images/legend/2.png" },
    { id: 14, pId: 1, name: "调压器_250kpa", layerurl: MapConfig.searchMapUrl, layerid: "layer3", checked: false, icon: "" + getRootPath() + "Content/images/legend/3.png" },
    { id: 15, pId: 1, name: "门站", layerurl: MapConfig.searchMapUrl, layerid: "layer4", checked: false, icon: "" + getRootPath() + "Content/images/legend/4.png" },
    { id: 16, pId: 1, name: "高压节点", layerurl: MapConfig.searchMapUrl, layerid: "layer5", checked: false },
    { id: 17, pId: 1, name: "中压节点", layerurl: MapConfig.searchMapUrl, layerid: "layer6", checked: false },
    { id: 18, pId: 1, name: "中压插值点", layerurl: MapConfig.searchMapUrl, layerid: "layer19", checked: false },
    { id: 2, pId: 0, name: "管线图层", checked: false, iconOpen: "" + getRootPath() + "Content/images/legend/1_open.png", iconClose: "" + getRootPath() + "Content/images/legend/1_close.png" },
    { id: 21, pId: 2, name: "民丰绿苑大众管线", layerurl: MapConfig.searchMapUrl, layerid: "layer7", checked: false, icon: "" + getRootPath() + "Content/images/legend/zy.png" },
    { id: 22, pId: 2, name: "五金百安上外管线", layerurl: MapConfig.searchMapUrl, layerid: "layer8", checked: false, icon: "" + getRootPath() + "Content/images/legend/gy.png" },   
    { id: 23, pId: 2, name: "宝钱永盛管线", layerurl: MapConfig.searchMapUrl, layerid: "layer9", checked: false, icon: "" + getRootPath() + "Content/images/legend/gy.png" },
    { id: 24, pId: 2, name: "高压管线", layerurl: MapConfig.searchMapUrl, layerid: "layer10", checked: false, icon: "" + getRootPath() + "Content/images/legend/gy.png" },
    { id: 24, pId: 2, name: "中压管线", layerurl: MapConfig.searchMapUrl, layerid: "layer11", checked: false, icon: "" + getRootPath() + "Content/images/legend/gy.png" },
    { id: 3, pId: 0, name: "面图层", checked: false, iconOpen: "" + getRootPath() + "Content/images/legend/1_open.png", iconClose: "" + getRootPath() + "Content/images/legend/1_close.png" },
    { id: 31, pId: 3, name: "民丰绿苑大众缓冲区", layerurl: MapConfig.searchMapUrl, layerid: "layer12", checked: false },
    { id: 32, pId: 3, name: "宝钱永盛", layerurl: MapConfig.searchMapUrl, layerid: "layer13", checked: false },
    { id: 33, pId: 3, name: "五金百安上外", layerurl: MapConfig.searchMapUrl, layerid: "layer14", checked: false },
    { id: 34, pId: 3, name: "绿环", layerurl: MapConfig.searchMapUrl, layerid: "layer15", checked: false },
    { id: 35, pId: 3, name: "民丰绿苑大众", layerurl: MapConfig.searchMapUrl, layerid: "layer16", checked: false }
];
MapConfig.dredicturl = "http://120.26.105.20:8099/predict/";//预测结果服务
MapConfig.printGPURL = "http://localhost:6080/arcgis/rest/services/ExportWebMap/GPServer/Export%20Web%20Map";//打印GP服务
MapConfig.printTemplateMXD = [//打印模版
                              {
                                  eName: "LOutput",//mxd名称
                                  cName: "横向"//显示中文名
                              },
                              {
                                  eName: "POutput",
                                  cName: "纵向"
                              }
];
MapConfig.printcopyRight = { Title: "市北燃气", copyRight: "市北燃气&上海世昕软件" };



