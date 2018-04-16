// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/AttachmentsInfographic","dojo/_base/declare dojo/_base/lang dojo/dom-construct dojo/dom-style dijit/_WidgetBase dijit/_TemplatedMixin esri/dijit/geoenrichment/_Invoke ../supportClasses/images/DefaultAttachment esri/dijit/geoenrichment/ImageNavigator".split(" "),function(f,g,q,d,h,k,l,m,n){function p(){return b?b:b={getAttachments:function(){return[{description:"Esri headquarters in Redlands CA, summer time",getThumbnail:function(){return m}},
{description:"Sample image",getThumbnail:function(){return"http://mappinggis.com/wp-content/uploads/2016/02/Inicio.png"}},{description:"Sample image",getThumbnail:function(){return"http://agamsgis.com/images/Esri.png"}}]}}}var b;return f([h,k,l],{templateString:"\x3cdiv data-dojo-attach-point\x3d'viewDiv'\x3e\x3c/div\x3e",viewModel:null,themeContext:null,theme:null,imageNavigator:null,_currentInfographicJson:null,postCreate:function(){this.inherited(arguments);this.imageNavigator=(new n({showNotes:!0,
showThumbnails:!1,canEditNotes:!1,canRemoveNotes:!1})).placeAt(this.viewDiv);this.own(this.imageNavigator)},updateInfographic:function(a){var b=this;if(this.viewDiv){this._currentInfographicJson=a;var e=this.viewModel.getStaticInfographicDefaultStyles(this.theme||this.themeContext);d.set(this.viewDiv,"backgroundColor",a.style.backgroundColor||e&&e.backgroundColor);this._resizeContent();["showNotes","showThumbnails"].forEach(function(c){void 0!==a[c]&&(b.imageNavigator[c]=a[c])});this.invoke("_doUpdateContent",
50)}},_doUpdateContent:function(){var a=this.viewModel.dynamicReportInfo?this.viewModel.dynamicReportInfo.attachmentsStore:p();this.imageNavigator.update(a,{useCircularMask:this._currentInfographicJson.useCircularMask,alwaysShowCaptions:this._currentInfographicJson.alwaysShowCaptions,scaleToCover:this._currentInfographicJson.scaleToCover})},_resizeContent:function(){this._currentInfographicJson.style.width=this.width;this._currentInfographicJson.style.height=this.height;d.set(this.viewDiv,{width:this.width+
"px",height:this.height+"px"});this.imageNavigator.setHeight(this.height)},width:null,height:null,resize:function(a,b){void 0!==a&&(this.width=a,this.height=b);this.invoke("_resizeContent",50)},notifyShown:function(){this.resize()},toJson:function(){return g.clone(this._currentInfographicJson)},getVisualState:function(){return{imageIndex:this.imageNavigator.getImageIndex()}},setVisualState:function(a){a&&void 0!==a.imageIndex&&this.imageNavigator.setImageIndex(a.imageIndex)}})});