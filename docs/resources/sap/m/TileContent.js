/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/library","sap/ui/core/Control","./TileContentRenderer","sap/ui/core/Configuration"],function(t,e,r,i,a){"use strict";var n=t.Priority;var o=t.LoadState;var s=t.GenericTileMode;var l=r.extend("sap.m.TileContent",{metadata:{library:"sap.m",properties:{footer:{type:"string",group:"Appearance",defaultValue:null},footerColor:{type:"sap.m.ValueColor",group:"Appearance",defaultValue:"Neutral"},size:{type:"sap.m.Size",group:"Appearance",defaultValue:"Auto",deprecated:true},unit:{type:"string",group:"Data",defaultValue:null},disabled:{type:"boolean",group:"Behavior",defaultValue:false},frameType:{type:"sap.m.FrameType",group:"Appearance",defaultValue:"Auto"},priority:{type:"sap.m.Priority",group:"Misc",defaultValue:n.None},priorityText:{type:"string",group:"Misc",defaultValue:null},state:{type:"sap.m.LoadState",group:"Misc",defaultValue:o.Loaded}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:false,bindable:"bindable"}}},renderer:i});l.prototype.init=function(){this._bRenderFooter=true;this._bRenderContent=true;this._bStateSetManually=false};l.prototype.onBeforeRendering=function(){var t=this.mProperties.hasOwnProperty("state");if(t&&!this._bStateSetManually){if(this.getParent()&&this.getParent().isA("sap.m.GenericTile")){if(this.getParent().getState()===o.Failed){this.setProperty("state",o.Loaded,true)}else if(this.getParent().getState()===o.Disabled){this.setProperty("state",o.Loaded,true);this.setProperty("disabled",this.getState()===o.Disabled,true)}}}else{if(this.getParent()&&this.getParent().isA("sap.m.GenericTile")){if(this.getParent().getState()===o.Failed){this.setProperty("state",o.Loaded,true)}else if(this.getParent().getState()===o.Disabled){this.setProperty("state",o.Loaded,true);this.setProperty("disabled",this.getState()===o.Disabled,true)}else{this.setProperty("state",this.getParent().getState(),true)}}this._bStateSetManually=true}if(this.getContent()&&this._oDelegate){if(this.getDisabled()){this.getContent().addDelegate(this._oDelegate)}else{this.getContent().removeDelegate(this._oDelegate)}}};l.prototype.onAfterRendering=function(){var t=this.getContent();if(t){var e=this.$();var r=e.find("*");var i=e.attr("title")||"";var a=t.getTooltip_AsString()||"";if(i===a){i=""}var n="";r.toArray().forEach(function(t){if(t.title){n=n.concat(t.title+" ")}});if(n.trim()!==0){a=a+" "+n}if(a&&a.trim().length!==0){if(this._getFooterText().trim()!==0){a=a+"\n"+this._getFooterText()}i.trim().length!==0?e.attr("title",i+"\n"+a):e.attr("title",a)}if(this.getParent()&&this.getParent().isA("sap.m.ActionTile")&&this.getContent().isA("sap.m.FormattedText")&&this.getContent().getDomRef()){this._applyStyleClassesOnContent(this.getContent().getDomRef())}r.removeAttr("title").off("mouseenter")}};l.prototype._getContentType=function(){if(this.getContent()){var t=this.getContent().getMetadata().getName();if(t==="sap.m.NewsContent"||t==="sap.suite.ui.commons.NewsContent"){return"News"}}};l.prototype._getFooterText=function(){var t=sap.ui.getCore().getLibraryResourceBundle("sap.m");var e=this.getFooter();var r=this.getUnit();if(r){if(e){if(a.getRTL()){return t.getText("TILECONTENT_FOOTER_TEXT",[e,r])}else{return t.getText("TILECONTENT_FOOTER_TEXT",[r,e])}}else{return r}}else{return e}};l.prototype.getAltText=function(){var t="";var e=true;var r=this.getContent();var i=this.getParent();var a=sap.ui.getCore().getLibraryResourceBundle("sap.m").getText("TEXT_CONTENT_PRIORITY");var o=this.getPriorityText();if(o&&this.getPriority()!==n.None){t+=o+" "+a;e=false}if(r&&r.getVisible()){var l=r.getDomRef();if(r.getAltText){t+=r.getAltText();e=false}else if(r.getTooltip_AsString()){t+=r.getTooltip_AsString();e=false}else if(i&&i.isA("sap.m.ActionTile")&&l){t+=(e?"":"\n")+this._getInnerText(l);e=false}else if(i&&i.isA("sap.m.GenericTile")&&i.getMode()===s.ActionMode){if(r.isA("sap.m.Text")){t+=(e?"":"\n")+r.getText();e=false}else if(l&&r.isA("sap.m.FormattedText")){t+=(e?"":"\n")+l.innerText;e=false}}}if(this.getUnit()){t+=(e?"":"\n")+this.getUnit();e=false}if(this.getFooter()){t+=(e?"":"\n")+this.getFooter()}return t};l.prototype._getInnerText=function(t){var e="";var r=[].slice.call(t.children);r.forEach(function(t,r){e+=t.innerText+"\n"});return e.trim()};l.prototype.getTooltip_AsString=function(){var t=this.getTooltip();var e="";if(typeof t==="string"||t instanceof String){return t}e=this.getAltText();return e?e:""};l.prototype.setRenderFooter=function(t){this._bRenderFooter=t;return this};l.prototype.setRenderContent=function(t){this._bRenderContent=t;return this};l.prototype._applyStyleClassesOnContent=function(t){var e=this._filterElements(t.childNodes);e.forEach(function(t){var e=t.tagName==="P"&&t.innerHTML.includes("br");if(e){t.classList.add("sapMbrPresent")}})};l.prototype._filterElements=function(t){return[].slice.call(t).filter(function(t){return t.nodeType===1})};return l});
//# sourceMappingURL=TileContent.js.map