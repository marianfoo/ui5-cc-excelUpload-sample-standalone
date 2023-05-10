/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/suite/ui/commons/library","sap/ui/core/Control","sap/ui/core/IconPool","sap/ui/Device","sap/base/security/encodeXML"],function(t,e,o,r,n){"use strict";var i=t.networkgraph.ElementStatus;var s="http://www.w3.org/2000/svg";var a=e.extend("sap.suite.ui.commons.networkgraph.SvgBase",{renderer:{}});a.prototype.HIGHLIGHT_CLASS="sapSuiteUiCommonsNetworkElementHighlight";a.prototype.SELECT_CLASS="sapSuiteUiCommonsNetworkElementSelected";a.prototype.VISIBLE_ACTIONS_BUTTONS_CLASS="sapSuiteUiCommonsNetworkNodeActionButtonsVisible";a.prototype.FOCUS_CLASS="sapSuiteUiCommonsNetworkElementFocus";a.prototype.LINEBUTTONSID="divlinebuttons";a.prototype._createElement=function(t,e){var o=document.createElementNS(s,t);return this._setAttributes(o,e)};a.prototype._setAttributes=function(t,e){e=e||{};Object.keys(e).forEach(function(o){t.setAttribute(o,e[o])});return t};a.prototype._getStatusClass=function(t){var e=t||this.getStatus();switch(e){case i.Warning:return" sapSuiteUiCommonsNetworkElementWarning ";case i.Error:return" sapSuiteUiCommonsNetworkElementError ";case i.Success:return" sapSuiteUiCommonsNetworkElementSuccess ";case i.Information:return" sapSuiteUiCommonsNetworkElementInformation ";default:return""}};a.prototype._getAccessibilityLabel=function(){throw new Error("To be implemented by an extending class.")};a.prototype._renderRoundRect=function(t){return this._renderControl("path",{d:this._renderRoundRectPath(t),style:t.style,class:t.class,id:t.id})};a.prototype._renderRoundRectPath=function(t){t.topRight=t.topRight||0;t.topLeft=t.topLeft||0;t.bottomRight=t.bottomRight||0;t.bottomLeft=t.bottomLeft||0;var e=t.x+t.width,o=t.y+t.height,r="",n=function(t,e,o){r+=" A"+t+","+t+" 0 0,1 "+e+","+o},i=function(t,e){r+=" L"+t+","+e};r="M"+(t.x+t.topLeft)+","+t.y;i(e-t.topRight,t.y);if(t.topRight){n(t.topRight,e,t.y+t.topRight)}i(e,o-t.bottomRight);if(t.bottomRight){n(t.bottomRight,e-t.bottomRight,o)}i(t.x+t.bottomLeft,o);if(t.bottomLeft){n(t.bottomLeft,t.x,o-t.bottomLeft)}i(t.x,t.y+t.topLeft);if(t.topLeft){n(t.topLeft,t.x+t.topLeft,t.y)}return r};a.prototype._appendTextAnchor=function(t){var e=sap.ui.getCore().getConfiguration().getRTL();if(e&&this._isMSBrowser()){t["text-anchor"]="end"}};a.prototype._renderText=function(t){var e;if(t.height&&this._isMSBrowser()){t.attributes.dy=t.height/2}this._appendTextAnchor(t.attributes);e=this._renderControl("text",t.attributes,false);e+=t.text?n(t.text):"";if(t.close!==false){e+="</text>"}return e};a.prototype._renderSpanText=function(t,e,o){var r;if(o&&this._isMSBrowser()){t.dy=o/2}r=this._renderControl("text",t,false);r+=this._renderControl("tspan",{},false);r+=n(e);r+="</tspan></text>";return r};a.prototype._cannotAppendInnerHtml=function(){return this._isMSBrowser()||r.browser.safari};a.prototype._isMSBrowser=function(){return r.browser.edge||r.browser.msie};a.prototype._renderIcon=function(t){var e=o.getIconInfo(t.icon);if(e){return this._renderText({attributes:t.attributes,text:e.content,height:t.height})}return""};a.prototype._renderControl=function(t,e,o){var r="<"+t+" ";e=e||{};Object.keys(e).forEach(function(t){if(typeof e[t]!=="undefined"){r+=t;r+="=";r+='"'+e[t]+'"'}});r+=">";o=o!==false;if(o){r+="</"+t+">"}return r};a.prototype._createText=function(t,e){var o=t.firstChild,r=e.text.length,n=e.dots!==false,i=e.text,s=true,a=false,f=parseInt(t.getAttribute("maxwidth"),10)||e.width,c=parseFloat(t.getAttribute("x")),u=e.suffix?e.suffix:"",p=e.centerWidth?e.centerWidth:f,l="..."+u,h,d;e.trim=e.trim!==false;o.textContent=e.text+u;if(e.trim&&f>0){d=t.getBBox().width;if(d>f){a=true;while(true){r/=2;h=i.length+(s?-1:1)*Math.ceil(r);i=e.text.substring(0,h);o.textContent=i+(n?l:"");d=t.getBBox().width;s=d>f;if(r<.5&&!s){if(d>f){i=e.text.substring(0,i.length-Math.ceil(r*2));o.textContent=i+ +(n?l:"")}break}}}}if(e.hCenter&&!a){t.setAttribute("text-anchor","middle");t.setAttribute("x",c+p/2)}return a};a.prototype._createIcon=function(t,e,r){var n=o.getIconInfo(e),i;if(n){if(r&&this._isMSBrowser()){t.dy=r/2}i=this._createElement("text",t);i.textContent=n.content;return i}return null};a.prototype._getDomId=function(t){var e=this.getId();if(t){e+="-"+t}return e};a.prototype._convertToSvg=function(t){var e;var o=function(t){var e={},o;if(t.attributes){for(var r=0;r<t.attributes.length;r++){o=t.attributes[r];e[o.name]=o.value}}return e};var r=function(t,e){var n,i,s="";if(t.childNodes.length===1&&!t.childNodes[0].localName){e.textContent=t.childNodes[0].textContent;return}for(var a=0;a<t.childNodes.length;a++){n=t.childNodes[a];s=n.localName;if(s==="clippath"){s="clipPath"}i=this._createElement(s,o(n));e.appendChild(i);if(n.childNodes){r(n,i)}}}.bind(this);e=this._createElement(t[0].localName,o(t[0]));r(t[0],e);return e};a.prototype._convertToStyle=function(t,e,o){var r="";if(t){Object.keys(t).forEach(function(e){var o=t[e];if(typeof o!=="undefined"&&o!==""){r+=e;r+=":";r+=t[e]+";"}});r=r+(e||"");if(!o&&r){r='style="'+r+'"'}}return r};a.prototype._renderHtmlElement=function(t,e,o,r){if(!r){var n="";n+="<"+t+" ";n+=this._convertToStyle(e);if(o){Object.keys(o).forEach(function(t){var e=o[t];if(typeof e!=="undefined"&&e!==""){n+=t;n+="=";n+='"'+e+'"'}})}n+=">";return n}else{r=t==="img"?r.voidStart("img"):r.openStart(t);var i=this._convertToStyle(e,undefined,true);this.applyStyles(r,this.getStyleObject(i));if(o){Object.keys(o).forEach(function(t){var e=o[t];if(typeof e!=="undefined"&&e!==""){if(t==="class"){e.split(" ").forEach(function(t){if(t){r.class(t)}})}else if(t==="style"){this.applyStyles(r,this.getStyleObject(e))}else{r.attr(t,e)}}}.bind(this))}r=t==="img"?r.voidEnd():r.openEnd()}};a.prototype._renderHtmlIcon=function(t,e,r,i,s,a){var f=o.getIconInfo(t),c="",u="";if(!a){r=r?'id="'+this.getId()+"-"+r+'"':"";e=e||"";if(f){if(f.fontFamily){u='style="font-family:'+n(f.fontFamily)+'"'}c=s?' aria-label="'+n(s)+'" ':"";s=s?' title="'+n(s)+'" ':"";return"<div "+r+s+c+" "+(i||"")+'class="sapSuiteUiCommonsNetworkGraphIcon '+e+'"><span '+u+">"+n(f.content)+"</span></div>"}return""}else{if(f){a.openStart("div");if(r){a.attr("id",this.getId()+"-"+r)}if(s){a.attr("title",s)}if(s){a.attr("aria-label",s)}a.class("sapSuiteUiCommonsNetworkGraphIcon");if(e){e.split(" ").forEach(function(t){if(t){a.class(t)}})}a.openEnd();a.openStart("span");if(f.fontFamily){a.style("font-family",n(f.fontFamily))}a.openEnd().text(f.content).close("span");a.close("div")}}};return a});
//# sourceMappingURL=SvgBase.js.map