// Copyright (c) 2009-2022 SAP SE, All Rights Reserved
sap.ui.define(["sap/ushell/services/_VisualizationInstantiation/VizInstance","sap/ushell/services/_VisualizationInstantiation/VizInstanceAbap","sap/ushell/services/_VisualizationInstantiation/VizInstanceCdm","sap/ushell/services/_VisualizationInstantiation/VizInstanceLaunchPage","sap/ushell/services/_VisualizationInstantiation/VizInstanceLink","sap/m/library","sap/ushell/library","sap/base/util/ObjectPath","sap/ushell/EventHub","sap/ushell/adapters/cdm/v3/_LaunchPage/readVisualizations"],function(t,e,a,i,n,s,o,r,d,c){"use strict";var l=s.LoadState;var u=o.DisplayFormat;function p(){}p.prototype.instantiateVisualization=function(s){var o;var p=r.get("_instantiationData.platform",s);var v={vizRefId:s.id,title:s.title,subtitle:s.subtitle,icon:s.icon,keywords:s.keywords,instantiationData:s._instantiationData,indicatorDataSource:s.indicatorDataSource,dataSource:s.dataSource,contentProviderId:s.contentProviderId,vizConfig:s.vizConfig,supportedDisplayFormats:s.supportedDisplayFormats,displayFormat:s.displayFormatHint,numberUnit:s.numberUnit,dataHelpId:s.vizId,preview:s.preview};if(v.indicatorDataSource){v.indicatorDataSource.ui5object=true}if((p==="ABAP"||p==="CDM")&&v.displayFormat===u.Compact){this._cleanInstantiationDataForLink(v);p="LINK"}switch(p){case"ABAP":o=new e(v);break;case"CDM":o=new a(v);break;case"LINK":o=new n(v);break;case"LAUNCHPAGE":o=new i(v);break;default:return new t({state:l.Failed})}o.setTargetURL(s.targetURL);if(p!=="LINK"){o.setInfo(s.info)}if(c.isStandardVizType(s.vizType)){try{o.load().then(function(){d.emit("VizInstanceLoaded",s.id)})}catch(t){o.setState(l.Failed);d.emit("VizInstanceLoaded",s.id)}}else{o.setState(l.Loading);d.once("CoreResourcesComplementLoaded").do(function(){try{o.load(true).then(function(){o.setState(l.Loaded)})}catch(t){o.setState(l.Failed)}})}return o};p.prototype._cleanInstantiationDataForLink=function(t){delete t.info;delete t.icon;delete t.keywords;delete t.instantiationData;delete t.dataSource;delete t.contentProviderId;delete t.vizConfig;delete t.numberUnit;delete t.indicatorDataSource;delete t.preview};p.hasNoAdapter=true;return p});
//# sourceMappingURL=VisualizationInstantiation.js.map