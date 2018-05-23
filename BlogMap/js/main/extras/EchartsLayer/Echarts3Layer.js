define(["dojo/_base/declare", "dojo/_base/lang", "esri/geometry/Point", "esri/geometry/ScreenPoint"], function (declare, lang, Point, ScreenPoint) {
    return declare("Echarts3Layer", null, {
        name: "Echarts3Layer",
        _map: null,
        _ec: null,
        _geoCoord: [],
        _option: null,
        _mapOffset: [0, 0],
        _layer: null,
        
        remove: function () {
            document.removeChild(this.name);
        },
        constructor: function (map, t, layerName,isOldlayer) {
            this._map = map;
            var div = this._echartsContainer = document.createElement("div");
            this._echartsContainer.id = layerName;
            div.style.position = "absolute";
            div.style.height = map.height + "px";
            div.style.width = map.width + "px";
            div.style.top = 0;
            div.style.left = 0;
            div.style.z_Index=50;
            if(isOldlayer==false)
            {
                map._layersDiv.appendChild(div);
                var svg = dojo.byId("map_gc");
                svg.parentNode.insertBefore(div, svg);
            }
            else
            {
                map.__container.appendChild(div);
            }
            this._init(map, t);
        },

        _init: function (map, ec) {
            var self = this;
            self._map = map;
            self._ec = ec;
            self.getEchartsContainer = function () {
                return self._echartsContainer
            };

            self.getMap = function () {
                return self._map
            };

            self.geoCoord2Pixel = function (geoCoord) {
                var point = new Point(geoCoord[0], geoCoord[1]);
                var pos = self._map.toScreen(point);
                return [pos.x, pos.y]
            };

            self.pixel2GeoCoord = function (pixel) {
                var point = self._map.toMap(new ScreenPoint(pixel[0], pixel[1]));
                return [point.lng, point.lat]
            };

            self.initECharts = function () {
                self._ec = ec.init.apply(self, arguments);
                self._ec.Geo.prototype.dataToPoint = function (geoCoord) {
                    var point = new Point(geoCoord[0], geoCoord[1]);
                    var pos = self._map.toScreen(point);
                    return [pos.x, pos.y]
                };
                self._bindEvent();
                return self._ec;
            };
            self.getECharts = function () {
                return self._ec;
            };self.dispose=function(){
                return self._ec.dispose();
            }; 
            self.clear=function(){
                return self._ec.clear();
            };
            self.resize=function(){
                return self._ec.resize();
            };
            self.getOption=function(){
                return self._ec.getOption();
            };
            self.setOption = function (option, t) {
                self._option = option;
                self._ec.setOption(option, t)
            };
            self._bindEvent = function () {
                self._map.on("zoom-end", function (e) {
                    self._ec.resize();
                    self._echartsContainer.style.visibility = "visible";
                });
                self._map.on("zoom-start", function (e) {
                    self._echartsContainer.style.visibility = "hidden";
                });
                self._map.on("pan", function (e) {
                    self._echartsContainer.style.visibility = "hidden";
                });
                self._map.on("pan-end", function (e) {
                    self._ec.resize();
                    self._echartsContainer.style.visibility = "visible"
                });
                self._map.on("resize", function () {
                    var e = self._map.__container;
                    self._mapOffset = [-parseInt(e.style.left) || 0, -parseInt(e.style.top) || 0], self._echartsContainer.style.left = self._mapOffset[0] + "px", self._echartsContainer.style.top = self._mapOffset[1] + "px", setTimeout(function () {
                        self._echartsContainer.style.width=self._map.width+'px';
                        self._echartsContainer.style.height=self._map.height+'px';

                        self._map.resize(), self._map.reposition(), self._ec.resize();
                    }, 200);
                    self._echartsContainer.style.visibility = "visible";
                });
                self._ec.getZr().on("dragstart", function (e) {
                });
                self._ec.getZr().on("dragend", function (e) {
                });
                self._ec.getZr().on("mousewheel", function (e) {
                    self._lastMousePos = self._map.toMap(new ScreenPoint(e.event.x, e.event.y));
                    var wheelDelta = e.wheelDelta;
                    var map = self._map;
                    var mapZoom = map.getZoom();
                    wheelDelta = wheelDelta > 0 ? Math.ceil(wheelDelta) : Math.floor(wheelDelta);
                    wheelDelta = Math.max(Math.min(wheelDelta, 4), -4);
                    wheelDelta = Math.max(map.getMinZoom(), Math.min(map.getMaxZoom(), mapZoom + wheelDelta)) - mapZoom;
                    self._delta = 0;
                    self._startTime = null;
                    wheelDelta && map.setZoom(mapZoom + wheelDelta);
                })
            }
        }
    })
});