/*!
 * SAPUI5
 * (c) Copyright 2009-2022 SAP SE. All rights reserved.
 */
sap.ui.define(["sap/viz/library","sap/viz/ui5/core/BaseStructuredType"],function(e,t){"use strict";var a=t.extend("sap.viz.ui5.types.Axis",{metadata:{library:"sap.viz",properties:{isIndependentMode:{type:"boolean",defaultValue:false,deprecated:true},isPercentMode:{type:"boolean",defaultValue:false,deprecated:true},isKeepFirstAndLastLabel:{type:"boolean",defaultValue:false,deprecated:true},lineSize:{type:"int",defaultValue:1},color:{type:"string",defaultValue:"#6c6c6c"},type:{type:"sap.viz.ui5.types.Axis_type",defaultValue:sap.viz.ui5.types.Axis_type.value,deprecated:true},visible:{type:"boolean",defaultValue:true},position:{type:"sap.viz.ui5.types.Axis_position",defaultValue:sap.viz.ui5.types.Axis_position.bottom,deprecated:true},isTruncateAvailable:{type:"boolean",defaultValue:true,deprecated:true},forceLabelArea:{type:"boolean",defaultValue:false,deprecated:true},enableLabelSelection:{type:"boolean",defaultValue:true,deprecated:true},hideTitleFirst:{type:"boolean",defaultValue:false,deprecated:true},maxSizeRatio:{type:"float",defaultValue:.25}},aggregations:{title:{type:"sap.viz.ui5.types.Axis_title",multiple:false},gridline:{type:"sap.viz.ui5.types.Axis_gridline",multiple:false},axisline:{type:"sap.viz.ui5.types.Axis_axisline",multiple:false},label:{type:"sap.viz.ui5.types.Axis_label",multiple:false},indicator:{type:"sap.viz.ui5.types.Axis_indicator",multiple:false,deprecated:true},scale:{type:"sap.viz.ui5.types.Axis_scale",multiple:false},layoutInfo:{type:"sap.viz.ui5.types.Axis_layoutInfo",multiple:false,deprecated:true},axisTick:{type:"sap.viz.ui5.types.Axis_axisTick",multiple:false,deprecated:true}}}});return a});
//# sourceMappingURL=Axis.js.map