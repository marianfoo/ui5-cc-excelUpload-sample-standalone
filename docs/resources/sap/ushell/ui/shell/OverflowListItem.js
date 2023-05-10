// Copyright (c) 2009-2022 SAP SE, All Rights Reserved
sap.ui.define(["sap/m/StandardListItem","sap/ui/core/CustomData","sap/ushell/library","sap/ushell/ui/shell/ShellHeadItem"],function(e,t,a,r){"use strict";var o=r.getMetadata().getProperties();var l=e.extend("sap.ushell.ui.shell.OverflowListItem",{metadata:{library:"sap.ushell",properties:{floatingNumber:{type:o.floatingNumber.type,group:o.floatingNumber.group,defaultValue:o.floatingNumber.defaultValue},floatingNumberMaxValue:{type:o.floatingNumberMaxValue.type,group:o.floatingNumberMaxValue.group,defaultValue:o.floatingNumberMaxValue.defaultValue},floatingNumberType:{type:o.floatingNumberType.type,group:o.floatingNumberType.group,defaultValue:o.floatingNumberType.defaultValue}}},renderer:{apiVersion:2}});l.prototype.init=r.prototype.init;l.prototype.onBeforeRendering=r.prototype.onBeforeRendering;l.prototype.tooltipFormatter=r.prototype.tooltipFormatter;l.prototype.floatingNumberFormatter=r.prototype.floatingNumberFormatter;l.prototype._getImage=function(){var a=this._oImage;if(!a){a=e.prototype._getImage.call(this)}if(this.getFloatingNumber()>0){a.addStyleClass("sapUshellShellHeadItmCounter");a.addCustomData(new t({key:"counter-content",value:this.floatingNumberFormatter(),writeToDom:true}))}else{a.removeStyleClass("sapUshellShellHeadItmCounter")}this._oImage=a;return this._oImage};return l},true);
//# sourceMappingURL=OverflowListItem.js.map