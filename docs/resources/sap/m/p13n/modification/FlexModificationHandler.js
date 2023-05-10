/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ModificationHandler","sap/m/p13n/FlexUtil","sap/ui/fl/apply/api/FlexRuntimeInfoAPI","sap/m/p13n/enum/PersistenceMode"],function(e,t,n,a){"use strict";var i;var r=e.extend("sap.m.p13n.modification.FlexModificationHandler");r.prototype.processChanges=function(e,n){var i=e&&e[0]?e[0].selectorElement:undefined;var r=n.mode;var o=r===a.Auto;if(o){r=n.hasVM?"Standard":a.Global}var s=r===a.Global;var p=r===a.Transient;var l=t.handleChanges.call(this,e,s,p);return s?l.then(function(e){return t.saveChanges.call(this,i,e)}):l};r.prototype.waitForChanges=function(e,t){return n.waitForChanges.apply(this,arguments)};r.prototype.reset=function(e,n){var i=n.mode;var r=i===a.Global;var o=!n.hasVM&&n.hasPP&&i===a.Auto;return r||o?t.reset.call(this,e):t.restore.call(this,e)};r.prototype.isModificationSupported=function(e,t){return n.isFlexSupported.apply(this,arguments)};r.prototype.initialize=function(e){return sap.ui.getCore().loadLibrary("sap.ui.fl",{async:true}).then(function(){return this.waitForChanges({element:e})}.bind(this)).then(function(){sap.m.p13n.Engine.getInstance().fireStateChange(e)})};r.getInstance=function(){if(!i){i=new r}return i};return r});
//# sourceMappingURL=FlexModificationHandler.js.map