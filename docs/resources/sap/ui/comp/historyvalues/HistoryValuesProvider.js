/*!
 * SAPUI5
 * (c) Copyright 2009-2022 SAP SE. All rights reserved.
 */
sap.ui.define(["sap/ui/base/EventProvider","sap/base/util/values","./Constants","./HistoryGlobalDataService","./HistoryAppDataService"],function(t,e,o,i,n){"use strict";var a=t.extend("sap.ui.comp.providers.HistoryValuesProvider",{metadata:{library:"sap.ui.comp",events:{fieldUpdated:{parameters:{fieldData:{type:"Array"}}}}},constructor:function(e,o){t.apply(this,arguments);this._initialize(e,o)}});a.prototype._initialize=function(t,e){this._oControl=t;this._sFieldName=e};a.prototype._getHistoryGlobalDataService=function(){return i.getInstance()};a.prototype._getHistoryAppDataService=function(){return n.getInstance()};a.prototype.attachChangeListener=function(){if(this._oControl.isA("sap.m.MultiInput")){this._oControl.attachTokenUpdate(this._onMultiInputChange,this);return}if(this._oControl.isA("sap.m.MultiComboBox")){this._oControl.attachSelectionChange(this._onMultiComboBoxChange,this);return}if(this._oControl.isA("sap.m.Input")){this._oControl.attachSuggestionItemSelected(this._suggestionItemSelected,this);return}if(this._oControl.isA("sap.m.ComboBox")){this._oControl.attachChange(this._onComboBoxChange,this);return}};a.prototype._detachChangeListener=function(){if(this._oControl.isA("sap.m.MultiInput")){this._oControl.detachTokenUpdate(this._onMultiInputChange,this);return}if(this._oControl.isA("sap.m.MultiComboBox")){this._oControl.detachSelectionChange(this._onMultiComboBoxChange,this);return}if(this._oControl.isA("sap.m.Input")){this._oControl.detachSuggestionItemSelected(this._suggestionItemSelected,this);return}if(this._oControl.isA("sap.m.ComboBox")){this._oControl.detachChange(this._onComboBoxChange,this);return}};a.prototype._onMultiInputChange=function(t){var e=t.getParameter("type"),o=t.getParameter("addedTokens");if(e==="added"){var i=o.reduce(function(t,e){var o=e.data("row");if(o){return t.concat(o)}return t},[]);this.setFieldData(i)}};a.prototype._onMultiComboBoxChange=function(t){var e=t.getParameter("selected"),o=t.getParameter("changedItem");if(e&&o){var i=o.getBindingContext("list").getObject();this._processSingleValueControl(i)}};a.prototype._suggestionItemSelected=function(t){var e=sap.ui.getCore().byId(t.getSource().getSelectedRow());if(e){var o=e.getBindingContext("list").getObject();this._processSingleValueControl(o)}};a.prototype._onComboBoxChange=function(t){var e=t.getParameter("value"),o=t.getParameter("newValue"),i=t.getSource().getSelectedItem();if(e&&o&&i){var n=i.getBindingContext("list").getObject();this._processSingleValueControl(n)}};a.prototype._processSingleValueControl=function(t){if(t){this.setFieldData([t])}};a.prototype._processDateValues=function(t){return Object.keys(t).reduce(function(e,o){if(typeof t[o]==="object"&&Object.prototype.toString.call(t[o])==="[object Date]"){e[o]="/Date("+t[o].getTime()+")/"}else{e[o]=t[o]}return e},{})};a.prototype._getDistinct=function(t){var o={},i=[];t.forEach(function(t){var n=e(t).join();if(!o[n]){i.push(t);o[n]=true}},this);return i};a.prototype._getItemId=function(t){if(!t){return null}var e=t.lastIndexOf("(");return t.slice(e)};a.prototype.getFieldData=function(){return this._getHistoryAppDataService().getFieldData(this._sFieldName)};a.prototype.setFieldData=function(t){t=t.reduce(function(t,e){var i=this._getItemId(e.__metadata&&e.__metadata.id);e=Object.assign({},e);if(i){e=Object.assign({__ui5_id:i},e)}delete e.__metadata;delete e[o.getSuggestionsGroupPropertyName()];e=this._processDateValues(e);t.push(e);return t}.bind(this),[]);return this._getHistoryAppDataService().getFieldData(this._sFieldName).then(function(e){var i=o.getMaxHistoryItems(),n=this._getDistinct(t.concat(e));n=n.slice(0,i);this.fireEvent("fieldUpdated",{fieldData:n});return this._getHistoryAppDataService().setFieldData(this._sFieldName,n)}.bind(this))};a.prototype.getHistoryEnabled=function(){return this._getHistoryGlobalDataService().getHistoryEnabled()};a.prototype.destroy=function(){t.prototype.destroy.apply(this,arguments);if(this._oControl){this._detachChangeListener();this._oControl=null}this._sFieldName="";this._oDataReadyPromise=null};return a});
//# sourceMappingURL=HistoryValuesProvider.js.map