"use strict";

sap.ui.define(["sap/ui/core/Fragment", "sap/ui/model/json/JSONModel"], function (Fragment, JSONModel) {
  class Options {
    constructor(excelUploadController) {
      this.excelUploadController = excelUploadController;
    }
    async openOptionsDialog() {
      const optionsModel = new JSONModel({
        strict: this.excelUploadController.component.getStrict(),
        fieldMatchType: this.excelUploadController.component.getFieldMatchType()
      });
      if (!this.optionsDialog) {
        this.optionsDialog = await Fragment.load({
          name: "cc.excelUpload.v0_16_4.fragment.Options",
          type: "XML",
          controller: this
        });
        this.optionsDialog.setModel(this.excelUploadController.componentI18n, "i18n");
        this.optionsDialog.setModel(optionsModel, "options");
      }
      this.optionsDialog.open();
    }
    onSave() {
      this.excelUploadController.component.setFieldMatchType(this.optionsDialog.getModel("options").getProperty("/fieldMatchType"));
      this.excelUploadController.component.setStrict(this.optionsDialog.getModel("options").getProperty("/strict"));
      this.optionsDialog.close();
    }
    onCancel() {
      this.optionsDialog.close();
    }
  }
  return Options;
});