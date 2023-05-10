/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
sap.ui.define(function(){"use strict";(function(){var e=typeof VBI=="object"||window.VBI;if(e){return}window.VBI={m_bIsMyChromeTest:/chrome/gi.test(navigator.appVersion),m_bIsIDevice:sap.ui.Device.os.ios,m_bIsAndroid:sap.ui.Device.os.android,m_bIsMobile:sap.ui.Device.system.phone||sap.ui.Device.system.tablet&&!sap.ui.Device.system.combi,m_bIsPhone:jQuery.device.is.phone,m_bIsRtl:document.dir=="rtl"?true:false,m_ctrlKey:false,m_shiftKey:false,m_dwRefKeyboardHook:0,GetGeoLocationService:function(){if(this.GeoLocationService){return this.GeoLocationService}this.GeoLocationService=new VBI.GeoLocation;return this.GeoLocationService},Events:function(){var e={};var n=e.hasOwnProperty;return{subscribe:function(o,t){if(!n.call(e,o)){e[o]=new Set}e[o].add(t);return{unsubscribe:function(){e[o].delete(t)}}},fire:function(o,t){if(!n.call(e,o)){return}e[o].forEach(function(e){e(t||{})})}}},m_DndTarget:null,m_Log:"",m_bTrace:function(){var e=document.getElementById("VBITrace");return e!=null?true:false}(),Trace:function(e){if(typeof console!="undefined"){jQuery.sap.log.info(e+"\r\n")}var n=document.getElementById("VBITrace");if(n==null){return}VBI.m_Log=VBI.m_Log+jQuery.sap.encodeHTML(e)+"<br>";n.innerHTML=VBI.m_Log},RegisterKeyboardHook:function(){++window.VBI.m_dwRefKeyboardHook;if(window.VBI.m_dwRefKeyboardHook>1){return}window.VBI.onkeydown=function(e){if(e.keyCode==16){VBI.m_shiftKey=true}else if(e.keyCode==17){VBI.m_ctrlKey=true}};window.VBI.onkeyup=function(e){if(e.keyCode==16){VBI.m_shiftKey=false}else if(e.keyCode==17){VBI.m_ctrlKey=false}};document.addEventListener("keydown",window.VBI.onkeydown);document.addEventListener("keyup",window.VBI.onkeyup)},UnRegisterKeyboardHook:function(){--window.VBI.m_dwRefKeyboardHook;if(window.VBI.m_dwRefKeyboardHook>0){return}document.removeEventListener("keydown",window.VBI.onkeydown);document.removeEventListener("keyup",window.VBI.onkeyup);window.VBI.onkeydown=null;window.VBI.onkeyup=null}}})();(function(){if(!window.DataTransfer){return}if(typeof window.DataTransfer.prototype.setDragImage!=="function"){VBI.Utilities.SetDragImage=function(e,n,o){var t,i,r,a,d;t="setdragimage-ie-dragging-"+Math.round(Math.random()*Math.pow(10,5))+"-"+Date.now();i=["."+t,"{",'background: url("'+e.src+'") no-repeat #fff 0 0 !important;',"width: "+e.width+"px !important;","height: "+e.height+"px !important;","text-indent: -9999px !important;","border: 0 !important;","outline: 0 !important;","}","."+t+" * {","display: none !important;","}"];r=document.createElement("style");r.innerText=i.join("");a=document.getElementsByTagName("head")[0];a.appendChild(r);d=VBI.m_DndTarget;d.classList.add(t);setTimeout(function(){a.removeChild(r);d.classList.remove(t)},0)}}})()});
//# sourceMappingURL=sapvbi.js.map