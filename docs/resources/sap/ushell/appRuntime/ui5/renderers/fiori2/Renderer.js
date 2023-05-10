// Copyright (c) 2009-2022 SAP SE, All Rights Reserved
sap.ui.define(["sap/base/util/ObjectPath","sap/ushell/appRuntime/ui5/AppRuntimeService","sap/base/Log","sap/ui/thirdparty/jquery","sap/ushell/appRuntime/ui5/renderers/fiori2/RendererExtensions"],function(e,t,r,jQuery){"use strict";var s=[];function n(){var n=this;e.set("sap.ushell.renderers.fiori2.Renderer",n);["init","createContent","createExtendedShellState","applyExtendedShellState","showLeftPaneContent","showHeaderItem","showRightFloatingContainerItem","showRightFloatingContainer","showToolAreaItem","showFloatingActionButton","showHeaderEndItem","setHeaderVisibility","showSubHeader","showSignOutItem","showSettingsItem","setFooter","setShellFooter","setFooterControl","hideHeaderItem","removeToolAreaItem","removeRightFloatingContainerItem","hideLeftPaneContent","hideFloatingActionButton","hideSubHeader","removeFooter","getCurrentViewportState","addShellSubHeader","addSubHeader","addUserAction","addActionButton","addFloatingButton","addFloatingActionButton","addSidePaneContent","addLeftPaneContent","addHeaderItem","addRightFloatingContainerItem","addToolAreaItem","getModelConfiguration","addUserPreferencesEntry","setHeaderTitle","setLeftPaneVisibility","showToolArea","setHeaderHiding","setFloatingContainerContent","setFloatingContainerVisibility","getFloatingContainerVisiblity","getRightFloatingContainerVisibility","setFloatingContainerDragSelector","createTriggers","convertButtonsToActions","createItem","addEntryInShellStates","removeCustomItems","addCustomItems","addRightViewPort","addLeftViewPort","getShellController","getViewPortContainerCurrentState","ViewPortContainerNavTo","switchViewPortStateByControl","setMeAreaSelected","getMeAreaSelected","setNotificationsSelected","getNotificationsSelected","addShellDanglingControl","getShellConfig","reorderUserPrefEntries","addUserProfilingEntry","logRecentActivity","setCurrentCoreView","getCurrentCoreView"].forEach(function(e){n[e]=function(){r.error("'Renderer' api '"+e+"' is not supported when UI5 application is running inside an iframe (sap.ushell.appRuntime.ui5.renderers.fiori2.Renderer)")}});this.LaunchpadState={App:"app",Home:"home"};this._addButtonHandler=function(e,t){s[e]=t};this.handleHeaderButtonClick=function(e){if(s[e]!==undefined){s[e]()}};this.addHeaderItem=function(e,t,r,s,n){if(typeof arguments[0]==="object"&&typeof arguments[1]==="boolean"){t=arguments[0];r=arguments[1];s=arguments[2];n=arguments[3]}this._addHeaderItem("sap.ushell.services.Renderer.addHeaderItem",t,r,s,n)};this.addHeaderEndItem=function(e,t,r,s,n){if(typeof arguments[0]==="object"&&typeof arguments[1]==="boolean"){t=arguments[0];r=arguments[1];s=arguments[2];n=arguments[3]}this._addHeaderItem("sap.ushell.services.Renderer.addHeaderEndItem",t,r,s,n)};this.showHeaderItem=function(e){t.sendMessageToOuterShell("sap.ushell.services.Renderer.showHeaderItem",{aIds:e,bCurrentState:true,aStates:""})};this.showHeaderEndItem=function(e){t.sendMessageToOuterShell("sap.ushell.services.Renderer.showHeaderEndItem",{aIds:e,bCurrentState:true,aStates:""})};this.hideHeaderItem=function(e){t.sendMessageToOuterShell("sap.ushell.services.Renderer.hideHeaderItem",{aIds:e,bCurrentState:true,aStates:""})};this.hideHeaderEndItem=function(e){t.sendMessageToOuterShell("sap.ushell.services.Renderer.hideHeaderEndItem",{aIds:e,bCurrentState:true,aStates:""})};this._addHeaderItem=function(e,r,s){if(r.click!==undefined){this._addButtonHandler(r.id,r.click)}else if(r.press!==undefined){this._addButtonHandler(r.id,r.press)}t.sendMessageToOuterShell(e,{sId:r.id,sTooltip:r.tooltip,sIcon:r.icon,iFloatingNumber:r.floatingNumber,bVisible:s,bCurrentState:true})};this.setHeaderTitle=function(e){t.sendMessageToOuterShell("sap.ushell.services.Renderer.setHeaderTitle",{sTitle:e})};this.setHeaderVisibility=function(e,r,s){t.sendMessageToOuterShell("sap.ushell.services.Renderer.setHeaderVisibility",{bVisible:e,bCurrentState:r,aStates:s})};this.createShellHeadItem=function(e){if(e.press!==undefined){this._addButtonHandler(e.id,e.press);delete e.press}t.sendMessageToOuterShell("sap.ushell.services.Renderer.createShellHeadItem",{params:e})};this.showActionButton=function(e,r,s){t.sendMessageToOuterShell("sap.ushell.services.Renderer.showActionButton",{aIds:e,bCurrentState:r,aStates:s})};this.hideActionButton=function(e,r,s){t.sendMessageToOuterShell("sap.ushell.services.Renderer.hideActionButton",{aIds:e,bCurrentState:r,aStates:s})};this.addUserAction=function(e){if(e.oControlProperties.press!==undefined){this._addButtonHandler(e.oControlProperties.id,e.oControlProperties.press);delete e.oControlProperties.press}t.sendMessageToOuterShell("sap.ushell.services.Renderer.addUserAction",{oParameters:e})};this.addTopHeaderPlaceHolder=function(){if(jQuery("#rmheader").length===0){jQuery("body").prepend("<div id='rmheader' class='sapUshellHeaderPlaceHolder'></div>");jQuery("body").find(".sapAppRuntimeBaseStyle").css("height","calc(100% - 2.75rem)")}};this.removeTopHeaderPlaceHolder=function(){jQuery("#rmheader").remove();jQuery("body").find(".sapAppRuntimeBaseStyle").css("height","100%")};this.updateHeaderItem=function(e,r){return t.sendMessageToOuterShell("sap.ushell.services.Renderer.updateHeaderItem",{sId:e,oControlProperties:r})};this.destroyButton=function(e){return t.sendMessageToOuterShell("sap.ushell.services.Renderer.destroyButton",{aIds:e})}}return new n});
//# sourceMappingURL=Renderer.js.map