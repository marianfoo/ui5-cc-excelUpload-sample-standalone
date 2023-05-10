// Copyright (c) 2009-2022 SAP SE, All Rights Reserved
sap.ui.define(["sap/m/library","sap/ui/thirdparty/jquery","sap/base/Log"],function(i,jQuery,e){"use strict";var t=i.ValueColor;var l=i.Size;var o=i.DeviationIndicator;var a=i.LoadState;sap.ui.controller("tiles.indicatorDualContribution.DualContribution",{getTile:function(){return this.oDualContributionView.oGenericTile},_updateTileModel:function(i){var e=this.getTile().getModel().getData();jQuery.extend(e,i);this.getTile().getModel().setData(e);this.getTile().getModel().updateBindings()},setTitle:function(){var i=this;var e=sap.ushell.components.tiles.indicatorTileUtils.util.getTileTitleSubtitle(this.oChip);this._updateTileModel({header:e.title||sap.ushell.components.tiles.indicatorTileUtils.util.getChipTitle(i.oConfig),subheader:e.subTitle||sap.ushell.components.tiles.indicatorTileUtils.util.getChipSubTitle(i.oConfig)})},formSelectStatement:function(i){var e=Object.keys(i);var t="";for(var l=0;l<e.length;l++){if(i[e[l]]!==undefined&&i.fullyFormedMeasure){t+=","+i[e[l]]}}return t},logError:function(i){this.oDualContributionView.oGenericTile.setState(a.Failed);this.oDualContributionView.oGenericTile.setState(a.Failed);sap.ushell.components.tiles.indicatorTileUtils.util.logError(i)},setThresholdValues:function(){var i=this;try{var e={};e.fullyFormedMeasure=this.DEFINITION_DATA.EVALUATION.COLUMN_NAME;if(this.DEFINITION_DATA.EVALUATION.VALUES_SOURCE=="MEASURE"){switch(this.DEFINITION_DATA.EVALUATION.GOAL_TYPE){case"MI":e.sWarningHigh=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"WH","MEASURE");e.sCriticalHigh=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"CH","MEASURE");e.sTarget=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"TA","MEASURE");e.sTrend=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"TC","MEASURE");e.fullyFormedMeasure+=i.formSelectStatement(e);break;case"MA":e.sWarningLow=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"WL","MEASURE");e.sCriticalLow=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"CL","MEASURE");e.sTarget=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"TA","MEASURE");e.sTrend=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"TC","MEASURE");e.fullyFormedMeasure+=i.formSelectStatement(e);break;case"RA":e.sWarningHigh=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"WH","MEASURE");e.sCriticalHigh=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"CH","MEASURE");e.sTarget=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"TA","MEASURE");e.sTrend=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"TC","MEASURE");e.sWarningLow=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"WL","MEASURE");e.sCriticalLow=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"CL","MEASURE");e.fullyFormedMeasure+=i.formSelectStatement(e);break}}else{e.criticalHighValue=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"CH","FIXED");e.criticalLowValue=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"CL","FIXED");e.warningHighValue=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"WH","FIXED");e.warningLowValue=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"WL","FIXED");e.targetValue=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"TA","FIXED");e.trendValue=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"TC","FIXED")}return e}catch(e){i.logError(e)}},getTrendIndicator:function(i,e){var t=this;i=Number(i);try{var l=o.None;if(i>e){l=o.Down}else if(i<e){l=o.Up}return l}catch(i){t.logError(i)}},_processDataForComparisonChart:function(i,e,t){var l=this.oConfig.TILE_PROPERTIES.semanticMeasure;var o=[];var a;for(var s=0;s<i.results.length;s++){var n=i.results[s];var r={};try{r.title=n[t].toString()}catch(i){r.title=""}r.value=Number(n[e]);var u=Number(n[e]);if(this.oConfig.EVALUATION.SCALING==-2){u*=100}a=sap.ushell.components.tiles.indicatorTileUtils.util.getLocaleFormattedValue(u,this.oConfig.EVALUATION.SCALING,this.oConfig.EVALUATION.DECIMAL_PRECISION);r.displayValue=a.toString();if(typeof l==="undefined"){r.color="Neutral"}else if(this.oConfig.EVALUATION.GOAL_TYPE==="MA"){if(r.value>n[l]){r.color="Good"}else{r.color="Error"}}else if(this.oConfig.EVALUATION.GOAL_TYPE==="MI"){if(r.value<n[l]){r.color="Good"}else{r.color="Error"}}else{r.color="Neutral"}o.push(r)}return o},fetchKpiValue:function(i,t){var l=this;try{var o=this.oConfig.EVALUATION.ODATA_URL,a=this.oConfig.EVALUATION.ODATA_ENTITYSET,s;if(this.oConfig.TILE_PROPERTIES.semanticMeasure){s=this.oConfig.EVALUATION.COLUMN_NAME+","+this.oConfig.TILE_PROPERTIES.semanticMeasure}else{s=this.oConfig.EVALUATION.COLUMN_NAME}var n=this.oConfig.TILE_PROPERTIES.dimension;var r=this.oConfig.EVALUATION_VALUES;var u=sap.ushell.components.tiles.indicatorTileUtils.cache.getKpivalueById(l.oConfig.TILE_PROPERTIES.id);if(!u){var T=sap.ushell.components.tiles.indicatorTileUtils.util.prepareFilterStructure(this.oConfig.EVALUATION_FILTERS,this.oConfig.ADDITIONAL_FILTERS);var c={};c["0"]=s+",asc";c["1"]=s+",desc";c["2"]=n+",asc";c["3"]=n+",desc";var E=c[this.oConfig.TILE_PROPERTIES.sortOrder||"0"].split(",");var C=sap.ushell.components.tiles.indicatorTileUtils.util.prepareQueryServiceUri(l.oChip.url.addSystemToServiceUrl(o),a,s,n,T,3);if(this.oConfig.TILE_PROPERTIES.semanticMeasure){C.uri+="&$top=3&$orderby="+E[0]+" "+E[2]}else{C.uri+="&$top=3&$orderby="+E[0]+" "+E[1]}this.comparisionChartODataRef=C.model.read(C.uri,null,null,true,function(e){if(C.unit[0]){l._updateTileModel({unitContribution:e.results[0][C.unit[0].name]});l.writeData.unitContribution=C.unit[0];l.writeData.unitContribution.name=C.unit[0].name}if(e&&e.results&&e.results.length){n=sap.ushell.components.tiles.indicatorTileUtils.util.findTextPropertyForDimension(l.oChip.url.addSystemToServiceUrl(o),a,n);l.writeData.dimension=n;l.oConfig.TILE_PROPERTIES.FINALVALUE=e;l.oConfig.TILE_PROPERTIES.FINALVALUE=l._processDataForComparisonChart(l.oConfig.TILE_PROPERTIES.FINALVALUE,s.split(",")[0],n);l.writeData.data=e;sap.ushell.components.tiles.indicatorTileUtils.cache.setKpivalueById(l.oConfig.TILE_PROPERTIES.id,l.writeData);i.call(l,l.oConfig.TILE_PROPERTIES.FINALVALUE)}else if(e.results.length==0){l.oConfig.TILE_PROPERTIES.FINALVALUE=e;l.writeData.data=e;sap.ushell.components.tiles.indicatorTileUtils.cache.setKpivalueById(l.oConfig.TILE_PROPERTIES.id,l.writeData)}else{t.call(l,"no Response from QueryServiceUri")}},function(i){if(i&&i.response){e.error(i.message+" : "+i.request.requestUri);t.call(l,i)}});var h=sap.ushell.components.tiles.indicatorTileUtils.util.prepareFilterStructure(l.DEFINITION_DATA.EVALUATION_FILTERS,l.DEFINITION_DATA.ADDITIONAL_FILTERS);var A=sap.ushell.components.tiles.indicatorTileUtils.util.prepareQueryServiceUri(l.oChip.url.addSystemToServiceUrl(o),a,s,null,h);if(A){l.QUERY_SERVICE_MODEL=A.model;l.queryUriForKpiValue=A.uri;l.numericODataReadRef=l.QUERY_SERVICE_MODEL.read(A.uri,null,null,true,function(e){if(e&&e.results&&e.results.length){if(A.unit){l._updateTileModel({unitNumeric:e.results[0][A.unit.name]});l.writeData.unitNumeric=A.unit;l.writeData.unitNumeric.name=A.unit.name}l.writeData.numericData=e;var o="";var a=e.results[0][l.DEFINITION_DATA.EVALUATION.COLUMN_NAME];var s=l.getTrendIndicator(l.setThresholdValues().trendValue,a);if(l.oConfig.EVALUATION.SCALING==-2){a*=100;l.getView().oNumericContent.setFormatterValue(false)}l.DEFINITION_DATA.value=a;o=sap.ushell.components.tiles.indicatorTileUtils.util.getLocaleFormattedValue(Number(a),l.oConfig.EVALUATION.SCALING,l.oConfig.EVALUATION.DECIMAL_PRECISION);if(l.oConfig.EVALUATION.SCALING==-2){l._updateTileModel({scale:"%"})}l._updateTileModel({value:o.toString(),valueColor:l.DEFINITION_DATA.TILE_PROPERTIES.semanticColorContribution,indicator:s});i.call(l,l.oConfig.TILE_PROPERTIES.FINALVALUE,a)}else{t.call(l,"no Response from QueryServiceUri")}})}}else{var g=l.setThresholdValues();var f;if(u.unitContribution){l._updateTileModel({unitContribution:u.data.results[0][u.unitContribution.name]})}if(u.unitNumeric){l._updateTileModel({unitNumeric:u.numericData.results[0][u.unitNumeric.name]})}if(u.data&&u.data.results&&u.data.results.length){n=u.dimension;l.oConfig.TILE_PROPERTIES.FINALVALUE=u.data;l.oConfig.TILE_PROPERTIES.FINALVALUE=l._processDataForComparisonChart(l.oConfig.TILE_PROPERTIES.FINALVALUE,s.split(",")[0],n);i.call(l,l.oConfig.TILE_PROPERTIES.FINALVALUE)}else if(r.results.length==0){l.oConfig.TILE_PROPERTIES.FINALVALUE=u.data}else{t.call(l,"no Response from QueryServiceUri")}if(u.numericData&&u.numericData.results&&u.numericData.results.length){f=u.numericData.results[0][l.DEFINITION_DATA.EVALUATION.COLUMN_NAME];if(l.oConfig.EVALUATION.SCALING==-2){f*=100;l.getView().oNumericContent.setFormatterValue(false)}var I=sap.ushell.components.tiles.indicatorTileUtils.util.getLocaleFormattedValue(Number(f),l.oConfig.EVALUATION.SCALING,l.oConfig.EVALUATION.DECIMAL_PRECISION);if(l.oConfig.EVALUATION.SCALING==-2){l._updateTileModel({scale:"%"})}var p=l.getTrendIndicator(g.trendValue,f);l._updateTileModel({value:I.toString(),indicator:p,valueColor:l.DEFINITION_DATA.TILE_PROPERTIES.semanticColorContribution});i.call(l,l.oConfig.TILE_PROPERTIES.FINALVALUE,f)}else{t.call(l,"no Response from QueryServiceUri")}}}catch(i){t.call(l,i)}},flowWithoutDesignTimeCall:function(){var i=this;this.DEFINITION_DATA=this.oConfig;this._updateTileModel(this.DEFINITION_DATA);if(this.oChip.visible.isVisible()&&!this.firstTimeVisible){this.firstTimeVisible=true;this.fetchKpiValue(function(e,t){this.CALCULATED_KPI_VALUE=e;if(i.oConfig.TILE_PROPERTIES.frameType=="TwoByOne"){i.oDualContributionView.oGenericTile.setFrameType("TwoByOne");i.oDualContributionView.oGenericTile.removeAllTileContent();i.oDualContributionView.oGenericTile.addTileContent(i.oDualContributionView.oNumericTile);i.oDualContributionView.oGenericTile.addTileContent(i.oDualContributionView.oComparisonTile)}else{i.oDualContributionView.oGenericTile.setFrameType("OneByOne");i.oDualContributionView.oGenericTile.removeAllTileContent();i.oDualContributionView.oGenericTile.addTileContent(i.oDualContributionView.oComparisonTile)}var l=this.CALCULATED_KPI_VALUE;var o=this.DEFINITION_DATA.TILE_PROPERTIES.semanticColorContribution;for(var s=0;s<this.CALCULATED_KPI_VALUE.length;s++){l[s].color=o}this._updateTileModel({data:l});var n=i.setThresholdValues();var r=sap.ushell.components.tiles.indicatorTileUtils.util.getNavigationTarget(i.oConfig,i.system);i.oDualContributionView.oGenericTile.$().wrap("<a href ='"+r+"'></a>");this.oDualContributionView.oGenericTile.setState(a.Loaded);var u="";if(o=="Error"){u="sb.error"}if(o=="Neutral"){u="sb.neutral"}if(o=="Critical"){u="sb.critical"}if(o=="Good"){u="sb.good"}n=i.setThresholdValues();var T,c,E,C,h,A,g,f,I;if(this.CALCULATED_KPI_VALUE&&this.CALCULATED_KPI_VALUE[0]){T=this.CALCULATED_KPI_VALUE[0].title;C=this.CALCULATED_KPI_VALUE[0].value;g=sap.ushell.components.tiles.indicatorTileUtils.util.getSemanticColorName(this.CALCULATED_KPI_VALUE[0].color)}if(this.CALCULATED_KPI_VALUE&&this.CALCULATED_KPI_VALUE[1]){c=this.CALCULATED_KPI_VALUE[1].title;h=this.CALCULATED_KPI_VALUE[1].value;f=sap.ushell.components.tiles.indicatorTileUtils.util.getSemanticColorName(this.CALCULATED_KPI_VALUE[1].color)}if(this.CALCULATED_KPI_VALUE&&this.CALCULATED_KPI_VALUE[2]){E=this.CALCULATED_KPI_VALUE[2].title;A=this.CALCULATED_KPI_VALUE[2].value;I=sap.ushell.components.tiles.indicatorTileUtils.util.getSemanticColorName(this.CALCULATED_KPI_VALUE[2].color)}var p={status:u,actual:t,target:n.targetValue,cH:n.criticalHighValue,wH:n.warningHighValue,wL:n.warningLowValue,cL:n.criticalLowValue};var d={m1:T,v1:C,c1:g,m2:c,v2:h,c2:f,m3:E,v3:A,c3:I};var m=i.oDualContributionView.oGenericTile.getTileContent()[0].getContent();var L=i.oDualContributionView.oGenericTile.getTileContent()[1].getContent();sap.ushell.components.tiles.indicatorTileUtils.util.setTooltipInTile(m,"NT",p);sap.ushell.components.tiles.indicatorTileUtils.util.setTooltipInTile(L,"CONT",d)},this.logError)}},flowWithDesignTimeCall:function(){var i=this;try{var e=sap.ushell.components.tiles.indicatorTileUtils.cache.getEvaluationById(this.oConfig.EVALUATION.ID);if(e){i.oConfig.EVALUATION_FILTERS=e.EVALUATION_FILTERS;i.flowWithoutDesignTimeCall()}else{sap.ushell.components.tiles.indicatorTileUtils.util.getFilterFromRunTimeService(this.oConfig,function(e){i.oConfig.EVALUATION_FILTERS=e;sap.ushell.components.tiles.indicatorTileUtils.cache.setEvaluationById(i.oConfig.TILE_PROPERTIES.id,i.oConfig);i.flowWithoutDesignTimeCall()})}}catch(i){this.logError(i)}},refreshHandler:function(i){if(!i.firstTimeVisible){if(Number(this.oChip.configuration.getParameterValueAsString("isSufficient"))){i.flowWithoutDesignTimeCall()}else{i.flowWithDesignTimeCall()}}},visibleHandler:function(i){if(!i){this.firstTimeVisible=false;sap.ushell.components.tiles.indicatorTileUtils.util.abortPendingODataCalls(this.comparisionChartODataRef)}if(i){this.refreshHandler(this)}},onInit:function(){var i=this;i.writeData={};this.firstTimeVisible=false;this.oDualContributionView=this.getView();this.oChip=this.oDualContributionView.getViewData().chip;if(this.oChip.visible){this.oChip.visible.attachVisible(this.visibleHandler.bind(this))}this.system=this.oChip.url.getApplicationSystem();this.oDualContributionView.oGenericTile.setState(a.Loading);try{sap.ushell.components.tiles.indicatorTileUtils.util.getParsedChip(this.oChip.configuration.getParameterValueAsString("tileConfiguration"),this.oChip.preview.isEnabled(),function(e){i.oConfig=e;if(i.oChip.preview){i.oChip.preview.setTargetUrl(sap.ushell.components.tiles.indicatorTileUtils.util.getNavigationTarget(i.oConfig,i.system))}if(i.oChip.preview.isEnabled()){i.setTitle();i._updateTileModel({value:8888,size:l.Auto,frameType:"TwoByOne",state:a.Loading,valueColor:t.Error,indicator:o.None,title:"US Profit Margin",footer:"Current Quarter",description:"Maximum deviation",data:[{title:"Americas",value:10,color:"Neutral",displayValue:""},{title:"EMEA",value:50,color:"Neutral",displayValue:""},{title:"APAC",value:-20,color:"Neutral",displayValue:""}]});i.oDualContributionView.oGenericTile.setState(a.Loaded)}else{i.setTitle();i.oDualContributionView.oGenericTile.attachPress(function(){sap.ushell.components.tiles.indicatorTileUtils.util.abortPendingODataCalls(i.comparisionChartODataRef);sap.ushell.components.tiles.indicatorTileUtils.cache.setKpivalueById(i.oConfig.TILE_PROPERTIES.id,null);window.location.hash=sap.ushell.components.tiles.indicatorTileUtils.util.getNavigationTarget(i.oConfig,i.system)});if(Number(i.oChip.configuration.getParameterValueAsString("isSufficient"))){sap.ushell.components.tiles.indicatorTileUtils.cache.setEvaluationById(i.oConfig.TILE_PROPERTIES.id,i.oConfig);i.flowWithoutDesignTimeCall()}else{i.flowWithDesignTimeCall()}}})}catch(i){this.logError(i)}},onExit:function(){sap.ushell.components.tiles.indicatorTileUtils.util.abortPendingODataCalls(this.comparisionChartODataRef)}})},true);
//# sourceMappingURL=DualContribution.controller.js.map