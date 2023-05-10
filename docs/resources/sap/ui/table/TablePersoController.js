/*
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/base/ManagedObject","sap/ui/core/syncStyleClass","sap/base/Log","sap/ui/thirdparty/jquery","./utils/TableUtils","sap/ui/core/Configuration"],function(e,t,r,a,jQuery,o,i){"use strict";var s=e.ResetAllMode;var n=t.extend("sap.ui.table.TablePersoController",{constructor:function(e,r){t.apply(this,arguments)},metadata:{properties:{autoSave:{type:"boolean",defaultValue:true},persoService:{type:"any"},customDataKey:{type:"string",defaultValue:"persoKey"},showResetAll:{type:"boolean",defaultValue:true,since:"1.88"},resetAllMode:{type:"sap.ui.table.ResetAllMode",defaultValue:s.Default,since:"1.88"}},associations:{table:{type:"sap.ui.table.Table",multiple:false}},library:"sap.ui.table"}});n.prototype.init=function(){this._schemaProperty="_persoSchemaVersion";this._schemaVersion="1.0";this._oInitialPersoData=null;this._aTableEvents=["columnResize","columnMove","columnVisibility","sort","filter","group"];this._aColumnProperties=["visible","width","sorted","sortOrder","grouped","summed"];this._bSaveFilters=false;if(this._bSaveFilters){this._aTableEvents.push("filter");this._aColumnProperties.push("filtered");this._aColumnProperties.push("filterValue")}};n.prototype.setResetAllMode=function(e){if(!this._resetAllModeSet){this.setProperty("resetAllMode",e);this._resetAllModeSet=true}else{a.warning("resetAllMode of the TablePersoController can only be set once.")}};n.prototype.exit=function(){var e=this._getTable();if(e){this._manageTableEventHandlers(e,false)}delete this._schemaProperty;delete this._schemaVersion;delete this._oInitialPersoData;if(this._oDialog){this._oDialog.destroy();delete this._oDialog}};n.prototype.setPersoService=function(e){e=this.validateProperty("persoService",e);if(e&&(typeof e.getPersData!=="function"||typeof e.setPersData!=="function"||typeof e.delPersData!=="function")){throw new Error('Value of property "persoService" needs to be null/undefined or an object that has the methods '+'"getPersData", "setPersData" and "delPersData".')}var t=this.getPersoService();this.setProperty("persoService",e,true);var r=this.getPersoService();if(r&&r!==t&&this._getTable()&&(this.getAutoSave()||!t)){this.refresh()}return this};n.prototype.setAutoSave=function(e){var t=this.getAutoSave();this.setProperty("autoSave",e,true);var r=this.getAutoSave();if(r&&!t){this.savePersonalizations()}return this};n.prototype.setTable=function(e){var t=this._getTable();if(t){t._oPersoController=undefined}this.setAssociation("table",e,true);var r=this._getTable();if(r){r._oPersoController=this}if(t){this._manageTableEventHandlers(t,false)}if(r&&r!==t){if(this.getResetAllMode()===s.Default){this._oInitialPersoData=this._getCurrentTablePersoData(true)}this._manageTableEventHandlers(r,true);if(this.getPersoService()&&(this.getAutoSave()||!t)){this.refresh()}}else if(!r){this._oInitialPersoData=null}return this};n.prototype.setCustomDataKey=function(e){var t=this.getCustomDataKey();this.setProperty("customDataKey",e,true);var r=this.getCustomDataKey();if(this.getResetAllMode()===s.Default&&this._getTable()){this._oInitialPersoData=this._getCurrentTablePersoData(true)}if(t!==r&&this.getAutoSave()){this.savePersonalizations()}return this};n.prototype._manageTableEventHandlers=function(e,t){for(var r=0,a=this._aTableEvents.length;r<a;r++){var o=e[t?"attachEvent":"detachEvent"];o.apply(e,[this._aTableEvents[r],this._tableEventHandler,this])}};n.prototype.refresh=function(){var e=this;var t=this.getPersoService();if(t){return t.getPersData().done(function(t){var r=t&&Array.isArray(t.aColumns)?t:e._oInitialPersoData;e._adjustTable(r);if(e.getResetAllMode()===s.ServiceDefault){e._oInitialPersoData=e._getCurrentTablePersoData(true)}}).fail(function(){a.error("Problem reading persisted personalization data.")})}else{a.error("The Personalization Service is not available!");var r=jQuery.Deferred();r.reject();return r.promise()}};n.prototype.savePersonalizations=function(){var e=this.getPersoService();if(e){var t=this._getCurrentTablePersoData();t[this._schemaProperty]=this._schemaVersion;return e.setPersData(t).fail(function(){a.error("Problem persisting personalization data.")})}else{a.error("The Personalization Service is not available!");var r=jQuery.Deferred();r.reject();return r.promise()}};n.prototype._adjustTable=function(e){var t=this._getTable();if(!t||!e||!Array.isArray(e.aColumns)){return}var r={},o=t.getColumns();for(var i=0,s=o.length;i<s;i++){r[this._getColumnPersoKey(o[i])]=o[i]}var n=e.aColumns;for(var i=0,s=n.length;i<s;i++){var l=n[i];var u=r[l.id];if(u){if(t.indexOfColumn(u)!==l.order){t.removeColumn(u);t.insertColumn(u,l.order)}var h=u.getMetadata();for(var p=0,f=this._aColumnProperties.length;p<f;p++){var g=this._aColumnProperties[p];if(l[g]!==undefined){try{if(h.hasProperty(g)&&u.getProperty(g)!=l[g]){u.setProperty(g,l[g])}}catch(e){a.error('sap.ui.table.TablePersoController: failed to apply the value "'+u[g]+'" for the property + "'+g+'".')}}}}}if(typeof t._onPersoApplied==="function"){t._onPersoApplied()}};n.prototype._tableEventHandler=function(e){if(this.getAutoSave()&&!this._iTriggerSaveTimeout){var t=this;this._iTriggerSaveTimeout=setTimeout(function(){t.savePersonalizations();t._iTriggerSaveTimeout=null},0)}};n.prototype._getCurrentTablePersoData=function(e){var t=this._getTable(),r=t.getColumns();var a={aColumns:[]};for(var i=0,s=r.length;i<s;i++){var n=r[i];var l=this._getColumnPersoKey(n);var u={id:l,order:i};var h=n.getMetadata();for(var p=0,f=this._aColumnProperties.length;p<f;p++){var g=this._aColumnProperties[p];if(h.hasProperty(g)){u[g]=n.getProperty(g)}}if(e){u.text=o.Column.getHeaderText(n)||l}a.aColumns.push(u)}return a};n.prototype._getTable=function(){return sap.ui.getCore().byId(this.getTable())};n.prototype._getColumnPersoKey=function(e){return this._getPersoKey(this._getTable())+"-"+this._getPersoKey(e)};n.prototype._getPersoKey=function(e){var t=e.data(this.getCustomDataKey());if(!t){t=e.getId();if(t.indexOf(i.getUIDPrefix())===0){a.warning('Generated IDs should not be used as personalization keys! The stability cannot be ensured! (Control: "'+e.getId()+'")')}}return t};n.prototype.openDialog=function(e){var t=this;function a(){if(t._oDialog){r("sapUiSizeCompact",t._getTable(),t._oDialog._oDialog);t._oDialog.open()}}if(!this._oDialog){sap.ui.getCore().loadLibrary("sap.m",{async:true}).then(function(){sap.ui.require(["sap/m/TablePersoDialog"],function(r){t._oDialog=new r(t._getTable().getId()+"-PersoDialog",{persoService:t.getPersoService(),showSelectAll:true,showResetAll:e&&e.showResetAll||t.getShowResetAll(),hasGrouping:false,contentWidth:e&&e.contentWidth,contentHeight:e&&e.contentHeight||"20rem",initialColumnState:t._oInitialPersoData.aColumns,columnInfoCallback:function(e,r,a){return t._getCurrentTablePersoData(true).aColumns},confirm:function(){t._adjustTable(this.retrievePersonalizations());if(t.getAutoSave()){t.savePersonalizations()}}});t._oDialog._oDialog.addStyleClass("sapUiNoContentPadding");if(t.getResetAllMode()===s.ServiceReset&&t.getPersoService().getResetPersData){t._oDialog.setShowResetAll(false);t.getPersoService().getResetPersData().done(function(e){if(this._bIsBeingDestroyed){return}if(e){t._oDialog.setInitialColumnState(e.aColumns);t._oDialog.setShowResetAll(t.getShowResetAll())}})}a()})})}else{a()}};return n});
//# sourceMappingURL=TablePersoController.js.map