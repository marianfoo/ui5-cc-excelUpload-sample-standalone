/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/ui/core/mvc/View","sap/ui/core/Component"],function(e,n,i){"use strict";sap.ui.extensionpoint=function(n,i,o,a,r){e.warning("Do not use deprecated factory function 'sap.ui.extensionpoint'. Use 'sap.ui.core.ExtensionPoint.load' instead","sap.ui.extensionpoint",null,function(){return{type:"sap.ui.extensionpoint",name:i}});return t._factory(n,i,o,a,r)};var t=sap.ui.extensionpoint||{};t._factory=function(o,a,r,s,u,f){var c,l,g,d;if(o){if(o.isA("sap.ui.core.mvc.View")){d=o.sViewName;l=o}else if(o.isA("sap.ui.core.Fragment")){d=o.getFragmentName();l=o._oContainingView}c=i.getCustomizing(o,{type:"sap.ui.viewExtensions",name:d,extensionName:a})}if(c){if(c.className){e.info("Customizing: View extension found for extension point '"+a+"' in View '"+l.sViewName+"': "+c.className+": "+(c.viewName||c.fragmentName));var m=l&&c.id?l.createId(c.id):c.id;var p={async:f,id:m,type:c.type};if(f&&l._sProcessingMode){p.processingMode=l._sProcessingMode}if(c.className==="sap.ui.core.Fragment"){var v=sap.ui.require("sap/ui/core/Fragment");p.fragmentName=c.fragmentName;p.containingView=l;if(f){if(v){g=v.load(p)}else{g=new Promise(function(e,n){sap.ui.require(["sap/ui/core/Fragment"],function(n){e(n.load(p))},n)})}}else{v=v||sap.ui.requireSync("sap/ui/core/Fragment");var w=new v(p);g=Array.isArray(w)?w:[w]}}else if(c.className==="sap.ui.core.mvc.View"){p.viewName=c.viewName;var x=n._create(p);if(f){g=x.loaded()}else{g=[x]}}else{e.warning("Customizing: Unknown extension className configured (and ignored) in Component.js for extension point '"+a+"' in View '"+l.sViewName+"': "+c.className)}}else{e.warning("Customizing: no extension className configured in Component.js for extension point '"+a+"' in View '"+l.sViewName+"': "+c.className)}}else if(t._fnExtensionProvider){var N=t._fnExtensionProvider(l);var y;if(l.isA("sap.ui.core.Fragment")){y=l._sExplicitId;var _=l.getController();l=_&&typeof _.isA==="function"&&_.isA("sap.ui.core.mvc.Controller")&&_.getView();if(l){y=l.getLocalId(y)||y}}if(N){if(!l){e.warning("View instance could not be passed to ExtensionPoint Provider for extension point '"+a+"' "+"in fragment '"+y+"'.")}return[{providerClass:N,view:l,fragmentId:y,name:a,createDefault:r,targetControl:undefined,aggregationName:undefined,index:undefined,ready:function(e){var n=this._nextSibling;while(n!=null){n.index+=e.length;n=n._nextSibling}this._aControls=e},_aControls:[],_isExtensionPoint:true,_nextSibling:null}]}}if(!g&&typeof r==="function"){g=r()}var C=function(n){if(n&&!Array.isArray(n)){n=[n]}if(n&&s){var i=s.getMetadata().getAggregation(u);if(i){for(var t=0,o=n.length;t<o;t++){s[i._sMutator](n[t])}}else{e.error("Creating extension point failed - Tried to add extension point with name "+a+" to an aggregation of "+s.getId()+" in view "+l.sViewName+", but sAggregationName was not provided correctly and I could not find a default aggregation")}}return n||[]};if(g&&typeof g.then==="function"){return g.then(C)}else{return C(g)}};t.registerExtensionProvider=function(n){if(n==null){delete t._fnExtensionProvider}else if(typeof n=="function"){t._fnExtensionProvider=n}else{e.error("ExtensionPoint provider must be a function!")}};t.load=function(e){return Promise.resolve(t._factory(e.container,e.name,e.createDefaultContent,null,null,!!e.async))};return t});
//# sourceMappingURL=ExtensionPoint.js.map