// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/vectorTiles/StencilClipGenerator",["require","exports","./GeometryUtils"],function(m,n,k){var l=function(){function c(a){this.children=[];this.stageTile=a}c.prototype.tryAdd=function(a){if(c.isChildOf(a,this.stageTile.key)){for(var b=0,f=this.children;b<f.length;b++)if(c.isChildOf(a,f[b]))return;this.children.push(a)}};c.prototype.equals=function(a){if(this.stageTile.key.id!==a.stageTile.key.id||this.children.length!==a.children.length)return!1;for(var b=0;b<
this.children.length;b++)if(this.children[b].id!==a.children[b].id)return!1;return!0};c.isChildOf=function(a,b){if(a.level<=b.level)return!1;var f=a.level-b.level,d=a.col>>f;return a.row>>f===b.row&&d===b.col};return c}();return function(){function c(){this._tileGroups=[];this._bitOffset=0}c.prototype.update=function(a){this._tileGroups=[];this._bitOffset=0;if(0!==a.length){for(var b=[],f=a.length,d=0;d<f;d++)if(a[d].attached&&a[d].visible){for(var c=new l(a[d]),e=d+1;e<f;e++)c.tryAdd(a[e].key);c.children.sort(function(a,
b){return a.level<b.level?-1:1});this._reuseExisting(c)||b.push(c)}if(0<b.length){a=Math.ceil(k.log2(b.length+1));f=(1<<a)-1<<this._bitOffset;d=1;c=void 0;for(e=0;e<b.length;e++){var h=b[e],c=d++<<this._bitOffset;h.stageTile.stencilData.mask=f;h.stageTile.stencilData.reference=c}this._bitOffset+=a;this._tileGroups.push(b)}}};c.prototype._reuseExisting=function(a){for(var b=0,c=this._tileGroups;b<c.length;b++)for(var d=0,g=c[b];d<g.length;d++){var e=g[d];if(e.equals(a)&&e.stageTile.stencilData.mask===
a.stageTile.stencilData.mask&&e.stageTile.stencilData.reference===a.stageTile.stencilData.reference)return!0}return!1};return c}()});