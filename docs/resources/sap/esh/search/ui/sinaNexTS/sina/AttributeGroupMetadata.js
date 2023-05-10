/*! 
 * SAPUI5

		(c) Copyright 2009-2021 SAP SE. All rights reserved
	 
 */
(function(){sap.ui.define(["./AttributeType","./AttributeMetadataBase"],function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(t,n.key,n)}}function n(t,e,n){if(e)r(t.prototype,e);if(n)r(t,n);Object.defineProperty(t,"prototype",{writable:false});return t}function o(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}}function u(t,e){if(typeof e!=="function"&&e!==null){throw new TypeError("Super expression must either be null or a function")}t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:true,configurable:true}});Object.defineProperty(t,"prototype",{writable:false});if(e)i(t,e)}function i(t,e){i=Object.setPrototypeOf||function t(e,r){e.__proto__=r;return e};return i(t,e)}function a(t){var e=c();return function r(){var n=s(t),o;if(e){var u=s(this).constructor;o=Reflect.construct(n,arguments,u)}else{o=n.apply(this,arguments)}return l(this,o)}}function l(t,e){if(e&&(typeof e==="object"||typeof e==="function")){return e}else if(e!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return f(t)}function f(t){if(t===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t}function c(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(t){return false}}function s(t){s=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)};return s(t)}function p(t,e,r){if(e in t){Object.defineProperty(t,e,{value:r,enumerable:true,configurable:true,writable:true})}else{t[e]=r}return t}
/*!
   * SAPUI5

		(c) Copyright 2009-2021 SAP SE. All rights reserved
	
   */var b=t["AttributeType"];var y=e["AttributeMetadataBase"];var d=function(t){u(r,t);var e=a(r);function r(t){var n,u,i,a,l,c,s;var y;o(this,r);y=e.call(this,t);p(f(y),"type",b.Group);p(f(y),"isSortable",false);p(f(y),"attributes",[]);p(f(y),"displayAttributes",[]);y.id=(n=t.id)!==null&&n!==void 0?n:y.id;y.usage=(u=t.usage)!==null&&u!==void 0?u:y.usage;y.label=(i=t.label)!==null&&i!==void 0?i:y.label;y.isSortable=(a=t.isSortable)!==null&&a!==void 0?a:y.isSortable;y.template=(l=t.template)!==null&&l!==void 0?l:y.template;y.attributes=(c=t.attributes)!==null&&c!==void 0?c:y.attributes;y.displayAttributes=(s=t.displayAttributes)!==null&&s!==void 0?s:y.displayAttributes;return y}return n(r)}(y);var v={__esModule:true};v.AttributeGroupMetadata=d;return v})})();
//# sourceMappingURL=AttributeGroupMetadata.js.map