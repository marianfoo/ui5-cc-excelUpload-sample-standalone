// Copyright (c) 2009-2022 SAP SE, All Rights Reserved
sap.ui.define(["sap/ushell/components/tiles/generic","sap/m/library"],function(e,i){"use strict";var r=i.ValueColor;var t=i.LoadState;var o=i.FrameType;var l=e.extend("sap.ushell.components.tiles.indicatordeviation.DeviationTile",{onInit:function(){this.KPI_VALUE_REQUIRED=true},doProcess:function(e,i){var r=this;var l,a;l=i.targetValue;var s=Number(e);this.setThresholdValues();if(this.oConfig.EVALUATION.SCALING==-2){s*=100}var u=this.isCurrencyMeasure(this.oConfig.EVALUATION.COLUMN_NAME);a=sap.ushell.components.tiles.indicatorTileUtils.util.getLocaleFormattedValue(Number(s),this.oConfig.EVALUATION.SCALING,this.oConfig.EVALUATION.DECIMAL_PRECISION,u,this.CURRENCY_CODE);this.CALCULATED_KPI_VALUE=Number(e);var n={};var A=this.getThresholdsObjAndColor(i).returnColor;var h={value:Number(e),color:A};n.actualValueLabel=a.toString();n.actual=h;n.thresholds=[];n.thresholds=this.getThresholdsObjAndColor(i).arrObj;var C=this.DEFINITION_DATA.EVALUATION_VALUES,E;if(this.DEFINITION_DATA.EVALUATION.VALUES_SOURCE=="MEASURE"){E=Number(l);if(this.oConfig.EVALUATION.SCALING==-2){E*=100}u=this.isCurrencyMeasure(this.oConfig.EVALUATION.COLUMN_NAME);l=sap.ushell.components.tiles.indicatorTileUtils.util.getLocaleFormattedValue(E,this.oConfig.EVALUATION.SCALING,this.oConfig.EVALUATION.DECIMAL_PRECISION,u,this.CURRENCY_CODE);n.targetValue=Number(E);n.targetValueLabel=l.toString()}else{for(var L=0;L<C.length;L++){if(C[L].TYPE==="TA"){E=Number(l);if(this.oConfig.EVALUATION.SCALING==-2){E*=100}u=this.isCurrencyMeasure(this.oConfig.EVALUATION.COLUMN_NAME);l=sap.ushell.components.tiles.indicatorTileUtils.util.getLocaleFormattedValue(E,this.oConfig.EVALUATION.SCALING,this.oConfig.EVALUATION.DECIMAL_PRECISION,u,this.CURRENCY_CODE);n.targetValue=Number(E);n.targetValueLabel=l.toString()}}}if(this.oConfig.EVALUATION.SCALING==-2){n.scale="%"}this._updateTileModel(n);if(this.DEFINITION_DATA.TILE_PROPERTIES.frameType==o.TwoByOne){r.getView().getViewData().parentController._updateTileModel(this.getTile().getModel().getData());r.getView().getViewData().deferredObj.resolve();sap.ushell.components.tiles.indicatorTileUtils.util.setUnsetCallInProgress(r.oConfig.TILE_PROPERTIES.id+"defferedRight",false)}else{this.oKpiTileView.oGenericTile.setState(t.Loaded)}this.setToolTip(A,s,"DT");if(!sap.ushell.components.tiles.indicatorTileUtils.util.isDualTile(this.oConfig)){if(r.chipCacheTime&&!sap.ushell.components.tiles.indicatorTileUtils.util.isDualTile(this.oConfig)){sap.ushell.components.tiles.indicatorTileUtils.util.scheduleFetchDataJob.call(this,this.oTileApi.visible.isVisible())}}},getThresholdsObjAndColor:function(e){try{var i={};i.arrObj=[];i.returnColor=r.Neutral;var t=this.DEFINITION_DATA.EVALUATION.GOAL_TYPE;var o,l,a,s;if(t==="MI"){a=Number(e.criticalHighValue)||0;s=Number(e.warningHighValue)||0;if(a&&s){a=window.parseFloat(a);s=window.parseFloat(s);i.arrObj.push({value:a,color:r.Error});i.arrObj.push({value:s,color:r.Critical});if(this.CALCULATED_KPI_VALUE<s){i.returnColor=r.Good}else if(this.CALCULATED_KPI_VALUE<=a){i.returnColor=r.Critical}else{i.returnColor=r.Error}}}else if(t==="MA"){l=Number(e.criticalLowValue)||0;o=Number(e.warningLowValue)||0;if(l&&o){l=window.parseFloat(l);o=window.parseFloat(o);i.arrObj.push({value:l,color:r.Error});i.arrObj.push({value:o,color:r.Critical});if(this.CALCULATED_KPI_VALUE<l){i.returnColor=r.Error}else if(this.CALCULATED_KPI_VALUE<=o){i.returnColor=r.Critical}else{i.returnColor=r.Good}}}else{a=Number(e.criticalHighValue)||0;s=Number(e.warningHighValue)||0;l=Number(e.criticalLowValue)||0;o=Number(e.warningLowValue)||0;if(o&&s&&l&&l){a=window.parseFloat(a);s=window.parseFloat(s);o=window.parseFloat(o);l=window.parseFloat(l);i.arrObj.push({value:a,color:r.Error});i.arrObj.push({value:s,color:r.Critical});i.arrObj.push({value:o,color:r.Critical});i.arrObj.push({value:l,color:r.Error});if(this.CALCULATED_KPI_VALUE<l||this.CALCULATED_KPI_VALUE>a){i.returnColor=r.Error}else if(this.CALCULATED_KPI_VALUE>=l&&this.CALCULATED_KPI_VALUE<=o||this.CALCULATED_KPI_VALUE>=s&&this.CALCULATED_KPI_VALUE<=a){i.returnColor=r.Critical}else{i.returnColor=r.Good}}}return i}catch(e){this.logError(e)}},doDummyProcess:function(){var e=this;this.setTextInTile();e._updateTileModel({actual:{value:120,color:r.Good},targetValue:100,thresholds:[{value:0,color:r.Error},{value:50,color:r.Critical},{value:150,color:r.Critical},{value:200,color:r.Error}],showActualValue:true,showTargetValue:true});this.oKpiTileView.oGenericTile.setState(t.Loaded)}});return l});
//# sourceMappingURL=DeviationTile.controller.js.map