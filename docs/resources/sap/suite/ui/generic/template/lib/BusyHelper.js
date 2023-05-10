sap.ui.define(["sap/ui/base/Object","sap/suite/ui/generic/template/lib/MessageUtils","sap/suite/ui/generic/template/genericUtilities/testableHelper","sap/suite/ui/generic/template/genericUtilities/FeLogger","sap/base/util/extend","sap/base/util/isEmptyObject","sap/suite/ui/generic/template/genericUtilities/FeError"],function(e,t,n,i,r,s,a){"use strict";var o="lib.BusyHelper";var u=new i(o);var l=u.getLogger();var c=u.Level;function p(e){var n=0;var i=Object.create(null);var u=false;var p=false;var f=0;e.oNavigationHost.setBusyIndicatorDelay(0);var g=Promise.resolve();var v=Function.prototype;var y={};var m;function d(){return f!==0||!s(i)}var b;function h(n){var i=d();if(i||n){p=false;var r=i&&!m;e.oNavigationHost.setBusy(r);l.info("Physical busy state has been changed to "+r);if(i!==u){u=i;if(!u){var s=e&&e.oNavigationControllerProxy&&e.oNavigationControllerProxy.getActiveComponents();if(s){for(var a=0;a<s.length;a++){var o=s[a];if(!o){continue}var c=e.componentRegistry&&e.componentRegistry[o]&&e.componentRegistry[o].oController;c&&c.adaptTransientMessageExtension&&c.adaptTransientMessageExtension()}}g=Promise.resolve();var f=e.oApplicationProxy.getTransientMessages();var h=P(f);var T=h?{action:e.oViewDependencyHelper.setActivePagesToDirty,actionLabel:e.getText("ETAG_REFRESH_BUTTON")}:null;g=t.handleTransientMessages(e,y.actionLabel,T);y={};g.then(v)}}}else{var B=e.oNavigationObserver.getProcessFinished(true);B.then(b,b)}}b=h.bind(null,true);function T(e){if(e){h()}else if(!p){p=true;setTimeout(h,0)}}function B(){f--;if(!f){T(false)}}function P(n){var i=e.getText("ETAG_MESSAGE");var r=false;n.forEach(function(e){if(t.isMessageETagMessage(e)){r=true;e.setMessage(i);e.setDescription(undefined);e.setDescriptionUrl(undefined)}});return r}function E(t,n,i,r){F(n,i,r);if(u){return}u=true;m=t&&e.bEnablePlaceholder;e.oApplicationProxy.removeTransientMessages();e.oApplicationProxy.deregisterForMessageNavigation();x()}function x(){var t=Object.create(null);for(var n in e.mBusyTopics){var i=e.mBusyTopics[n];t[n]=(i.getBeforeData||Function.prototype)()}g=new Promise(function(n){v=function(){v=Function.prototype;var i=[];for(var r in e.mBusyTopics){var s=t[r];var a=e.mBusyTopics[r];var o=(a.fallback||Function.prototype).bind(null,s);i.push(a.oneTimer?a.oneTimer.bind(null,s,o):o);delete a.oneTimer}i.forEach(function(e){e()});n()}})}function F(t,i,r){if(!sap.ui.support){return}n++;var s=[],u="",p=e.oNavigationHost.getId(),f="sap.suite.ui.generic.template.busyHandling";try{throw new a(o,"Get the stack")}catch(e){s=e.stack.split(t,2);if(s.length>=2){s=s[1].split("\n");s.shift()}if(s.length){u=s[0].trim()}}if(l.getLevel(f)<c.INFO){l.setLevel(c.INFO,f)}l.info("busyHandling: "+t,r+" called (count: "+n+")",f,function(){var e={method:t,reason:r,promise:i,promisePending:true,caller:u,callStack:s,elementId:p,type:f};function n(){e.promisePending=false}e.promise.then(n,n);return e})}function H(e,t,n,s,a){if(t){r(y,s);if(!i[e]){var o=new Promise(function(t){i[e]=t});E(a,"setBusyReason",o,e)}}else{if(i[e]){i[e]();delete i[e]}}T(t&&n)}function M(e,t,n,i){r(y,n);f++;E(i,"setBusy",e,"");e.then(B,B);T(t)}function N(){return 0}return{setBusyReason:H,setBusy:M,isBusy:d,getUnbusy:function(){return g},getBusyDelay:N}}return e.extend("sap.suite.ui.generic.template.lib.BusyHelper",{constructor:function(e){r(this,n.testableStatic(p,"BusyHelper")(e))}})});
//# sourceMappingURL=BusyHelper.js.map