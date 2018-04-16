// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/tooltips/ChartTooltip","dojo/_base/declare dojo/string dojo/dom-class dojo/dom-construct dojo/dom-style dojox/charting/action2d/Tooltip ../chartUtils/ChartTypes ../../supportClasses/conditionalStyling/ConditionalStyleLegendBuilder dojo/i18n!../../../../../../nls/jsapi".split(" "),function(q,v,z,d,r,t,m,w,a){a=a.geoenrichment.dijit.ReportPlayer.ReportPlayer;return q(t,{showStatistics:!0,_chartType:null,constructor:function(){var b=this,a=this.text;
this.text=function(e,d){var f;f=e.run&&e.run.data&&e.run.data[e.index];f=f.tooltip&&"object"==typeof f.tooltip?b._renderTooltip(f.tooltip):void 0;return f||a(e,d)}},setChartType:function(b){this._chartType=b},_renderTooltip:function(b){function u(b,k){var a=d.create("div",{"class":"chartTooltip_title esriGERowHigh"},g,"first");k&&e(k,a);h(b,a)}function e(b,k){var a=d.create("div",{"class":"chartTooltip_color dijitInline esriGESpaceAfterBig"},k);r.set(a,"backgroundColor",b||"transparent")}function h(b,
a){return d.create("div",{"class":"chartTooltip_label dijitInline esriGESpaceAfterBig",innerHTML:b},a)}function f(b,a){return d.create("div",{"class":"chartTooltip_value dijitInline esriGESpaceAfterBig",innerHTML:b},a)}function q(b){var a=0;b.forEach(function(b){a=Math.max(a,r.get(b,"width"))});b.forEach(function(b){r.set(b,"width",a+"px")})}function p(a,k,c){function n(a,k){if(b[a]){var c=d.create("div",{"class":"chartTooltip_row esriGERowHigh"},g);e(null,c);l.push(h(k,c));f(b[a],c)}}n("percentLabel",
a);n("maxValueLabel",k);n("avgValueLabel",c)}function t(){var n=b.getGroup&&b.getGroup();n&&1!=n.length?(u(b.label),e(b.color,c),l.push(h(b.seriesLabel,c)),f(b.valueLabel,c),p(a.weightInSeries,a.maxValueInSeries,a.avgValueInSeries),b.getGroup().forEach(function(a){if(b!==a){var c=d.create("div",{"class":"chartTooltip_row esriGERowHigh"},g);e(a.color,c);l.push(h(a.seriesLabel,c));f(a.valueLabel,c)}})):(e(b.color,c),l.push(h(b.label,c)),f(b.valueLabel,c),p(a.weight,a.maxValue,a.avgValue))}function x(){u(b.label);
e(b.color,c);l.push(h(b.seriesLabel,c));f(b.valueLabel,c);p(a.weightInSeries,a.maxValueInSeries,a.avgValueInSeries);b.getGroup().forEach(function(a){if(b!==a){var c=d.create("div",{"class":"chartTooltip_row esriGERowHigh"},g);e(a.color,c);l.push(h(a.seriesLabel,c));f(a.valueLabel,c)}})}var l=[],g=d.create("div",{"class":"chartContainer_chartTooltip"},document.body);if(this.showStatistics){var c=d.create("div",{"class":"chartTooltip_row esriGERowHigh"},g);if(this._chartType==m.PIE||this._chartType==
m.DONUT||this._chartType==m.RING)u(b.label,b.color),e(null,c),h(v.substitute(a.pieChartTooltip_label,{value:b.valueLabel,total:b.sumValueLabel}),c),p(a.weight,a.maxValue,a.avgValue);this._chartType==m.COLUMN||this._chartType==m.BAR?t():this._chartType==m.LINE&&x();q(l)}else d.create("div",{"class":"chartTooltip_row esriGERowHigh",innerHTML:a.colorOfBackWillDependOnValue},g);b.conditionalStyling&&d.place(w.createLegendNode(b.conditionalStyling,"chart",b.value),g);var y=g.outerHTML;d.destroy(g);return y}})});