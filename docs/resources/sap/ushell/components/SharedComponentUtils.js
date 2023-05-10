// Copyright (c) 2009-2022 SAP SE, All Rights Reserved
sap.ui.define(["sap/ui/Device","sap/ushell/Config","sap/ushell/UserActivityLog","sap/base/Log","sap/ui/core/Component","sap/ui/thirdparty/jquery"],function(e,t,n,i,r,jQuery){"use strict";var s={PERS_KEY:"flp.settings.FlpSettings",bFlpSettingsAdded:false,toggleUserActivityLog:function(){t.on("/core/extension/SupportTicket").do(function(e){if(e){n.activate()}else{n.deactivate()}})},initializeAccessKeys:function(){if(e.system.desktop){sap.ui.require(["sap/ushell/components/ComponentKeysHandler","sap/ushell/renderers/fiori2/AccessKeysHandler"],function(e,t){e.getInstance().then(function(e){t.registerAppKeysHandler(e.handleFocusOnMe)})})}},getEffectiveHomepageSetting:function(e,n){var i,r=t.last(n)!==false,s=e.split("/").reverse()[0];if(r){i=this._getPersonalization(s)}else{i=Promise.resolve()}return i.then(function(n){n=n||t.last(e);if(n!==undefined){t.emit(e,n)}return n}).catch(function(){return t.last(e)})},_getPersonalization:function(e){return s.getPersonalizer(e,sap.ushell.Container.getRenderer("fiori2")).then(function(t){return new Promise(function(n,r){t.getPersData().done(n).fail(function(t){i.error("Failed to load "+e+" from the personalization",t,"sap.ushell.components.flp.settings.FlpSettings");r()})})})},getPersonalizer:function(e,t){return sap.ushell.Container.getServiceAsync("Personalization").then(function(n){var i=r.getOwnerComponentFor(t);var s={keyCategory:n.constants.keyCategory.FIXED_KEY,writeFrequency:n.constants.writeFrequency.LOW,clientStorageAllowed:true};var o={container:this.PERS_KEY,item:e};return n.getPersonalizer(o,s,i)}.bind(this))}};return s});
//# sourceMappingURL=SharedComponentUtils.js.map