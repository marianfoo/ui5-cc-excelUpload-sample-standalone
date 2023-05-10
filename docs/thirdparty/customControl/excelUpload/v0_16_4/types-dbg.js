"use strict";

sap.ui.define([], function () {
  var ErrorTypes = /*#__PURE__*/function (ErrorTypes) {
    ErrorTypes[ErrorTypes["MandatoryFieldNotFilled"] = {
      title: "MandatoryFieldNotFilled",
      group: true
    }] = "MandatoryFieldNotFilled";
    ErrorTypes[ErrorTypes["ColumnNotFound"] = {
      title: "ColumnNotFound",
      group: false
    }] = "ColumnNotFound";
    ErrorTypes[ErrorTypes["ParsingError"] = {
      title: "ParsingError",
      group: true
    }] = "ParsingError";
    ErrorTypes[ErrorTypes["CustomErrorGroup"] = {
      title: "CustomErrorGroup",
      group: true
    }] = "CustomErrorGroup";
    ErrorTypes[ErrorTypes["CustomError"] = {
      title: "CustomError",
      group: false
    }] = "CustomError";
    return ErrorTypes;
  }(ErrorTypes || {});
  var __exports = {
    __esModule: true
  };
  __exports.ErrorTypes = ErrorTypes;
  return __exports;
});