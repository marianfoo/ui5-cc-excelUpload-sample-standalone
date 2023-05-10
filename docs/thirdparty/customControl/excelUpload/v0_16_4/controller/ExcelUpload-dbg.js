'use strict';
sap.ui.define([
    'sap/ui/core/Fragment',
    'sap/m/MessageToast',
    'cc/excelUpload/v0_16_4/thirdparty/xlsx',
    './MetadataHandler',
    '../types',
    './odata/ODataV2',
    './odata/ODataV4',
    './Util',
    './Parser',
    './ErrorHandler',
    './Preview',
    'sap/base/Log',
    'sap/ui/model/json/JSONModel',
    './Options'
], function (Fragment, MessageToast, XLSX, __MetadataHandler, ___types, __ODataV2, __ODataV4, __Util, __Parser, __ErrorHandler, __Preview, Log, JSONModel, __Options) {
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule && typeof obj.default !== 'undefined' ? obj.default : obj;
    }
    const MetadataHandler = _interopRequireDefault(__MetadataHandler);
    const ErrorTypes = ___types['ErrorTypes'];
    const ODataV2 = _interopRequireDefault(__ODataV2);
    const ODataV4 = _interopRequireDefault(__ODataV4);
    const Util = _interopRequireDefault(__Util);
    const Parser = _interopRequireDefault(__Parser);
    const ErrorHandler = _interopRequireDefault(__ErrorHandler);
    const Preview = _interopRequireDefault(__Preview);
    const Options = _interopRequireDefault(__Options);
    class ExcelUpload {
        constructor(component, componentI18n) {
            this.dialog = null;
            this.errorState = false;
            this.UI5MinorVersion = sap.ui.version.split('.')[1];
            this.component = component;
            this.componentI18n = componentI18n;
            this.util = new Util(componentI18n.getResourceBundle());
            this.isODataV4 = this._checkIfODataIsV4();
            this.isOpenUI5 = sap.ui.generic ? false : true;
            this.odataHandler = this.getODataHandler(this.UI5MinorVersion);
            this.initialSetupPromise = this.initialSetup();
            this.previewHandler = new Preview(this.util);
        }
        async initialSetup() {
            this.optionsHandler = new Options(this);
            const infoModel = new JSONModel({
                dataRows: 0,
                strict: this.component.getStrict()
            });
            if (!this.dialog) {
                this.dialog = await Fragment.load({
                    name: 'cc.excelUpload.v0_16_4.fragment.ExcelUpload',
                    type: 'XML',
                    controller: this
                });
                this.dialog.setModel(this.componentI18n, 'i18n');
                this.dialog.setModel(infoModel, 'info');
                this.dialog.setModel(this.component.getModel('device'), 'device');
            }
            if (this.component.getStandalone() && this.component.getColumns().length === 0) {
                this.dialog.getSubHeader().setVisible(false);
                this.dialog.getSubHeader().getContentLeft()[0].setVisible(false);
            }
            this.errorHandler = new ErrorHandler(this);
            if (!this.component.getStandalone()) {
                this.metadataHandler = new MetadataHandler(this);
                this.odataHandler.metaDatahandler = this.metadataHandler;
                try {
                    await this.setContext();
                    this.errorState = false;
                } catch (error) {
                    this.errorMessage = error;
                    this.errorState = true;
                }
            }
        }
        async setContext() {
            this.context = this.component.getContext();
            if (this.context.base) {
                this.context = this.context.base;
            }
            this.view = this.odataHandler.getView(this.context);
            this.tableObject = this.odataHandler.getTableObject(this.component.getTableId(), this.view);
            this.component.setTableId(this.tableObject.getId());
            this.binding = this.odataHandler.getBinding(this.tableObject);
            if (!this.binding) {
                throw new Error(this.util.geti18nText('bindingError'));
            }
            const odataType = this.odataHandler.getOdataType(this.binding, this.tableObject, this.component.getOdataType());
            this.component.setOdataType(odataType);
            this.odataKeyList = await this.odataHandler.getKeyList(odataType, this.tableObject);
            this.typeLabelList = await this.odataHandler.createLabelList(this.component.getColumns(), odataType, this.tableObject);
            this.model = this.tableObject.getModel();
            try {
                const DraftController = await this._loadDraftController();
                this.odataHandler.draftController = new DraftController(this.model, undefined);
            } catch (error) {
            }
        }
        getODataHandler(version) {
            if (this.isODataV4) {
                return new ODataV4(version);
            } else {
                return new ODataV2(version);
            }
        }
        async openExcelUploadDialog() {
            await this.initialSetupPromise;
            if (this.errorState) {
                await this.initialSetup();
            }
            if (!this.errorState) {
                this.dialog.getContent()[0].getItems()[1].clear();
                this.dialog.open();
            } else {
                Util.showError(this.errorMessage, 'ExcelUpload.ts', 'initialSetup');
                Log.error('ErrorState: True. Can not open dialog.', 'ExcelUpload.ts.openExcelUploadDialog');
            }
        }
        async showPreview() {
            this.previewHandler.showPreview(this.payloadArray);
        }
        async onFileUpload(event) {
            try {
                this.errorHandler.setErrorResults([]);
                const file = event.getParameter('files')[0];
                const workbook = await this._readWorkbook(file);
                const sheetName = workbook.SheetNames[0];
                let excelSheetsData = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                let columnNames = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 })[0];
                if (!excelSheetsData || excelSheetsData.length === 0) {
                    throw new Error(this.util.geti18nText('emptySheet'));
                }
                for (const object of excelSheetsData) {
                    for (const key in object) {
                        object[key] = typeof object[key] === 'string' ? object[key].trim() : object[key];
                    }
                }
                if (!this.component.getStandalone()) {
                    this.errorHandler.checkMandatoryColumns(excelSheetsData, columnNames, this.odataKeyList, this.component.getMandatoryFields(), this.typeLabelList);
                    this.errorHandler.checkColumnNames(columnNames, this.component.getFieldMatchType(), this.typeLabelList);
                }
                this.payload = excelSheetsData;
                this.component.fireCheckBeforeRead({ sheetData: excelSheetsData });
                if (!this.component.getStandalone()) {
                    this.payloadArray = [];
                    this.payloadArray = Parser.parseExcelData(this.payload, this.typeLabelList, this.component, this.errorHandler, this.util);
                } else {
                    this.payloadArray = this.payload;
                }
                if (this.errorHandler.areErrorsPresent()) {
                    this.errorHandler.displayErrors();
                    return;
                }
                this.setDataRows();
            } catch (error) {
                Util.showError(error, 'ExcelUpload.ts', 'onFileUpload');
                this.resetContent();
            }
        }
        onCloseDialog() {
            this.resetContent();
            this.dialog.close();
        }
        onOpenOptionsDialog() {
            this.optionsHandler.openOptionsDialog();
        }
        async onUploadSet(event) {
            const isDefaultNotPrevented = this.component.fireUploadButtonPress({ payload: this.payload });
            if (!isDefaultNotPrevented || this.component.getStandalone()) {
                this.onCloseDialog();
                return;
            }
            if (!this.payloadArray.length) {
                MessageToast.show(this.util.geti18nText('selectFileUpload'));
                return;
            }
            var that = this;
            const source = event.getSource();
            const sourceParent = source.getParent();
            sourceParent.setBusyIndicatorDelay(0);
            sourceParent.setBusy(true);
            await Util.sleep(50);
            var fnAddMessage = function () {
                return new Promise((fnResolve, fnReject) => {
                    that.callOdata(fnResolve, fnReject);
                });
            };
            var mParameters = {
                busy: {
                    set: true,
                    check: false
                },
                dataloss: {
                    popup: true,
                    navigation: false
                },
                sActionLabel: this.util.geti18nText('uploadingFile')
            };
            if (this.isODataV4) {
                await this.context.editFlow.securedExecution(fnAddMessage, mParameters);
            } else {
                try {
                    if (this.context.extensionAPI) {
                        await this.context.extensionAPI.securedExecution(fnAddMessage, mParameters);
                    } else {
                        await fnAddMessage();
                    }
                } catch (error) {
                    Util.showError(error, 'ExcelUpload.ts', 'onUploadSet');
                    this.resetContent();
                }
            }
            sourceParent.setBusy(false);
            this.onCloseDialog();
        }
        async callOdata(fnResolve, fnReject) {
            try {
                const model = this.tableObject.getModel();
                const slicedPayloadArray = this.odataHandler.processPayloadArray(this.component.getBatchSize(), this.payloadArray);
                for (const batch of slicedPayloadArray) {
                    for (const payload of batch) {
                        this.payload = payload;
                        this.component.fireChangeBeforeCreate({ payload: this.payload });
                        this.odataHandler.createAsync(model, this.binding, this.payload);
                    }
                    await this.odataHandler.waitForCreation(model);
                    if (this.component.getActivateDraft()) {
                        await this.odataHandler.waitForDraft();
                    }
                    this.odataHandler.resetContexts();
                }
                try {
                    this.binding.refresh();
                } catch (error) {
                    Log.error(error);
                }
                fnResolve();
            } catch (error) {
                this.odataHandler.resetContexts();
                Log.error(error);
                fnReject(error);
            }
        }
        onTempDownload() {
            let fieldMatchType = this.component.getFieldMatchType();
            var excelColumnList = [{}];
            if (this.component.getStandalone()) {
                for (let column of this.component.getColumns()) {
                    excelColumnList[0][column] = '';
                }
            } else {
                for (let [key, value] of Object.entries(this.typeLabelList)) {
                    if (fieldMatchType === 'label') {
                        excelColumnList[0][value.label] = '';
                    }
                    if (fieldMatchType === 'labelTypeBrackets') {
                        excelColumnList[0][`${ value.label }[${ key }]`] = '';
                    }
                }
            }
            const ws = XLSX.utils.json_to_sheet(excelColumnList);
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'Tabelle1');
            XLSX.writeFile(wb, this.component.getExcelFileName());
            MessageToast.show(this.util.geti18nText('downloadingTemplate'));
        }
        _checkIfODataIsV4() {
            try {
                if (this.component.getContext().getModel().getODataVersion() === '4.0') {
                    return true;
                }
            } catch (error) {
                return false;
            }
        }
        _setPayload(payload) {
            this.payload = payload;
        }
        async buffer_RS(stream) {
            const buffers = [];
            const reader = stream.getReader();
            for (;;) {
                const res = await reader.read();
                if (res.value)
                    buffers.push(res.value);
                if (res.done)
                    break;
            }
            const out = new Uint8Array(buffers.reduce((acc, v) => acc + v.length, 0));
            let off = 0;
            for (const u8 of buffers) {
                out.set(u8, off);
                off += u8.length;
            }
            return out;
        }
        async _readWorkbook(file) {
            return new Promise(async (resolve, reject) => {
                try {
                    const data = await this.buffer_RS(file.stream());
                    let workbook = XLSX.read(data);
                    resolve(workbook);
                } catch (error) {
                    reject(error);
                }
            });
        }
        async _loadDraftController() {
            return new Promise(function (resolve, reject) {
                sap.ui.require(['sap/ui/generic/app/transaction/DraftController'], function (DraftController) {
                    resolve(DraftController);
                }, function (err) {
                    reject(err);
                });
            });
        }
        resetContent() {
            this.payloadArray = [];
            this.payload = [];
            this.dialog.getModel('info').setProperty('/dataRows', 0);
            this.odataHandler.resetContexts();
            var fileUploader = this.dialog.getContent()[0].getItems()[1];
            fileUploader.setValue();
        }
        getErrorResults() {
            return this.errorHandler.getErrorResults();
        }
        addToErrorsResults(errorArray) {
            errorArray.forEach(error => {
                if (error.group) {
                    error.type = ErrorTypes.CustomErrorGroup;
                } else {
                    error.type = ErrorTypes.CustomError;
                }
                error.counter = 1;
            });
            this.errorHandler.addToErrorsResults(errorArray);
        }
        setDataRows() {
            this.dialog.getModel('info').setProperty('/dataRows', this.payloadArray.length);
        }
    }
    return ExcelUpload;
});