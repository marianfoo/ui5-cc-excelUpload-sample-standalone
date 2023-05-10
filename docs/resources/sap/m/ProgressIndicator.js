/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Control","sap/ui/Device","sap/ui/core/Icon","sap/ui/core/ResizeHandler","sap/ui/core/ValueStateSupport","sap/ui/core/library","./ProgressIndicatorRenderer","sap/base/Log","sap/m/Popover","sap/m/Text"],function(e,t,r,a,i,o,s,n,l,p,u){"use strict";var c=s.TextDirection;var h=s.ValueState;var g=e.PlacementType;var f=t.extend("sap.m.ProgressIndicator",{metadata:{interfaces:["sap.ui.core.IFormContent"],library:"sap.m",properties:{enabled:{type:"boolean",group:"Behavior",defaultValue:true},state:{type:"sap.ui.core.ValueState",group:"Appearance",defaultValue:h.None},displayValue:{type:"string",group:"Appearance",defaultValue:null},percentValue:{type:"float",group:"Data",defaultValue:0},showValue:{type:"boolean",group:"Appearance",defaultValue:true},width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:"100%"},height:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},textDirection:{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:c.Inherit},displayOnly:{type:"boolean",group:"Behavior",defaultValue:false},displayAnimation:{type:"boolean",group:"Behavior",defaultValue:true}},aggregations:{_popover:{type:"sap.m.Popover",multiple:false,visibility:"hidden"}},associations:{ariaDescribedBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaDescribedBy"},ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"}},designtime:"sap/m/designtime/ProgressIndicator.designtime"},renderer:n});f.RESIZE_HANDLER_ID={SELF:"_sResizeHandlerId"};f.prototype.init=function(){this._bIEBrowser=r.browser.internet_explorer;this._fPercentValueDiff=0};f.prototype.onBeforeRendering=function(){this._deRegisterResizeHandler(f.RESIZE_HANDLER_ID.SELF)};f.prototype.onAfterRendering=function(){this._updateHoverableScenario();this._registerResizeHandler(f.RESIZE_HANDLER_ID.SELF,this,this._onResize.bind(this))};f.prototype.exit=function(){if(this._oPopoverText){this._oPopoverText.destroy();this._oPopoverText=null}this._deRegisterResizeHandler(f.RESIZE_HANDLER_ID.SELF)};f.prototype._registerResizeHandler=function(e,t,r){if(!this[e]){this[e]=i.register(t,r)}};f.prototype._deRegisterResizeHandler=function(e){if(this[e]){i.deregister(this[e]);this[e]=null}};f.prototype._onResize=function(e){this._updateHoverableScenario()};f.prototype.ontouchstart=function(e){if(this._isHoverable()){e.setMarked()}};f.prototype.ontap=function(e){var t;if(this._isHoverable()){t=this._getPopover();if(t.isOpen()){t.close()}else{t.openBy(this)}}};f.prototype._updateHoverableScenario=function(){var e=this.$(this.getPercentValue()>50?"textLeft":"textRight")[0],t=e&&e.offsetWidth,r=e&&e.scrollWidth;if(this._bIEBrowser){t+=1}this.toggleStyleClass("sapMPIHoverable",this.getDisplayValue()!==""&&t<r)};f.prototype._isHoverable=function(){return this.hasStyleClass("sapMPIHoverable")};f.prototype._getPopover=function(){var e;if(!this.getAggregation("_popover")){this._oPopoverText=new u({text:this.getDisplayValue()});e=new p(this.getId()+"-popover",{showHeader:false,placement:g.Bottom,content:[this._oPopoverText,new a({src:"sap-icon://decline",press:this._onPopoverCloseIconPress.bind(this)})]}).addStyleClass("sapMPIPopover");this.setAggregation("_popover",e,true)}return this.getAggregation("_popover")};f.prototype._onPopoverCloseIconPress=function(){this._getPopover().close()};f.prototype.setDisplayValue=function(e){this.setProperty("displayValue",e);if(this._oPopoverText){this._oPopoverText.setText(e)}return this};f.prototype.setPercentValue=function(e){var t=this,r=this.getDomRef(),a=e;e=parseFloat(e);if(!d(e)){if(e>100){e=100}else if(e<0){e=0}else{l.warning(this+": percentValue ("+a+") is not a valid number! The provided value will not be set!");return this}l.warning(this+": percentValue ("+a+") is not correct! Setting the percentValue to "+e)}if(this.getPercentValue()!==e){this._fPercentValueDiff=this.getPercentValue()-e;this.setProperty("percentValue",e);if(!r){return this}["sapMPIValueMax","sapMPIValueMin","sapMPIValueNormal","sapMPIValueGreaterHalf"].forEach(function(e){t.removeStyleClass(e)});this.addStyleClass(this._getCSSClassByPercentValue(e).join(" "));r.setAttribute("aria-valuenow",e);r.setAttribute("aria-valuetext",this._getAriaValueText({fPercent:e}));this._setText()}return this};f.prototype._setText=function(){this.toggleStyleClass("sapMPIValueGreaterHalf",this.getPercentValue()>50);return this};f.prototype._getCSSClassByPercentValue=function(e){if(e===100){return["sapMPIValueMax","sapMPIValueGreaterHalf"]}if(e===0){return["sapMPIValueMin"]}if(e<=50){return["sapMPIValueNormal"]}return["sapMPIValueNormal","sapMPIValueGreaterHalf"]};f.prototype._getAriaValueText=function(e){e.sText=e.sText||this.getDisplayValue();e.fPercent=e.fPercent||this.getPercentValue();e.sStateText=e.sStateText||this._getStateText();var t=e.sText||e.fPercent+"%";if(e.sStateText){t+=" "+e.sStateText}return t};f.prototype._getStateText=function(){return this.getEnabled()?o.getAdditionalText(this.getState()):""};f.prototype.getAccessibilityInfo=function(){var e=sap.ui.getCore().getLibraryResourceBundle("sap.m"),t=this.getDisplayValue(),r=t?t:e.getText("ACC_CTR_STATE_PROGRESS",[this.getPercentValue()]);return{role:"progressbar",type:e.getText("ACC_CTR_TYPE_PROGRESS"),description:r,focusable:this.getEnabled(),enabled:this.getEnabled()}};function d(e){return!isNaN(e)&&e>=0&&e<=100}return f});
//# sourceMappingURL=ProgressIndicator.js.map