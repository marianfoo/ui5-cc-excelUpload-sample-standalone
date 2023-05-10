"use strict";

sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel", "sap/ui/Device", "./controller/ExcelUpload"], function (UIComponent, JSONModel, Device, __ExcelUpload) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const ExcelUpload = _interopRequireDefault(__ExcelUpload);
  /**
   * @namespace cc.excelUpload.v0_16_4
   */
  const Component = UIComponent.extend("cc.excelUpload.v0_16_4.Component", {
    metadata: {
      interfaces: ["sap.ui.core.IAsyncContentCreation"],
      manifest: "json",
      properties: {
        excelFileName: {
          type: "string",
          defaultValue: "Template.xlsx"
        },
        context: {
          type: "object"
        },
        columns: {
          type: "string[]"
        },
        tableId: {
          type: "string"
        },
        odataType: {
          type: "string"
        },
        mandatoryFields: {
          type: "string[]"
        },
        fieldMatchType: {
          type: "string",
          defaultValue: "labelTypeBrackets"
        },
        activateDraft: {
          type: "boolean",
          defaultValue: false
        },
        batchSize: {
          type: "int",
          defaultValue: 1000
        },
        standalone: {
          type: "boolean",
          defaultValue: false
        },
        strict: {
          type: "boolean",
          defaultValue: false
        }
      },
      aggregations: {
        rootControl: {
          type: "sap.ui.core.Control",
          multiple: false,
          visibility: "hidden"
        }
      },
      events: {
        checkBeforeRead: {
          parameters: {
            sheetData: {
              type: "object"
            },
            errorResults: {
              type: "object"
            }
          }
        },
        changeBeforeCreate: {
          parameters: {
            payload: {
              type: "object"
            }
          }
        },
        uploadButtonPress: {
          allowPreventDefault: true,
          parameters: {
            payload: {
              type: "object"
            }
          }
        }
      }
    },
    constructor: function _constructor(id, settings) {
      UIComponent.prototype.constructor.call(this, id, settings);
    },
    init: async function _init() {
      var oModel, oCompData;
      oCompData = this.getComponentData();
      this.getContentDensityClass();
      // if (typeof oCompData.renderButton === "boolean"){
      // 	this.setRenderButton(oCompData.renderButton);
      // }
      // if oCompData.columns is undefined, then set it to an empty array
      if (!oCompData.columns) {
        oCompData.columns = [];
      }
      if (!oCompData.mandatoryFields) {
        oCompData.mandatoryFields = [];
      }
      this.setContext(oCompData.context);
      this.setColumns(oCompData.columns);
      this.setTableId(oCompData.tableId);
      this.setOdataType(oCompData.odataType);
      this.setMandatoryFields(oCompData.mandatoryFields);
      this.setFieldMatchType(oCompData.fieldMatchType);
      this.setActivateDraft(oCompData.activateDraft);
      this.setBatchSize(oCompData.batchSize);
      this.setStandalone(oCompData.standalone);
      this.setStrict(oCompData.strict);

      // // we could create a device model and use it
      oModel = new JSONModel(Device);
      oModel.setDefaultBindingMode("OneWay");
      this.setModel(oModel, "device");

      // call the init function of the parent - ATTENTION: this triggers createContent()
      // call the base component's init function
      UIComponent.prototype.init.call(this);

      // this.excelUpload = await sap.ui.core.mvc.Controller.create({ name:"cc.excelUpload.v0_16_4.ExcelUpload"})
      // //now this here would work:
      // //var oRoot = this.getRootControl(); → won't work with visibility: "hidden", no getters/setters generated
    },
    createContent: function _createContent() {
      this.excelUpload = new ExcelUpload(this, this.getModel("i18n"));
      // this.excelUpload = await Controller.create({ name:"cc.excelUpload.v0_16_4.controller.ExcelUpload"})

      // var oBtn, oTSD;

      // oTSD = this._getCustomerSelectDialog();

      // if (this.getRenderButton()) {
      // 	oBtn = this._getOpenButton();
      // 	oBtn.addDependent(oTSD);
      // 	return oBtn;
      // }
      // return oTSD;
    },
    openExcelUploadDialog: function _openExcelUploadDialog() {
      this.excelUpload.openExcelUploadDialog();
    },
    setPayload: function _setPayload(payload) {
      this.excelUpload._setPayload(payload);
    },
    addToErrorsResults: function _addToErrorsResults(errorArray) {
      this.excelUpload.addToErrorsResults(errorArray);
    },
    getErrorsResults: function _getErrorsResults() {
      return this.excelUpload.getErrorResults();
    },
    onChangeBeforeCreate: function _onChangeBeforeCreate(oEvent) {
      var aContexts, oCustomer;
      aContexts = oEvent.getParameter("selectedContexts");
    },
    getContentDensityClass: function _getContentDensityClass() {
      if (this._sContentDensityClass === undefined) {
        // check whether FLP has already set the content density class; do nothing in this case
        if (document.body.classList.contains("sapUiSizeCozy") || document.body.classList.contains("sapUiSizeCompact")) {
          this._sContentDensityClass = "";
        } else if (!Device.support.touch) {
          // apply "compact" mode if touch is not supported
          this._sContentDensityClass = "sapUiSizeCompact";
        } else {
          // "cozy" in case of touch support; default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
          this._sContentDensityClass = "sapUiSizeCozy";
        }
      }
      return this._sContentDensityClass;
    }
  });
  return Component;
});