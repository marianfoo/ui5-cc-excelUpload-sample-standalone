/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

(c) Copyright 2009-2017 SAP SE. All rights reserved
 */
sap.ui.define(["sap/ui/core/mvc/Controller","sap/collaboration/library","sap/collaboration/components/utils/JamUtil"],function(e,t,i){"use strict";var a=t.FeedType;sap.ui.controller("sap.collaboration.components.fiori.feed.splitApp.FeedTypeMaster",{onInit:function(){this.sJamToken=this.getView().getViewData().jamToken;this.sPrefixId=this.getView().getViewData().controlId;this.oBusinessObject=this.getView().getViewData().object},listItemPress:function(e){if(e===a.follows||e===a.company){this.getJamWidget(e);this.setDetailPageTitle(e)}else{this.navigateToGroupMaster(e)}},getJamWidget:function(e){var t=new i;var a=t.prepareWidgetData(this.sJamToken,e,"",this.oBusinessObject);t.createJamWidget(this.sPrefixId+"widgetContainer",a)},setDetailPageTitle:function(e){var t;e===a.follows?t=this.getView().oLangBundle.getText("FRV_DOMAIN_DATA_FEED_TYPES_FOLLOWS"):t=this.getView().oLangBundle.getText("FRV_DOMAIN_DATA_FEED_TYPES_COMPANY");sap.ui.getCore().byId(this.sPrefixId+"feedDetailsPage").setTitle(t)},navigateToGroupMaster:function(e){var t=this.createNavigationData(e);sap.ui.getCore().getEventBus().publish("nav","to",t)},createNavigationData:function(e){var t;e===a.group?t={viewName:"sap.collaboration.components.fiori.feed.splitApp.GroupMaster",viewId:this.sPrefixId+"groupMasterView",data:{feedType:a.group,lanBundle:this.getView().oLangBundle,groupMasterPageTitle:this.getView().oLangBundle.getText("GROUP_MASTER_PAGE_GROUP_TITLE")}}:t={viewName:"sap.collaboration.components.fiori.feed.splitApp.GroupMaster",viewId:this.sPrefixId+"groupMasterView",data:{feedType:a.object,lanBundle:this.getView().oLangBundle,groupMasterPageTitle:this.getView().oLangBundle.getText("GROUP_MASTER_PAGE_BO_TITLE")}};return t}})});
//# sourceMappingURL=FeedTypeMaster.controller.js.map