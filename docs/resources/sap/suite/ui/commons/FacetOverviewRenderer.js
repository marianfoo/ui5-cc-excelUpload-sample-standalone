/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["./library"],function(t){"use strict";var e={};e.render=function(e,i){var r=i.getTooltip_AsString();e.write("<div");e.writeControlData(i);if(r){e.writeAttributeEscaped("title",r)}if(i.hasListeners("press")){e.addClass("sapSuiteFovClickable")}e.addClass("sapSuiteFov");e.writeClasses();e.addStyle("width",i.getWidth());e.addStyle("height",i.getHeight());e.writeStyles();e.writeAttribute("role","note");e.writeAttribute("aria-describedby",i.getId()+"-title-text "+i.getId()+"-qty "+i.getId()+"-content");e.write(">");e.write("<div");e.writeAttribute("id",i.getId()+"-title");e.addClass("sapSuiteFovTitle");e.writeClasses();e.write(">");e.write("<div");e.writeAttribute("id",i.getId()+"-title-text");e.addClass("sapSuiteFovTitleText");e.writeClasses();e.write(">");e.writeEscaped(i.getTitle());e.write("</div>");if(i.getQuantity()>=0){e.write("<div");e.writeAttribute("id",i.getId()+"-qty");e.addClass("sapSuiteFovQty");e.writeClasses();e.write(">");e.writeEscaped("("+i.getQuantity()+")");e.write("</div>")}if(i._oHoverIcon){e.write("<div");e.writeAttribute("id",i.getId()+"-hover-icon");e.addClass("sapSuiteFovHoverIcon");e.writeClasses();e.write(">");e.renderControl(i._oHoverIcon);e.write("</div>")}e.write("</div>");e.write("<div");e.writeAttribute("id",i.getId()+"-content");if(t.FacetOverviewHeight.Auto==i.getHeightType()){e.addStyle("height","auto");e.writeStyles()}e.addClass("sapSuiteFovContent");e.writeClasses();e.write(">");if(i.getContent()){e.renderControl(i.getContent())}else if(t.FacetOverviewHeight.XS!=i.getHeightType()){e.renderControl(i._oNoDataLabel)}e.write("</div>");e.write("</div>")};return e},true);
//# sourceMappingURL=FacetOverviewRenderer.js.map