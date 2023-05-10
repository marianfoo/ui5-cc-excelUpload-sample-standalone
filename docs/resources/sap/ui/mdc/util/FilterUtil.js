/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/mdc/util/IdentifierUtil","sap/ui/mdc/enum/ConditionValidated","sap/ui/mdc/condition/ConditionConverter","sap/ui/mdc/condition/FilterConverter","sap/base/Log","sap/base/util/merge"],function(e,t,i,r,n,a){"use strict";var o={getPropertyByKey:function(t,i){var r=null;t.some(function(t){if(e.getPropertyPath(t)===i){r=t}return r!=null});if(!r){t.some(function(t){if(e.getPropertyKey(t)===i){r=t}return r!=null})}return r},getConditionsMap:function(e,i){var r,a,o={};if(!e||!e.isA("sap.ui.mdc.FilterBar")){n.error("instance of sap.ui.mdc.FilterBar expected");return o}var s=e.getInternalConditions();for(var u in s){if(i.indexOf(u)>=0){r=[];if(s[u]){for(var l=0;l<s[u].length;l++){a={};a.operator=s[u][l].operator;if(a.operator==="EQ"&&s[u][l].validated===t.Validated){a.values=[s[u][l].values[0]]}else{a.values=s[u][l].values}r.push(a)}o[u]=r}}}return o},getFilterInfo:function(e,t,s,u){var l={};u=u?u:[];var p,f,d={},c;var y={};if(s&&s.length>0){for(f in t){if(u.indexOf(f)<0){var v=o.getPropertyByKey(s,f);if(v){y[f]={type:v.typeConfig.typeInstance,caseSensitive:v.caseSensitive,baseType:v.typeConfig.baseType};d[f]=[];for(p=0;p<t[f].length;p++){c=a({},t[f][p]);d[f].push(i.toType(c,v.typeConfig.typeInstance,e.getTypeUtil?e.getTypeUtil():e))}}else{n.error("sap.ui.mdc.util.FilterUitl.js :","could not find propertyMetadata of : "+f)}}}if(Object.keys(d).length>0){l.filters=r.createFilters(d,y)}}return l}};return o});
//# sourceMappingURL=FilterUtil.js.map