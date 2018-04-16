if (typeof DCI == "undefined") { var DCI = {}; }
DCI.predict = {
    map: null,
    html:"",
    //模块初始化函数
    Init: function (map) {
        DCI.predict.map = map;
        //监听check点击事件
        $("#predictLayer input").bind("click", function () {
            if (this.checked) {
                var predictdiv = document.getElementById("map_predictlist");
                if (predictdiv) {
                    predictdiv.style.display = "block";
                 //   document.getElementById("map_predictlist").innerHTML = DCI.predict.html;
                }else{
                    var predictlist = document.createElement("div");
                    predictlist.id = "map_predictlist";
                    predictlist.className = "map-predictlist";
                  //  clock.backgroundImage = "../../Content/images/map/index/1.png";
                    document.getElementById("map").appendChild(predictlist);
                    DCI.predict.loadpredictLayer(DCI.predict.map);
                }
 
            }
            else {
                document.getElementById("map_predictlist").style.display = "none";
            }
        })
    },
    loadpredictLayer: function (map) {
        var htmls = "";
      
        $.ajax({
            url: MapConfig.dredicturl,
            type: "GET",
            dataType: 'JSON',
            success: function(result){

                htmls = htmls + "<table class=\"imagetable\">";
                htmls = htmls + '<tr><th>编号</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th>'+
                '<th>8</th><th>9</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th><th>16</th>'+
                '<th>17</th><th>18</th><th>19</th><th>20</th><th>21</th><th>22</th><th>23</th></tr>';
                for(var i=0;i<result.predict.length;i++){
                    htmls = htmls + "<tr><td>"+result.predict[i][0].id+"</td>";
                    for(var j=0;j<result.predict[i][1].values.length;j++){
                        htmls = htmls + "<td>"+result.predict[i][1].values[j]+"</td>";
                    }
                    htmls = htmls + "</tr>";
                }
                DCI.predict.html = htmls = htmls + "</table>";
                document.getElementById("map_predictlist").innerHTML = htmls;
              
            },
            error:function (result){
                console.log('error')
            }
           }); 

    }

}