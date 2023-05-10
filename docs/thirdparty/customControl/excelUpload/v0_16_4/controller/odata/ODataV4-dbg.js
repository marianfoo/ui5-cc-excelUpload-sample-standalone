"use strict";

sap.ui.define(["./OData"], function (__OData) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const OData = _interopRequireDefault(__OData);
  class ODataV4 extends OData {
    createPromises = [];
    createContexts = [];
    constructor(ui5version) {
      super(ui5version);
    }
    create(model, binding, payload) {
      const context = binding.create(payload);
      return {
        context: context,
        promise: context.created()
      };
    }
    createAsync(model, binding, payload) {
      const returnObject = this.create(model, binding, payload);
      this.createContexts.push(returnObject.context);
      this.createPromises.push(returnObject.promise);
    }
    async waitForCreation(model) {
      await model.submitBatch(model.getUpdateGroupId());
      return Promise.all(this.createPromises);
    }
    async waitForDraft() {
      const activateActionsPromises = [];
      for (let index = 0; index < this.createContexts.length; index++) {
        const element = this.createContexts[index];
        const operationName = this._getActionName(element, "ActivationAction");
        if (operationName) {
          const operation = element.getModel().bindContext(`${operationName}(...)`, element, {
            $$inheritExpandSelect: true
          });
          activateActionsPromises.push(operation.execute("$auto", false, null, /*bReplaceWithRVC*/true));
        }
      }
      return Promise.all(activateActionsPromises);
    }
    getView(context) {
      return context._view || context.oView;
    }
    getOdataType(binding, tableObject, odataType) {
      const tableBindingPath = binding.getPath();
      const metaModel = tableObject.getModel().getMetaModel();
      const metaModelData = tableObject.getModel().getMetaModel().getData();
      if (!odataType) {
        // for list report
        try {
          const metaDataObject = metaModel.getObject(tableBindingPath);
          return metaDataObject["$Type"];
        } catch (error) {}
        // for object page
        if (!odataType) {
          for (const [key, value] of Object.entries(metaModelData)) {
            if (value["$kind"] === "EntityType" && value[tableBindingPath]) {
              return value[tableBindingPath]["$Type"];
            }
          }
        }
        if (!odataType) {}
      }
    }
    async createLabelList(columns, odataType) {
      return this.metaDatahandler.createLabelListV4(columns, odataType);
    }
    async getKeyList(odataType, tableObject) {
      return this.metaDatahandler.getKeyListV4(odataType);
    }
    resetContexts() {
      this.createContexts = [];
      this.createPromises = [];
    }
  }
  return ODataV4;
});