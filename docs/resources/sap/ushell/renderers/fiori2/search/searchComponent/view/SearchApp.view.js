// Copyright (c) 2009-2022 SAP SE, All Rights Reserved
sap.ui.define(["sap/ui/core/mvc/View","sap/m/Label","sap/esh/search/ui/SearchCompositeControl"],function(e,r,n){"use strict";return e.extend("sap.ushell.renderers.fiori2.search.searchComponent.view.SearchApp",{getControllerName:function(){return"sap.ushell.renderers.fiori2.search.searchComponent.controller.SearchApp"},createContent:function(){var e=sap.esh.search.ui.getModelSingleton({},"flp");return new n({model:e})}})});
//# sourceMappingURL=SearchApp.view.js.map