/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Element","./library"],function(t,e){"use strict";var i=e.ExactOrder;var r=t.extend("sap.ui.ux3.ExactAttribute",{metadata:{deprecated:true,library:"sap.ui.ux3",properties:{text:{type:"string",group:"Misc",defaultValue:null},selected:{type:"boolean",group:"Misc",defaultValue:null},width:{type:"int",group:"Misc",defaultValue:168},listOrder:{type:"sap.ui.ux3.ExactOrder",defaultValue:i.Select},showSubAttributesIndicator:{type:"boolean",group:"Misc",defaultValue:true},additionalData:{type:"object",group:"Misc",defaultValue:null},supplyActive:{type:"boolean",group:"Misc",defaultValue:true},autoActivateSupply:{type:"boolean",group:"Misc",defaultValue:false}},defaultAggregation:"attributes",aggregations:{attributes:{type:"sap.ui.ux3.ExactAttribute",multiple:true,singularName:"attribute"}},events:{supplyAttributes:{parameters:{attribute:{type:"sap.ui.ux3.ExactAttribute"}}}}}});r._MINWIDTH=70;r._MAXWIDTH=500;r.prototype.init=function(){this._getAttributesCallCount=0};r.prototype.scrollTo=function(t){if(!(t instanceof r)){this._scrollToAttributeId=undefined;return}var e=this.getChangeListener();if(e){e=sap.ui.getCore().byId(e.id);if(e&&e._lb){var i=this.indexOfAttribute(t);if(i>=0){e._lb.scrollToIndex(i,true)}this._scrollToAttributeId=undefined;return}}this._scrollToAttributeId=t.getId()};r.prototype.setText=function(t){this.setProperty("text",t,true);this._handleChange(this,"text");return this};r.prototype.setWidth=function(t){this._setWidth(t);this._handleChange(this,"width");return this};r.prototype.setTooltip=function(e){t.prototype.setTooltip.apply(this,arguments);this._handleChange(this,"tooltip",true);return this};r.prototype.setSelected=function(t){this.setProperty("selected",t,true);if(!this.getSelected()){this._clearSelection()}this._handleChange(this,"selected");return this};r.prototype.setSupplyActive=function(t){this.setProperty("supplyActive",t,true);return this};r.prototype.setAutoActivateSupply=function(t){this.setProperty("autoActivateSupply",t,true);return this};r.prototype.setAdditionalData=function(t){this.setProperty("additionalData",t,true);return this};r.prototype.setListOrder=function(t){this.setProperty("listOrder",t,true);this._handleChange(this,"order");return this};r.prototype.getAttributes=function(){this._getAttributesCallCount++;if(this._getAttributesCallCount>1){this.setSupplyActive(false)}if(this.hasListeners("supplyAttributes")&&this.getSupplyActive()){this._bSuppressChange=true;this._bChangedHappenedDuringSuppress=false;this.fireSupplyAttributes({attribute:this});this.setSupplyActive(false);this._bSuppressChange=undefined;if(this._bChangedHappenedDuringSuppress){this._handleChange(this,"attributes")}this._bChangedHappenedDuringSuppress=undefined}this._getAttributesCallCount--;return this.getAttributesInternal()};r.prototype.insertAttribute=function(t,e){this.insertAggregation("attributes",t,e,true);this._handleChange(this,"attributes");this.setSupplyActive(false);return this};r.prototype.addAttribute=function(t){this.addAggregation("attributes",t,true);this._handleChange(this,"attributes");this.setSupplyActive(false);return this};r.prototype.removeAttribute=function(t){var e=this.removeAggregation("attributes",t,true);if(e){e.setChangeListener(null);this._handleChange(this,"attributes")}return e};r.prototype.removeAllAttributes=function(){var t=this.getAttributesInternal();for(var e=0;e<t.length;e++){t[e].setChangeListener(null)}var i=this.removeAllAggregation("attributes",true);if(t.length>0){this._handleChange(this,"attributes")}return i};r.prototype.destroyAttributes=function(){var t=this.getAttributesInternal();for(var e=0;e<t.length;e++){t[e].setChangeListener(null)}this.destroyAggregation("attributes",true);if(t.length>0){this._handleChange(this,"attributes")}return this};r.prototype.getShowSubAttributesIndicator_Computed=function(){return this.hasListeners("supplyAttributes")&&this.getSupplyActive()?this.getShowSubAttributesIndicator():this.getAttributesInternal().length>0};r.prototype.attachSupplyAttributes=function(t,e,i){this.attachEvent("supplyAttributes",t,e,i);if(this.getSelected()){this.getAttributesInternal(true)}return this};r.prototype.setProperty=function(e,i,r){t.prototype.setProperty.call(this,e,i,r);if(e=="selected"){if(i){this.getAttributesInternal(true)}else{if(this.getAutoActivateSupply()){this.setSupplyActive(true)}}}return this};r.prototype.setChangeListener=function(t){this._oChangeListener=t};r.prototype.getChangeListener=function(t){return this._oChangeListener};r.prototype.getAttributesInternal=function(t){return t?this.getAttributes():this.getAggregation("attributes",[])};r.prototype._handleChange=function(t,e){if(this._bSuppressChange){this._bChangedHappenedDuringSuppress=true;return}if(this.getChangeListener()){this.getChangeListener()._notifyOnChange(e,t)}else if(this.getParent()&&this.getParent()._handleChange){this.getParent()._handleChange(t,e)}};r.prototype._clearSelection=function(){this.setProperty("selected",false,true);var t=this.getAttributesInternal();for(var e=0;e<t.length;e++){t[e]._clearSelection()}};r.prototype._setWidth=function(t){t=Math.round(r._checkWidth(t));this.setProperty("width",t,true)};r._checkWidth=function(t){t=Math.max(t,r._MINWIDTH);t=Math.min(t,r._MAXWIDTH);return t};return r});
//# sourceMappingURL=ExactAttribute.js.map