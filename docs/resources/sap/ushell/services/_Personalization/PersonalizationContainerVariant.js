// Copyright (c) 2009-2022 SAP SE, All Rights Reserved
sap.ui.define(["sap/ushell/utils"],function(t){"use strict";function e(e,r,n){if(typeof e!=="string"){throw new t.Error("Parameter value of sVariantKey is not a string: sap.ushell.services.Personalization"," ")}if(typeof r!=="string"){throw new t.Error("Parameter value of sVariantName is not a string: sap.ushell.services.Personalization"," ")}if(n&&typeof n!=="object"){throw new t.Error("Parameter value of sVariantName is not a string: sap.ushell.services.Personalization"," ")}this._oVariantKey=e;this._oVariantName=r;this._oItemMap=new t.Map;this._oItemMap.entries=n||{}}e.prototype.getVariantKey=function(){return this._oVariantKey};e.prototype.getVariantName=function(){return this._oVariantName};e.prototype.getItemValue=function(t){if(typeof t!=="string"){return undefined}return this._oItemMap.get(t)};e.prototype.setItemValue=function(e,r){if(typeof e!=="string"){throw new t.Error("Parameter value of sItemKey is not a string: sap.ushell.services.Personalization"," ")}return this._oItemMap.put(e,r)};e.prototype.containsItem=function(t){if(typeof t!=="string"){return undefined}return this._oItemMap.containsKey(t)};e.prototype.getItemKeys=function(){return this._oItemMap.keys()};e.prototype.delItem=function(t){if(typeof t!=="string"){return undefined}return this._oItemMap.remove(t)};e.prototype._serialize=function(){var t=[],e={},r={},n=this;e.name=this.getVariantName();t=this._oItemMap.keys();t.forEach(function(t){r[t]=n.getItemValue(t)});e.variantData=r;return e};return e});
//# sourceMappingURL=PersonalizationContainerVariant.js.map