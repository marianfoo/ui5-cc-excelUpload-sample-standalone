// Copyright (c) 2009-2022 SAP SE, All Rights Reserved
sap.ui.define(["sap/base/util/ObjectPath"],function(e){"use strict";var r={"renderers/fiori2/componentData/config/enablePersonalization":[true],"renderers/fiori2/componentData/config/sessionTimeoutReminderInMinutes":[],"renderers/fiori2/componentData/config/sessionTimeoutIntervalInMinutes":[],"renderers/fiori2/componentData/config/sessionTimeoutTileStopRefreshIntervalInMinutes":[],"renderers/fiori2/componentData/config/enableAutomaticSignout":[false],"services/Container/adapter/config/id":[],"services/Container/adapter/config/firstName":[],"services/Container/adapter/config/lastName":[],"services/Container/adapter/config/fullName":[],"services/Container/adapter/config/userProfile/defaults/id":[],"services/Container/adapter/config/userProfile/defaults/firstName":[],"services/Container/adapter/config/userProfile/defaults/lastName":[],"services/Container/adapter/config/userProfile/defaults/fullName":[]};function n(e,r){var n="",a,i;if(r.namespace){n=r.namespace+"/"}n+=r.propertyName;a=e[n];if(!a){return false}if(Array.isArray(a)){if(a.length===0){return true}for(i=0;i<a.length;i+=1){if(a[i]===r.value){return true}}return false}throw new Error("Black list entry '"+n+"'has an unknown type")}function a(e){var r;if(e==="false"){return false}if(e==="true"){return true}r=Number.parseFloat(e);if(!Number.isNaN(r)){return r}return e}function i(i){var t,o,s=[],f={},u=i.search.replace("+"," ");t=/[?&]sap-ushell-xx-overwrite-config=([^&$]*)(&|$)/.exec(u);if(t===null){return{}}o=t[1].split(",");o.forEach(function(e){var i=decodeURIComponent(e).split(":");var t=/^\/?(.*)\/([^/]*)$/.exec(i[0]);var o;if(t===null){return}o={namespace:t[1],propertyName:t[2],value:a(decodeURIComponent(i[1]))};if(n(r,o)){return}s.push(o)});s.forEach(function(r){var n=r.value;var a=r.namespace.replace(/\//g,".");var i=e.get(a,f);if(i===undefined){e.set(a,{},f);i=e.get(a,f)}i[r.propertyName]=n});return f}return{getConfig:i.bind(null,window.location),_getConfigFromWindowLocation:i,_isBlacklisted:n}});
//# sourceMappingURL=common.read.ushell.config.from.url.js.map