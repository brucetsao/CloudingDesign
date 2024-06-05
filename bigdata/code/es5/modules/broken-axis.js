!/**
 * Highcharts JS v11.4.1 (2024-04-04)
 *
 * (c) 2009-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */function(i){"object"==typeof module&&module.exports?(i.default=i,module.exports=i):"function"==typeof define&&define.amd?define("highcharts/modules/broken-axis",["highcharts"],function(t){return i(t),i.Highcharts=t,i}):i("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(i){"use strict";var t=i?i._modules:{};function n(i,t,n,o){i.hasOwnProperty(t)||(i[t]=o.apply(null,n),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:t,module:i[t]}})))}n(t,"Core/Axis/BrokenAxis.js",[t["Core/Axis/Stacking/StackItem.js"],t["Core/Utilities.js"]],function(i,t){var n,o=t.addEvent,e=t.find,r=t.fireEvent,s=t.isArray,a=t.isNumber,f=t.pick;return function(t){function n(){void 0!==this.brokenAxis&&this.brokenAxis.setBreaks(this.options.breaks,!1)}function l(){var i;(null===(i=this.brokenAxis)||void 0===i?void 0:i.hasBreaks)&&(this.options.ordinal=!1)}function u(){var i=this.brokenAxis;if(null==i?void 0:i.hasBreaks){for(var t=this.tickPositions,n=this.tickPositions.info,o=[],e=0;e<t.length;e++)i.isInAnyBreak(t[e])||o.push(t[e]);this.tickPositions=o,this.tickPositions.info=n}}function h(){this.brokenAxis||(this.brokenAxis=new d(this))}function c(){var i,t,n=this.isDirty,o=this.options.connectNulls,e=this.points,r=this.xAxis,s=this.yAxis;if(n)for(var a=e.length;a--;){var f=e[a],l=!(null===f.y&&!1===o)&&((null===(i=null==r?void 0:r.brokenAxis)||void 0===i?void 0:i.isInAnyBreak(f.x,!0))||(null===(t=null==s?void 0:s.brokenAxis)||void 0===t?void 0:t.isInAnyBreak(f.y,!0)));f.visible=!l&&!1!==f.options.visible}}function v(){this.drawBreaks(this.xAxis,["x"]),this.drawBreaks(this.yAxis,f(this.pointArrayMap,["y"]))}function k(i,t){var n,o,e,s,l=this,u=l.points;if(null===(n=null==i?void 0:i.brokenAxis)||void 0===n?void 0:n.hasBreaks){var h=i.brokenAxis;t.forEach(function(t){o=(null==h?void 0:h.breakArray)||[],e=i.isXAxis?i.min:f(l.options.threshold,i.min);var n,c,v=null===(c=null===(n=null==i?void 0:i.options)||void 0===n?void 0:n.breaks)||void 0===c?void 0:c.filter(function(i){for(var t=!0,n=0;n<o.length;n++){var e=o[n];if(e.from===i.from&&e.to===i.to){t=!1;break}}return t});u.forEach(function(n){s=f(n["stack"+t.toUpperCase()],n[t]),o.forEach(function(t){if(a(e)&&a(s)){var o="";e<t.from&&s>t.to||e>t.from&&s<t.from?o="pointBreak":(e<t.from&&s>t.from&&s<t.to||e>t.from&&s>t.to&&s<t.from)&&(o="pointInBreak"),o&&r(i,o,{point:n,brk:t})}}),null==v||v.forEach(function(t){r(i,"pointOutsideOfBreak",{point:n,brk:t})})})})}}function p(){var t=this.currentDataGrouping,n=null==t?void 0:t.gapSize,o=this.points.slice(),e=this.yAxis,r=this.options.gapSize,s=o.length-1;if(r&&s>0){"value"!==this.options.gapUnit&&(r*=this.basePointRange),n&&n>r&&n>=this.basePointRange&&(r=n);for(var a=void 0,f=void 0;s--;)if(f&&!1!==f.visible||(f=o[s+1]),a=o[s],!1!==f.visible&&!1!==a.visible){if(f.x-a.x>r){var l=(a.x+f.x)/2;o.splice(s+1,0,{isNull:!0,x:l}),e.stacking&&this.options.stacking&&((e.stacking.stacks[this.stackKey][l]=new i(e,e.options.stackLabels,!1,l,this.stack)).total=0)}f=a}}return this.getGraphPath(o)}t.compose=function(i,t){if(!i.keepProps.includes("brokenAxis")){i.keepProps.push("brokenAxis"),o(i,"init",h),o(i,"afterInit",n),o(i,"afterSetTickPositions",u),o(i,"afterSetOptions",l);var e=t.prototype;e.drawBreaks=k,e.gappedPath=p,o(t,"afterGeneratePoints",c),o(t,"afterRender",v)}return i};var d=function(){function i(i){this.hasBreaks=!1,this.axis=i}return i.isInBreak=function(i,t){var n=i.repeat||1/0,o=i.from,e=i.to-i.from,r=t>=o?(t-o)%n:n-(o-t)%n;return i.inclusive?r<=e:r<e&&0!==r},i.lin2Val=function(t){var n=this.brokenAxis,o=n&&n.breakArray;if(!o||!a(t))return t;var e,r,s=t;for(r=0;r<o.length&&!((e=o[r]).from>=s);r++)e.to<s?s+=e.len:i.isInBreak(e,s)&&(s+=e.len);return s},i.val2Lin=function(t){var n=this.brokenAxis,o=n&&n.breakArray;if(!o||!a(t))return t;var e,r,s=t;for(r=0;r<o.length;r++)if((e=o[r]).to<=t)s-=e.len;else if(e.from>=t)break;else if(i.isInBreak(e,t)){s-=t-e.from;break}return s},i.prototype.findBreakAt=function(i,t){return e(t,function(t){return t.from<i&&i<t.to})},i.prototype.isInAnyBreak=function(t,n){var o,e,r,s=this.axis,l=s.options.breaks||[],u=l.length;if(u&&a(t)){for(;u--;)i.isInBreak(l[u],t)&&(o=!0,e||(e=f(l[u].showPoints,!s.isXAxis)));r=o&&n?o&&!e:o}return r},i.prototype.setBreaks=function(t,n){var o=this,e=o.axis,l=s(t)&&!!t.length&&!!Object.keys(t[0]).length;e.isDirty=o.hasBreaks!==l,o.hasBreaks=l,t!==e.options.breaks&&(e.options.breaks=e.userOptions.breaks=t),e.forceRedraw=!0,e.series.forEach(function(i){i.isDirty=!0}),l||e.val2lin!==i.val2Lin||(delete e.val2lin,delete e.lin2val),l&&(e.userOptions.ordinal=!1,e.lin2val=i.lin2Val,e.val2lin=i.val2Lin,e.setExtremes=function(i,t,n,r,s){if(o.hasBreaks){for(var a=this.options.breaks||[],f=void 0;f=o.findBreakAt(i,a);)i=f.to;for(;f=o.findBreakAt(t,a);)t=f.from;t<i&&(t=i)}e.constructor.prototype.setExtremes.call(this,i,t,n,r,s)},e.setAxisTranslation=function(){if(e.constructor.prototype.setAxisTranslation.call(this),o.unitLength=void 0,o.hasBreaks){var t,n,s,l,u=e.options.breaks||[],h=[],c=[],v=f(e.pointRangePadding,0),k=0,p=e.userMin||e.min,d=e.userMax||e.max;u.forEach(function(t){n=t.repeat||1/0,a(p)&&a(d)&&(i.isInBreak(t,p)&&(p+=t.to%n-p%n),i.isInBreak(t,d)&&(d-=d%n-t.from%n))}),u.forEach(function(i){if(s=i.from,n=i.repeat||1/0,a(p)&&a(d)){for(;s-n>p;)s-=n;for(;s<p;)s+=n;for(l=s;l<d;l+=n)h.push({value:l,move:"in"}),h.push({value:l+i.to-i.from,move:"out",size:i.breakSize})}}),h.sort(function(i,t){return i.value===t.value?("in"===i.move?0:1)-("in"===t.move?0:1):i.value-t.value}),t=0,s=p,h.forEach(function(i){1===(t+="in"===i.move?1:-1)&&"in"===i.move&&(s=i.value),0===t&&a(s)&&(c.push({from:s,to:i.value,len:i.value-s-(i.size||0)}),k+=i.value-s-(i.size||0))}),o.breakArray=c,a(p)&&a(d)&&a(e.min)&&(o.unitLength=d-p-k+v,r(e,"afterBreaks"),e.staticScale?e.transA=e.staticScale:o.unitLength&&(e.transA*=(d-e.min+v)/o.unitLength),v&&(e.minPixelPadding=e.transA*(e.minPointOffset||0)),e.min=p,e.max=d)}}),f(n,!0)&&e.chart.redraw()},i}();t.Additions=d}(n||(n={})),n}),n(t,"masters/modules/broken-axis.src.js",[t["Core/Globals.js"],t["Core/Axis/BrokenAxis.js"]],function(i,t){return i.BrokenAxis=i.BrokenAxis||t,i.BrokenAxis.compose(i.Axis,i.Series),i})});