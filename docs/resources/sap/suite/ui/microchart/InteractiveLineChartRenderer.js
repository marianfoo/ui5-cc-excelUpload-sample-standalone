/*!
 * SAPUI5
 * (c) Copyright 2009-2022 SAP SE. All rights reserved.
 */
sap.ui.define(["sap/m/library"],function(e){"use strict";var t={apiVersion:2};t.render=function(e,t){if(!t._bThemeApplied){return}if(t.getShowError()){e.openStart("div",t);e.class("sapSuiteUiMicroChartNoData");e.openEnd();e.renderControl(t._oIllustratedMessageControl);e.close("div");return}var a=t._iVisiblePointsCount,i=100/a;e.openStart("div",t);e.class("sapSuiteILC");var s={};s.role="listbox";s.roledescription=t._oRb.getText("INTERACTIVELINECHART");s.multiselectable=true;s.disabled=!t._isChartEnabled();s.labelledby=t.getAriaLabelledBy();s.owns=this._getAriaOwns(t,a);e.accessibilityState(t,s);if(!t._isChartEnabled()){var l=t.getTooltip_AsString();if(typeof l==="string"||l instanceof String){e.attr("title",l)}}e.openEnd();e.openStart("div");e.class("sapSuiteILCWrapperChild");e.attr("aria-hidden","true");e.openEnd();e.openStart("div");e.class("sapSuiteILCInner");e.openEnd();if(!t.getSelectionEnabled()){this._renderDisabledOverlay(e,t)}this._renderChartCanvas(e,t,a,i);e.openStart("div");e.class("sapSuiteILCBottomLabelArea");if(t._fNormalizedZero){e.class("sapSuiteILCBottomLabelAreaNoDivider")}e.openEnd();e.close("div");e.openStart("div");e.class("sapSuiteILCInteraction");e.openEnd();for(var n=0;n<a;n++){this._renderPoint(e,t,n,a,i)}e.close("div");e.close("div");var r="",o=false,d=t.getPoints();for(var c=0;c<a;c++){var u=d[c],p=u.getSecondaryLabel();if(p&&r!==p){r=p;if(!o){o=true;e.openStart("div");e.class("sapSuiteILCInnerBottom");e.openEnd()}this._renderSecondaryLabel(e,u,c,i,r)}}if(o){e.close("div")}e.close("div");e.close("div")};t._renderSecondaryLabel=function(e,t,a,i,s){e.openStart("div");e.class("sapSuiteILCSecondaryLabel");e.style("width",i+"%");e.style("left",a*i+"%");e.openEnd();e.text(s);e.close("div")};t._renderPoint=function(t,a,i,s,l){var n=a.getPoints()[i];t.openStart("div",a.getId()+"-point-area-"+i);t.class("sapSuiteILCSection");t.class("sapSuiteILCCanvasLayout");if(n.getSelected()){t.class("sapSuiteILCSelected")}t.style("width",l+"%");t.style("left",i*l+"%");t.openEnd();var r=n.getColor();if(n._bNullValue){t.openStart("div")}else{t.openStart("div",a.getId()+"-point-"+i);if(n.getSelected()){t.class("sapSuiteILCSelected")}if(r!==e.ValueColor.Neutral){t.class("sapSuiteICSemanticColor"+r)}t.class("sapSuiteILCPoint");t.style("bottom",a._aNormalizedValues[i]+"%")}t.openEnd();t.close("div");t.openStart("div");t.class("sapSuiteILCBackgroundArea");t.openEnd();t.close("div");var o=this._renderPointLabel(t,a,i,s);var d=n._getSemanticColor();if(d){o+=" "+d}var c=n.getTooltip_Text();if(c&&c.trim()){o=c}t.openStart("div",a.getId()+"-interaction-area-"+i);t.class("sapSuiteILCInteractionArea");t.class("sapMPointer");if(i===0&&a._isChartEnabled()){t.attr("tabindex","0")}var u={};u.role="option";u.label=o;u.selected=n.getSelected();u.posinset=i+1;u.setsize=s;t.accessibilityState(n,u);t.openEnd();t.close("div");t.close("div")};t._renderChartCanvas=function(e,t,a,i){var s,l=t.getPoints();if(l.length!=0){e.openStart("div");e.class("sapSuiteILCChartCanvas");e.class("sapSuiteILCCanvasLayout");e.openEnd();e.openStart("svg");e.class("sapSuiteILCSvgElement");e.attr("focusable","false");e.openEnd();if(t._fNormalizedZero){e.openStart("line");e.attr("x1","1%");e.attr("y1",100-t._fNormalizedZero+"%");e.attr("x2","99%");e.attr("y2",100-t._fNormalizedZero+"%");e.attr("stroke-width","1");e.class("sapSuiteILCDivider");e.openEnd();e.close("line")}var n=function(t,a,s){e.openStart("line");e.attr("x1",i/2+(t-1)*i+"%");e.attr("y1",100-a+"%");e.attr("x2",i/2+t*i+"%");e.attr("y2",100-s+"%");e.attr("stroke-width","2");e.openEnd();e.close("line")};for(s=1;s<a;s++){if(!l[s-1]._bNullValue&&!l[s]._bNullValue){n(s,t._aNormalizedValues[s-1],t._aNormalizedValues[s])}}if(t._fNormalizedPrecedingPoint!==null){n(0,t._fNormalizedPrecedingPoint,t._aNormalizedValues[0])}if(t._fNormalizedSucceedingPoint!==null){n(s,t._aNormalizedValues[s-1],t._fNormalizedSucceedingPoint)}e.close("svg");e.close("div")}};t._renderPointLabel=function(e,t,a,i){var s=t.getPoints()[a];var l=s.getLabel()||"",n=s.getDisplayedValue(),r=s.getSecondaryLabel()||"";var o;e.openStart("div");e.class("sapSuiteILCTextElement");e.class("sapSuiteILCBottomText");e.class("sapMPointer");e.openEnd();e.text(l);e.close("div");e.openStart("div");e.class("sapSuiteILCTextElement");e.class("sapSuiteILCToplabel");e.class("sapMPointer");if(!s._bNullValue){if(!n){n=s.getValue().toString()}o=[t._aNormalizedValues[a]];if(a>0&&!t.getPoints()[a-1]._bNullValue){o.push((t._aNormalizedValues[a]+t._aNormalizedValues[a-1])/2)}if(a<i-1&&!t.getPoints()[a+1]._bNullValue){o.push((t._aNormalizedValues[a]+t._aNormalizedValues[a+1])/2)}o.sort(function(e,t){return e-t});if(s.getValue()===t.nMax&&t.nMax!==t.nMin){e.style("bottom",o[o.length-1]+"%");e.class("sapSuiteILCShiftAbove")}else if(s.getValue()===t.nMin&&t.nMax!==t.nMin){e.style("bottom",o[0]+"%");e.class("sapSuiteILCShiftBelow")}else if(Math.abs(t._aNormalizedValues[a]-o[0])<Math.abs(t._aNormalizedValues[a]-o[o.length-1])){e.style("bottom",o[0]+"%");e.class("sapSuiteILCShiftBelow")}else{e.style("bottom",o[o.length-1]+"%");e.class("sapSuiteILCShiftAbove")}}else{n=t._oRb.getText("INTERACTIVECHART_NA");e.class("sapSuiteILCShiftBelow");e.class("sapSuiteILCNaLabel")}e.openEnd();e.text(n);e.close("div");return l+" "+(r===""?"":r+" ")+n};t._renderDisabledOverlay=function(e,t){e.openStart("div");e.class("sapSuiteILCDisabledOverlay");e.openEnd();e.close("div")};t._getIdReferenceList=function(e,t,a){var i=[];for(var s=0;s<t;s++){i.push(e.getId()+a+s)}return i.join(" ")};t._getAriaDescribedBy=function(e,t){return this._getIdReferenceList(e,t,"-point-area-")};t._getAriaOwns=function(e,t){return this._getIdReferenceList(e,t,"-interaction-area-")};return t},true);
//# sourceMappingURL=InteractiveLineChartRenderer.js.map