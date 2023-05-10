"use strict";

sap.ui.define([], function () {
  /**
   * @namespace cc.excelUpload.v0_16_4
   */
  class MetadataHandler {
    constructor(excelUploadController) {
      this.excelUploadController = excelUploadController;
    }
    createLabelListV2(colums, odataType, oDataEntityType) {
      let listObject = {};

      // get the property list of the entity for which we need to download the template
      const properties = oDataEntityType.property;
      const entityTypeLabel = oDataEntityType["sap:label"];

      // check if file name is not set
      if (!this.excelUploadController.component.getExcelFileName() && entityTypeLabel) {
        this.excelUploadController.component.setExcelFileName(`${entityTypeLabel}.xlsx`);
      } else if (!this.excelUploadController.component.getExcelFileName() && !entityTypeLabel) {
        this.excelUploadController.component.setExcelFileName(`Template.xlsx`);
      }
      if (colums.length > 0) {
        for (const propertyName of colums) {
          const property = properties.find(property => property.name === propertyName);
          if (property) {
            listObject[propertyName] = {};
            listObject[propertyName].label = this._getLabelV2(oDataEntityType, properties, property, propertyName, this._options);
            if (!listObject[propertyName].label) {
              listObject[propertyName].label = propertyName;
            }
            listObject[propertyName].type = property["type"];
          } else {}
        }
      } else {
        for (const property of properties) {
          let hiddenProperty = false;
          try {
            hiddenProperty = property["com.sap.vocabularies.UI.v1.Hidden"].Bool === "true";
          } catch (error) {}
          if (!hiddenProperty) {
            const propertyName = property.name;
            listObject[propertyName] = {};
            listObject[propertyName].label = this._getLabelV2(oDataEntityType, properties, property, propertyName, this._options);
            listObject[propertyName].type = property["type"];
          }
        }
      }
      return listObject;
    }
    _getLabelV2(oDataEntityType, properties, property, propertyName, options) {
      if (property["sap:label"]) {
        return property["sap:label"];
      }
      try {
        const lineItemsAnnotations = oDataEntityType["com.sap.vocabularies.UI.v1.LineItem"];
        return lineItemsAnnotations.find(dataField => dataField.Value.Path === propertyName).Label.String;
      } catch (error) {}
      return propertyName;
    }
    createLabelListV4(colums, odataType) {
      let listObject = {};
      let entityTypeLabel;

      // get the property list of the entity for which we need to download the template
      var annotations = this.excelUploadController.context.getModel().getMetaModel().getData()["$Annotations"];
      const properties = this.excelUploadController.context.getModel().getMetaModel().getData()[odataType];
      // try get facet label
      try {
        entityTypeLabel = annotations[odataType]["@com.sap.vocabularies.UI.v1.Facets"][0].Label;
      } catch (error) {}

      // check if file name is not set
      if (!this.excelUploadController.component.getExcelFileName() && entityTypeLabel) {
        this.excelUploadController.component.setExcelFileName(`${entityTypeLabel}.xlsx`);
      } else if (!this.excelUploadController.component.getExcelFileName() && !entityTypeLabel) {
        this.excelUploadController.component.setExcelFileName(`Template.xlsx`);
      }
      if (colums.length > 0) {
        for (const propertyName of colums) {
          const property = properties[propertyName];
          if (property) {
            const propertyLabel = annotations[`${odataType}/${propertyName}`];
            listObject[propertyName] = {};
            listObject[propertyName].label = this._getLabelV4(annotations, properties, propertyName, propertyLabel, this._options, odataType);
            if (!listObject[propertyName].label) {
              listObject[propertyName].label = propertyName;
            }
            listObject[propertyName].type = property.$Type;
          } else {}
        }
      } else {
        const propertiesFiltered = Object.entries(properties).filter(_ref => {
          let [propertyName, propertyValue] = _ref;
          return propertyValue["$kind"] === "Property";
        });
        for (const [propertyName, propertyValue] of propertiesFiltered) {
          const propertyLabel = annotations[`${odataType}/${propertyName}`];
          if (!propertyLabel["@com.sap.vocabularies.UI.v1.Hidden"]) {
            listObject[propertyName] = {};
            listObject[propertyName].label = this._getLabelV4(annotations, properties, propertyName, propertyLabel, this._options, odataType);
            if (!listObject[propertyName].label) {
              listObject[propertyName].label = propertyName;
            }
            listObject[propertyName].type = propertyValue.$Type;
          }
        }
      }
      return listObject;
    }
    _getLabelV4(annotations, properties, propertyName, propertyLabel, options, odataType) {
      if (propertyLabel && propertyLabel["@com.sap.vocabularies.Common.v1.Label"]) {
        return propertyLabel["@com.sap.vocabularies.Common.v1.Label"];
      }
      try {
        const lineItemsAnnotations = annotations[odataType]["@com.sap.vocabularies.UI.v1.LineItem"];
        return lineItemsAnnotations.find(dataField => dataField.Value.$Path === propertyName).Label;
      } catch (error) {}
      return propertyName;
    }

    /**
     * Creates a list of properties that are defined mandatory in the OData metadata V4
     * @param odataType
     **/
    getKeyListV4(odataType) {
      let keys = [];
      var annotations = this.excelUploadController.context.getModel().getMetaModel().getData()["$Annotations"];
      const properties = this.excelUploadController.context.getModel().getMetaModel().getData()[odataType];
      const propertiesFiltered = Object.entries(properties).filter(_ref2 => {
        let [propertyName, propertyValue] = _ref2;
        return propertyValue["$kind"] === "Property";
      });
      for (const [propertyName, propertyValue] of propertiesFiltered) {
        const propertyLabel = annotations[`${odataType}/${propertyName}`];
        if (!propertyLabel) {
          continue;
        }
        // if property is mandatory, field should be in excel file
        if (propertyLabel["@com.sap.vocabularies.Common.v1.FieldControl"] && propertyLabel["@com.sap.vocabularies.Common.v1.FieldControl"]["$EnumMember"] && propertyLabel["@com.sap.vocabularies.Common.v1.FieldControl"]["$EnumMember"] === "com.sap.vocabularies.Common.v1.FieldControlType/Mandatory") {
          keys.push(propertyName);
        }
        // if property nullable is false and hidden is false, field should be in excel file
        if (!propertyLabel["@com.sap.vocabularies.UI.v1.Hidden"] && propertyValue["$Nullable"] === false) {
          keys.push(propertyName);
        }
      }
      return keys;
    }

    /**
     * Creates a list of properties that are defined mandatory in the OData metadata V2
     * @param odataType
     **/
    getKeyListV2(oDataEntityType) {
      let keys = [];
      for (const property of oDataEntityType.property) {
        // if property is mandatory, field should be in excel file
        const propertyName = property.name;
        if (property["com.sap.vocabularies.Common.v1.FieldControl"] && property["com.sap.vocabularies.Common.v1.FieldControl"]["EnumMember"] && property["com.sap.vocabularies.Common.v1.FieldControl"]["EnumMember"] === "com.sap.vocabularies.Common.v1.FieldControlType/Mandatory") {
          keys.push(propertyName);
        }
        // if property nullable is false and hidden is false, field should be in excel file
        if (property["com.sap.vocabularies.UI.v1.Hidden"] && property["com.sap.vocabularies.UI.v1.Hidden"]["Bool"] === "false" && property.nullable === "false") {
          keys.push(propertyName);
        }
      }
      return keys;
    }
  }
  return MetadataHandler;
});