// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/vectorTiles/WorkerTileHandler","require exports dojo/Deferred ../../core/promiseUtils ./WorkerTile ./style/StyleRepository".split(" "),function(m,n,k,e,f,l){return function(){function b(){this._tiles=new Map;this._spriteInfo={};this._glyphInfo={}}b.prototype.reset=function(){var a=new k;this._spriteInfo={};this._glyphInfo={};var d=this._tiles;d.forEach(function(a){return a.setObsolete()});d.clear();a.resolve();return a.promise};b.prototype.getLayers=function(){return this._layers};
b.prototype.setLayers=function(a){this._layers=(new l(a)).layers;return e.resolve({data:""})};b.prototype.getTile=function(a,d){var b=this,g=a.key,c=f.pool.acquire();c.initialize(a.key,a.refKey,this,a.rotation);var h=a.cacheTile;return d.invoke("fetchTileData",a.refKey).then(function(a){return c.setDataAndParse(a.protobuff,d).then(function(a){h&&6!==c.status&&b._tiles.set(g,c);return a}).otherwise(function(a){c.setObsolete();f.pool.release(c);b._tiles["delete"](c.tileKey);return e.reject(a)})}).otherwise(function(a){c.setObsolete();
if(b._tiles.has(c.tileKey))b._tiles["delete"](c.tileKey);return e.reject(a)}).always(function(a){h||f.pool.release(c);return a})};b.prototype.update=function(a){var b=this._tiles.get(a.key);return b?b.updateSymbols(a.rotation):e.reject()};b.prototype.destructTileData=function(a){this._tiles.has(a.key)&&(f.pool.release(this._tiles.get(a.key)),this._tiles["delete"](a.key));return e.resolve()};b.prototype.fetchSprites=function(a,b){var d=[],g=this._spriteInfo;a.forEach(function(a){void 0===g[a]&&d.push(a)});
return 0===d.length?e.resolve():b.invoke("getSprites",{sprites:d}).then(function(a){a=a.spriteItems;for(var b in a)g[b]=a[b]})};b.prototype.getSpriteItems=function(){return this._spriteInfo};b.prototype.fetchGlyphs=function(a,b,f,g){var c=[],d=this._glyphInfo[b];d?f.forEach(function(a){d[a]||c.push(a)}):(d=this._glyphInfo[b]=[],f.forEach(function(a){return c.push(a)}));return 0===c.length?e.resolve():g.invoke("getGlyphs",{tileID:a,font:b,codePoints:c}).then(function(a){a=a.glyphItems;for(var b in a)d[b]=
a[b]})};b.prototype.getGlyphItems=function(a){return this._glyphInfo[a]};return b}()});