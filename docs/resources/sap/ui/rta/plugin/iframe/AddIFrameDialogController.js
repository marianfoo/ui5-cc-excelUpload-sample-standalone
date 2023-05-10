/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/ui/core/mvc/Controller","sap/ui/core/library","sap/ui/rta/Utils","sap/ui/fl/util/IFrame","sap/ui/model/Filter","sap/ui/model/FilterOperator","sap/ui/rta/plugin/iframe/urlCleaner"],function(e,t,r,a,i,n,s,o){"use strict";var l=r.ValueState;var u=["frameUrl"];var d=["frameWidth","frameHeight"];var c=["asNewSection","frameWidthUnit","frameHeightUnit"];function h(e){return i.isValidUrl(encodeURI(e))}return t.extend("sap.ui.rta.plugin.iframe.AddIFrameDialogController",{constructor:function(e,t){this._oJSONModel=e;this._importSettings(t);this._mParameterHashMap=this._buildParameterHashMap(t)},onValidationSuccess:function(e){e.getSource().setValueState(l.None);this._oJSONModel.setProperty("/areAllFieldsValid",this._areAllTextFieldsValid()&&this._areAllValueStateNones())},onValidationError:function(e){e.getSource().setValueState(l.Error);this._oJSONModel.setProperty("/areAllFieldsValid",false);this._setFocusOnInvalidInput()},onSizeUnitChange:function(){var e=sap.ui.getCore().byId("sapUiRtaAddIFrameDialog_WidthUnit").getSelectedKey();var t=sap.ui.getCore().byId("sapUiRtaAddIFrameDialog_HeightUnit").getSelectedKey();var r=sap.ui.getCore().byId("sapUiRtaAddIFrameDialog_PercentText");if(e!=="%"&&t!=="%"){r.addStyleClass("sapUiRtaAddIFrameDialogPercentText-invisible")}else{r.removeStyleClass("sapUiRtaAddIFrameDialogPercentText-invisible")}},onSavePress:function(){var e=this._buildPreviewURL(this._buildReturnedURL());if(h(e)&&this._areAllTextFieldsValid()&&this._areAllValueStateNones()){this._close(this._buildReturnedSettings())}else{this._setFocusOnInvalidInput()}},onShowPreview:function(){var t=this._buildPreviewURL(this._buildReturnedURL());if(!h(t)){return}var r=sap.ui.getCore().byId("sapUiRtaAddIFrameDialog_PreviewFrame");r.setUrl("");var a=sap.ui.getCore().byId("sapUiRtaAddIFrameDialog_PreviewLinkPanel");var i=a.getDependents()[0];if(t){i.setEnabled(true)}else{a.setExpanded(false);i.setEnabled(false)}try{this._oJSONModel.setProperty("/previewUrl/value",t);r.setUrl(t)}catch(t){e.error("Error previewing the URL: ",t)}},onParameterPress:function(e){var t=e.getSource().getBindingContext().getObject().key;this._oJSONModel.setProperty("/frameUrl/value",this._addURLParameter(t));this.onUrlChange()},onSearch:function(e){var t=new n("label",s.Contains,e.getParameter("query"));var r=sap.ui.getCore().byId("sapUiRtaAddIFrameDialog_ParameterTable").getBinding("items");r.filter([t])},_buildPreviewURL:function(e){return e.replace(/{(.*?)}/g,function(e){return this._mParameterHashMap[e]}.bind(this))},_addURLParameter:function(e){return this._buildReturnedURL()+e},_buildReturnedURL:function(){return o(this._oJSONModel.getProperty("/frameUrl/value"))},onUrlChange:function(){var e=this._buildPreviewURL(this._buildReturnedURL());var t=sap.ui.getCore().byId("sapUiRtaAddIFrameDialog_EditUrlTA");if(h(e)){t.setValueState("None")}else{t.setValueState("Error")}},_buildParameterHashMap:function(e){if(e&&e.parameters){return a.buildHashMapFromArray(e.parameters,"key","value")}return{}},onCancelPress:function(){this._close()},_close:function(e){var t=sap.ui.getCore().byId("sapUiRtaAddIFrameDialog");this._mSettings=e;t.close()},getSettings:function(){return this._mSettings},_areAllValueStateNones:function(){var e=this._oJSONModel.getData();return u.concat(d).every(function(t){return e[t]["valueState"]===l.None},this)},_areAllTextFieldsValid:function(){var e=this._oJSONModel;return u.reduce(function(t,r){var a="/"+r+"/value";var i;if(e.getProperty(a).trim()===""){i=l.Error}else{i=l.None}e.setProperty(a+"State",i);return t&&i===l.None},true)},_buildReturnedSettings:function(){var e={};var t=this._oJSONModel.getData();u.concat(d,c).forEach(function(r){var a=t[r].value;if(r==="frameUrl"){a=o(a)}e[r]=a});return e},_importSettings:function(e){if(e){Object.keys(e).forEach(function(t){if(t==="frameWidth"||t==="frameHeight"){this._importIFrameSize(t,e[t])}else{this._oJSONModel.setProperty("/"+t+"/value",e[t])}},this)}},_importIFrameSize:function(e,t){var r=t.split(/(px|rem|%)/);if(r.length>=2){this._oJSONModel.setProperty("/"+e+"/value",parseFloat(r[0]));this._oJSONModel.setProperty("/"+e+"Unit/value",r[1])}},_setFocusOnInvalidInput:function(){var e=this._oJSONModel.getData();d.some(function(t){if(e[t]["valueState"]===l.Error){var r=sap.ui.getCore().byId(e[t]["id"]);r.focus();return true}},this)}})});
//# sourceMappingURL=AddIFrameDialogController.js.map