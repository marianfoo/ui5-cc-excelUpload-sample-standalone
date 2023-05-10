/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/ui/core/library"],function(t,e){"use strict";var r={apiVersion:2};var i=e.TextDirection;var s=e.TextAlign;r.render=function(e,r){var l=r.getWidth(),n=r.getHeight(),a=r.getTextDirection(),o=r.getTextAlign(),d=r.getAggregation("controls"),g=r._getDisplayHtml(),c=[],f="",h=0;e.openStart("div",r);e.class("sapMFT");if(l){e.class("sapMFTOverflowWidth")}if(n){e.class("sapMFTOverflowHeight")}if(a!==i.Inherit){e.attr("dir",a.toLowerCase())}if(o&&o!=s.Initial){e.style("text-align",o.toLowerCase())}if(r.getTooltip_AsString()){e.attr("title",r.getTooltip_AsString())}e.style("width",l||null);e.style("height",n||null);e.openEnd();while(g!==""&&g!==f){f=g.replace(/(?:\%\%(\d+))/,u)}if(g!==""){try{e.unsafeHtml(g)}catch(t){e.text(g)}}e.close("div");function u(i,s,l){var n=i.length;try{e.unsafeHtml(g.substr(0,l))}catch(t){e.text(g.substr(0,l))}h+=l;if(d&&d[s]!==undefined){if(c[s]===undefined){e.renderControl(d[s]);c[s]=h}else{t.error("Control with index '"+s+"' ("+i+", htmlText@"+h+") is already rendered (htmlText@"+c[s]+")!","sap.m.FormattedText:",r.getId())}}else{e.text(i);t.error("Missing control for placeholder '"+i+"' (htmlText@"+h+")!","sap.m.FormattedText:",r.getId())}g=g.substr(l+n);h+=n}};return r},true);
//# sourceMappingURL=FormattedTextRenderer.js.map