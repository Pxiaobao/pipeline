if (typeof DCI == "undefined") { var DCI = {}; }
DCI.interPolate = {
    map: null,
    gplayer: null,
    mins: null,
    i: null,
    k: null,
    y: null,//图片的年份
    m: null,
    d: null,
    hou: null,
    freq: null,
    imgar: [],//图片数组
    times:['0000','0015','0030','0045','0100','0115','0130','0145','0200','0215','0230','0245','0300','0315','0330','0345','0400','0415','0430','0445','0500','0515','0530','0545','0600','0615','0630','0645','0700','0715','0730','0745','0800',
        '0815','0830','0845','0900','0915','0930','0945','1000','1015','1030','1045','1100','1115','1130','1145','1200','1215','1230','1245','1300','1315','1330','1345','1400','1415','1430','1445','1500','1515','1530','1545','1600','1615',
        '1630','1645','1700','1715','1730','1745','1800','1815','1830','1845','1900','1915','1930','1945','2000','2015','2030','2045','2100','2115','2130','2145','2200','2215','2230','2245','2300','2315','2330','2345'],
    //模块初始化函数
    Init: function (map) {
        DCI.interPolate.map = map;
        var c = 0;
        var t;
        //预加载时间图片
        for(i=0;i<DCI.interPolate.times.length;i++){
          DCI.interPolate.imgar[i] = new Image();
          DCI.interPolate.imgar[i].src = "./Content/images/map/clock/"+DCI.interPolate.times[i]+".png"; 
         }
        
        //压力图模块
        $("#testLayer input").bind("click", function () {
            if (this.checked) {
                var clock = document.getElementById("map_clock");
                if (clock) {
                    clock.style.display = "block";
                }
                else {
                    var _map_clock = "map_clock";
                    clock = document.createElement("div");
                    clock.id = _map_clock;
                    clock.className = "map-clock1";
        
                    $("#map").append(clock);
        
                }
                var date = start.value;
                var hour_start = hour.value.replace(/:/,"");
                var hour_end = hour2.value.replace(/:/,"");
                freq = DCI.interPolate.times.indexOf(hour_end) //- DCI.interPolate.times.indexOf(hour_start)

                y = date.substr(0, 4);
                m = date.substr(5, 2);
                d = date.substr(8, 2);
                
                //if (hour.value == "") {
                    i = DCI.interPolate.times.indexOf(hour_start);
                    DCI.interPolate.loops();
                    this.disabled = "disabled";
                //}
/*                 else {
                    i = hour.value;
                    DCI.interPolate.oneloop();
                } */
                

            }
            else {
                DCI.interPolate.gplayer.removeAllImages();
                var clockDiv = $("#map_clock");
                if (clockDiv) {
                    
                    clockDiv.css({
                        "background":'url(./Content/images/map/clock/0000.png)',
                        "display":'none'                
                    });
                }
            }
        })
        //监听check点击事件
        $("#interpolateLayer input").bind("click", function () {
            if (this.checked) {
                var date = start.value;
                y = date.substr(0, 4);
                m = date.substr(5, 2);
                d = date.substr(8, 2);
                if (hour.value == "") {
                    this.disabled = "disabled";

                    k = 1;

                    DCI.interPolate.loopss(k);
                }
                else {
                    k = hour.value;
                    DCI.interPolate.oneloopss();
                }
                DCI.interPolate.showLegend();

            }
            else {
                DCI.interPolate.gplayer.removeAllImages();
                DCI.interPolate.hideLegend();


            }
        })



    },
    loadinterpolateMap: function (map) {

    },

    /*显示图例*/
    showLegend: function () {
        var legendDiv = document.getElementById("map_legend");
        var clock = document.getElementById("map_clock");
        if (legendDiv) {
            legendDiv.style.display = "block";
            clock.style.display = "block";
        }
        else {
            var T = this;
            //var scale;
            var _divID_legend = "map_legend";
            legendDiv = document.createElement("div");
            legendDiv.id = _divID_legend;
            legendDiv.className = "map-legend1";
            $("#map").append(legendDiv);

            var _map_clock = "map_clock";
            clock = document.createElement("div");
            clock.id = _map_clock;
            clock.className = "map-clock1";

            $("#map").append(clock);

        }

    },
    /*隐藏图例*/
    hideLegend: function () {
        var legendDiv = $("#map_legend");
        if (legendDiv) {
            legendDiv.css("display","none");
            $("#map_clock").css({
                "background":'url(./Content/images/map/clock/0000.png)',
                "display":'none'                
            });
        }
    },

    /*管道分级图循环显示*/
    loops: function () {

        if (i <= freq) {
            DCI.interPolate.addImageLayer('layer', MapConfig.pipepngUrl + y + '/' + m + '/' + d + '/' + DCI.interPolate.times[i] + '/KPA/KPA.png',
            -34094.0786696, 4642.90213197, -9329.02913947, 23216.6892795, 2379, 1, i);
            i++;
            setTimeout(DCI.interPolate.loops, 1000)

        }
        else {
            clearTimeout(DCI.interPolate.loops);
            $('#testLayer input').attr("disabled", false);

        }
    },
    //管道分级图只看其中一个时间点的图
    oneloop: function () {

        if (i <= freq) {
            DCI.interPolate.addImageLayer('layer', MapConfig.pipepngUrl + y + '/' + m + '/' + d + '/' + (Array(2).join(0) + i).slice(-2) + '/KPA/KPA.png',
                -34094.0786696, 4642.90213197, -9329.02913947, 23216.6892795, 2379, 1, i);

        }
        else {
            alert('请输入0-23之间的时间');

        }
    },

    /*嘉定区域插值图循环*/
    loopss: function () {

        if (k <= 23) {
            DCI.interPolate.addImageLayer('layer', MapConfig.testpngUrl + y + '/' + m + '/' + d + '/' + (Array(2).join(0) + k).slice(-2) + '/KPA/KPA.png',
                -42676.2431603, -1075.14970539, -947.776819777, 30221.20005, 2379, 0.8, k);
            k++;
            setTimeout(DCI.interPolate.loopss, 1000)

        }
        else {
            $('#interpolateLayer input').attr("disabled", false);
        }
    },
    oneloopss: function () {

        if (k <= 23) {
            DCI.interPolate.addImageLayer('layer', MapConfig.testpngUrl + y + '/' + m + '/' + d + '/' + (Array(2).join(0) + k).slice(-2) + '/KPA/KPA.png',
                -42676.2431603, -1075.14970539, -947.776819777, 30221.20005, 2379, 0.9, k);
        }
        else {
            alert('请输入0-23之间的时间');
        }
    },
    /**
        * 叠加插值图
        * @param{object} layer 图层对象或图层名
        * @param{string} imageUrl 图片的url地址
        * @param{number} xmin  图片范围的最小经度值
        * @param{number} ymin  图片范围的最小纬度值
        * @param{number} xmax  图片范围的最大经度值
        * @param{number} ymax  图片范围的最大纬度值
        * @param{?number} wkid  空间参考
        *@param{number} opacity 图片的透明度 0-1之间 值越小，透明度越高
    * */
    addImageLayer: function (layer, imageUrl, xmin, ymin, xmax, ymax, wkid, opacity, p) {
        require(["esri/layers/MapImageLayer",
            "esri/layers/MapImage"], function (MapImageLayer, MapImage) {
                var playImageLayer;
                if (typeof (layer) == "string") {
                    playImageLayer = DCI.interPolate.gplayer = DCI.interPolate.map.getLayer(layer);
                    if (playImageLayer == undefined || playImageLayer == null) {
                        playImageLayer = new MapImageLayer({ 'id': layer });
                        DCI.interPolate.map.addLayer(playImageLayer);
                    }
                }
                else {
                    playImageLayer = layer;
                }
                playImageLayer.setOpacity(opacity);
                var allImages = playImageLayer.getImages();
                // playImageLayer.removeAllImages();
                var spatialReference;
                if (wkid == null) {
                    spatialReference = window.map.spatialReference;
                }
                else {
                    spatialReference = new esri.SpatialReference({ wkid: 2379 });
                }
                var img = new MapImage({
                    'extent': {
                        'xmin': xmin,
                        'ymin': ymin,
                        'xmax': xmax,
                        'ymax': ymax,
                        'spatialReference': spatialReference
                    },
                    'href': imageUrl
                });

                if (p > 1) {
                    //$("#map_clock").css("background",'url(./Content/images/map/index/' + p + '.png) no-repeat');
                    document.getElementById("map_clock").style.background = 'url("'+DCI.interPolate.imgar[p].src+'") no-repeat';
                }


                playImageLayer.addImage(img);
                //设置延时移除之前图片避免播放的时候闪烁
                setTimeout(function () {
                    for (var i = 0; i < allImages.length; i++) {
                        if (allImages[i].href != imageUrl) {
                            playImageLayer.removeImage(allImages[i]);
                        }
                    }
                }, 100)
            });

    }

}