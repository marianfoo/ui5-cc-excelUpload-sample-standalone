/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer","sap/ui/commons/library"],function(e,a){"use strict";var s=a.TextViewDesign;var t=a.TextViewColor;var i={};i.render=function(e,a){this.applyEnabledStyles(e,a);this.applyTextDesign(e,a);if(!a.getWrapping()){e.addClass("sapUiTvWrap")}if(a.getWidth()){e.addStyle("width",a.getWidth())}e.write("<span");e.writeControlData(a);e.addClass("sapUiTv");if(a.getTooltip_AsString()){e.writeAttributeEscaped("title",a.getTooltip_AsString())}else if(a.getText()){e.writeAttributeEscaped("title",a.getText())}var s=a.getTextDirection();if(s){e.addStyle("direction",s.toLowerCase())}var l=i.getTextAlign(a.getTextAlign(),s);if(l){l=l.charAt(0).toUpperCase()+l.substring(1);e.addClass("sapUiTvAlign"+l)}e.writeAttribute("tabindex","-1");e.writeAccessibilityState(a,{role:a.getAccessibleRole()?a.getAccessibleRole().toLowerCase():undefined,invalid:a.getSemanticColor()==t.Negative,disabled:!a.getEnabled()});e.writeClasses();e.writeStyles();e.write(">");e.writeEscaped(a.getText(),true);e.write("</span>")};i.applyTextDesign=function(e,a){var t=a.getDesign();if(t==s.Standard){return}switch(t){case s.Bold:e.addClass("sapUiTvEmph");break;case s.H1:e.addClass("sapUiTvH1");break;case s.H2:e.addClass("sapUiTvH2");break;case s.H3:e.addClass("sapUiTvH3");break;case s.H4:e.addClass("sapUiTvH4");break;case s.H5:e.addClass("sapUiTvH5");break;case s.H6:e.addClass("sapUiTvH6");break;case s.Italic:e.addClass("sapUiTvItalic");break;case s.Small:e.addClass("sapUiTvSmall");break;case s.Monospace:e.addClass("sapUiTvMono");break;case s.Underline:e.addClass("sapUiTvULine");break;default:break}};i.applyEnabledStyles=function(e,a){if(!a.getEnabled()){e.addClass("sapUiTvDsbl");a.allowTextSelection(false)}else{switch(a.getSemanticColor()){case t.Negative:e.addClass("sapUiTvErr");break;case t.Positive:e.addClass("sapUiTvSucc");break;case t.Critical:e.addClass("sapUiTvWarn");break}}};i.getTextAlign=e.getTextAlign;return i},true);
//# sourceMappingURL=TextViewRenderer.js.map