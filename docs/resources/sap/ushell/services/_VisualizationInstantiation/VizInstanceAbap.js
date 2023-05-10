// Copyright (c) 2009-2022 SAP SE, All Rights Reserved
sap.ui.define(["sap/ushell/services/_VisualizationInstantiation/VizInstance","sap/m/library","sap/base/Log","sap/ushell/library","sap/ushell/utils/chipsUtils","sap/ushell/services/_VisualizationInstantiation/VizInstanceRenderer"],function(t,i,e,n,s,a){"use strict";var r=i.LoadState;var o=n.DisplayFormat;var p=t.extend("sap.ushell.ui.launchpad.VizInstanceAbap",{metadata:{library:"sap.ushell"},renderer:a});p.prototype.init=function(){t.prototype.init.apply(this,arguments);this._oChipInstancePromise=sap.ushell.Container.getServiceAsync("PageBuilding").then(function(t){var i=t.getFactory();var e=this.getInstantiationData();var n;var a;if(!e.simplifiedChipFormat){n={chipId:e.chip.id,chip:e.chip}}else{var r=e.chip||{};a=r.bags;n={chipId:r.chipId,configuration:r.configuration?JSON.stringify(r.configuration):"{}"}}var o=i.createChipInstance(n);s.addBagDataToChipInstance(o,a);return o}.bind(this))};p.prototype.load=function(t){return this._oChipInstancePromise.then(function(t){this._oChipInstance=t;return new Promise(this._oChipInstance.load)}.bind(this)).then(function(){if(this.getPreview()){var t=this._oChipInstance.getContract("preview");if(t){t.setEnabled(true)}}return this._oChipInstance.getImplementationAsSapui5Async()}.bind(this)).then(function(t){this._setChipInstanceType();this.setContent(t);if(t.getComponentInstance&&t.getComponentInstance()){t.getComponentInstance().setParent(this)}return Promise.resolve()}.bind(this)).catch(function(t){this.setState(r.Failed);return Promise.reject(t)}.bind(this))};p.prototype._setChipInstanceType=function(){var t=this._oChipInstance.getContract("types");if(t){t.setType(this._mapDisplayFormatToChip(this.getDisplayFormat()))}};p.prototype._mapDisplayFormatToChip=function(t){var i={};i[o.Standard]="tile";i[o.StandardWide]="tile";i[o.Compact]="link";i[o.Flat]="flat";i[o.FlatWide]="flatwide";return i[t]};p.prototype._setVisible=function(t){var i=this._oChipInstance&&!this._oChipInstance.isStub()&&this._oChipInstance.getContract("visible");if(i){i.setVisible(t)}};p.prototype.refresh=function(){if(this._oChipInstance){this._oChipInstance.refresh()}};p.prototype.setActive=function(t,i){this._setVisible(t);if(i){this.refresh()}return this.setProperty("active",t,false)};return p});
//# sourceMappingURL=VizInstanceAbap.js.map