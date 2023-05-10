"use strict";

sap.ui.define([], function () {
  class OData {
    constructor(ui5version, metaDatahandler) {
      this.UI5MinorVersion = ui5version;
      this.metaDatahandler = metaDatahandler;
    }
    getBinding(tableObject) {
      if (tableObject.getMetadata().getName() === "sap.m.Table") {
        return tableObject.getBinding("items");
      }
      if (tableObject.getMetadata().getName() === "sap.ui.table.Table") {
        return tableObject.getBinding("rows");
      }
    }
    _getActionName(oContext, sOperation) {
      var oModel = oContext.getModel(),
        oMetaModel = oModel.getMetaModel(),
        sEntitySetPath = oMetaModel.getMetaPath(oContext.getPath());
      return oMetaModel.getObject("".concat(sEntitySetPath, "@com.sap.vocabularies.Common.v1.DraftRoot/").concat(sOperation));
    }

    // Slice the array into chunks of 'batchSize' if necessary
    processPayloadArray(batchSize, payloadArray) {
      if (batchSize > 0) {
        let slicedPayloadArray = [];
        const numOfSlices = Math.ceil(payloadArray.length / batchSize);
        const equalSize = Math.ceil(payloadArray.length / numOfSlices);
        for (let i = 0; i < payloadArray.length; i += equalSize) {
          slicedPayloadArray.push(payloadArray.slice(i, i + equalSize));
        }
        return slicedPayloadArray;
      } else {
        return [payloadArray];
      }
    }
    getTableObject(tableId, view) {
      // try get object page table
      if (!tableId) {
        let tables = view.findAggregatedObjects(true, function (o) {
          return o.isA("sap.m.Table") || o.isA("sap.ui.table.Table");
        });
        if (tables.length > 1) {} else {
          return tables[0];
        }
      } else {
        return view.byId(tableId);
      }
    }
  }
  return OData;
});