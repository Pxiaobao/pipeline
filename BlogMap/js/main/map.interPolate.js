if (typeof DCI == "undefined") { var DCI = {}; }
DCI.interPolate = {
    map: null,
    gplayer: null,
    mins: null,
    i:null,
    k:null,
    y:null,
    m:null,
    d:null,
    hou:null,
    //模块初始化函数
    Init: function (map) {
        DCI.interPolate.map = map;
        var c=0;
        var t;

//压力图模块
        $("#testLayer input").bind("click", function () {
            if (this.checked) {
                var date = start.value;
                y = date.substr(0,4);
                m = date.substr(5,2);
                d = date.substr(8,2);
                if(hour.value == ""){
                    i=0;
                    DCI.interPolate.loops();
                    this.disabled="disabled";                   
                }
                else{
                    i=hour.value;
                    DCI.interPolate.oneloop();
                }
                DCI.interPolate.showLegend(); 

            }       
            else {
                DCI.interPolate.gplayer.removeAllImages();
                DCI.interPolate.hideLegend(); 
            }
        })
        //监听check点击事件
        $("#interpolateLayer input").bind("click", function () {
            if (this.checked) {
                var date = start.value;
                y = date.substr(0,4);
                m = date.substr(5,2);
                d = date.substr(8,2);
                if(hour.value == ""){
                this.disabled="disabled";
               
                k=1;
               
                DCI.interPolate.loopss(k);
                }
                else{
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
                document.getElementById("map").appendChild(legendDiv);
                


                var _map_clock = "map_clock";
                clock = document.createElement("div");
                clock.id = _map_clock;
                clock.className = "map-clock1";
              //  clock.backgroundImage = "../../Content/images/map/index/1.png";
                document.getElementById("map").appendChild(clock);

		    }

		},
        /*隐藏图例*/
		hideLegend: function () {
		    var legendDiv = document.getElementById("map_legend");
		    if (legendDiv) {
                legendDiv.style.display = "none";
                
                document.getElementById("map_clock").style.background='url(./Content/images/map/index/1.png)';
                document.getElementById("map_clock").style.display = "none";
		    }
        },
        
        /*管道分级图循环显示*/
        loops: function (){
            
            if(i<=23){
                DCI.interPolate.addImageLayer('layer',MapConfig.pipepngUrl+y+'/'+m+'/'+d+'/'+(Array(2).join(0)+i).slice(-2)+'/KPA/KPA.png',
                -30687.5614399,1977.21971727,2332.50460026,26742.2692474,2379,1,i);
                    i++;
                setTimeout(DCI.interPolate.loops, 1000 )

                }
                else {
                    clearTimeout(DCI.interPolate.loops); 
                    $('#testLayer input').attr("disabled",false);

                }
        },
        //管道分级图只看其中一个时间点的图
        oneloop: function (){
            
            if(i<=23){
                DCI.interPolate.addImageLayer('layer',MapConfig.pipepngUrl+y+'/'+m+'/'+d+'/'+(Array(2).join(0)+i).slice(-2)+'/KPA/KPA.png',
                -30687.5614399,1977.21971727,2332.50460026,26742.2692474,2379,1,i);

                }
                else {
                   alert('请输入0-23之间的时间');

                }
        },

        /*嘉定区域插值图循环*/
        loopss: function (){
            
            if(k<=23){   
                DCI.interPolate.addImageLayer('layer',MapConfig.testpngUrl+y+'/'+m+'/'+d+'/'+(Array(2).join(0)+k).slice(-2)+'/KPA/KPA.png',
                -42676.2431603,-1075.14970539,-947.776819777,30221.20005,2379,0.8,k);
                    k++;
                    setTimeout(DCI.interPolate.loopss, 1000 )

                }
            else
            {
                $('#interpolateLayer input').attr("disabled",false);
            }
            },
        oneloopss: function (){
                
            if(k<=23){   
                DCI.interPolate.addImageLayer('layer',MapConfig.testpngUrl+y+'/'+m+'/'+d+'/'+(Array(2).join(0)+k).slice(-2)+'/KPA/KPA.png',
                -42676.2431603,-1075.14970539,-947.776819777,30221.20005,2379,0.8,k);
                    }
                else
                {
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
        addImageLayer: function(layer, imageUrl, xmin, ymin, xmax, ymax, wkid, opacity,p){
            require(["esri/layers/MapImageLayer",
            "esri/layers/MapImage"], function (MapImageLayer, MapImage) {
            var playImageLayer;
                if (typeof(layer) == "string") {
                    playImageLayer = DCI.interPolate.gplayer = DCI.interPolate.map.getLayer(layer);
                    if (playImageLayer == undefined || playImageLayer == null) {
                        playImageLayer = new MapImageLayer({'id': layer});
                        DCI.interPolate.map.addLayer(playImageLayer);
                    }
                }
                else {
                    playImageLayer = layer;
                }
                playImageLayer.setOpacity(opacity);
                var allImages=playImageLayer.getImages();
                // playImageLayer.removeAllImages();
                var spatialReference;
                if (wkid == null) {
                    spatialReference = window.map.spatialReference;
                }
                else {
                    spatialReference = new esri.SpatialReference({wkid: 2379});
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
           
                    if(p>1){
                        document.getElementById("map_clock").style.background='url(./Content/images/map/index/'+ p +'.png) no-repeat';                      
                        } 

                
                playImageLayer.addImage(img);
                //设置延时移除之前图片避免播放的时候闪烁
                setTimeout(function () {
                    for(var i=0;i<allImages.length;i++)
                    {
                        if(allImages[i].href!=imageUrl)
                        {
                            playImageLayer.removeImage(allImages[i]);
                        }
                    }
                },100)
            });

            }

}