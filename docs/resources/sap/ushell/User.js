// Copyright (c) 2009-2022 SAP SE, All Rights Reserved
sap.ui.define(["sap/ui/thirdparty/URI","sap/ui/base/EventProvider","sap/ui/core/LocaleData","sap/base/Log","sap/base/util/deepExtend"],function(e,t,n,i,o){"use strict";function r(e){if(e===undefined){return undefined}return o({},e)}function a(e){var t;if(e.host&&typeof e.host==="function"&&e.host()){t=e.host();if(typeof e.protocol==="function"&&e.protocol()){t=e.protocol()+"://"+t}return t}return""}function s(e){return e.indexOf("sap_")===0}var h=function(r){var m=[],u,c,g,l,p=new t;this.getEmail=function(){return r.email};this.getFirstName=function(){return r.firstName};this.getFullName=function(){return r.fullName};this.getTimeZone=function(){return r.timeZone};this.getTimeZoneIana=function(){return r.timeZoneIana};this.getInitials=function(){var e=r.fullName||"",t="",n=true;for(var i=0,o=e.length;i<o;++i){if(e[i]===" "){n=true}else if(n){n=false;t+=e[i]}}return t};this.getId=function(){return r.id};this.getLanguage=function(){return r.language};this.getLanguageBcp47=function(){return r.languageBcp47};this.getLanguageText=function(){var e=sap.ui.getCore().getConfiguration().getLocale(),t=new n(e),i=sap.ui.getCore().getConfiguration().getLanguageTag();i=i.replace("-","_");var o=t.getLanguages(),r=o[i]||this.getLanguage().toUpperCase();return r};this.getLastName=function(){return r.lastName};this.getImage=function(){return r.image};this.setImage=function(e){r.image=e;p.fireEvent("onSetImage",e)};this.attachOnSetImage=function(e,t){p.attachEvent("onSetImage",e,t)};this.isJamActive=function(){return r.isJamActive===true};this.isLanguagePersonalized=function(){return r.isLanguagePersonalized===true};this.getTheme=function(e){if(e===h.prototype.constants.themeFormat.ORIGINAL_THEME){return l.originalTheme.theme}if(e===h.prototype.constants.themeFormat.THEME_NAME_PLUS_URL){return g.theme+(g.locationPath?"@"+g.locationOrigin+g.locationPath:"")}if(e===h.prototype.constants.themeFormat.NWBC){if(s(g.theme)){return g.theme}return this.getTheme(h.prototype.constants.themeFormat.THEME_NAME_PLUS_URL)}return g.theme};this.getThemeRoot=function(e){if(r.ranges&&r.ranges.theme&&r.ranges.theme[e]&&r.ranges.theme[e].themeRoot){return r.ranges.theme[e].themeRoot}return""};this.setTheme=function(e){if(this.isSetThemePermitted()===false){var t="setTheme not permitted";i.error(t);throw new Error(t)}g=this._amendTheme({theme:e,root:this.getThemeRoot(e)},c);if(e!==l.originalTheme.theme){this.setChangedProperties({propertyName:"theme",name:"THEME"},l.originalTheme.theme,e);l=g}this.applyTheme(e)};this.applyTheme=function(e){var t=this;var n=this._amendTheme({theme:e,root:this.getThemeRoot(e)},c),i;g=n;if(n.suppliedRoot){sap.ui.getCore().applyTheme(n.theme,n.suppliedRoot+"/UI5/")}else if(n.path){sap.ui.getCore().applyTheme(n.theme,n.path+"/UI5/")}else{sap.ui.getCore().applyTheme(n.theme)}sap.ui.require(["sap/ushell/components/applicationIntegration/AppLifeCycle"],function(e){i=t.getTheme(h.prototype.constants.themeFormat.NWBC);e.postMessageToIframeApp("sap.ushell.appRuntime","themeChange",{currentThemeId:i,themeServiceRoute:window.location.protocol+"//"+window.location.host+"/comsapuitheming.runtime/themeroot/v1"})})};this.setLanguage=function(e){if(e){this.setChangedProperties({propertyName:"language",name:"LANGUAGE"},r.language,e);r.language=e}};this.getAccessibilityMode=function(){return r.accessibility};this.setAccessibilityMode=function(e){if(this.isSetAccessibilityPermitted()===false){var t="setAccessibilityMode not permitted";i.error(t);throw new Error(t)}r.accessibility=e};this.isAdminUser=function(){return r.isAdminUser===true};this.isSetAccessibilityPermitted=function(){return r.setAccessibilityPermitted};this.isSetThemePermitted=function(){return r.setThemePermitted};this.getContentDensity=function(){return r.contentDensity};this.setContentDensity=function(e){if(this.isSetContentDensityPermitted()===false){var t="setContentDensity not permitted";i.error(t);throw new Error(t)}this.setChangedProperties({propertyName:"contentDensity",name:"CONTENT_DENSITY"},r.contentDensity,e);r.contentDensity=e};this.isSetContentDensityPermitted=function(){return r.setContentDensityPermitted};this.getChangedProperties=function(){return o([],m)};this.setChangedProperties=function(e,t,n){m.push({propertyName:e.propertyName,name:e.name,oldValue:t,newValue:n})};this.resetChangedProperties=function(){m=[]};this.resetChangedProperty=function(e){m=m.filter(function(t){return!(e===t.propertyName)})};this.getTrackUsageAnalytics=function(){return r.trackUsageAnalytics};this.setTrackUsageAnalytics=function(e){this.setChangedProperties({propertyName:"trackUsageAnalytics",name:"TRACKING_USAGE_ANALYTICS"},r.trackUsageAnalytics,e);r.trackUsageAnalytics=e};this.setImageConsent=function(e){this.setChangedProperties({propertyName:"isImageConsent",name:"ISIMAGECONSENT"},r.isImageConsent,e);r.isImageConsent=e};this.getImageConsent=function(){return r.isImageConsent};this.getImportBookmarksFlag=function(){return r.importBookmarks||null};this.setImportBookmarksFlag=function(e){this.setChangedProperties({propertyName:"importBookmarks",name:"MYHOME_IMPORT_FROM_CLASSIC"},this.getImportBookmarksFlag()||"",e);r.importBookmarks=e};this.getShowMyHome=function(){return r.showMyHome!==false};this.setShowMyHome=function(e){e=!!e;this.setChangedProperties({propertyName:"showMyHome",name:"MYHOME_ENABLEMENT"},r.showMyHome,e);r.showMyHome=e};this.getDetectDarkMode=function(){return r.detectDarkMode!==false};this.setDetectDarkMode=function(e){e=!!e;this.setChangedProperties({propertyName:"detectDarkMode",name:"THEME_DARKMODE_AUTO_DETECTION"},r.detectDarkMode,e);r.detectDarkMode=e};c={locationPathUi5:new e(sap.ui.require.toUrl("")).absoluteTo(document.location).pathname(),locationPathCustom:r.themeRoot||"",locationOrigin:a(new e(document.location))};if(!c.locationPathUi5){i.warning("User: Could not set UI5 location path")}if(!c.locationPathCustom){i.warning("User: Could not set location path for custom themes")}if(!c.locationOrigin){i.warning("User: Could not set front-end server location origin")}u=r.bootTheme||{theme:"",root:""};g=this._amendTheme(u,c);l=g};h.prototype._amendTheme=function(t,n){var i={},o,h;function m(t,n){var i,o,r={};i=new e(t);o=a(i);if(o){r.locationOrigin=o;r.locationPath=i.path()}else{r.locationOrigin=n.locationOrigin;r.locationPath=t}return r}if(!t||!t.theme||!n){return{originalTheme:{theme:"",root:""},theme:"",suppliedRoot:"",path:"",locationPath:"",locationOrigin:""}}i.originalTheme=r(t);if(i.originalTheme.theme.indexOf("@")>0){o=i.originalTheme.theme.split("@",2);i.theme=o[0];i.suppliedRoot=o[1];h=m(o[1],n);i.locationPath=h.locationPath;i.path=i.locationPath;i.locationOrigin=h.locationOrigin;return i}i.theme=i.originalTheme.theme;if(i.originalTheme.root){i.suppliedRoot=i.originalTheme.root;h=m(i.originalTheme.root,n);i.locationPath=h.locationPath;i.path=i.locationPath;i.locationOrigin=h.locationOrigin;return i}i.suppliedRoot="";if(s(i.theme)){i.locationOrigin=n.locationOrigin;i.locationPath=n.locationPathUi5;i.path="";return i}i.locationOrigin=n.locationOrigin;i.locationPath=n.locationPathCustom;i.path=i.locationPath;return i};h.prototype.constants={themeFormat:{ORIGINAL_THEME:"O",THEME_NAME_PLUS_URL:"N+U",NWBC:"NWBC"}};return h},true);
//# sourceMappingURL=User.js.map