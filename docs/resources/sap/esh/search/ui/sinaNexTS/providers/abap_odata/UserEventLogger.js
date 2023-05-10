/*! 
 * SAPUI5

		(c) Copyright 2009-2021 SAP SE. All rights reserved
	 
 */
(function(){sap.ui.define(["../../core/util"],function(e){function t(e){"@babel/helpers - typeof";return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(e,i.key,i)}}function r(e,t,n){if(t)i(e.prototype,t);if(n)i(e,n);Object.defineProperty(e,"prototype",{writable:false});return e}var E;(function(e){e["ITEM_NAVIGATE"]="ITEM_NAVIGATE";e["SUGGESTION_SELECT"]="SUGGESTION_SELECT";e["SEARCH_REQUEST"]="SEARCH_REQUEST";e["RESULT_LIST_ITEM_NAVIGATE_CONTEXT"]="RESULT_LIST_ITEM_NAVIGATE_CONTEXT";e["SUGGESTION_REQUEST"]="SUGGESTION_REQUEST";e["TILE_NAVIGATE"]="TILE_NAVIGATE";e["SHOW_MORE"]="SHOW_MORE";e["BROWSER_CLOSE"]="BROWSER_CLOSE";e["LEAVE_PAGE"]="LEAVE_PAGE";e["SESSION_START"]="SESSION_START";e["RESULT_LIST_ITEM_NAVIGATE"]="RESULT_LIST_ITEM_NAVIGATE";e["OBJECT_SUGGESTION_NAVIGATE"]="OBJECT_SUGGESTION_NAVIGATE";e["DROPDOWN_SELECT_DS"]="DROPDOWN_SELECT_DS";e["DATASOURCE_CHANGE"]="DATASOURCE_CHANGE";e["FACET_FILTER_ADD"]="FACET_FILTER_ADD";e["FACET_FILTER_DEL"]="FACET_FILTER_DEL";e["ITEM_SHOW_DETAILS"]="ITEM_SHOW_DETAILS";e["ITEM_HIDE_DETAILS"]="ITEM_HIDE_DETAILS";e["CLEAR_ALL_FILTERS"]="CLEAR_ALL_FILTERS";e["FACET_SHOW_MORE"]="FACET_SHOW_MORE";e["FACET_SHOW_MORE_CLOSE"]="FACET_SHOW_MORE_CLOSE"})(E||(E={}));var s=function(){function i(t){n(this,i);this.provider=t;this.sina=t.sina;this.delayedConsumer=new e.DelayedConsumer({timeDelay:2e3,consumer:this.processEvents,consumerContext:this})}r(i,[{key:"logUserEvent",value:function e(t){t.timeStamp=(new Date).getTime().toString();if(this.interactionEventListsActive===undefined){this.interactionEventListsActive=this.provider.supports("misc","InteractionEventLists")}if(this.interactionEventListsActive&&t.type!==E.ITEM_NAVIGATE){this.delayedConsumer.add(t)}if(this.navigationEventsActive===undefined){this.navigationEventsActive=this.provider.supports("misc","NavigationEvents")}if(this.navigationEventsActive&&t.type===E.ITEM_NAVIGATE&&t.sourceUrlArray.length!==0){this.incrementClickCounter(t.targetUrl,t.systemAndClient)}}},{key:"processEvents",value:function e(n){var i={ID:1,SessionID:this.provider.sessionId,Events:[]};for(var r=0;r<n.length;++r){var E=n[r];var s="\\/Date("+E.timeStamp+")\\/";var o={ID:r+1,Type:E.type,Timestamp:s,ExecutionID:E.executionId,Parameters:[]};for(var a in E){if(a==="type"||a==="timeStamp"){continue}var T=E[a];if(typeof T==="undefined"){continue}if(t(T)!=="object"){T=T.toString()}else{T=JSON.stringify(T)}o.Parameters.push({Name:a,Value:T})}i.Events.push(o)}var u=this.provider.buildQueryUrl(this.provider.requestPrefix,"/InteractionEventLists");return this.provider.ajaxClient.postJson(u,i)}},{key:"incrementClickCounter",value:function e(t,n){if(!t){return undefined}if(t.indexOf("#")===-1){return undefined}var i=function e(t){return t.split("-")[0]};var r=function e(t){return t.split("-")[1].split("&")[0]};var E=function e(t){var n=t;var i=[];for(var r=0,E=n.length;r<E;r++){var s=n[r];if(s.indexOf("sap-system")!==-1){continue}var o=s.split("=")[0];var a=s.split("=")[1];i.push({Name:o,Value:a})}return i};var s=t.split("?");var o=i(s[0]).split("#")[1];var a=r(s[0]);var T=s[1]!==undefined?E(s[1].split("&")):[];var u={SemanticObjectType:o,Intent:a,Parameters:T};if(n.systemId.length===0||n.client.length===0){delete u.System;delete u.Client}else{u.System=n.systemId;u.Client=n.client}var S=this.provider.buildQueryUrl(this.provider.requestPrefix,"/NavigationEvents");return this.provider.ajaxClient.postJson(S,u)}}]);return i}();var o={__esModule:true};o.UserEventType=E;o.UserEventLogger=s;return o})})();
//# sourceMappingURL=UserEventLogger.js.map