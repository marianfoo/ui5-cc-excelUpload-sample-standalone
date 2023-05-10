/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./TextField","./ValueHelpFieldRenderer"],function(e,t){"use strict";var s=e.extend("sap.ui.commons.ValueHelpField",{metadata:{library:"sap.ui.commons",deprecated:true,properties:{iconURL:{type:"sap.ui.core.URI",group:"Appearance",defaultValue:null},iconHoverURL:{type:"sap.ui.core.URI",group:"Appearance",defaultValue:null},iconDisabledURL:{type:"sap.ui.core.URI",group:"Appearance",defaultValue:null}},events:{valueHelpRequest:{}}}});s.prototype.onBeforeRendering=function(){this.sIconDsblUrl="sap-icon://value-help";this.sIconRegularUrl="sap-icon://value-help";this.sIconHoverUrl="sap-icon://value-help"};s.prototype.onmouseover=function(e){if(e.target.id==this.getId()+"-icon"&&this.getEnabled()&&this.getEditable()&&!this.bIsIconURI){if(this.getIconHoverURL()){this.sIconHoverUrl=this.getIconHoverURL()}else if(this.getIconURL()){this.sIconHoverUrl=this.sIconRegularUrl}else{this.sIconHoverUrl="sap-icon://value-help"}e.target.setAttribute("src",this.sIconHoverUrl)}};s.prototype.onmouseout=function(e){if(e.target.id==this.getId()+"-icon"&&this.getEnabled()&&this.getEditable()&&!this.bIsIconURI){e.target.setAttribute("src",this.sIconRegularUrl)}};s.prototype.onclick=function(e){if(e.target.id==this.getId()+"-icon"&&this.getEnabled()&&this.getEditable()){this.fireValueHelpRequest({})}};s.prototype.setEnabled=function(t){var s=this.getEnabled();e.prototype.setEnabled.apply(this,arguments);if(this.getDomRef()&&s!=t&&!this.bIsIconURI){var i=this.$("icon");if(t){i.attr("src",this.sIconRegularUrl);i.removeClass("sapUiTfValueHelpDsblIcon");i.addClass("sapUiTfValueHelpRegularIcon")}else{i.attr("src",this.sIconRegularUrl);i.removeClass("sapUiTfValueHelpRegularIcon");i.addClass("sapUiTfValueHelpDsblIcon")}}return this};s.prototype.setEditable=function(t){var s=this.getEditable();e.prototype.setEditable.apply(this,arguments);if(this.getDomRef()&&s!=t&&!this.bIsIconURI){var i=this.$("icon");if(t){i.removeClass("sapUiTfValueHelpDsblIcon");i.addClass("sapUiTfValueHelpRegularIcon")}else{i.removeClass("sapUiTfValueHelpRegularIcon");i.addClass("sapUiTfValueHelpDsblIcon")}}return this};s.prototype.onsapshow=function(e){this._checkChange(e);this.fireValueHelpRequest({});e.preventDefault();e.stopPropagation()};s.prototype.getTooltip_AsString=function(){var t=e.prototype.getTooltip_AsString.apply(this,arguments);if(this.getEnabled()&&this.getEditable()){var s=sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");var i=s.getText("VHF_TOOLTIP");return(t?t+" - ":"")+i}else{return t}};s.prototype.onThemeChanged=function(e){if(this.getDomRef()){this.invalidate()}};s.prototype.exit=function(){this.sIconRegularUrl=undefined;this.sIconHoverUrl=undefined;this.sIconDsblUrl=undefined};return s});
//# sourceMappingURL=ValueHelpField.js.map