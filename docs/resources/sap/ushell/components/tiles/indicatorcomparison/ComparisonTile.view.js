// Copyright (c) 2009-2022 SAP SE, All Rights Reserved
sap.ui.define(["sap/ui/core/mvc/JSView","sap/ui/model/analytics/odata4analytics","sap/ushell/components/tiles/indicatorTileUtils/smartBusinessUtil","sap/suite/ui/microchart/ComparisonMicroChartData","sap/suite/ui/microchart/ComparisonMicroChart","sap/m/GenericTile","sap/ui/model/json/JSONModel","sap/m/library"],function(e,i,t,a,o,s,r,l){"use strict";sap.ui.getCore().loadLibrary("sap.suite.ui.microchart");sap.ui.jsview("sap.ushell.components.tiles.indicatorcomparison.ComparisonTile",{getControllerName:function(){return"sap.ushell.components.tiles.indicatorcomparison.ComparisonTile"},createContent:function(){this.setHeight("100%");this.setWidth("100%");var e=l.Size;var i=this;i.oGenericTileData={};i.oCmprsDataTmpl=new a({title:"{title}",value:"{value}",color:"{color}",displayValue:"{displayValue}"});i.oCmprsChrtTmpl=new o({size:e.Responsive,scale:"{/scale}",data:{template:i.oCmprsDataTmpl,path:"/data"}});i.oNVConfS=new sap.ushell.components.tiles.sbtilecontent({unit:"{/unit}",size:"{/size}",footer:"{/footerComp}",content:i.oCmprsChrtTmpl});i.oGenericTile=new s({subheader:"{/subheader}",frameType:"{/frameType}",size:"{/size}",header:"{/header}",tileContent:[i.oNVConfS]});i.oGenericTileModel=new r;i.oGenericTileModel.setData(i.oGenericTileData);i.oGenericTile.setModel(i.oGenericTileModel);return i.oGenericTile}})},true);
//# sourceMappingURL=ComparisonTile.view.js.map