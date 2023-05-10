/*! 
 * SAPUI5

		(c) Copyright 2009-2021 SAP SE. All rights reserved
	 
 */
(function(){sap.ui.define(["../../core/core","./Configurator"],function(t,e){function r(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}}function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(t,n.key,n)}}function o(t,e,r){if(e)n(t.prototype,e);if(r)n(t,r);Object.defineProperty(t,"prototype",{writable:false});return t}function i(t,e){if(typeof e!=="function"&&e!==null){throw new TypeError("Super expression must either be null or a function")}t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:true,configurable:true}});Object.defineProperty(t,"prototype",{writable:false});if(e)u(t,e)}function u(t,e){u=Object.setPrototypeOf||function t(e,r){e.__proto__=r;return e};return u(t,e)}function f(t){var e=l();return function r(){var n=s(t),o;if(e){var i=s(this).constructor;o=Reflect.construct(n,arguments,i)}else{o=n.apply(this,arguments)}return c(this,o)}}function c(t,e){if(e&&(typeof e==="object"||typeof e==="function")){return e}else if(e!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return a(t)}function a(t){if(t===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t}function l(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(t){return false}}function s(t){s=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)};return s(t)}var p=e["Configurator"];var y=function(e){i(u,e);var n=f(u);function u(){r(this,u);return n.apply(this,arguments)}o(u,[{key:"initAsync",value:function t(){this.template=this.configuration.template;this.force=this.configuration.force}},{key:"isSuitable",value:function e(r){if(t.isString(r.type)&&["string"].indexOf(r.type)>=0&&t.isObject(r.configuration)&&Object.prototype.hasOwnProperty.call(r.configuration,"template")){return true}return false}},{key:"configure",value:function t(e,r){if(this.isInitialOrForced(e)){var n=this.getEvaluateTemplateFunction(r);return n(this.configuration.template)}return e}}]);return u}(p);var b={__esModule:true};b.TemplateConfigurator=y;return b})})();
//# sourceMappingURL=TemplateConfigurator.js.map