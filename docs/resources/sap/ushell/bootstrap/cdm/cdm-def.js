// Copyright (c) 2009-2022 SAP SE, All Rights Reserved
sap.ui.define(["./cdm.constants","../common/common.configure.ui5","../common/common.configure.ushell","../common/common.override.registermodulepath","../common/common.load.core-min","../common/common.configure.ui5.extractLibs","../common/common.load.bootstrapExtension","./cdm.boot.task"],function(o,m,n,c,e,r,a,t){"use strict";if(performance&&performance.mark){performance.mark("FLP first paint!")}var i=n({defaultUshellConfig:o.defaultConfig});m({ushellConfig:i,libs:r(i),platform:"cdm",bootTask:t});c();a(i);e.load("sap.ushell.bootstrap")});
//# sourceMappingURL=cdm-def.js.map