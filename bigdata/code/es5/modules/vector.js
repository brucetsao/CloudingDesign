!/**
 * Highcharts JS v11.4.1 (2024-04-04)
 *
 * Vector plot series module
 *
 * (c) 2010-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */function(t){"object"==typeof module&&module.exports?(t.default=t,module.exports=t):"function"==typeof define&&define.amd?define("highcharts/modules/vector",["highcharts"],function(e){return t(e),t.Highcharts=e,t}):t("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(t){"use strict";var e=t?t._modules:{};function r(t,e,r,o){t.hasOwnProperty(e)||(t[e]=o.apply(null,r),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,module:t[e]}})))}r(e,"Series/Vector/VectorSeriesDefaults.js",[],function(){return{lineWidth:2,marker:void 0,rotationOrigin:"center",states:{hover:{lineWidthPlus:1}},tooltip:{pointFormat:"<b>[{point.x}, {point.y}]</b><br/>Length: <b>{point.length}</b><br/>Direction: <b>{point.direction}\xb0</b><br/>"},vectorLength:20}}),r(e,"Series/Vector/VectorSeries.js",[e["Core/Animation/AnimationUtilities.js"],e["Core/Globals.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"],e["Series/Vector/VectorSeriesDefaults.js"]],function(t,e,r,o,i){var n,s=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),a=t.animObject,c=r.series,p=r.seriesTypes.scatter,h=o.arrayMax,l=o.extend,u=o.merge,d=o.pick,f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.animate=function(t){t?this.markerGroup.attr({opacity:.01}):this.markerGroup.animate({opacity:1},a(this.options.animation))},e.prototype.arrow=function(t){var e=t.length/this.lengthMax*this.options.vectorLength/20,r={start:10*e,center:0,end:-10*e}[this.options.rotationOrigin]||0;return[["M",0,7*e+r],["L",-1.5*e,7*e+r],["L",0,10*e+r],["L",1.5*e,7*e+r],["L",0,7*e+r],["L",0,-10*e+r]]},e.prototype.drawPoints=function(){for(var t=this.chart,e=0,r=this.points;e<r.length;e++){var o=r[e],i=o.plotX,n=o.plotY;!1===this.options.clip||t.isInsidePlot(i,n,{inverted:t.inverted})?(o.graphic||(o.graphic=this.chart.renderer.path().add(this.markerGroup).addClass("highcharts-point highcharts-color-"+d(o.colorIndex,o.series.colorIndex))),o.graphic.attr({d:this.arrow(o),translateX:i,translateY:n,rotation:o.direction}),this.chart.styledMode||o.graphic.attr(this.pointAttribs(o))):o.graphic&&(o.graphic=o.graphic.destroy())}},e.prototype.pointAttribs=function(t,e){var r=this.options,o=(null==t?void 0:t.color)||this.color,i=this.options.lineWidth;return e&&(o=r.states[e].color||o,i=(r.states[e].lineWidth||i)+(r.states[e].lineWidthPlus||0)),{stroke:o,"stroke-width":i}},e.prototype.translate=function(){c.prototype.translate.call(this),this.lengthMax=h(this.lengthData)},e.defaultOptions=u(p.defaultOptions,i),e}(p);return l(f.prototype,{drawGraph:e.noop,getSymbol:e.noop,markerAttribs:e.noop,parallelArrays:["x","y","length","direction"],pointArrayMap:["y","length","direction"]}),r.registerSeriesType("vector",f),f}),r(e,"masters/modules/vector.src.js",[e["Core/Globals.js"]],function(t){return t})});