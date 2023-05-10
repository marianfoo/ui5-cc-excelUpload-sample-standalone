/*!
 * SAPUI5
 * (c) Copyright 2009-2022 SAP SE. All rights reserved.
 */
sap.ui.define(["sap/chart/ChartLog","sap/chart/data/TimeDimension"],function(e,r){"use strict";var n={};n.find=function(e,r){for(var n=0;n<r.length;n++){if(e===r[n].getName()){return r[n]}}return null};n.isNumber=function(){for(var e=0;e<arguments.length;e++){if(typeof arguments[e]!=="number"){return false}}return true};n.thresholdValue=function(e){e=e.filter(function(r){return e!=null});var r=e.map(function(e){return typeof e==="string"||e instanceof String});return function(n,i){for(var t=0;t<e.length;t++){var o;if(r[t]){if(n[e[t]]!=null){o=n[e[t]]}else{o=i[e[t]]}}else{o=e[t]}if(o!=null){return o}}}};n.isInRange=function(e,r,i,t,o){if(!n.isNumber(e,r,i)){return false}var a=t?r<=e:r<e;var s=o?e<=i:e<i;return a&&s};n.assignColor=function(e,r){switch(r){case 1:return[e[3]];case 2:return[e[1],e[3]];case 3:return[e[1],e[3],e[5]];case 4:return e.slice(1,5);case 5:return e.slice(1,6);case 6:return e.slice(0,6);default:return null}};n.assignUnmentionedColor=function(e,r){switch(r){case 1:return[e[1]];case 2:return[e[1],e[5]];case 3:return[e[1],e[2],e[4]];case 4:return[e[1],e[2],e[4],e[5]];case 5:return e.filter(function(e){return e!==3});default:return null}};n.dimOrMsrUse=function(r,n,i,t){var o=Object.keys(r).filter(function(e){return i.indexOf(e)>-1});if(n.dimension&&n.measure){throw new e("error","activeColoring",'Either "dimension" or "measure" can be set in activeColoring.parameters, but not both of them.')}else if(n.measure){if(t==="Gradation"){if(Array.isArray(n.measure)&&n.measure.length>1){o="DelineatedMeasures"}else{o="RankedMeasureValues"}}else{o="MeasureValues"}}else if(n.dimension){o=t==="Gradation"?"DelineatedDimensionValues":"DimensionValues"}else if(o.length>1){throw new e("error","colorings."+t,'"'+o.join('" and "')+'" all exist in '+t+", please resolve by activeColoring property.")}else if(o.length===1){o=o[0]}return o};var i=function(r,n,i,t,o){r.forEach(function(r){if(n.indexOf(r)<0){throw new e("error",i,t+r+o)}})};var t=function(e,r){var n=r.map(function(e){return e.getName()});i(e,n,"activeColoring.parameters.measure","Active measure, ",", should be visible.")};var o=function(e,r){var n=r.map(function(e){return e.getName()});i(e,n,"activeColoring.parameters.dimension","Active dimension, ",", should be visible.")};var a=function(e,r){var n=Object.keys(r);i(e,n,"activeColoring.parameters.measure","Active measure, ",", should be configured in coloring.")};var s=function(e,r){var n=Object.keys(r);i(e,n,"activeColoring.parameters.dimension","Active dimension, ",", should be configured in coloring.")};var u=function(r){if(r.length>1){throw new e("error","activeColoring.parameters.dimension","Multiple dimensions are defined. Please resolve by activeColoring property.")}};var l=function(i,t,o,a){var s=n.find(i,t);if(s instanceof r&&s.getRole()==="category"){throw new e("error","Colorings."+o+"."+a,"Do not support coloring on timeDimension, "+s.getName()+".")}};var c=function(r){if(r.bMBC){throw new e("error","Colorings","Heatmap only support Criticality.MeasureValues.ConstantThresholds or Gradation.RankedMeasureValues.")}};var f=function(r,n){if(!n.bWaterfall&&(n.bShowUnmentionedMsr&&r.aMsr.length>1||n.bHasOtherSeriesDim||n.bIsPie&&r.aDim.length>1)){throw new e("error","Colorings."+n.type+"."+n.subType,"Semantic coloring could not be applied if chart already has coloring.")}};n.checkColoringDimension=function(e,r,n,i){var t=r.aDim;o(e,t);s(e,n);u(e);l(e[0],t,i.type,i.subType);c(i);f(r,i)};n.checkColoringMeasure=function(e,r,n){t(e,r);a(e,n)};n.hasSeriesDim=function(e){return e.aDim.some(function(e){return e._getFixedRole()==="series"})};n.hasOtherSeriesDim=function(e,r){return r.aDim.some(function(r){return r._getFixedRole()==="series"&&r.getName()!==e})};n.hasDuplicatedValues=function(e){var r=false,n={};e.forEach(function(e){if(n[e]){r=true}else{n[e]=true}});return r};n.notIn=i;return n});
//# sourceMappingURL=ColoringUtils.js.map