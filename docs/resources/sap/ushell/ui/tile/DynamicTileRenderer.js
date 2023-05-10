// Copyright (c) 2009-2022 SAP SE, All Rights Reserved
sap.ui.define(["sap/ui/core/Renderer","sap/ui/core/format/NumberFormat","../../library","./TileBaseRenderer","sap/ushell/resources"],function(e,t,a,i,r){"use strict";var s=a.ui.tile.State;var l=a.ui.tile.StateArrow;var n=r.i18n;var o=e.extend(i);o.apiVersion=2;o.renderPart=function(e,a){var i=a.getNumberValue(),r=a.getNumberFactor(),o=i.toString(),c=a.getIcon()?4:5,u=this._shouldProcessDigits(o,a);if(o.length>c||u){var m=this._normalizeNumber(i,c,r,a);r=m.numberFactor;o=m.displayNumber}else if(o!==""){var d=t.getFloatInstance({maxFractionDigits:c});o=d.format(i)}e.openStart("div");e.class("sapUshellDynamicTile");e.openEnd();e.openStart("div");e.class("sapUshellDynamicTileData");e.class(s[a.getNumberState()]?"sapUshellDynamicTileData"+a.getNumberState():"sapUshellDynamicTileData"+s.Neutral);e.openEnd();e.openStart("div");e.class("sapUshellDynamicTileIndication");e.openEnd();if(l[a.getStateArrow()]){e.openStart("div");e.class("sapUshellDynamicTileStateArrow");e.class("sapUshellDynamicTileData"+l[a.getStateArrow()]);e.openEnd();e.close("div")}e.voidStart("br");e.voidEnd();e.openStart("div");e.class("sapUshellDynamicTileNumberFactor");e.accessibilityState(a,{label:n.getText("TileUnits_lable")+r});e.openEnd();e.text(r);e.close("div");e.close("div");e.openStart("div");e.class("sapUshellDynamicTileNumber");if(o&&o!==""){e.accessibilityState(a,{label:n.getText("TileValue_lable")+o});e.openEnd();e.text(o)}else{e.openEnd();e.text(a.getNumberValue())}e.close("div");e.close("div");e.close("div")};o._normalizeNumber=function(e,a,i,r){var s;if(isNaN(e)){s=e}else{var l=t.getFloatInstance({maxFractionDigits:r.getNumberDigits()});if(!i){var n=Math.abs(e);if(n>=1e9){i="B";e/=1e9}else if(n>=1e6){i="M";e/=1e6}else if(n>=1e3){i="K";e/=1e3}}s=l.format(e)}var o=s;var c=o[a-1];a-=c==="."||c===","?1:0;o=o.substring(0,a);return{displayNumber:o,numberFactor:i}};o._shouldProcessDigits=function(e,t){var a=t.getNumberDigits(),i;if(e.indexOf(".")!==-1){i=e.split(".")[1].length;if(i>a){return true}}return false};o.getInfoPrefix=function(e){return e.getNumberUnit()};return o});
//# sourceMappingURL=DynamicTileRenderer.js.map