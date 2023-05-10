// Copyright (c) 2009-2022 SAP SE, All Rights Reserved
sap.ui.define(["sap/ui/core/mvc/JSView","sap/ca/ui/model/format/NumberFormat","sap/ui/model/analytics/odata4analytics","sap/ushell/components/tiles/indicatorTileUtils/smartBusinessUtil","sap/m/NumericContent","sap/m/TileContent","sap/suite/ui/microchart/ComparisonMicroChartData","sap/suite/ui/microchart/ComparisonMicroChart","sap/m/GenericTile","sap/ui/model/json/JSONModel"],function(e,i,t,o,a,r,n,l,s,u){"use strict";sap.ui.getCore().loadLibrary("sap.suite.ui.microchart");sap.ui.jsview("tiles.indicatorDualContribution.DualContribution",{getControllerName:function(){return"tiles.indicatorDualContribution.DualContribution"},createContent:function(){this.setHeight("100%");this.setWidth("100%");var e=this;e.oGenericTileData={};e.oNumericContent=new a({value:"{/value}",scale:"{/scale}",indicator:"{/indicator}",size:"{/size}",formatterValue:true,truncateValueTo:6,valueColor:"{/valueColor}"});e.oNumericTile=new r({unit:"{/unitNumeric}",size:"{/size}",footer:"{/footerNum}",content:e.oNumericContent});e.oCmprsDataTmpl=new n({title:"{title}",value:"{value}",color:"{color}",displayValue:"{displayValue}"});e.oCmprsChrtTmpl=new l({size:"{/size}",scale:"{/scale}",data:{template:e.oCmprsDataTmpl,path:"/data"}});e.oComparisonTile=new r({unit:"{/unitContribution}",size:"{/size}",footer:"{/footerComp}",content:e.oCmprsChrtTmpl});e.oGenericTile=new s({subheader:"{/subheader}",frameType:"{/frameType}",size:"{/size}",header:"{/header}",tileContent:[e.oNumericTile,e.oComparisonTile]});e.oGenericTileModel=new u;e.oGenericTileModel.setData(e.oGenericTileData);e.oGenericTile.setModel(e.oGenericTileModel);return e.oGenericTile}})},true);
//# sourceMappingURL=DualContribution.view.js.map