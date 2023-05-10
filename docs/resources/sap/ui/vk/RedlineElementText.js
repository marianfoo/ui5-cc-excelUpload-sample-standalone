/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["./RedlineElement","./Redline","sap/base/Log"],function(t,e,i){"use strict";var r=t.extend("sap.ui.vk.RedlineElementText",{metadata:{library:"sap.ui.vk",properties:{text:{type:"string",defaultValue:"Text"},font:{type:"string",defaultValue:""},fontSize:{type:"float",defaultValue:32},fillColor:{type:"sap.ui.core.CSSColor",defaultValue:"rgba(0,0,0,0)"},width:{type:"float",defaultValue:300},height:{type:"float",defaultValue:0}}}});r.prototype.edit=function(t,e){var i=this.getParent(),r=i._toVirtualSpace(t,e);this.setOriginX(r.x);this.setOriginY(r.y);this.rerender();return this};r.prototype.applyZoom=function(t){this.setFontSize(this.getFontSize()*t);this.setWidth(this.getWidth()*t);this.setHeight(this.getHeight()*t);return this};r.prototype.renderElement=function(t,e){var i=this.getParent();if(i==null){return}var r=i._toPixelSpace(this.getOriginX(),this.getOriginY());t.openStart("foreignObject",this);t.attr("x",r.x);t.attr("y",r.y);t.attr("width","1");t.attr("height","1");if(e){t.attr("filter",this._getHaloFilter())}t.style("overflow","visible");t.openEnd();t.openStart("textArea");t.attr("spellcheck",false);if(this.getFont()){t.style("font-family",this.getFont())}t.style("font-size",this.getFontSize()+"px");t.style("color",this.getFillColor());t.style("opacity",this.getOpacity());t.style("background","transparent");t.style("border-style","none");t.style("resize","none");t.style("position","absolute");t.style("width",this.getWidth()+"px");t.style("height",(this.getHeight()||this.getFontSize()*1.2)+"px");t.openEnd();t.text(this.getText());t.close("textArea");t.close("foreignObject")};r.prototype.exportJSON=function(){return jQuery.extend(true,t.prototype.exportJSON.call(this),{type:e.ElementType.Text,version:1,text:this.getText(),font:this.getFont(),fontSize:this.getFontSize(),fillColor:this.getFillColor(),width:this.getWidth(),height:this.getHeight()})};r.prototype.importJSON=function(r){if(r.type===e.ElementType.Text){if(r.version===1){t.prototype.importJSON.call(this,r);if(r.hasOwnProperty("text")){this.setText(r.text)}if(r.hasOwnProperty("font")){this.setFont(r.font)}if(r.hasOwnProperty("fontSize")){this.setFontSize(r.fontSize)}if(r.hasOwnProperty("fillColor")){this.setFillColor(r.fillColor)}if(r.hasOwnProperty("width")){this.setWidth(r.width)}if(r.hasOwnProperty("height")){this.setHeight(r.height)}}else{i.error("wrong version number")}}else{i.error("Redlining JSON import: Wrong element type")}return this};r.prototype.exportSVG=function(){var t=document.createElementNS(e.svgNamespace,"text");t.setAttribute("x",this.getOriginX());t.setAttribute("y",this.getOriginY());if(this.getFont()){t.setAttribute("font-family",this.getFont())}t.setAttribute("font-size",this.getFontSize());t.setAttribute("fill",this.getFillColor());t.setAttribute("stroke",this.getStrokeColor());t.setAttribute("stroke-width",this.getStrokeWidth());if(this.getStrokeDashArray().length>0){t.setAttribute("stroke-dasharray",this.getStrokeDashArray().toString())}if(this.getOpacity()<1){t.setAttribute("opacity",this.getOpacity())}t.setAttribute("data-sap-element-id",this.getElementId());t.setAttribute("data-sap-halo",this.getHalo());t.setAttribute("width",this.getWidth());t.setAttribute("height",this.getHeight());t.textContent=this.getText();return t};r.prototype.importSVG=function(e){if(e.tagName==="text"){t.prototype.importSVG.call(this,e);if(e.getAttribute("x")){this.setOriginX(parseFloat(e.getAttribute("x")))}if(e.getAttribute("y")){this.setOriginY(parseFloat(e.getAttribute("y")))}if(e.textContent){this.setText(e.textContent)}if(e.getAttribute("font-family")){this.setFont(e.getAttribute("font-family"))}if(e.getAttribute("font-size")){this.setFontSize(parseFloat(e.getAttribute("font-size")))}if(e.getAttribute("fill")){this.setFillColor(e.getAttribute("fill"))}if(e.getAttribute("width")){this.setWidth(parseFloat(e.getAttribute("width")))}if(e.getAttribute("height")){this.setHeight(parseFloat(e.getAttribute("height")))}}else{i("Redlining SVG import: Wrong element type")}return this};return r});
//# sourceMappingURL=RedlineElementText.js.map