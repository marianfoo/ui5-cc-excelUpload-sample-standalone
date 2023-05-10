// Copyright (c) 2009-2022 SAP SE, All Rights Reserved
sap.ui.define(["sap/ushell/components/tiles/indicatorTileUtils/smartBusinessUtil","sap/m/library","sap/ui/thirdparty/jquery","sap/base/Log"],function(i,e,jQuery,t){"use strict";var l=e.Size;var a=e.DeviationIndicator;var o=e.ValueColor;var s=e.LoadState;sap.ui.controller("tiles.indicatorDualComparison.DualComparison",{getTile:function(){return this.oDualComparisonView.oGenericTile},_updateTileModel:function(i){var e=this.getTile().getModel().getData();jQuery.extend(e,i);this.getTile().getModel().setData(e)},setTitle:function(){var i=this;var e=sap.ushell.components.tiles.indicatorTileUtils.util.getTileTitleSubtitle(this.oChip);this._updateTileModel({header:e.title||sap.ushell.components.tiles.indicatorTileUtils.util.getChipTitle(i.oConfig),subheader:e.subTitle||sap.ushell.components.tiles.indicatorTileUtils.util.getChipSubTitle(i.oConfig)})},logError:function(i){this.oDualComparisonView.oGenericTile.setState(s.Failed);this.oDualComparisonView.oGenericTile.setState(s.Failed);sap.ushell.components.tiles.indicatorTileUtils.util.logError(i)},formSelectStatement:function(i){var e=Object.keys(i);var t="";for(var l=0;l<e.length;l++){if(i[e[l]]!==undefined&&i.fullyFormedMeasure){t+=","+i[e[l]]}}return t},setThresholdValues:function(){var i=this;try{var e={};e.fullyFormedMeasure=this.DEFINITION_DATA.EVALUATION.COLUMN_NAME;if(this.DEFINITION_DATA.EVALUATION.VALUES_SOURCE=="MEASURE"){switch(this.DEFINITION_DATA.EVALUATION.GOAL_TYPE){case"MI":e.sWarningHigh=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"WH","MEASURE");e.sCriticalHigh=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"CH","MEASURE");e.sTarget=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"TA","MEASURE");e.sTrend=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"TC","MEASURE");e.fullyFormedMeasure+=i.formSelectStatement(e);break;case"MA":e.sWarningLow=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"WL","MEASURE");e.sCriticalLow=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"CL","MEASURE");e.sTarget=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"TA","MEASURE");e.sTrend=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"TC","MEASURE");e.fullyFormedMeasure+=i.formSelectStatement(e);break;case"RA":e.sWarningHigh=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"WH","MEASURE");e.sCriticalHigh=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"CH","MEASURE");e.sTarget=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"TA","MEASURE");e.sTrend=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"TC","MEASURE");e.sWarningLow=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"WL","MEASURE");e.sCriticalLow=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"CL","MEASURE");e.fullyFormedMeasure+=i.formSelectStatement(e);break}}else{e.criticalHighValue=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"CH","FIXED");e.criticalLowValue=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"CL","FIXED");e.warningHighValue=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"WH","FIXED");e.warningLowValue=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"WL","FIXED");e.targetValue=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"TA","FIXED");e.trendValue=sap.ushell.components.tiles.indicatorTileUtils.util.getEvalValueMeasureName(i.oConfig,"TC","FIXED")}return e}catch(e){i.logError(e)}},getTrendColor:function(i){var e=this;var t,l,a,s;try{var r=this.DEFINITION_DATA.EVALUATION.GOAL_TYPE;var n=o.Neutral;if(r==="MI"){if(i.criticalHighValue&&i.warningHighValue){t=Number(i.criticalHighValue);l=Number(i.warningHighValue);if(this.CALCULATED_KPI_VALUE<l){n=o.Good}else if(this.CALCULATED_KPI_VALUE<=t){n=o.Critical}else{n=o.Error}}}else if(r==="MA"){if(i.criticalLowValue&&i.warningLowValue){a=Number(i.criticalLowValue);s=Number(i.warningLowValue);if(this.CALCULATED_KPI_VALUE<a){n=o.Error}else if(this.CALCULATED_KPI_VALUE<=s){n=o.Critical}else{n=o.Good}}}else if(i.warningLowValue&&i.warningHighValue&&i.criticalLowValue&&i.criticalHighValue){t=Number(i.criticalHighValue);l=Number(i.warningHighValue);s=Number(i.warningLowValue);a=Number(i.criticalLowValue);if(this.CALCULATED_KPI_VALUE<a||this.CALCULATED_KPI_VALUE>t){n=o.Error}else if(this.CALCULATED_KPI_VALUE>=a&&this.CALCULATED_KPI_VALUE<=s||this.CALCULATED_KPI_VALUE>=l&&this.CALCULATED_KPI_VALUE<=t){n=o.Critical}else{n=o.Good}}return n}catch(i){e.logError(i)}},_processDataForComparisonChart:function(i,e,t){var l=[],a={},o,s,r;var n;var u=[];var E=this;for(o=0;o<i.results.length;o++){var T=i.results[o]}u=sap.ushell.components.tiles.indicatorTileUtils.util.getAllMeasuresWithLabelText(this.oConfig.EVALUATION.ODATA_URL,this.oConfig.EVALUATION.ODATA_ENTITYSET);for(o=0,r=u.length;o<r;o++){s=u[o];a[s.key]=s.value}var c=E.oConfig.TILE_PROPERTIES.COLUMN_NAMES||E.oConfig.EVALUATION.COLUMN_NAMES;for(o=0;o<c.length;o++){var A={};var C=c[o];A.value=Number(T[C.COLUMN_NAME]);var L=Number(T[C.COLUMN_NAME]);if(E.oConfig.EVALUATION.SCALING==-2){L*=100}n=sap.ushell.components.tiles.indicatorTileUtils.util.getLocaleFormattedValue(L,E.oConfig.EVALUATION.SCALING,E.oConfig.EVALUATION.DECIMAL_PRECISION);if(E.oConfig.EVALUATION.SCALING==-2){n+=" %"}A.displayValue=n.toString();if(t[o]&&T[t[o].name]){A.displayValue+=" "+T[t[o].name]}A.color=C.semanticColor;A.title=a[C.COLUMN_NAME]||C.COLUMN_NAME;l.push(A)}return l},getTrendIndicator:function(i,e){var t=this;i=Number(i);try{var l=a.None;if(i>e){l=a.Down}else if(i<e){l=a.Up}return l}catch(i){t.logError(i)}},fetchKpiValue:function(i,e){var l=this;try{var a=this.oConfig.EVALUATION.ODATA_URL,o=this.oConfig.EVALUATION.ODATA_ENTITYSET,s;if(this.oConfig.TILE_PROPERTIES.semanticMeasure){s=this.oConfig.EVALUATION.COLUMN_NAME+","+this.oConfig.TILE_PROPERTIES.semanticMeasure}else{s=this.oConfig.EVALUATION.COLUMN_NAME;var r=s;if(this.oConfig.TILE_PROPERTIES.COLUMN_NAMES){for(var n=0;n<this.oConfig.TILE_PROPERTIES.COLUMN_NAMES.length;n++){if(this.oConfig.TILE_PROPERTIES.COLUMN_NAMES[n].COLUMN_NAME!=this.oConfig.EVALUATION.COLUMN_NAME){r=r+","+this.oConfig.TILE_PROPERTIES.COLUMN_NAMES[n].COLUMN_NAME}}}}var u=this.oConfig.EVALUATION_VALUES;var E=sap.ushell.components.tiles.indicatorTileUtils.cache.getKpivalueById(l.oConfig.TILE_PROPERTIES.id);if(!E){var T=sap.ushell.components.tiles.indicatorTileUtils.util.prepareFilterStructure(this.oConfig.EVALUATION_FILTERS,this.oConfig.ADDITIONAL_FILTERS);var c={};c["0"]=s+",asc";c["1"]=s+",desc";var A=c[this.oConfig.TILE_PROPERTIES.sortOrder||"0"].split(",");var C=sap.ushell.components.tiles.indicatorTileUtils.util.prepareQueryServiceUri(l.oChip.url.addSystemToServiceUrl(a),o,r,null,T,3);if(this.oConfig.TILE_PROPERTIES.semanticMeasure){C.uri+="&$orderby="+A[0]+" "+A[2]}else{C.uri+="&$orderby="+A[0]+" "+A[1]}this.writeData={};this.comparisionChartODataRef=C.model.read(C.uri,null,null,true,function(t){if(t&&t.results&&t.results.length){if(C.unit){l.writeData.unit=C.unit}l.oConfig.TILE_PROPERTIES.FINALVALUE=t;l.oConfig.TILE_PROPERTIES.FINALVALUE=l._processDataForComparisonChart(l.oConfig.TILE_PROPERTIES.FINALVALUE,r.split(",")[0],C.unit);l.writeData.data=t;var a;for(var o=0;o<l.oConfig.TILE_PROPERTIES.FINALVALUE.length;o++){if(l.oConfig.TILE_PROPERTIES.FINALVALUE[o].title==l.DEFINITION_DATA.EVALUATION.COLUMN_NAME){l.writeData.numericData=l.oConfig.TILE_PROPERTIES.FINALVALUE[o];calculatedValueforScaling=l.oConfig.TILE_PROPERTIES.FINALVALUE[o].value;l.getTrendIndicator(l.setThresholdValues().trendValue,calculatedValueforScaling);l._updateTileModel({valueColor:l.oConfig.TILE_PROPERTIES.FINALVALUE[o].color,value:sap.ushell.components.tiles.indicatorTileUtils.util.getLocaleFormattedValue(Number(a),l.oConfig.EVALUATION.SCALING,l.oConfig.EVALUATION.DECIMAL_PRECISION).toString()});break}}sap.ushell.components.tiles.indicatorTileUtils.cache.setKpivalueById(l.oConfig.TILE_PROPERTIES.id,l.writeData);i.call(l,l.oConfig.TILE_PROPERTIES.FINALVALUE)}else if(t.results.length==0){l.oConfig.TILE_PROPERTIES.FINALVALUE=t;l.writeData.data=t;sap.ushell.components.tiles.indicatorTileUtils.cache.setKpivalueById(l.oConfig.TILE_PROPERTIES.id,l.writeData);i.call(l,l.oConfig.TILE_PROPERTIES.FINALVALUE)}else{e.call(l,"no Response from QueryServiceUri")}},function(i){if(i&&i.response){t.error(i.message+" : "+i.request.requestUri);e.call(l,i)}});if(!l.writeData.numericData){var L=sap.ushell.components.tiles.indicatorTileUtils.util.prepareFilterStructure(l.DEFINITION_DATA.EVALUATION_FILTERS,l.DEFINITION_DATA.ADDITIONAL_FILTERS);var I=sap.ushell.components.tiles.indicatorTileUtils.util.prepareQueryServiceUri(l.oChip.url.addSystemToServiceUrl(a),o,s,null,L);if(I){l.QUERY_SERVICE_MODEL=I.model;l.queryUriForKpiValue=I.uri;l.numericODataReadRef=l.QUERY_SERVICE_MODEL.read(I.uri,null,null,true,function(i){if(i&&i.results&&i.results.length){if(I.unit){l._updateTileModel({unitNumeric:i.results[0][I.unit.name]});l.writeData.unitNumeric=I.unit;l.writeData.unitNumeric.name=I.unit.name}l.writeData.numericData=i.results[0];l.DEFINITION_DATA.value=l.writeData.numericData[l.DEFINITION_DATA.EVALUATION.COLUMN_NAME];l.writeData.numericData.color=l.getTrendColor(l.setThresholdValues());l.DEFINITION_DATA.valueColor=l.writeData.numericData.color;var t="";var a=i.results[0][l.DEFINITION_DATA.EVALUATION.COLUMN_NAME];var o=l.getTrendIndicator(l.setThresholdValues().trendValue,a);if(l.oConfig.EVALUATION.SCALING==-2){a*=100;l.getView().oNumericContent.setFormatterValue(false)}t=sap.ushell.components.tiles.indicatorTileUtils.util.getLocaleFormattedValue(Number(a),l.oConfig.EVALUATION.SCALING,l.oConfig.EVALUATION.DECIMAL_PRECISION);if(l.oConfig.EVALUATION.SCALING==-2){l._updateTileModel({scale:"%"})}l._updateTileModel({value:t.toString(),valueColor:l.writeData.numericData.color,indicator:o})}else{e.call(l,"no Response from QueryServiceUri")}})}}}else{if(E.unit){l._updateTileModel({unit:E.data.results[0][E.unit.name]})}if(E.data&&E.data.results&&E.data.results.length){l.oConfig.TILE_PROPERTIES.FINALVALUE=E.data;l._updateTileModel({value:E.data.results[0][l.DEFINITION_DATA.EVALUATION.COLUMN_NAME]});l.oConfig.TILE_PROPERTIES.FINALVALUE=l._processDataForComparisonChart(l.oConfig.TILE_PROPERTIES.FINALVALUE,r,l.writeData.unit);i.call(l,l.oConfig.TILE_PROPERTIES.FINALVALUE)}else if(u.results.length==0){l.oConfig.TILE_PROPERTIES.FINALVALUE=E.data;i.call(l,l.oConfig.TILE_PROPERTIES.FINALVALUE)}else{e.call(l,"no Response from QueryServiceUri")}}}catch(i){e.call(l,i)}},flowWithoutDesignTimeCall:function(){var i=this;this.DEFINITION_DATA=this.oConfig;this._updateTileModel(this.DEFINITION_DATA);if(this.oChip.visible.isVisible()&&!this.firstTimeVisible){this.firstTimeVisible=true;this.fetchKpiValue(function(e){this.CALCULATED_KPI_VALUE=e;i.oDualComparisonView.oGenericTile.setFrameType("TwoByOne");i.oDualComparisonView.oGenericTile.removeAllTileContent();i.oDualComparisonView.oGenericTile.addTileContent(i.oDualComparisonView.oNumericTile);i.oDualComparisonView.oGenericTile.addTileContent(i.oDualComparisonView.oComparisonTile);var t=this.CALCULATED_KPI_VALUE;var l,a;for(var o=0;o<t.length;o++){if(t[o].title==i.DEFINITION_DATA.EVALUATION.COLUMN_NAME){a=t[o].value;l=t[o].color||"Neutral";i._updateTileModel({value:sap.ushell.components.tiles.indicatorTileUtils.util.getLocaleFormattedValue(Number(a),i.oConfig.EVALUATION.SCALING,i.oConfig.EVALUATION.DECIMAL_PRECISION).toString(),valueColor:l});break}}if(!l&&!a){l=i.DEFINITION_DATA.valueColor;a=i.DEFINITION_DATA.value}this._updateTileModel({value:sap.ushell.components.tiles.indicatorTileUtils.util.getLocaleFormattedValue(Number(a),i.oConfig.EVALUATION.SCALING,i.oConfig.EVALUATION.DECIMAL_PRECISION).toString(),data:this.CALCULATED_KPI_VALUE});var r=sap.ushell.components.tiles.indicatorTileUtils.util.getNavigationTarget(i.oConfig,i.system);i.oDualComparisonView.oGenericTile.$().wrap("<a href ='"+r+"'></a>");this.oDualComparisonView.oGenericTile.setState(s.Loaded);var n="";if(l=="Error"){n="sb.error"}if(l=="Neutral"){n="sb.neutral"}if(l=="Critical"){n="sb.critical"}if(l=="Good"){n="sb.good"}var u=i.setThresholdValues();var E,T,c,A,C,L,I,h,g;if(this.CALCULATED_KPI_VALUE&&this.CALCULATED_KPI_VALUE[0]){E=this.CALCULATED_KPI_VALUE[0].title;A=this.CALCULATED_KPI_VALUE[0].value;I=sap.ushell.components.tiles.indicatorTileUtils.util.getSemanticColorName(this.CALCULATED_KPI_VALUE[0].color)}if(this.CALCULATED_KPI_VALUE&&this.CALCULATED_KPI_VALUE[1]){T=this.CALCULATED_KPI_VALUE[1].title;C=this.CALCULATED_KPI_VALUE[1].value;h=sap.ushell.components.tiles.indicatorTileUtils.util.getSemanticColorName(this.CALCULATED_KPI_VALUE[1].color)}if(this.CALCULATED_KPI_VALUE&&this.CALCULATED_KPI_VALUE[2]){c=this.CALCULATED_KPI_VALUE[2].title;L=this.CALCULATED_KPI_VALUE[2].value;g=sap.ushell.components.tiles.indicatorTileUtils.util.getSemanticColorName(this.CALCULATED_KPI_VALUE[2].color)}var f={status:n,actual:a,target:u.targetValue,cH:u.criticalHighValue,wH:u.warningHighValue,wL:u.warningLowValue,cL:u.criticalLowValue};var U={m1:E,v1:A,c1:I,m2:T,v2:C,c2:h,m3:c,v3:L,c3:g};var p=i.oDualComparisonView.oGenericTile.getTileContent()[0].getContent();var m=i.oDualComparisonView.oGenericTile.getTileContent()[1].getContent();sap.ushell.components.tiles.indicatorTileUtils.util.setTooltipInTile(p,"NT",f);sap.ushell.components.tiles.indicatorTileUtils.util.setTooltipInTile(m,"COMP",U)},this.logError)}},flowWithDesignTimeCall:function(){var i=this;try{var e=sap.ushell.components.tiles.indicatorTileUtils.cache.getEvaluationById(this.oConfig.EVALUATION.ID);if(e){i.oConfig.EVALUATION_FILTERS=e.EVALUATION_FILTERS;i.flowWithoutDesignTimeCall()}else{sap.ushell.components.tiles.indicatorTileUtils.util.getFilterFromRunTimeService(this.oConfig,function(e){i.oConfig.EVALUATION_FILTERS=e;sap.ushell.components.tiles.indicatorTileUtils.cache.setEvaluationById(i.oConfig.TILE_PROPERTIES.id,i.oConfig);i.flowWithoutDesignTimeCall()})}}catch(i){this.logError(i)}},refreshHandler:function(i){if(!i.firstTimeVisible){if(Number(this.oChip.configuration.getParameterValueAsString("isSufficient"))){i.flowWithoutDesignTimeCall()}else{i.flowWithDesignTimeCall()}}},visibleHandler:function(i){if(!i){this.firstTimeVisible=false;sap.ushell.components.tiles.indicatorTileUtils.util.abortPendingODataCalls(this.comparisionChartODataRef)}if(i){this.refreshHandler(this)}},onInit:function(){var i=this;this.firstTimeVisible=false;this.oDualComparisonView=this.getView();this.oChip=this.oDualComparisonView.getViewData().chip;if(this.oChip.visible){this.oChip.visible.attachVisible(this.visibleHandler.bind(this))}this.system=this.oChip.url.getApplicationSystem();this.oDualComparisonView.oGenericTile.setState(s.Loading);try{sap.ushell.components.tiles.indicatorTileUtils.util.getParsedChip(this.oChip.configuration.getParameterValueAsString("tileConfiguration"),this.oChip.preview.isEnabled(),function(e){i.oConfig=e;if(i.oChip.preview){i.oChip.preview.setTargetUrl(sap.ushell.components.tiles.indicatorTileUtils.util.getNavigationTarget(i.oConfig,i.system))}if(i.oChip.preview.isEnabled()){i.setTitle();i._updateTileModel({value:1,size:l.Auto,frameType:"TwoByOne",state:s.Loading,valueColor:o.Good,indicator:a.None,title:"Liquidity Structure",footer:"Current Quarter",description:"Apr 1st 2013 (B$)",data:[{title:"Measure 1",value:1,color:"Good"},{title:"Measure 2",value:2,color:"Good"},{title:"Measure 3",value:3,color:"Good"}]});i.oDualComparisonView.oGenericTile.setState(s.Loaded)}else{i.setTitle();i.oDualComparisonView.oGenericTile.attachPress(function(){sap.ushell.components.tiles.indicatorTileUtils.util.abortPendingODataCalls(i.comparisionChartODataRef);sap.ushell.components.tiles.indicatorTileUtils.cache.setKpivalueById(i.oConfig.TILE_PROPERTIES.id,null);window.location.hash=sap.ushell.components.tiles.indicatorTileUtils.util.getNavigationTarget(i.oConfig,i.system)});if(Number(i.oChip.configuration.getParameterValueAsString("isSufficient"))){sap.ushell.components.tiles.indicatorTileUtils.cache.setEvaluationById(i.oConfig.TILE_PROPERTIES.id,i.oConfig);i.flowWithoutDesignTimeCall()}else{i.flowWithDesignTimeCall()}}})}catch(i){this.logError(i)}},onExit:function(){sap.ushell.components.tiles.indicatorTileUtils.util.abortPendingODataCalls(this.comparisionChartODataRef)}})},true);
//# sourceMappingURL=DualComparison.controller.js.map