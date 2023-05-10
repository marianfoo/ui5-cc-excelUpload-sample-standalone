/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/core/Control","sap/ui/base/Event","sap/m/SelectionDetails","sap/m/SelectionDetailsItem","sap/m/SelectionDetailsItemLine","sap/suite/ui/commons/ChartContainer","./ChartContainerContentRenderer"],function(jQuery,e,t,i,a,n,o,s){"use strict";var r=e.extend("sap.suite.ui.commons.ChartContainerContent",{metadata:{library:"sap.suite.ui.commons",properties:{icon:{type:"string",group:"Misc",defaultValue:null},title:{type:"string",group:"Misc",defaultValue:null}},aggregations:{content:{type:"sap.ui.core.Control",multiple:false}}}});r.prototype.init=function(){this._oSelectionDetails=new i;this._oSelectionDetails.registerSelectionDetailsItemFactory(r._selectionDetailsItemFactory)};r.prototype.onBeforeRendering=function(){var e=this.getParent(),t;this._oSelectionDetails.detachSelectionHandler("_selectionDetails");t=this.getContent();if(t&&t.getMetadata().getName()==="sap.viz.ui5.controls.VizFrame"){this._oSelectionDetails.attachSelectionHandler("_selectionDetails",t)}if(e instanceof o){this._oSelectionDetails.setWrapLabels(e.getWrapLabels())}};r.prototype.exit=function(){if(this._oSelectionDetails){this._oSelectionDetails.destroy();this._oSelectionDetails=null}};r.prototype.getSelectionDetails=function(){r._addEventMapping(this._oSelectionDetails);return this._oSelectionDetails.getFacade()};r.prototype._getSelectionDetails=function(){var e=this.getContent();if(e&&e.getMetadata().getName()==="sap.viz.ui5.controls.VizFrame"){return this._oSelectionDetails}};r._selectionDetailsItemFactory=function(e,t,i,o,s){s=s||"";var r=[],l,c=typeof s==="string";for(var u=0;u<e.length;u++){l=new n({label:e[u].label,value:e[u].value,unit:e[u].unit});if(!c){l.setLineMarker(s[e[u].id])}else if(u===0){l.setLineMarker(s)}r.push(l)}return new a({lines:r})};r._aProxyEvent=["beforeOpen","beforeClose","navigate","actionPress"];r._addEventMapping=function(e){var i=e.attachEvent;e.attachEvent=function(a,n,o,s){if(r._aProxyEvent.indexOf(a)===-1){i.apply(this,arguments);return}else if(jQuery.type(n)==="function"){s=o;o=n;n=null}i.apply(e,[a,n,l,s||e.getFacade()]);function l(i){var r=new t(a,i.oSource,i.mParameters);r.getSource=e.getFacade;if(a==="actionPress"){i.getParameters().items=c(i)}else if(a==="navigate"){i.getParameters().item=i.getParameter("item").getFacade()}o.call(s||e.getFacade(),r,n)}function c(e){var t=e.getParameter("items"),i=[];for(var a=0;a<t.length;a++){i.push(t[a].getFacade())}return i}}};return r});
//# sourceMappingURL=ChartContainerContent.js.map