// Copyright (c) 2009-2022 SAP SE, All Rights Reserved
sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel","sap/m/MessageToast","sap/ushell/resources","sap/ushell/Config","sap/ushell/utils"],function(e,o,s,t,n,i){"use strict";var p=n.last("/core/homeApp/component").messages||[];return e.extend("sap.ushell.components.homeApp.error.HomeAppError",{onInit:function(){this._oModel=new o({icon:"sap-icon://documents",text:t.i18n.getText("HomeApp.GeneralError.Text"),description:"",details:JSON.stringify(p,null,4)});this.getView().setModel(this._oModel)},onCopyErrorDetailsPress:function(){var e=i.copyToClipboard(this._oModel.getProperty("/details"));if(e){s.show(t.i18n.getText("HomeApp.CannotLoadApp.CopySuccess"),{closeOnBrowserNavigation:false})}else{s.show(t.i18n.getText("HomeApp.CannotLoadApp.CopyFail"),{closeOnBrowserNavigation:false})}}})});
//# sourceMappingURL=HomeAppError.controller.js.map