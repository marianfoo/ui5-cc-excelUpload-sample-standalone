/*!
 * SAPUI5
 * (c) Copyright 2009-2022 SAP SE. All rights reserved.
 */
sap.ui.define(["sap/m/P13nOperationsHelper","sap/m/library"],function(t,o){"use strict";var e=o.P13nConditionOperation;var n="Not";var N=function(){t.apply(this,arguments);this.init();this.oIncludeOperations.numcFiscal=[e.EQ,e.BT,e.LT,e.LE,e.GT,e.GE]};N.prototype=Object.create(t.prototype);N.prototype.oIncludeOperationsOptinal={optinal:[e.Empty]};N.prototype.oExcludeOperationsDefault={default:[e.NotEQ]};N.prototype.oExcludeOperationsExtended={default:[e.NotEQ,e.NotBT,e.NotLT,e.NotLE,e.NotGT,e.NotGE],string:[e.NotContains,e.NotEQ,e.NotBT,e.NotStartsWith,e.NotEndsWith,e.NotLT,e.NotLE,e.NotGT,e.NotGE],date:[e.NotEQ,e.NotBT,e.NotLT,e.NotLE,e.NotGT,e.NotGE],time:[e.NotEQ,e.NotBT,e.NotLT,e.NotLE,e.NotGT,e.NotGE],datetime:[e.NotEQ,e.NotBT,e.NotLT,e.NotLE,e.NotGT,e.NotGE],numeric:[e.NotEQ,e.NotBT,e.NotLT,e.NotLE,e.NotGT,e.NotGE],numc:[e.NotContains,e.NotEQ,e.NotBT,e.NotEndsWith,e.NotLT,e.NotLE,e.NotGT,e.NotGE],numcFiscal:[e.NotEQ,e.NotBT,e.NotLT,e.NotLE,e.NotGT,e.NotGE],boolean:[e.NotEQ]};N.prototype.oExcludeOperationsOptional={optinal:[e.NotEmpty]};N.prototype.isExcludeType=function(t){return i(t,this.oExcludeOperationsExtended)||i(t,this.oExcludeOperationsOptional)};N.prototype.getCorrespondingExcludeOperation=function(t){return n+t};N.prototype.getCorrespondingIncludeOperation=function(t){return t.slice(n.length)};function i(t,o){var e,n,N,i,r=false;for(n in o){N=o[n];for(e=0;e<N.length;e++){i=N[e];if(i===t){r=true;break}}if(r){break}}return r}return N},true);
//# sourceMappingURL=P13nOperationsHelper.js.map