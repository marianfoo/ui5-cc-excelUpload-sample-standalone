"use strict";

sap.ui.define(["sap/base/Log", "sap/m/MessageBox"], function (Log, MessageBox) {
  const Action = MessageBox["Action"];
  class Util {
    constructor(resourceBundle) {
      this.resourceBundle = resourceBundle;
    }
    static getValueFromRow(row, label, type, fieldMatchType) {
      let value;
      if (fieldMatchType === "label") {
        value = row[label];
      }
      if (fieldMatchType === "labelTypeBrackets") {
        try {
          value = Object.entries(row).find(_ref => {
            let [key] = _ref;
            return key.includes(`[${type}]`);
          })[1];
        } catch (error) {}
      }
      return value;
    }
    geti18nText(text, array) {
      return this.resourceBundle.getText(text, array);
    }
    static changeDecimalSeperator(value) {
      // Replace thousands separator with empty string
      value = value.replace(/[.]/g, "");
      // Replace decimal separator with a dot
      value = value.replace(/[,]/g, ".");
      // Convert string to number
      return parseFloat(value);
    }
    static sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    static showError(error, className, methodName) {
      let detailsContent = "";
      let errorMessage = "";
      try {
        // code error
        if (error.stack) {
          errorMessage = error.message;
          // convert urls to links and to remove lines of the url
          const regex = /(http[s]?:\/\/[^\s]+):(\d+):(\d+)/g;
          let errorStack = error.stack.replace(regex, '<a href="$1" target="_blank" class="sapMLnk">$1</a>:<span class="line-no">$2:$3</span>').replace(/\n/g, "<br/>");
          detailsContent = errorStack;
        } else {
          // OData error
          const errorObject = JSON.parse(error.responseText);
          errorMessage = errorObject.error.message.value;
          detailsContent = errorObject;
        }
      } catch (error) {
        errorMessage = "Generic Error";
        detailsContent = error;
      }
      Log.error(errorMessage, error, `${className}.${methodName}`);
      MessageBox.error(errorMessage, {
        details: detailsContent,
        initialFocus: Action.CLOSE,
        actions: [Action.OK]
      });
    }
    static showErrorMessage(errorMessage, className, methodName) {
      Log.error(errorMessage, `${className}.${methodName}`);
      MessageBox.error(errorMessage, {
        initialFocus: Action.CLOSE,
        actions: [Action.CANCEL]
      });
    }
  }
  return Util;
});