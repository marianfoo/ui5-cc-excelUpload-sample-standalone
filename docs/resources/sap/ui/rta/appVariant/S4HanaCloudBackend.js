/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/ManagedObject","sap/ui/model/odata/v2/ODataModel","sap/base/Log"],function(t,a,e){"use strict";var n;var r=t.extend("sap.ui.rta.appVariant.S4HanaCloudBackend",{metadata:{library:"sap.ui.rta"},constructor:function(){t.apply(this,arguments)}});r.prototype.notifyFlpCustomizingIsReady=function(t,a,n,r){var i=this;return new Promise(function(o,u){function s(t){return!isNaN(parseFloat(t))&&isFinite(t)}var c=s(n)?n:2500;var d=s(r)?r:-1;function p(){if(d===0){o({iamAppId:t,customizingIsReady:false});return}else if(d>0){d=d-1}this.checkCatalogCustomizingIsReady(t,a).then(function(a){if(a){o({iamAppId:t,customizingIsReady:true})}else{setTimeout(p.bind(i),c)}}).catch(function(n){var r=a?"creation":"deletion";e.error("Catalog publishing failed for app variant "+r+". AppVarStatus is "+n.message);u({iamAppId:t,error:n.message})})}setTimeout(p.bind(i),c)})};r._isAppReady=function(t,a){var e=t.data.results;if(!Array.isArray(e)){throw new Error(t.requestUri+" returned unexpected result: "+t)}var n=e.every(function(t){return t.ActualStatus===1});var r=e.every(function(t){return t.ActualStatus===2});var i=e.some(function(t){return t.ActualStatus===5});var o=e.some(function(t){return t.ActualStatus===4});if(i||o){var u=i?"error":"locked";throw new Error(u)}return a?r:n};r._getODataModel=function(){if(!n){n=new Promise(function(t,e){var r=new a("/sap/opu/odata/sap/APS_IAM_APP_SRV");r.attachMetadataFailed(function(t){e(t);n=null});r.metadataLoaded().then(function(){t(r)})})}return n};r._readODataModel=function(t,a){return new Promise(function(e,n){var r=function(t,a){e(a)};var i=function(t){n(t)};t.read("/aps_iam_app_ddl('"+a+"')/to_BusinessCatalogAssignment",{success:r,error:i})})};r.prototype.checkCatalogCustomizingIsReady=function(t,a){return r._getODataModel().then(function(a){return r._readODataModel(a,t)}).then(function(t){return r._isAppReady(t,a)})};return r});
//# sourceMappingURL=S4HanaCloudBackend.js.map