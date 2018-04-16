/* GP服务的调用方法，目前没用到项目中 */

var gp;
var gpServiceUrl = "http://localhost:6080/arcgis/rest/services/hcz/GPServer/hcz";
    //从json格式构造插值图数据源
    var featureSet = new esri.tasks.FeatureSet(food);//food为模拟数据源json，直接从food.js文件读取
    var clipshp = new esri.tasks.FeatureSet(clip);//clip.js为剪切的模板文件
    gp = new esri.tasks.Geoprocessor(gpServiceUrl); 
    gp.setOutSpatialReference({wkid:2379}); 
    gp.setUpdateDelay(2000);             
    //设置GP服务参数  
    var params = {
        pointshp : featureSet,
        Z : "tkpa",
        jd : clipshp
        };
    //cleanup any results from previous runs  
    //cleanup();
    gp.submitJob(params, jobResult, gpJobStatus);

    var gp;
    var gpServiceUrl = "http://localhost:6080/arcgis/rest/services/hcz/GPServer/hcz";
        //从json格式构造插值图数据源
        var featureSet = new esri.tasks.FeatureSet(food);//food为模拟数据源json，直接从food.js文件读取
        var clipshp = new esri.tasks.FeatureSet(clip);//clip.js为剪切的模板文件
        gp = new esri.tasks.Geoprocessor(gpServiceUrl); 
        gp.setOutSpatialReference({wkid:2379}); 
        gp.setUpdateDelay(2000);             
        //设置GP服务参数  
        var params = {
            pointshp : featureSet,
            Z : "tkpa",
            jd : clipshp
            };
        //cleanup any results from previous runs  
        //cleanup();
        gp.submitJob(params, jobResult, gpJobStatus);

 

        //GP完成之后加载结果图层  
        function jobResult(jobinfo) {
            var imageParam = new esri.layers.ImageParameters(); 
                       
            imageParam.imageSpatialReference = new esri.SpatialReference({wkid:2379});  
            imageParam.transparent = true;  
            gp.getResultImageLayer(jobinfo.jobId,"out",imageParam,function(gpLayer){
           gplayer = gpLayer;
           gplayer.spatialReference = { "wkid": 2379 };
           gplayer.setOpacity(0.7);
          // DCI.interPolate.map.removeLayer(gplayer);
          //var featureSet = new esri.tasks.FeatureSet("http://localhost:6080/arcgis/rest/services/hcz/GPServer/hcz/jobs/j714761f2c32646458c47813992065ea3/results/out");
          //  map.addLayer(gplayer);
          //  DCI.interPolate.showLegend();


       function remove() {          
           DCI.interPolate.map.removeLayer(gplayer);
           map.addLayer(gplayer);
       } 

            });  
            
        } 