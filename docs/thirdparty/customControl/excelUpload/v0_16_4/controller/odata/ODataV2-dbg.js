"use strict";

sap.ui.define(["./OData"], function (__OData) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const OData = _interopRequireDefault(__OData);
  class ODataV2 extends OData {
    createPromises = [];
    createContexts = [];
    constructor(ui5version) {
      super(ui5version);
    }
    create(model, binding, payload) {
      const submitChangesPromise = (binding, payload) => {
        return new Promise((resolve, reject) => {
          let context = binding.getModel().createEntry(binding.sDeepPath, {
            properties: payload,
            success: data => {
              resolve(context);
            },
            error: oError => {
              reject(oError);
            }
          });
        });
      };
      return submitChangesPromise(binding, payload);
    }
    createAsync(model, binding, payload) {
      const returnObject = this.create(model, binding, payload);
      this.createPromises.push(returnObject);
    }
    async waitForCreation(model) {
      const submitChangesPromise = model => {
        return new Promise((resolve, reject) => {
          model.submitChanges({
            success: data => {
              resolve(data);
            },
            error: oError => {
              reject(oError);
            }
          });
        });
      };
      try {
        const oData = await submitChangesPromise(model);

        // handle success
      } catch (oError) {
        // handle error
      }
      this.createContexts = await Promise.all(this.createPromises);
    }
    async waitForDraft() {
      const activateActionsPromises = [];
      for (let index = 0; index < this.createContexts.length; index++) {
        const element = this.createContexts[index];
        if (this.draftController.getDraftContext().hasDraft(element)) {
          // this will fail i.e. in a Object Page Table, maybe better way to check, hasDraft is still true
          try {
            const checkImport = this.draftController.getDraftContext().getODataDraftFunctionImportName(element, "ActivationAction");
            if (checkImport !== null) {
              const activationPromise = this.draftController.activateDraftEntity(element, true);
              activateActionsPromises.push(activationPromise);
            }
          } catch (error) {}
        }
      }
      return Promise.all(activateActionsPromises);
    }
    getView(context) {
      return context.getView();
    }
    getOdataType(binding, tableObject, odataType) {
      if (!odataType) {
        return binding._getEntityType().entityType;
      }
    }
    async createLabelList(columns, odataType, tableObject) {
      const metaModel = tableObject.getModel().getMetaModel();
      await metaModel.loaded();
      const oDataEntityType = metaModel.getODataEntityType(odataType);
      return this.metaDatahandler.createLabelListV2(columns, odataType, oDataEntityType);
    }
    resetContexts() {
      this.createContexts = [];
      this.createPromises = [];
    }
    async getKeyList(odataType, tableObject) {
      const metaModel = tableObject.getModel().getMetaModel();
      await metaModel.loaded();
      const oDataEntityType = metaModel.getODataEntityType(odataType);
      return this.metaDatahandler.getKeyListV2(oDataEntityType);
    }
  }
  return ODataV2;
});