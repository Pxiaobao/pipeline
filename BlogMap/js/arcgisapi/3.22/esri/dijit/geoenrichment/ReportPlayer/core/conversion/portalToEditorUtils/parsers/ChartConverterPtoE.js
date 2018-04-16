// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/conversion/portalToEditorUtils/parsers/ChartConverterPtoE","dojo/_base/lang esri/dijit/geoenrichment/utils/ImageUtil esri/dijit/geoenrichment/utils/JsonXmlConverter ../../../charts/chartUtils/ChartJsonUtil ../../ConversionUtil esri/dijit/geoenrichment/ReportPlayer/core/charts/chartUtils/ChartTypes".split(" "),function(z,B,k,A,c,t){function C(a,c,b){return k.queryJson(a,"series").filter(function(a){return a.tags&&a.tags[0]&&"point"==a.tags[0].name}).map(function(a){if(!a.tags)return null;
a.attributes=a.attributes||{};return{label:a.attributes.Text||"",color:v(a.attributes.color),thickness:a.attributes.thickness,points:a.tags.map(function(a){a.attributes=a.attributes||{};var f=a.tags&&a.tags[0],g=(f=(f=f&&f.attributes&&f.attributes.f)&&f.substr(f.indexOf(".")+1))&&f.toUpperCase(),g=c(g);return A.createChartPoint(v(a.attributes.color),a.attributes.Text||"",f,g,b)}).filter(function(a){return a&&(a.calculator||a.script)})}}).filter(function(a){return a&&a.points&&!!a.points.length})}
function D(a){return(a=k.queryJson(a,"BackImage")[0])&&a.tags&&"#text"==a.tags[0].name?B.base64DataToDataURL(a.tags[0].text):null}function E(a){if("string"!==typeof a)return 0;a=a.replace("%","");return"0"===a?0:a.replace("0.","").length}function v(a){return"string"==typeof a&&6==a.length&&-1==a.indexOf("#")?"#"+a:a}return{portalToEditor:function(a,u,b,p,g){function f(a,b){return void 0===a?b:a}var m=C(a,b,p);if(!m.length)return null;b=a.attributes;var n=k.queryJson(a,"chartTitle")[0],l=k.queryJson(a,
"legend")[0],d=k.queryJson(a,"xAxis")[0],e=k.queryJson(a,"yAxis")[0];p=k.queryJson(a,"chartIcon");var w=k.queryJson(a,"floatingIcon"),x=k.queryJson(a,"floatingText"),y=k.queryJson(a,"trigger");n.attributes=n.attributes||{};l.attributes=l.attributes||{};d.attributes=d.attributes||{};e.attributes=e.attributes||{};m.forEach(function(a){a.thickness=Number(a.thickness)});var h;if(b.type==t.COLUMN||b.type==t.BAR)h=1<m[0].thickness?"Large":1>m[0].thickness?"Small":"Medium";var q=d.tags&&d.tags[0].attributes&&
d.tags[0].attributes,r=e.tags&&e.tags[0].attributes&&e.tags[0].attributes;a=D(a);h={isChart:!0,type:b._type||b.type,seriesItems:m,visualProperties:{width:c.ptToPx(b.width),height:c.ptToPx(b.height),backgroundColor:v(b.backColor),barBorders:b.barBorders,dataLabels:b.dataLabels,view3D:!!b.view3D,origin:b.origin||0,lineThickness:b.type==t.LINE&&m[0].thickness||void 0,columnThickness:h,backgroundImageData:a,dataLabelsDecimals:E(b.CustomPercentFormat||b.CustomValueFormat),title:{text:n.attributes.text,
align:n.attributes.align&&n.attributes.align.toLowerCase(),style:c.ptToPxObj(c.parseStyleString(n.attributes.style))},xAxis:{show:"None"!=d.attributes.placement,showTicks:d.attributes.ticks,style:c.ptToPxObj(c.parseStyleString(d.attributes.style)),title:q&&q.text,gridLines:d.attributes.gridlines,gridLinesCentered:d.attributes.gridlinesCentered,gridLinesOpacity:f(d.attributes.gridlinesOpacity,1),titleStyle:q&&c.ptToPxObj(c.parseStyleString(q.style)),placement:"OtherSide"==d.attributes.placement?"OtherSide":
void 0,labelsAngle:d.attributes.labelsAngle||0},yAxis:{show:"None"!=e.attributes.placement,showTicks:e.attributes.ticks,style:c.ptToPxObj(c.parseStyleString(e.attributes.style)),title:r&&r.text,gridLines:e.attributes.gridlines,gridLinesCentered:e.attributes.gridlinesCentered,gridLinesOpacity:f(e.attributes.gridlinesOpacity,1),titleStyle:r&&c.ptToPxObj(c.parseStyleString(r.style)),placement:"OtherSide"==e.attributes.placement?"OtherSide":void 0,labelsAngle:e.attributes.labelsAngle||0},legend:{hasBorder:l.attributes.hasBorder,
labelParts:l.attributes.labelParts,placement:l.attributes.placement,placementOffset:l.attributes.placementOffset,style:c.ptToPxObj(c.parseStyleString(l.attributes.style))},dataLabelsStyle:c.ptToPxObj(c.parseStyleString(b.dataLabelsStyle))}};h.isMultiFeatureChart=!!b.isMultiFeatureChart;z.mixin(h.visualProperties,{donutHolePercent:b.donutHolePercent,donutGap:b.donutGap,ringBackgroundColor:b.ringBackgroundColor,isStacked:b.isStacked,showAxisIcons:b.showAxisIcons,showChartIcons:b.showChartIcons,dataLabelsInside:b.dataLabelsInside,
dataLabelsStackedInColumns:b.dataLabelsStackedInColumns,sorting:b.sorting});p&&p.length&&(h.visualProperties.chartIcons=p.map(function(a){return g.parsers.getParser("field").parseField(a.tags[0],a,null,g)}));w&&w.length&&(h.visualProperties.floatingIcons=w.map(function(a){return g.parsers.getParser("section").parseTable(a.tags[0],g)}));x&&x.length&&(h.visualProperties.floatingTexts=x.map(function(a){return g.parsers.getParser("section").parseTable(a.tags[0],g)}));y&&y.length&&(h.visualProperties.conditionalStyling=
g.parsers.getParser("field").parseFieldTrigger(y[0]));a={};u.attributes&&u.attributes.style&&z.mixin(a,c.parseStyleString(u.attributes.style));c.ptToPxObj(a);A.provideDefaultValueForMissing(h,{font:a});return h}}});