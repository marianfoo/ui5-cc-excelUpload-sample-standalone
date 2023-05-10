/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/mdc/link/Factory"],function(jQuery,e){"use strict";function r(){}r.enableFakeConnector=function(t){if(r.getServiceReal){return}r.getServiceReal=e.getService;e.getService=r._createFakeService(t)};r.enableFakeConnectorForTesting=function(t,n){if(r.getServiceReal){return}r.getServiceReal=e.getService;e.getService=r._createFakeService(t,n)};r._createFakeService=function(e,t){return function(n){switch(n){case"CrossApplicationNavigation":return{hrefForExternal:function(e,r){if(t){t.hrefForExternal=t.hrefForExternal||{calls:[]};t.hrefForExternal.calls.push({target:e,comp:r})}if(!e){return null}return e.target.shellHash},getDistinctSemanticObjects:function(){var r=[];for(var t in e){r.push(t)}var n=jQuery.Deferred();setTimeout(function(){n.resolve(r)},0);return n.promise()},getLinks:function(r){var t=[];if(!Array.isArray(r)){e[r.semanticObject]?t=e[r.semanticObject].links:t=[]}else{r.forEach(function(r){e[r[0].semanticObject]?t.push([e[r[0].semanticObject].links]):t.push([[]])})}var n=jQuery.Deferred();setTimeout(function(){n.resolve(t)},0);return n.promise()}};case"URLParsing":return{parseShellHash:function(r){var t=function(e){var t=e.filter(function(e){return e.intent===r});return t[0]};for(var n in e){var i=t(e[n].links);if(i){return{semanticObject:n,action:i.action}}}return{semanticObject:null,action:null}}};default:return r.getServiceReal(n)}}};r.disableFakeConnector=function(){if(r.getServiceReal){e.getService=r.getServiceReal;r.getServiceReal=undefined}};return r},true);
//# sourceMappingURL=FakeFlpConnector.js.map