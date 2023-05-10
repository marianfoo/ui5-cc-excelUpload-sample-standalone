/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

(c) Copyright 2009-2017 SAP SE. All rights reserved
 */
sap.ui.define(["./InvalidAttachmentConstructorArgumentsException","./InvalidAttachmentParameterException","sap/ui/base/Object"],function(t,e,n){"use strict";var i=n.extend("sap.collaboration.components.fiori.sharing.attachment.Attachment",{constructor:function(e,n,i){if(arguments.length===3&&Object.prototype.toString.call(e)==="[object String]"&&Object.prototype.toString.call(n)==="[object String]"&&Object.prototype.toString.call(i)==="[object String]"){this.name=e;this.mimeType=n;this.url=i}else{throw new t}},getName:function(){return this.name},getMimeType:function(){return this.mimeType},getUrl:function(){return this.url},setName:function(t){if(arguments.length===1&&Object.prototype.toString.call(t)==="[object String]"){this.name=t}else{throw new e("name")}},setMimeType:function(t){if(arguments.length===1&&Object.prototype.toString.call(t)==="[object String]"){this.mimeType=t}else{throw new e("mimeType")}},setUrl:function(t){if(arguments.length===1&&Object.prototype.toString.call(t)==="[object String]"){this.url=t}else{throw new e("url")}}});return i});
//# sourceMappingURL=Attachment.js.map