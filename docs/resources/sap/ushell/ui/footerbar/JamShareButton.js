// Copyright (c) 2009-2022 SAP SE, All Rights Reserved
sap.ui.define(["sap/base/Log","sap/collaboration/components/fiori/sharing/dialog/Component","sap/m/Button","sap/m/ButtonRenderer","sap/ushell/library","sap/ushell/resources"],function(e,t,i,o,n,s){"use strict";var a=i.extend("sap.ushell.ui.footerbar.JamShareButton",{metadata:{library:"sap.ushell",properties:{beforePressHandler:{type:"any",group:"Misc",defaultValue:null},afterPressHandler:{type:"any",group:"Misc",defaultValue:null},jamData:{type:"object",group:"Misc",defaultValue:null}}},renderer:"sap.m.ButtonRenderer"});a.prototype.init=function(){if(i.prototype.init){i.prototype.init.apply(this,arguments)}this.setEnabled();this.setIcon("sap-icon://share-2");this.setText(s.i18n.getText("shareBtn"));this.attachPress(function(){if(this.getBeforePressHandler()){this.getBeforePressHandler()()}this.showShareDialog(this.getAfterPressHandler())}.bind(this))};a.prototype.showShareDialog=function(t){function i(){this.shareComponent.setSettings(this.getJamData());this.shareComponent.open();if(t){t()}}if(!this.shareComponent){this.shareComponent=sap.ui.getCore().createComponent({name:"sap.collaboration.components.fiori.sharing.dialog"})}if(sap.ushell.Container&&sap.ushell.Container.inAppRuntime()){this.adjustFLPUrl(this.getJamData()).then(function(){i.call(this)}.bind(this),function(t){e.error("Could not retrieve FLP URL",t,"sap.ushell.ui.footerbar.JamShareButton")})}else{i.call(this)}};a.prototype.exit=function(){if(this.shareComponent){this.shareComponent.destroy()}if(i.prototype.exit){i.prototype.exit.apply(this,arguments)}};a.prototype.setEnabled=function(t){if(sap.ushell.Container){var o=sap.ushell.Container.getUser();if(!(o&&o.isJamActive())){if(!t){e.info("Disabling JamShareButton: user not logged in or Jam not active",null,"sap.ushell.ui.footerbar.JamShareButton")}t=false;this.setVisible(false)}}else{if(!t){e.warning("Disabling JamShareButton: unified shell container not initialized",null,"sap.ushell.ui.footerbar.JamShareButton")}t=false}i.prototype.setEnabled.call(this,t)};a.prototype.adjustFLPUrl=function(e){if(e&&e.object&&e.object.id&&typeof e.object.id==="string"&&e.object.id===document.URL){return sap.ushell.Container.getFLPUrl(true).then(function(t){e.object.id=t})}return Promise.resolve()};return a},true);
//# sourceMappingURL=JamShareButton.js.map