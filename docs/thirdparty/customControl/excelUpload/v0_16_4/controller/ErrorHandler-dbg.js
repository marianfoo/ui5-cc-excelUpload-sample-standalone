"use strict";

sap.ui.define(["../types", "./Util", "sap/ui/core/Fragment", "sap/ui/model/json/JSONModel"], function (___types, __Util, Fragment, JSONModel) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const ErrorTypes = ___types["ErrorTypes"];
  const Util = _interopRequireDefault(__Util);
  class ErrorHandler {
    errorResults = [];
    constructor(excelUploadController) {
      this.errorResults = [];
      this.excelUploadController = excelUploadController;
    }
    setErrorResults(errorResults) {
      this.errorResults = errorResults;
    }
    addToErrorsResults(errorResults) {
      this.errorResults = this.errorResults.concat(errorResults);
    }
    addParsingError(errorResults) {
      this.errorResults.push(errorResults);
    }
    getErrorResults() {
      return this.errorResults;
    }
    checkMandatoryColumns(data, columnNames, mandatoryFieldsUser, mandatoryFieldsMetadata, typeLabelList) {
      // concat mandatory fields arrays and remove duplicates
      const mandatoryFields = [...new Set([...mandatoryFieldsUser, ...mandatoryFieldsMetadata])];
      // check if column is in the data list
      //const availableKeyColumns = this.checkKeyColumns(columnNames, mandatoryFields, typeLabelList);
      // check if data is filled in for available columns
      this.checkMandatoryFields(data, mandatoryFields, typeLabelList);
    }
    checkMandatoryFields(data, mandatoryFields, typeLabelList) {
      if (!mandatoryFields) {
        return;
      }
      for (const mandatoryField of mandatoryFields) {
        const fieldLabel = typeLabelList[mandatoryField]?.label;
        if (!fieldLabel) {
          continue;
        }
        for (const [index, row] of data.entries()) {
          const value = Util.getValueFromRow(row, fieldLabel, mandatoryField, this.excelUploadController.component.getFieldMatchType());
          const errorMessage = {
            title: this.excelUploadController.util.geti18nText("mandatoryFieldNotFilled", [fieldLabel]),
            type: ErrorTypes.MandatoryFieldNotFilled,
            row: index + 2,
            counter: 1
          };
          if (value === "" || value === undefined) {
            this.errorResults.push(errorMessage);
          }
        }
      }
    }
    checkColumnNames(columnNames, fieldMatchType, typeLabelList) {
      for (let index = 0; index < columnNames.length; index++) {
        const columnName = columnNames[index];
        let found = false;
        for (const key in typeLabelList) {
          if (typeLabelList.hasOwnProperty(key)) {
            if (fieldMatchType === "label") {
              if (typeLabelList[key].label === columnName) {
                found = true;
                break;
              }
            }
            if (fieldMatchType === "labelTypeBrackets") {
              if (columnName.includes(`[${key}]`)) {
                found = true;
                break;
              }
            }
          }
        }
        if (!found) {
          const errorMessage = {
            title: this.excelUploadController.util.geti18nText("columnNotFound", [columnName]),
            type: ErrorTypes.ColumnNotFound,
            counter: 1
          };
          this.errorResults.push(errorMessage);
        }
      }
    }
    checkKeyColumns(columnNames, odataKeyList, typeLabelList) {
      const availableKeyColumns = [];
      for (let index = 0; index < odataKeyList.length; index++) {
        const columnName = odataKeyList[index];
        let found = false;
        for (const index in columnNames) {
          if (columnNames[index].includes(`[${columnName}]`)) {
            found = true;
            availableKeyColumns.push(columnName);
            break;
          }
        }
        if (!found) {
          const columnNameLabel = typeLabelList[columnName]?.label ? typeLabelList[columnName].label : columnName;
          const errorMessage = {
            title: this.excelUploadController.util.geti18nText("keyColumnNotFound", [columnNameLabel]),
            type: ErrorTypes.ColumnNotFound,
            counter: 1
          };
          this.errorResults.push(errorMessage);
        }
      }
      return availableKeyColumns;
    }
    areErrorsPresent() {
      if (this.errorResults.some(error => error.counter > 0)) {
        return true;
      }
      return false;
    }

    /**
     * Display errors in the errorArray.
     * @param {Array} errorArray - Array containing error messages and their counters.
     */
    async displayErrors() {
      const infoModel = new JSONModel({
        strict: this.excelUploadController.component.getStrict()
      });
      if (!this.errorDialog) {
        this.errorDialog = await Fragment.load({
          name: "cc.excelUpload.v0_16_4.fragment.ErrorDialog",
          type: "XML",
          controller: this
        });
      }
      this.errorDialog.setModel(this.excelUploadController.componentI18n, "i18n");
      this.errorDialog.setModel(infoModel, "info");
      this.errorDialog.setModel(new JSONModel(), "errorData");
      const errorGrouped = this.groupErrors(this.errorResults);
      const sortedErrorGrouped = this.sortErrorsByTitle(errorGrouped);
      this.errorDialog.getModel("errorData").setData(sortedErrorGrouped);
      this.errorDialog.open();
    }
    groupErrors(errors) {
      const counterLargerThanOne = errors.filter(error => error.counter !== 0);
      const parsingErrors = counterLargerThanOne.filter(error => error.type.group === true);
      const errorGroups = parsingErrors.reduce((groups, error) => {
        if (!groups[error.title]) {
          groups[error.title] = [];
        }
        const errorText = this.excelUploadController.util.geti18nText("errorInRow", [error.row]);
        groups[error.title].push(errorText);
        return groups;
      }, {});
      const groupedErrors = [];
      for (const title in errorGroups) {
        groupedErrors.push({
          title: title,
          description: errorGroups[title].join("\n")
        });
      }
      const allErrors = groupedErrors.concat(counterLargerThanOne.filter(error => error.type.group === false));
      return allErrors;
    }
    onCloseErrorDialog() {
      this.errorDialog.close();
      // rest file uploader content
      this.excelUploadController.resetContent();
    }
    onContinue() {
      this.errorDialog.close();
      this.excelUploadController.setDataRows();
    }
    sortErrorsByTitle(errors) {
      return errors.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    }
  }
  return ErrorHandler;
});