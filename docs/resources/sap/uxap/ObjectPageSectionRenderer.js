/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Configuration"],function(e){"use strict";var t={apiVersion:2};t.render=function(t,i){var a,n,r=e.getAccessibility(),o=i.getAggregation("ariaLabelledBy"),s=i.getHeading(),l=i.getWrapTitle();if(!i.getVisible()||!i._getInternalVisible()){return}a=i._getTitle();n=i._isTitleVisible();t.openStart("section",i).class("sapUxAPObjectPageSection");if(!n){t.class("sapUxAPObjectPageSectionNoTitle")}if(l){t.class("sapUxAPObjectPageSectionWrapTitle")}t.attr("role","region");if(r&&o){t.attr("aria-labelledby",o.getId())}t.attr("data-sap-ui-customfastnavgroup",true);t.openEnd();if(s){t.openStart("div").class("sapUxAPObjectPageSectionHeading").openEnd();t.renderControl(s);t.close("div")}t.openStart("div",i.getId()+"-header").attr("role","heading").attr("aria-level",i._getARIALevel()).attr("aria-hidden",!n).class("sapUxAPObjectPageSectionHeader").class(n?"":"sapUxAPObjectPageSectionHeaderHidden").openEnd();t.openStart("div",i.getId()+"-title").class("sapUxAPObjectPageSectionTitle");if(i.getTitleUppercase()){t.class("sapUxAPObjectPageSectionTitleUppercase")}t.openEnd();t.text(a);t.close("div");if(n){t.renderControl(i._getShowHideAllButton());t.renderControl(i._getShowHideButton())}t.close("div");t.openStart("div").class("sapUxAPObjectPageSectionContainer");if(i._isHidden){t.style("display","none")}t.openEnd();t.renderControl(i._getGrid());t.close("div");t.close("section")};return t},true);
//# sourceMappingURL=ObjectPageSectionRenderer.js.map