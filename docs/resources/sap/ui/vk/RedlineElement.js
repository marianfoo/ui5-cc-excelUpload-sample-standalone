/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["sap/ui/core/Element","sap/ui/vk/uuidv4"],function(t,e){"use strict";var r=t.extend("sap.ui.vk.RedlineElement",{metadata:{library:"sap.ui.vk",properties:{originX:{type:"float",defaultValue:0},originY:{type:"float",defaultValue:0},opacity:{type:"float",defaultValue:1},strokeWidth:{type:"float",defaultValue:2},strokeColor:{type:"sap.ui.core.CSSColor",defaultValue:"#e6600d"},strokeDashArray:{type:"float[]",defaultValue:[]},halo:{type:"boolean",defaultValue:false},haloColor:{type:"string",defaultValue:"rgba(255, 0, 0, 1)"},createdByUser:{type:"any",defaultValue:""},createTimestamp:{type:"int",defaultValue:null},deletedByUser:{type:"any",defaultValue:""},deleteTimestamp:{type:"int",defaultValue:null},suppress:{type:"boolean",defaultValue:false},elementId:{type:"string",defaultValue:null}}},constructor:function(r,i){t.apply(this,arguments);if(typeof r==="object"){i=r;r=undefined}this.setElementId(i&&i.elementId?i.elementId:e())}});r.prototype.applyZoom=function(){};r.prototype.render=function(t){this.renderElement(t,this.getHalo())};r.prototype.renderElement=function(t,e){};r.prototype._colorToArray=function(t){var e=t.replace(/[^\d,.]/g,"").split(",");if(!e[3]){e.push(1)}return e};r.prototype._getHaloFilter=function(t){var e=this._colorToArray(this.getHaloColor());var r=e.join("");return"url(#halo"+r+")"};r.prototype.setHalo=function(t){this.setProperty("halo",t,true);var e=this.getDomRef();if(e){if(t){e.setAttribute("filter",this._getHaloFilter())}else{e.removeAttribute("filter")}}};r.prototype.exportJSON=function(){var t={originX:this.getOriginX(),originY:this.getOriginY(),opacity:this.getOpacity(),strokeColor:this.getStrokeColor(),strokeWidth:this.getStrokeWidth(),elementId:this.getElementId(),halo:this.getHalo(),haloColor:this.getHaloColor(),createdByUser:this.getCreatedByUser(),createTimestamp:this.getCreateTimestamp(),deletedByUser:this.getDeletedByUser(),deleteTimestamp:this.getDeleteTimestamp(),suppress:this.getSuppress()};if(this.getStrokeDashArray().length>0){t["strokeDashArray"]=this.getStrokeDashArray()}return t};r.prototype.importJSON=function(t){if(t.hasOwnProperty("originX")){this.setOriginX(t.originX)}if(t.hasOwnProperty("originY")){this.setOriginY(t.originY)}if(t.hasOwnProperty("opacity")){this.setOpacity(t.opacity)}if(t.hasOwnProperty("strokeColor")){this.setStrokeColor(t.strokeColor)}if(t.hasOwnProperty("strokeWidth")){this.setStrokeWidth(t.strokeWidth)}if(t.hasOwnProperty("strokeDashArray")){this.setStrokeDashArray(t.strokeDashArray)}if(t.hasOwnProperty("elementId")){this.setElementId(t.elementId)}if(t.hasOwnProperty("halo")){this.setHalo(t.halo)}if(t.hasOwnProperty("haloColor")){this.setHaloColor(t.haloColor)}if(t.hasOwnProperty("createdByUser")){this.setCreatedByUser(t.createdByUser)}if(t.hasOwnProperty("createTimestamp")){this.setCreateTimestamp(t.createTimestamp)}if(t.hasOwnProperty("deletedByUser")){this.setDeletedByUser(t.deletedByUser)}if(t.hasOwnProperty("deleteTimestamp")){this.setDeleteTimestamp(t.deleteTimestamp)}if(t.hasOwnProperty("suppress")){this.setSuppress(t.suppress)}return this};r.prototype.exportSVG=function(){return null};r.prototype.importSVG=function(t){if(t.getAttribute("x")){this.setOriginX(parseFloat(t.getAttribute("x")))}if(t.getAttribute("y")){this.setOriginY(parseFloat(t.getAttribute("y")))}if(t.getAttribute("opacity")){this.setOpacity(parseFloat(t.getAttribute("opacity")))}if(t.getAttribute("stroke")){this.setStrokeColor(t.getAttribute("stroke"))}if(t.getAttribute("stroke-width")){this.setStrokeWidth(parseFloat(t.getAttribute("stroke-width")))}if(t.getAttribute("stroke-dasharray")){this.setStrokeDashArray(t.getAttribute("stroke-dasharray").split(",").map(parseFloat))}if(t.getAttribute("data-sap-element-id")){this.setElementId(t.getAttribute("data-sap-element-id"))}this.setHalo(t.getAttribute("data-sap-halo")==="true");return this};return r});
//# sourceMappingURL=RedlineElement.js.map