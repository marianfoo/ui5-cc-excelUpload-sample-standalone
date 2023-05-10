/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["../NodeProxy","./Material","../cssColorToColor","../colorToCSSColor","../abgrToColor","../colorToABGR","../TransformationMatrix","./ThreeExtensions","../ObjectType"],function(t,e,r,a,i,o,n,s,l){"use strict";var u=t.extend("sap.ui.vk.threejs.NodeProxy",{metadata:{library:"sap.ui.vk"},constructor:function(e,r){t.call(this);this._object3D=r;this._nodeHierarchy=e}});u.prototype.destroy=function(){this._object3D=null;t.prototype.destroy.call(this)};u.prototype.getNodeHierarchy=function(){return this._nodeHierarchy};u.prototype.getNodeRef=function(){return this._object3D};u.prototype.getNodeId=function(){return this._object3D};u.prototype.getVeIds=function(){return this._object3D.userData.veids||[]};u.prototype.getVeId=function(){return this._object3D.userData.treeNode?this._object3D.userData.treeNode.sid:null};u.prototype.getMaterialId=function(){var t=this._object3D;if(this._object3D&&!this._object3D.geometry){if(this._object3D.children.length===1&&this._object3D.children[0].geometry&&(this._object3D.children[0].name===""||this._object3D.children[0].name===undefined)){t=this._object3D.children[0]}}if(t.material!==undefined&&t.material.userData!==undefined&&t.material.userData.materialId!==undefined){return t.material.userData.materialId}else if(t.userData.originalMaterial!==undefined&&t.userData.originalMaterial.userData!==undefined&&t.userData.originalMaterial.userData.materialId!==undefined){return t.userData.originalMaterial.userData.materialId}return undefined};u.prototype.getName=function(){return this._object3D.name||"<"+this._object3D.type+">"};u.prototype._updateAncestorsBoundingBox=function(){var t=this._object3D.parent;while(t){if(t.userData.boundingBox!==undefined){t._vkCalculateObjectOrientedBoundingBox()}t=t.parent}};u.prototype.getLocalMatrix=function(){return n.convertTo4x3(this._object3D.matrix.elements)};u.prototype.setLocalMatrix=function(t){if(t){var e=this._object3D;e.matrix.fromArray(n.convertTo4x4(t));e.matrix.decompose(e.position,e.quaternion,e.scale);e.updateMatrixWorld(true);this._updateAncestorsBoundingBox()}this.setProperty("localMatrix",t,true);return this};u.prototype.setLocalMatrixNotUpdatingBBox=function(t){if(t){var e=this._object3D;e.matrix.fromArray(n.convertTo4x4(t));e.matrix.decompose(e.position,e.quaternion,e.scale);e.updateMatrixWorld(true)}this.setProperty("localMatrix",t,true);return this};u.prototype.getWorldMatrix=function(){return n.convertTo4x3(this._object3D.matrixWorld.elements)};u.prototype.setWorldMatrix=function(t){if(t){var e=this._object3D;e.matrixWorld.fromArray(n.convertTo4x4(t));if(e.parent){e.matrix.multiplyMatrices((new THREE.Matrix4).getInverse(e.parent.matrixWorld),e.matrixWorld)}else{e.matrix.copy(e.matrixWorld)}e.matrix.decompose(e.position,e.quaternion,e.scale);e.updateMatrixWorld(true);this._updateAncestorsBoundingBox()}this.setProperty("worldMatrix",t,true);return this};u.prototype.getOpacity=function(){return this._object3D.userData.opacity};u.prototype.setOpacity=function(t){var e=this._nodeHierarchy.getScene().getViewStateManager();if(e){e.setOpacity(this._object3D,t)}else{this._object3D._vkSetOpacity(t)}this.setProperty("opacity",t,true);return this};u.prototype.getTintColorABGR=function(){return this._object3D.userData.tintColor};u.prototype.setTintColorABGR=function(t){var e=this._nodeHierarchy.getScene().getViewStateManager();if(e){e.setTintColor(this._object3D,t)}else{this._object3D._vkSetTintColor(t)}this.setProperty("tintColorABGR",t,true);this.setProperty("tintColor",a(i(t)),true);return this};u.prototype.getTintColor=function(){return a(i(this._object3D.userData.tintColor))};u.prototype.setTintColor=function(t){var e=o(r(t));var a=this._nodeHierarchy.getScene().getViewStateManager();if(a){a.setTintColor(this._object3D,e)}else{this._object3D._vkSetTintColor(e)}this.setProperty("tintColorABGR",e,true);this.setProperty("tintColor",t,true);return this};u.prototype.getNodeMetadata=function(){return this._object3D.userData.metadata||{}};u.prototype.getHasChildren=function(){return this._object3D.children.length>0};u.prototype.getClosed=function(){return!!this._object3D.userData.closed};u.prototype.getBoundingBox=function(){return this._object3D.userData.boundingBox};u.prototype.assignMaterial=function(t){var e=function(t,e){var r;if(t.userData){r=t.userData.materialId;e.userData.materialId=r}if(e.material!==undefined){if(e.userData.highlightColor!==undefined){if(e.userData.originalMaterial.side){t.side=e.userData.originalMaterial.side}e.userData.originalMaterial=t;t.userData.materialUsed++;e.material=t.clone();var a=i(e.userData.highlightColor);e.material.color.lerp(new THREE.Color(a.red/255,a.green/255,a.blue/255),a.alpha);if(t.userData.defaultHighlightingEmissive&&e.userData.highlightColor!==0){e.material.emissive.copy(t.userData.defaultHighlightingEmissive)}if(t.userData.defaultHighlightingSpecular&&e.userData.highlightColor!==0){e.material.specular.copy(t.userData.defaultHighlightingSpecular)}}else{if(e.material.side){t.side=e.material.side}e.material=t;t.userData.materialUsed++;delete e.userData.originalMaterial}e._vkUpdateMaterialOpacity()}};e(t.getMaterialRef(),this._object3D);if(!this._object3D.children){return this}this._object3D.children.forEach(function(r){if(!r||r.userData.objectType===l.PMI||r.userData.objectType===l.Hotspot){return}e(t.getMaterialRef(),r)});return this};u.prototype.enumerateMaterials=function(t){var r=function(t,e,a){if(t){if(t.userData.originalMaterial){e.add(t.userData.originalMaterial)}else if(t.material){e.add(t.material)}if(t.children){t.children.forEach(function(t){if(t){if(a){r(t,e,a)}else if(t.userData.originalMaterial){e.add(t.userData.originalMaterial)}else if(t.material){e.add(t.material)}}})}}};var a=new Set;r(this._object3D,a,t);var i=[];a.forEach(function(t){i.push(t)});var o=[];for(var n=0;n<i.length;n++){var s=new e;s.setMaterialRef(i[n]);o.push(s)}return o};u.prototype.replaceMaterial=function(t,e){var r=typeof t.getMaterialRef==="function"?t.getMaterialRef():t;var a=typeof e.getMaterialRef==="function"?e.getMaterialRef():e;if(this._object3D.userData.originalMaterial&&this._object3D.userData.originalMaterial===r){this._object3D.userData.originalMaterial=a;this._object3D._vkUpdateMaterialColor()}else if(this._object3D.material&&this._object3D.material===r){this._object3D.material=a}if(!this._object3D.children){return this}this._object3D.children.forEach(function(t){if(t&&t.userData.originalMaterial&&t.userData.originalMaterial===r){t.userData.originalMaterial=a;t._vkUpdateMaterialColor()}else if(t&&t.material&&t.material===r){t.material=a}});return this};u.prototype.getLocalTranslate=function(){var t=this._object3D;return[t.position.x,t.position.y,t.position.z]};u.prototype.getLocalScale=function(){var t=this._object3D;return[t.scale.x,t.scale.y,t.scale.z]};u.prototype.getLocalRotationInQuaternion=function(){var t=this._object3D;return[t.quaternion.x,t.quaternion.y,t.quaternion.z,t.quaternion.w]};u.prototype.getLocalRotationInAngleAxis=function(){var t=this._object3D;var e=t.quaternion;if(e.w>1){e.normalise()}var r=2*Math.acos(e.w);var a=Math.sqrt(1-e.w*e.w);var i,o,n;if(a<.001){i=e.x;o=e.y;n=e.z}else{i=e.x/a;o=e.y/a;n=e.z/a}return[i,o,n,r]};u.prototype.getLocalRotationInEuler=function(){var t=this._object3D;var e=t.quaternion;if(e.w>1){e.normalise()}var r=26;var a=e.x*e.y+e.z*e.w;var i,o,n;if(a>.499){i=2*Math.atan2(e.x,e.w);o=Math.PI/2;n=0}if(a<-.499){i=-2*Math.atan2(e.x,e.w);o=-Math.PI/2;n=0}else{var s=e.x*e.x;var l=e.y*e.y;var u=e.z*e.z;i=Math.atan2(2*e.y*e.w-2*e.x*e.z,1-2*l-2*u);o=Math.asin(2*a);n=Math.atan2(2*e.x*e.w-2*e.y*e.z,1-2*s-2*u)}return[i,o,n,r]};return u});
//# sourceMappingURL=NodeProxy.js.map