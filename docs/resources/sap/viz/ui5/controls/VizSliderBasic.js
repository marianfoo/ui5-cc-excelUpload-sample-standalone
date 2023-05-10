/*!
 * SAPUI5
 * (c) Copyright 2009-2022 SAP SE. All rights reserved.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/m/library","sap/ui/core/Control","sap/ui/core/EnabledPropagator","sap/m/Input","sap/m/ResponsiveScale","sap/ui/core/InvisibleText","sap/ui/core/library","sap/ui/core/ResizeHandler","sap/base/Log","./VizSliderBasicRenderer"],function(jQuery,t,e,i,s,a,n,o,r,l){"use strict";var h=t.touch;var u=o.TextAlign;var p=e.extend("sap.viz.ui5.controls.VizSliderBasic",{metadata:{interfaces:["sap.ui.core.IFormContent"],library:"sap.viz",properties:{width:{type:"sap.ui.core.CSSSize",group:"Appearance",defaultValue:"100%"},enabled:{type:"boolean",group:"Behavior",defaultValue:true},name:{type:"string",group:"Misc",defaultValue:""},min:{type:"float",group:"Data",defaultValue:0},max:{type:"float",group:"Data",defaultValue:100},step:{type:"float",group:"Data",defaultValue:1},progress:{type:"boolean",group:"Misc",defaultValue:true},value:{type:"float",group:"Data",defaultValue:0},showHandleTooltip:{type:"boolean",group:"Appearance",defaultValue:true},showAdvancedTooltip:{type:"boolean",group:"Appearance",defaultValue:false},inputsAsTooltips:{type:"boolean",group:"Appearance",defaultValue:false},enableTickmarks:{type:"boolean",group:"Appearance",defaultValue:false}},defaultAggregation:"scale",aggregations:{scale:{type:"sap.m.IScale",multiple:false,singularName:"scale"}},associations:{ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"}},events:{change:{parameters:{value:{type:"float"}}},liveChange:{parameters:{value:{type:"float"}}}},designTime:true}});p.prototype._CONSTANTS={CHARACTER_WIDTH_PX:8,INPUT_STATE_NONE:"None",INPUT_STATE_ERROR:"Error",TICKMARKS:{MAX_POSSIBLE:100,MIN_SIZE:{SMALL:8,WITH_LABEL:80}}};i.apply(p.prototype,[true]);p.prototype._convertValueToRtlMode=function(t){return this.getMax()-t+this.getMin()};p.prototype._recalculateStyles=function(){var t=this.$(),e=this.$().find("."+this.getRenderer().CSS_CLASS+"Handle").eq(0),i=parseFloat(e.css("width"))+2*parseFloat(e.css("border-width")),s=parseFloat(this.$("progress").parent().css("width"));this._fSliderWidth=t.width();this._fSliderPaddingLeft=parseFloat(t.css("padding-left"));this._fSliderOffsetLeft=t.offset().left;this._fHandleWidth=this.$("handle").width();this._fTooltipHalfWidthPercent=(this._fSliderWidth-(this._fSliderWidth-(this._iLongestRangeTextWidth/2+this._CONSTANTS.CHARACTER_WIDTH_PX)))/this._fSliderWidth*100;this._fHandleWidthPercent=i/s*100/2};p.prototype._validateProperties=function(){var t=this.getMin(),e=this.getMax(),i=this.getStep(),s=false,a=false;if(t>=e){s=true;a=true;l.warning("Warning: "+"Property wrong min: "+t+" >= max: "+e+" on ",this)}if(i<=0){l.warning("Warning: "+"The step could not be negative on ",this)}if(i>e-t&&!s){a=true;l.warning("Warning: "+"Property wrong step: "+i+" > max: "+e+" - "+"min: "+t+" on ",this)}return a};p.prototype._getPercentOfValue=function(t){var e=this.getMin(),i=(t-e)/(this.getMax()-e)*100;return i};p.prototype._getValueOfPercent=function(t){var e=this.getMin(),i=t*(this.getMax()-e)/100+e,s=this.toFixed(i,this.getDecimalPrecisionOfNumber(this.getStep()));return Number(s)};p.prototype._validateStep=function(t){if(typeof t==="undefined"){return 1}if(typeof t!=="number"){l.warning('Warning: "iStep" needs to be a number',this);return 0}if(Math.floor(t)===t&&isFinite(t)){return t}l.warning('Warning: "iStep" needs to be a finite interger',this);return 0};p.prototype._handleTickmarksResponsiveness=function(){var t,e,i,s,a=this.getAggregation("scale"),n=this.$().find("."+this.getRenderer().CSS_CLASS+"Tick"),o=this.$().find("."+this.getRenderer().CSS_CLASS+"Tickmarks").width(),r=o/n.length>=this._CONSTANTS.TICKMARKS.MIN_SIZE.SMALL;if(this._bTickmarksLastVisibilityState!==r){n.toggle(r);this._bTickmarksLastVisibilityState=r}t=this.$().find("."+this.getRenderer().CSS_CLASS+"TickLabel").toArray();e=parseFloat(t[1].style.left);i=o*e/100;s=a.getHiddenTickmarksLabels(o,t.length,i,this._CONSTANTS.TICKMARKS.MIN_SIZE.WITH_LABEL);t.forEach(function(t,e){t.style.display=s[e]?"none":"inline-block"})};p.prototype.getDecimalPrecisionOfNumber=function(t){if(Math.floor(t)===t){return 0}var e=t.toString(),i=e.indexOf("."),s=e.indexOf("e-"),a=s!==-1,n=i!==-1;if(a){var o=+e.slice(s+2);if(n){return o+e.slice(i+1,s).length}return o}if(n){return e.length-i-1}return 0};p.prototype.toFixed=function(t,e){if(e===undefined){e=this.getDecimalPrecisionOfNumber(t)}if(e>20){e=20}else if(e<0){e=0}return t.toFixed(e)+""};p.prototype.setDomValue=function(t){var e=this.getDomRef();if(!e){return}var i=Math.max(this._getPercentOfValue(+t),0)+"%",s=this.getDomRef("handle");if(this.getName()){this.getDomRef("input").setAttribute("value",t)}if(this.getProgress()){this.getDomRef("progress").style.width=i}s.style[sap.ui.getCore().getConfiguration().getRTL()?"right":"left"]=i;if(this.getShowAdvancedTooltip()){this._updateAdvancedTooltipDom(t)}if(this.getShowHandleTooltip()&&!this.getShowAdvancedTooltip()){s.title=t}s.setAttribute("aria-valuenow",t)};p.prototype._updateAdvancedTooltipDom=function(t){var e=this.getInputsAsTooltips(),i=this.getDomRef("TooltipsContainer"),s=e&&this._oInputTooltip?this._oInputTooltip.tooltip:this.getDomRef("Tooltip"),a=sap.ui.getCore().getConfiguration().getRTL()?"right":"left";if(!e){s.innerHTML=t}else if(e&&s.getValue()!==t){s.setValueState(this._CONSTANTS.INPUT_STATE_NONE);s.setValue(t);s.$("inner").attr("value",t)}i.style[a]=this._getTooltipPosition(t)};p.prototype._getTooltipPosition=function(t){var e=this._getPercentOfValue(+t);if(e<this._fHandleWidthPercent/2){return-this._fHandleWidthPercent+"%"}else if(e>100-this._fTooltipHalfWidthPercent+this._fHandleWidthPercent){return 100-this._fTooltipHalfWidthPercent*2+this._fHandleWidthPercent+"%"}else{return e-this._fTooltipHalfWidthPercent+"%"}};p.prototype.getClosestHandleDomRef=function(){return this.getDomRef("handle")};p.prototype._increaseValueBy=function(t){var e,i;if(this.getEnabled()){e=this.getValue();this.setValue(e+(t||1));i=this.getValue();if(e<i){this._fireChangeAndLiveChange({value:i})}}};p.prototype._decreaseValueBy=function(t){var e,i;if(this.getEnabled()){e=this.getValue();this.setValue(e-(t||1));i=this.getValue();if(e>i){this._fireChangeAndLiveChange({value:i})}}};p.prototype._getLongStep=function(){var t=this.getMin(),e=this.getMax(),i=this.getStep(),s=(e-t)/10,a=(e-t)/i;return a>10?s:i};p.prototype._fireChangeAndLiveChange=function(t){this.fireChange(t);this.fireLiveChange(t)};p.prototype._hasFocus=function(){return document.activeElement===this.getFocusDomRef()};p.prototype._createInputField=function(t,e){var i=new s(this.getId()+"-"+t,{value:this.getMin(),width:this._iLongestRangeTextWidth+2*this._CONSTANTS.CHARACTER_WIDTH_PX+"px",type:"Number",textAlign:u.Center,ariaLabelledBy:e});i.attachChange(this._handleInputChange.bind(this,i));i.addEventDelegate({onsapdown:this._inputArrowDown},this);i.addEventDelegate({onsapup:this._inputArrowUp},this);i.addEventDelegate({onfocusout:function(t){if(t.target.value!==undefined){t.srcControl.fireChange({value:t.target.value})}}});return i};p.prototype._inputArrowDown=function(t){var e=t;e.srcControl=this;t.preventDefault();t.stopPropagation();this.onsapdecrease(e)};p.prototype._inputArrowUp=function(t){var e=t;e.srcControl=this;t.preventDefault();t.stopPropagation();this.onsapincrease(e)};p.prototype._handleInputChange=function(t,e){var i=parseFloat(e.getParameter("value"));if(e.getParameter("value")==""||isNaN(i)||i<this.getMin()||i>this.getMax()){t.setValueState(this._CONSTANTS.INPUT_STATE_ERROR);return}t.setValueState(this._CONSTANTS.INPUT_STATE_NONE);this.setValue(i);this._fireChangeAndLiveChange({value:this.getValue()})};p.prototype.init=function(){this._iActiveTouchId=-1;this._bSetValueFirstCall=true;this._iLongestRangeTextWidth=0;this._fTooltipHalfWidthPercent=0;this._fHandleWidthPercent=0;this._oResourceBundle=sap.ui.getCore().getLibraryResourceBundle("sap.m")};p.prototype.exit=function(){if(this._oInputTooltip){this._oInputTooltip.label.destroy();this._oInputTooltip.label=null;this._oInputTooltip.tooltip.destroy();this._oInputTooltip.tooltip=null;this._oInputTooltip=null}if(this._oResourceBundle){this._oResourceBundle=null}if(this._parentResizeHandler){r.deregister(this._parentResizeHandler);this._parentResizeHandler=null}};p.prototype.onBeforeRendering=function(){var t=this._validateProperties(),e=[Math.abs(this.getMin()),Math.abs(this.getMax())],i=e[0]>e[1]?0:1;if(!t){this.setValue(this.getValue());this._sProgressValue=Math.max(this._getPercentOfValue(this.getValue()),0)+"%"}if(!this._hasFocus()){this._fInitialFocusValue=this.getValue()}if(this.getShowAdvancedTooltip()){this._iLongestRangeTextWidth=(e[i].toString().length+this.getDecimalPrecisionOfNumber(this.getStep())+1)*this._CONSTANTS.CHARACTER_WIDTH_PX}if(this.getInputsAsTooltips()&&!this._oInputTooltip){var s=new n({text:this._oResourceBundle.getText("SLIDER_HANDLE")});this._oInputTooltip={tooltip:this._createInputField("Tooltip",s),label:s}}if(this.getEnableTickmarks()&&!this.getAggregation("scale")){this.setAggregation("scale",new a)}};p.prototype.onAfterRendering=function(){if(this.getShowAdvancedTooltip()){this._recalculateStyles();this._updateAdvancedTooltipDom(this.getValue())}if(this.getEnableTickmarks()){setTimeout(function(){this._parentResizeHandler=r.register(this,this._handleTickmarksResponsiveness.bind(this))}.bind(this),0)}};p.prototype.ontouchstart=function(t){var e=this.getMin(),i=t.targetTouches[0],s,a=this.getRenderer().CSS_CLASS,n="."+a;t.setMarked();if(t.target.className.indexOf("sapMInput")===-1){t.preventDefault()}if(h.countContained(t.touches,this.getId())>1||!this.getEnabled()||t.button||t.srcControl!==this){return}this._iActiveTouchId=i.identifier;jQuery(document).on("touchend"+n+" touchcancel"+n+" mouseup"+n,this._ontouchend.bind(this)).on(t.originalEvent.type==="touchstart"?"touchmove"+n:"touchmove"+n+" mousemove"+n,this._ontouchmove.bind(this));var o=this.getClosestHandleDomRef();if(i.target!==o){setTimeout(o["focus"].bind(o),0)}if(!this._hasFocus()){this._fInitialFocusValue=this.getValue()}this._recalculateStyles();this._fDiffX=this._fSliderPaddingLeft;this._fInitialValue=this.getValue();this.$("inner").addClass(a+"Pressed");if(i.target===this.getDomRef("handle")){this._fDiffX=i.pageX-jQuery(o).offset().left+this._fSliderPaddingLeft-this._fHandleWidth/2}else{s=(i.pageX-this._fSliderPaddingLeft-this._fSliderOffsetLeft)/this._fSliderWidth*(this.getMax()-e)+e;if(sap.ui.getCore().getConfiguration().getRTL()){s=this._convertValueToRtlMode(s)}this.setValue(s);s=this.getValue();if(this._fInitialValue!==s){this.fireLiveChange({value:s})}}};p.prototype._ontouchmove=function(t){t.setMarked();t.preventDefault();if(t.isMarked("delayedMouseEvent")||!this.getEnabled()||t.button){return}var e=this.getMin(),i=this.getValue(),s=h.find(t.changedTouches,this._iActiveTouchId),a=s?s.pageX:t.pageX,n=(a-this._fDiffX-this._fSliderOffsetLeft)/this._fSliderWidth*(this.getMax()-e)+e;if(sap.ui.getCore().getConfiguration().getRTL()){n=this._convertValueToRtlMode(n)}this.setValue(n);n=this.getValue();if(i!==n){this.fireLiveChange({value:n})}};p.prototype._ontouchend=function(t){var e=this.getRenderer().CSS_CLASS,i="."+e;t.setMarked();if(t.isMarked("delayedMouseEvent")||!this.getEnabled()||t.button){return}jQuery(document).off(i);var s=this.getValue();this.$("inner").removeClass(e+"Pressed");if(this._fInitialValue!==s){this.fireChange({value:s})}};p.prototype.onfocusin=function(t){this.$("TooltipsContainer").addClass(this.getRenderer().CSS_CLASS+"HandleTooltipsShow");if(!this._hasFocus()){this._fInitialFocusValue=this.getValue()}};p.prototype.onfocusout=function(t){if(this.getInputsAsTooltips()&&jQuery.contains(this.getDomRef(),t.relatedTarget)){return}this.$("TooltipsContainer").removeClass(this.getRenderer().CSS_CLASS+"HandleTooltipsShow");this.$("progress").removeClass("focus")};p.prototype.onsapincrease=function(t){var e,i;if(t.srcControl!==this){return}t.preventDefault();t.setMarked();if(this.getEnabled()){e=this.getValue();this.stepUp(1);i=this.getValue();if(e<i){this._fireChangeAndLiveChange({value:i})}}};p.prototype.onsapincreasemodifiers=function(t){if(t.srcControl!==this||t.altKey){return}t.preventDefault();t.stopPropagation();t.setMarked();this._increaseValueBy(this._getLongStep())};p.prototype.onsapdecrease=function(t){var e,i;if(t.srcControl!==this){return}t.preventDefault();t.setMarked();if(this.getEnabled()){e=this.getValue();this.stepDown(1);i=this.getValue();if(e>i){this._fireChangeAndLiveChange({value:i})}}};p.prototype.onsapdecreasemodifiers=function(t){if(t.srcControl!==this||t.altKey){return}t.preventDefault();t.stopPropagation();t.setMarked();this._decreaseValueBy(this._getLongStep())};p.prototype.onsapplus=function(t){var e,i;if(t.srcControl!==this){return}t.setMarked();if(this.getEnabled()){e=this.getValue();this.stepUp(1);i=this.getValue();if(e<i){this._fireChangeAndLiveChange({value:i})}}};p.prototype.onsapminus=function(t){var e,i;if(t.srcControl!==this){return}t.setMarked();if(this.getEnabled()){e=this.getValue();this.stepDown(1);i=this.getValue();if(e>i){this._fireChangeAndLiveChange({value:i})}}};p.prototype.onsappageup=p.prototype.onsapincreasemodifiers;p.prototype.onsappagedown=p.prototype.onsapdecreasemodifiers;p.prototype.onsaphome=function(t){if(t.srcControl!==this){return}t.setMarked();var e=this.getMin();t.preventDefault();if(this.getEnabled()&&this.getValue()>e){this.setValue(e);this._fireChangeAndLiveChange({value:e})}};p.prototype.onsapend=function(t){if(t.srcControl!==this){return}t.setMarked();var e=this.getMax();t.preventDefault();if(this.getEnabled()&&this.getValue()<e){this.setValue(e);this._fireChangeAndLiveChange({value:e})}};p.prototype.onsaptabnext=function(){this._fInitialFocusValue=this.getValue()};p.prototype.onsaptabprevious=function(){this._fInitialFocusValue=this.getValue()};p.prototype.onsapescape=function(){this.setValue(this._fInitialFocusValue)};p.prototype.getFocusDomRef=function(){return this.getDomRef("handle")};p.prototype.stepUp=function(t){return this.setValue(this.getValue()+this._validateStep(t)*this.getStep(),{snapValue:false})};p.prototype.stepDown=function(t){return this.setValue(this.getValue()-this._validateStep(t)*this.getStep(),{snapValue:false})};p.prototype.setValue=function(t,e){if(this._bSetValueFirstCall){this._bSetValueFirstCall=false;return this.setProperty("value",t,true)}var i=this.getMin(),s=this.getMax(),a=this.getStep(),n=this.getValue(),o,r=true,l;if(e){r=!!e.snapValue}if(typeof t!=="number"||!isFinite(t)){return this}l=Math.abs((t-i)%a);if(r&&l!==0){t=l*2>=a?t+a-l:t-l}if(t<i){t=i}else if(t>s){t=s}o=this.toFixed(t,this.getDecimalPrecisionOfNumber(a));t=Number(o);this.setProperty("value",t,true);if(n!==this.getValue()){this.setDomValue(o)}return this};return p});
//# sourceMappingURL=VizSliderBasic.js.map