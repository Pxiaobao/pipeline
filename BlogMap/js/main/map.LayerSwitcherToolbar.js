LayerSwitcherToolbar = DObject({
    mapDivId: null,
    map: null,
	flag:null,
	html:
	'<div class="mappop_tabT">'+
		'<ul class="mappop_tab">'+
			'<li id="tabId1" class="mappop_current" onclick="tab(\'tabId1\',\'tabC1\');">CODEFANS.NET</li>'+
			'<li id="tabId2" onclick="tab(\'tabId2\',\'tabC2\');">ASP</li>'+
		'</ul>'+
	'</div>'+
	'<div class="mappop_show" id="tabC1">'+
		'<div class="mappop_con">模板。</div>'+
	'</div>'+
	'<div class="mappop_hidden" id="tabC2">'+
		'<div class="mappop_con">ASP</div>'+
	'</div>',
    construct: function (map, options,flag) {
	    this.mapDivId = map.id;
	    this.map = map;
	    this.flag = flag;
	    if (this.map) {
	        this.showLayerControl(options);
	    }
    },
    showLayerControl: function (options) {
		var T = this;
		var layerCtl = new LayerContorl(this.mapDivId, options);
		layerCtl.changMap = function () {
			T.changeBaseMap(arguments);
		};
		//默认加载第一项作为底图
		if (options.length > 0) {
			var item = options[0];
			var mapType = item.type;
			var curLyr = null;
			//MapServer切片
			if (mapType == 1) {//mapType为地图类型，0为wmts，1为mapserver切片,2为高德地图矢量，3为高德卫星,4为天地图矢量,5为天地图卫星,6为百度地图矢量，7为百度卫星
				var curLyr = new esri.layers.ArcGISTiledMapServiceLayer(item.url.map, {id: "BaseMapID"});
				T.map.addLayer(curLyr, 0);
				if (item.url.anno != null && item.url.anno != "") {
					var curLyrAnno = new esri.layers.ArcGISTiledMapServiceLayer(item.url.anno, {id: "BaseMapID_Anno"});
					T.map.addLayer(curLyrAnno, 1);
				}
			}else {
				alert("map type error,please check map.layerSwitcherToolbar.js and config.js")
			}
	
	
		}
	},
	changeBaseMap: function (arg) {
	    var T = this;
		var service = arg[0];
		var baseMapID = "BaseMapID";
		var baseMapAnnoID = "BaseMapID_Anno";
		var curLyr = T.map.getLayer(baseMapID);
		var curLyrAnno = T.map.getLayer(baseMapAnnoID);
		var mapType = service.type;
		if (curLyr) {
			if(mapType==0||mapType==1){
				if (curLyr.url != service.url.map) {
				    T.map.removeLayer(curLyr);
					if (curLyrAnno) {
					    T.map.removeLayer(curLyrAnno);
					}
					if (T.flag) {
					    //销毁对象map,再重现创建map	    
					    T.createMap(mapType);
					}
					if (mapType == 1) {
						var curLyr = new esri.layers.ArcGISTiledMapServiceLayer(service.url.map, {id: "BaseMapID"});
						T.map.addLayer(curLyr, 0);
						if (service.url.anno != null && service.url.anno != "") {
							var curLyrAnno = new esri.layers.ArcGISTiledMapServiceLayer(service.url.anno, {id: "BaseMapID_Anno"});
							T.map.addLayer(curLyrAnno, 1);
						}
					} else {
						curLyr = new WMTSLayer(service.url.map, DUtil.extend({id: baseMapID}, service.extInfo));
						T.map.addLayer(curLyr, 0);
						if (service.url.anno != null && service.url.anno != "") {
							var curLyrAnno = new WMTSLayer(service.url.anno, DUtil.extend({id: baseMapAnnoID}, service.extInfo));
							T.map.addLayer(curLyrAnno, 1);
						}
					}
				}
			}else{
			    T.map.removeLayer(curLyr);
				if (curLyrAnno) {
				    T.map.removeLayer(curLyrAnno);
				}
				if (T.flag) {
				    //销毁对象map,再重现创建map	    
				    T.createMap(mapType);
				}
		
			}
		}
	},
	createMap: function (mapType) {
	    //销毁对象map,再重现创建map	
	    var T = this;
	    T.map.destroy();
	    T.map = new esri.Map(T.mapDivId, { logo: false, slider: false });
	    //设置地图初始范围
	    var initExtent;
	    switch (mapType)//0为wmts，1为mapserver切片
	    {
	        case 0:
	            initExtent = new esri.geometry.Extent({ xmin: MapConfig.mapInitParams.extent.xmin, ymin: MapConfig.mapInitParams.extent.ymin, xmax: MapConfig.mapInitParams.extent.xmax, ymax: MapConfig.mapInitParams.extent.ymax, spatialReference: MapConfig.mapInitParams.spatialReference });
	            break;
	        case 1:
	            initExtent = new esri.geometry.Extent({ xmin: MapConfig.mapInitParams.extent.xmin, ymin: MapConfig.mapInitParams.extent.ymin, xmax: MapConfig.mapInitParams.extent.xmax, ymax: MapConfig.mapInitParams.extent.ymax, spatialReference: MapConfig.mapInitParams.spatialReference });
	            break;
	        
	    }
	    T.map.setExtent(initExtent);
	    //重新绑定地图鼠标移动事件
	    $("#map_coordinates").remove();
	    var _divID_coordinates = "map_coordinates";
	    coordinatesDiv = document.createElement("div");
	    coordinatesDiv.id = _divID_coordinates;
	    coordinatesDiv.className = "map-coordinates";
	    coordinatesDiv.innerHTML = "";
	    document.getElementById(T.mapDivId).appendChild(coordinatesDiv);
	    dojo.connect(T.map, "onMouseMove", showCoords);
	    dojo.connect(T.map, "onMouseDrag", showCoords);
	    function showCoords(evt) {
	        evt = evt ? evt : (window.event ? window.event : null);
	        var mp = evt.mapPoint;
	        coordinatesDiv.innerHTML = "<span id='cd_label' style='font-size:13px;text-align:center;font-family:微软雅黑;'>" + "横坐标：" + mp.x.toFixed(3) + "&nbsp;纵坐标：" + mp.y.toFixed(3) + "</span>";
	    }

	},
});
LayerContorl = DObject({
    items: [],
    index: 0,
    changMap: null,
	itemsInfo: null,
	tab: function(tabId, tabC){

	},
    construct: function (divId, options) {
        var T = this;
        this.map = map;
        this.itemsInfo = options;
        var pDiv = document.getElementById(divId);
        var ctlDiv = document.createElement("div");
        ctlDiv.id = "mapswitch";
        ctlDiv.className = "map_switch";
        ctlDiv.onmouseover = function () {
            T._itemMouseover(this);
        };
        ctlDiv.onmouseout = function () {
            T._itemMouseout(this);
        };
		pDiv.appendChild(ctlDiv);
		var  mappop = document.createElement("div");
		mappop.id = "getId";
		mappop.className = "map_popup";
		mappop.innerHTML = '<div class="mappop_tabT">'+
		'<ul class="mappop_tab">'+
			'<li id="tabId1" class="mappop_current" );">实时状况</li>'+
			'<li id="tabId2" );">管况查询</li>'+
		'</ul>'+
	'</div>'+
	'<div class="mappop_show" id="tabC1">'+
		'<div><span class="update_lbl">更新时间:</span>'+
		'<span id="time_trafficCtrl" class="update_time">--:--</span>'+
		'<span id="bt_trafficCtrl" class="update" title="更新"></span></div>'+
	'</div>'+
	'<div class="mappop_hidden" id="tabC2">'+
		'<input id="history_time" class="update_time" type="datetime-local" value="2018-02-24T01:00:00"/>'+
		'<div id="bt_trafficCtrl2" class="update" title="更新"></div></div>'+
	'</div>';
		pDiv.appendChild(mappop);
		$("#tabId1").bind("click", function () {
			var len = document.getElementById('getId').getElementsByTagName('li').length;
			for (i = 1; i <= len; i++) {
				if ("tabId" + i == "tabId1") {
					document.getElementById("tabId1").className = "mappop_current";
				} else {
					document.getElementById("tabId" + i).className = "";
				}
				if ("tabC" + i == "tabC1") {
					document.getElementById("tabC1").className = "mappop_show";
				} else {
					document.getElementById("tabC" + i).className = "mappop_hidden";
				}
			}
		});
		$("#tabId2").bind("click", function () {
			var len = document.getElementById('getId').getElementsByTagName('li').length;
			for (i = 1; i <= len; i++) {
				if ("tabId" + i == "tabId2") {
					document.getElementById("tabId2").className = "mappop_current";
				} else {
					document.getElementById("tabId" + i).className = "";
				}
				if ("tabC" + i == "tabC2") {
					document.getElementById("tabC2").className = "mappop_show";
				} else {
					document.getElementById("tabC" + i).className = "mappop_hidden";
				}
			}
		});
		$('#bt_trafficCtrl').click(function () { 
			$('#bt_trafficCtrl1').css('background', 'url(./Content/images/index/poi_loading.gif) no-repeat');
			var month = (Array(2).join(0) + (new Date().getMonth()+1).toString()).slice(-2);
			var day = (Array(2).join(0) + (new Date().getDate()-1).toString()).slice(-2);
			var minute = (Array(2).join(0) + new Date().getMinutes().toString()).slice(-2);
			var hour = (Array(2).join(0) + new Date().getHours().toString()).slice(-2);
			var req_date = {date:new Date().getFullYear().toString()+month+day,time:hour+minute}
			$.ajax({
				type: "POST",
				url: "http://192.168.1.21:5001/info/",
				data: req_date,
				dataType: "JSON",
				success: function (response) {
					alert("success");
					if(response.date == "OK"){
						$('#bt_trafficCtrl1').css('background', 'url(./Content/images/index/refresh.png) no-repeat');
						$('#time_trafficCtrl').html(hour+":"+minute);
					}
				},
				error: function(response){
					alert("error")
				}
			});
			
		});

		$('#bt_trafficCtrl2').click(function () { 
			$('#bt_trafficCtrl2').css('background', 'url(./Content/images/index/poi_loading.gif) no-repeat');
 			var year = history_time.value.substr(0,4);
			var month = history_time.value.substr(5,2);
			var day = history_time.value.substr(8,2);
			var hour = history_time.value.substr(11,2);
			var minute = history_time.value.substr(14,2);		
			var req_date = {date:year+month+day,time:hour+minute}
			$.ajax({
				type: "POST",
				url: "http://192.168.1.21:5001/info/",
				data: req_date,
				dataType: "JSON",
				success: function (response) {
					alert("success");
					if(response.date == "OK"){
						$('#bt_trafficCtrl2').css('background', 'url(./Content/images/index/refresh.png) no-repeat');
						var curLyr = DCI.Catalog.map.getLayer("layer11");
						curLyr.refresh();
					}
				},
				error: function(response){
					alert("error")
				}
			}); 
			
		});
		




        for (var i = 0; i < options.length; i++) {
            var item = options[i];
            //var label = this._drawItem(i, item.label, item.imgUrl);
            var label = this._drawItem(i, item.label, item.imgUrl, item.className);
            label.style.display = i == 0 ? "block" : "none";
            this.items[i] = label;
            ctlDiv.appendChild(label);
        }
    },
    //type: 0地图,1影像，2地形
    _drawItem: function (type, label, imgUrl, className) {
        var T = this;
        var itemDiv = document.createElement("div");
        itemDiv.className = "map_switch_item";
        itemDiv.onclick = function () {
            T._itemClick(this);
        };
        var itemHover = document.createElement("div");
        itemHover.className = "hoverType";
        itemDiv.appendChild(itemHover);
        var itemType = document.createElement("div");
        var itemLabel = document.createElement("div");
        itemLabel.className = "map_bom";
        itemType.className = "vecType";
        itemType.className = className;
        if (imgUrl) {
            itemType.style.background = "url('" + imgUrl + "')";
        }
        if (label) {
            itemLabel.innerText = label;
        }
        itemHover.appendChild(itemType);
        itemHover.appendChild(itemLabel);
        return itemDiv;
    },
    _itemMouseover: function (arg) {
        arg.style.width = "600px";
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].style.display = "block";
        }
    },
    _itemMouseout: function (arg) {
        arg.style.width = "70px";
        for (var i = 0; i < this.items.length; i++) {
            var div = this.items[i];
            if (i == this.index) {
                div.style.display = "block";
            } else {
                div.style.display = "none";
            }
        }
    },
    _itemClick: function (arg) {
        for (var i = 0; i < this.items.length; i++) {
            var div = this.items[i];
            if (arg == div) {
                this.index = i;
                div.style.display = "block";
                this.changMap(this.itemsInfo[i]);
            } else {
                div.style.display = "none";
            }
        }
    }
});
//wmtsLayer扩展
WMTSLayer = DObject({
	url: null,
	esriLayer: null,
	construct: function (url, options) {
		this.url = url;
		var tileUrl = url;
		var stdParams = {
				service: "WMTS",
				request: "GetTile",
				layer: 0,
				style: "default",
				tileMatrixSet: "sss",
				format: MapConfig.params_tile.format
		};
		stdParams = DUtil.extend(stdParams, options);
		dojo.declare("ESRITiledMapServiceLayer", esri.layers.TiledMapServiceLayer, {
			constructor: function () {
				this.url = url;
				this.spatialReference = new esri.SpatialReference(MapConfig.params_tile.spatialReference);
				this.initialExtent = new esri.geometry.Extent({
					xmin: MapConfig.params_tile.initExtent.xmin,
					ymin: MapConfig.params_tile.initExtent.ymin,
					xmax: MapConfig.params_tile.initExtent.xmax,
					ymax: MapConfig.params_tile.initExtent.ymax,
					spatialReference: this.spatialReference
				});
				this.fullExtent = new esri.geometry.Extent({
					xmin: MapConfig.params_tile.fullExtent.xmin,
					ymin: MapConfig.params_tile.fullExtent.ymin,
					xmax: MapConfig.params_tile.fullExtent.xmax,
					ymax: MapConfig.params_tile.fullExtent.ymax,
					spatialReference: this.spatialReference
				});
				this.tileInfo = new esri.layers.TileInfo(MapConfig.params_tile);
				this.loaded = true;
				this.onLoad(this);
				if (stdParams.id != null) {
					this.id = stdParams.id;
				}
			},
			getTileUrl: function (level, row, col) {
				var serviceUrl = encodeURI(tileUrl);
				if (serviceUrl[serviceUrl.length - 1] == "/") {
					serviceUrl = serviceUrl.substring(0, serviceUrl.length - 1);
				}
				stdParams.tileMatrix = level;
				stdParams.tileRow = row;
				stdParams.tileCol = col;
				return encodeURI(serviceUrl) + "?" + dojo.objectToQuery(stdParams);
			}
		});
		this.esriLayer = new ESRITiledMapServiceLayer();
	},
	hide: function () {
		this.esriLayer.hide();
	},
	show: function () {
		this.esriLayer.show();
	}
});
WMSLayer = DObject({
	url: null,
	esriLayer: null,
	standardParams: null,
	construct: function (url, options) {
		this.url = url;
		var wmsUrl = url;
		this.standardParams = DUtil.extend(MapConfig.params_wms.urlParam, options);
		var stdParams = this.standardParams;
		dojo.declare("ESRIWMSLayer", esri.layers.DynamicMapServiceLayer, {
			constructor: function () {
				this.url = url;
				this.spatialReference = new esri.SpatialReference(stdParams.spatialReference);
				this.initialExtent = new esri.geometry.Extent({
					xmin: MapConfig.params_wms.initExtent.xmin,
					ymin: MapConfig.params_wms.initExtent.ymin,
					xmax: MapConfig.params_wms.initExtent.xmax,
					ymax: MapConfig.params_wms.initExtent.ymax,
					spatialReference: this.spatialReference
				});
				this.fullExtent = new esri.geometry.Extent({
					xmin: MapConfig.params_wms.fullExtent.xmin,
					ymin: MapConfig.params_wms.fullExtent.ymin,
					xmax: MapConfig.params_wms.fullExtent.xmax,
					ymax: MapConfig.params_wms.fullExtent.ymax,
					spatialReference: this.spatialReference
				});
				this.loaded = true;
				this.onLoad(this);
				if (stdParams.id != null) {
					this.id = stdParams.id;
				}
			},
			getImageUrl: function (extent, width, height, callback) {
				if (!wmsUrl) {
					alert("esri.layers.DynamicMapServiceLayer: url 不能为空");
					return;
				}
				var lParams = stdParams;
				lParams.bbox = extent.xmin + "," + extent.ymin + "," + extent.xmax + "," + extent.ymax;
				lParams.width = width;
				lParams.height = height;
				callback(encodeURI(wmsUrl) + "?" + dojo.objectToQuery(lParams));
			}
		});
		this.esriLayer = new ESRIWMSLayer();
	},
	getFormat: function () {
		return this.standardParams.format;
	},
	getBgColor: function () {
		return this.standardParams.bgcolor;
	},
	getLayers: function () {
		return this.standardParams.layers;
	},
	getStyles: function () {
		return this.standardParams.styles;
	},
	getSrs: function () {
		return this.standardParams.srs;
	},
	getBBox: function () {
		return this.standardParams.bbox;
	},
	hide: function () {
		this.esriLayer.hide();
	},
	show: function () {
		this.esriLayer.show();
	},
	getVisibility: function () {
		return this.esriLayer.visible;
	},
	setImageTransparency: function (flag) {
		return this.esriLayer.imageTransparency = flag;
	}
});

