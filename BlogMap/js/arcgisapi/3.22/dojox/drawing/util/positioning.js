//>>built
define("dojox/drawing/util/positioning",["./common"],function(g){return{label:function(a,b){var f=.5*(a.x+b.x),e=.5*(a.y+b.y),d=g.slope(a,b),c=4/Math.sqrt(1+d*d);if(b.y>a.y&&b.x>a.x||b.y<a.y&&b.x<a.x)c=-c,e-=20;return{x:f+-c*d,y:e+c,foo:"bar",align:b.x<a.x?"end":"start"}},angle:function(a,b){var f=.7*a.x+.3*b.x,e=.7*a.y+.3*b.y,d=g.slope(a,b),c=4/Math.sqrt(1+d*d);b.x<a.x&&(c=-c);var h=b.y>a.y?"end":"start",e=e+c+(b.x>a.x?10:-10);return{x:f+-c*d,y:e,align:h}}}});