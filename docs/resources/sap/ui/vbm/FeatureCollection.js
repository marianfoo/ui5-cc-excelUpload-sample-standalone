/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
sap.ui.define(["./GeoJsonLayer","jquery.sap.global","sap/base/Log","./library"],function(e,jQuery,t,r){"use strict";var a=e.extend("sap.ui.vbm.FeatureCollection",{metadata:{library:"sap.ui.vbm",properties:{},defaultAggregation:"items",aggregations:{items:{type:"sap.ui.vbm.Feature",multiple:true,singularName:"item"}},events:{click:{parameters:{featureId:{type:"string"}}},contextMenu:{parameters:{featureId:{type:"string"}}}}}});a.prototype.getDataObjects=function(){if(this.mbGeoJSONDirty){this._triggerFeatureCreation()}var e=[],r=[],a=[],i=[];jQuery.extend(e,this.mFeatureColl);var s={};if(e.length){var n=this.getItems();for(var o=0,u=n?n.length:0,p;o<u;++o){p=n[o];s[p.getFeatureId()]=p}}for(var g=0,m,l,h;g<e.length;++g){m=e[g];if(l=s[m.K]){var y={};jQuery.extend(y,m);m=e[g]=y;m.C=l.getColor();if(h=l.getTooltip()){m.TT=h}}switch(m.type){case"Polygon":case"MultiPolygon":r.push(m);break;case"LineString":case"MultiLineString":a.push(m);break;case"Point":case"MultiPoint":i.push(m);break;default:t.error("Unknown feature type",m.type,"sap.ui.vbm.FeatureCollection")}}return[{name:this.getId()+"_Polys",type:"N",E:r},{name:this.getId()+"_Lines",type:"N",E:a},{name:this.getId()+"_Points",type:"N",E:i}]};a.prototype.getDataRemoveObjects=function(){return[{name:this.getId()+"_Polys",type:"N"},{name:this.getId()+"_Lines",type:"N"},{name:this.getId()+"_Points",type:"N"}]};a.prototype.getFeaturesInfo=function(e){var t=[];for(var r=0,a=e.length,i;r<a;++r){i=e[r];t[i]={};t[i].BBox=this.mFeatureBBox[i];t[i].Midpoint=[(this.mFeatureBBox[i][0]+this.mFeatureBBox[i][1])/2,(this.mFeatureBBox[i][2]+this.mFeatureBBox[i][3])/2];t[i].Name=this.mNames[i];t[i].Properties=this.mFeatureProps[i]}return t};return a});
//# sourceMappingURL=FeatureCollection.js.map