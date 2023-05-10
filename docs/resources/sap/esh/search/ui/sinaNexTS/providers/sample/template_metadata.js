/*! 
 * SAPUI5

		(c) Copyright 2009-2021 SAP SE. All rights reserved
	 
 */
(function(){sap.ui.define(["../../sina/AttributeFormatType"],function(t){
/*!
   * SAPUI5

		(c) Copyright 2009-2021 SAP SE. All rights reserved
	
   */
var a=t["AttributeFormatType"];function e(t){var e={metadata:[t.sina._createAttributeMetadata({id:"FOLKLORIST",label:"Folklorist",type:t.sina.AttributeType.String,usage:{Title:{},AdvancedSearch:{displayOrder:0},Facet:{}},isSortable:true,isKey:false,matchingStrategy:t.sina.MatchingStrategy.Exact}),t.sina._createAttributeMetadata({id:"LOCATION",label:"Location",type:t.sina.AttributeType.String,usage:{Detail:{},AdvancedSearch:{displayOrder:0},Facet:{}},isSortable:true,isKey:false,matchingStrategy:t.sina.MatchingStrategy.Exact}),t.sina._createAttributeMetadata({id:"WEBSITE",label:"Website",type:t.sina.AttributeType.String,usage:{Detail:{},AdvancedSearch:{displayOrder:0}},isSortable:true,isKey:false,matchingStrategy:t.sina.MatchingStrategy.Exact}),t.sina._createAttributeMetadata({id:"SUMMARY",label:"Summary",type:t.sina.AttributeType.String,format:t.sina.AttributeFormatType.LongText,usage:{Detail:{},AdvancedSearch:{displayOrder:0}},isSortable:true,isKey:false,matchingStrategy:t.sina.MatchingStrategy.Exact}),t.sina._createAttributeMetadata({id:"LOC_4326",label:"LOC_4326",type:t.sina.AttributeType.GeoJson,usage:{},isSortable:true,isKey:false,matchingStrategy:t.sina.MatchingStrategy.Exact}),t.sina._createAttributeMetadata({id:"SEX",label:"Sex",type:t.sina.AttributeType.String,usage:{Title:{},AdvancedSearch:{displayOrder:0},Facet:{}},isSortable:true,isKey:false,matchingStrategy:t.sina.MatchingStrategy.Exact}),t.sina._createAttributeMetadata({id:"SEX_DESC",label:"Description for Gender",type:t.sina.AttributeType.String,usage:{Title:{},AdvancedSearch:{displayOrder:0},Facet:{}},isSortable:false,isKey:false,matchingStrategy:t.sina.MatchingStrategy.Exact}),t.sina._createAttributeMetadata({id:"DISCIPLINE",label:"Discipline",type:t.sina.AttributeType.String,usage:{Detail:{}},isSortable:true,isKey:false,matchingStrategy:t.sina.MatchingStrategy.Exact}),t.sina._createAttributeMetadata({id:"DESC",label:"Descritption",type:t.sina.AttributeType.String,usage:{Detail:{}},isSortable:true,isKey:false,matchingStrategy:t.sina.MatchingStrategy.Exact}),t.sina._createAttributeMetadata({id:"PIC",label:"picture",type:t.sina.AttributeType.ImageUrl,usage:{Title:{}},format:a.Round,isSortable:false,isKey:false,matchingStrategy:t.sina.MatchingStrategy.Exact}),t.sina._createAttributeMetadata({id:"SALARY",label:"Salary",type:t.sina.AttributeType.Integer,usage:{Title:{},AdvancedSearch:{displayOrder:0},Facet:{}},isSortable:true,isKey:false,matchingStrategy:t.sina.MatchingStrategy.Exact}),t.sina._createAttributeMetadata({id:"CURRENCY",label:"Currency",type:t.sina.AttributeType.String,usage:{Detail:{}},isSortable:true,isKey:false,matchingStrategy:t.sina.MatchingStrategy.Exact}),t.sina._createAttributeMetadata({id:"HEIGHT",label:"Height",type:t.sina.AttributeType.Integer,usage:{Detail:{}},isSortable:true,isKey:false,matchingStrategy:t.sina.MatchingStrategy.Exact}),t.sina._createAttributeMetadata({id:"UOM_HEIGHT",label:"Unit of Measure for Height Attribute",type:t.sina.AttributeType.String,usage:{Detail:{}},isSortable:true,isKey:false,matchingStrategy:t.sina.MatchingStrategy.Exact}),t.sina._createAttributeMetadata({id:"PHONE",label:"Phone",type:t.sina.AttributeType.String,usage:{Detail:{}},isSortable:true,isKey:false,matchingStrategy:t.sina.MatchingStrategy.Exact}),t.sina._createAttributeMetadata({id:"PUB",label:"Publication",type:t.sina.AttributeType.ImageUrl,format:t.sina.AttributeFormatType.DocumentThumbnail,usage:{Title:{},AdvancedSearch:{displayOrder:0}},isSortable:false,isKey:false,matchingStrategy:t.sina.MatchingStrategy.Exact}),t.sina._createAttributeMetadata({id:"EMAIL",label:"Email",type:t.sina.AttributeType.String,usage:{Detail:{}},isSortable:true,isKey:false,matchingStrategy:t.sina.MatchingStrategy.Exact})],metadata2:[t.sina._createAttributeMetadata({id:"CAPTION",label:"Caption",type:t.sina.AttributeType.String,usage:{Title:{}},isSortable:true,isKey:false,matchingStrategy:t.sina.MatchingStrategy.Exact}),t.sina._createAttributeMetadata({id:"LOCATION",label:"Location",type:t.sina.AttributeType.String,usage:{Detail:{},AdvancedSearch:{displayOrder:0},Facet:{}},isSortable:true,isKey:false,matchingStrategy:t.sina.MatchingStrategy.Exact}),t.sina._createAttributeMetadata({id:"LOC_4326",label:"LOC_4326",type:t.sina.AttributeType.GeoJson,usage:{Detail:{displayOrder:1}},isSortable:true,isKey:false,matchingStrategy:t.sina.MatchingStrategy.Exact}),t.sina._createAttributeMetadata({id:"FOLKLORIST",label:"Folklorist",type:t.sina.AttributeType.String,usage:{Title:{},AdvancedSearch:{displayOrder:0},Facet:{}},isSortable:false,isKey:false,matchingStrategy:t.sina.MatchingStrategy.Exact}),t.sina._createAttributeMetadata({id:"DESC",label:"Descritption",type:t.sina.AttributeType.String,format:t.sina.AttributeFormatType.LongText,usage:{Detail:{}},isSortable:true,isKey:false,matchingStrategy:t.sina.MatchingStrategy.Exact}),t.sina._createAttributeMetadata({id:"PIC",label:"picture",type:t.sina.AttributeType.ImageUrl,usage:{Title:{}},isSortable:false,isKey:false,matchingStrategy:t.sina.MatchingStrategy.Exact}),t.sina._createAttributeMetadata({id:"URL",label:"URL",type:t.sina.AttributeType.String,usage:{Detail:{}},isSortable:true,isKey:false,matchingStrategy:t.sina.MatchingStrategy.Exact})],metadata3:[t.sina._createAttributeMetadata({id:"PUB",label:"Publication",type:t.sina.AttributeType.ImageUrl,format:t.sina.AttributeFormatType.DocumentThumbnail,usage:{Title:{},AdvancedSearch:{displayOrder:0}},isSortable:false,isKey:false,matchingStrategy:t.sina.MatchingStrategy.Exact}),t.sina._createAttributeMetadata({id:"FOLKLORIST",label:"Folklorist",type:t.sina.AttributeType.String,usage:{Detail:{},AdvancedSearch:{displayOrder:0},Facet:{}},isSortable:true,isKey:false,matchingStrategy:t.sina.MatchingStrategy.Exact}),t.sina._createAttributeMetadata({id:"DESC",label:"Description",type:t.sina.AttributeType.String,format:t.sina.AttributeFormatType.LongText,usage:{Detail:{}},isSortable:true,isKey:false,matchingStrategy:t.sina.MatchingStrategy.Exact})]};return e}var i={__esModule:true};i.createTemplateMetadata=e;return i})})();
//# sourceMappingURL=template_metadata.js.map