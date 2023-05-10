/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["./Tool","./HitTestToolHandler","./HitTestIdMode"],function(e,t,i){"use strict";var r=e.extend("sap.ui.vk.tools.HitTestTool",{metadata:{library:"sap.ui.vk",properties:{IdMode:{type:"sap.ui.vk.tools.HitTestIdMode",defaultValue:i.ThreeJS}},events:{hit:{parameters:{id:"any",object:"any",point:"any",clickType:"sap.ui.vk.tools.HitTestClickType"}}}},constructor:function(i,s){if(r._instance){return r._instance}e.apply(this,arguments);this.setToolid("63150593-75f6-c330-2a7a-c1f85d36b2b9");this._viewport=null;this._handler=new t(this);this._loco=null;r._instance=this}});r.prototype.init=function(){if(e.prototype.init){e.prototype.init.call(this)}this.setFootprint(["sap.ui.vk.threejs.Viewport"])};r.prototype.setActive=function(t,i,r){e.prototype.setActive.call(this,t,i,r);if(this._viewport){if(t){this._prepare()}else{this._removeLocoHandler()}}return this};r.prototype._prepare=function(){if(!this._addLocoHandler()){return false}var e=false;if(this.isViewportType("sap.ui.vk.dvl.Viewport")&&this._viewport._dvl){this._dvlRendererId=this._viewport._dvlRendererId;this._dvl=this._viewport._dvl;e=true}else if(this.isViewportType("sap.ui.vk.threejs.Viewport")&&(this._viewport._scene&&this._viewport._scene.getSceneRef())){e=true}return e};r.prototype.queueCommand=function(e){if(this._prepare()){if(this._dvlRendererId){this._dvl.Renderer._queueCommand(e,this._dvlRendererId)}}return this};r.prototype.hitTest=function(e,t,r,s,o){if(this._prepare()){var n=null;if(this.isViewportType("sap.ui.vk.dvl.Viewport")&&this._viewport._dvl){return null}else if(this.isViewportType("sap.ui.vk.threejs.Viewport")){if(!r||!s){n=null}else if(this._viewport._renderer){var a=this._viewport._renderer.domElement;var p=new THREE.Vector2((e-a.offsetLeft)/a.clientWidth*2-1,(a.offsetTop-t)/a.clientHeight*2+1);var l=new THREE.Raycaster;l.setFromCamera(p,s.getCameraRef());var d=l.intersectObjects(r.getSceneRef().children,true);if(d&&d.length){for(var h in d){var c=d[h];var v=c.object;var u=v.parent;while(u){if(u.userData.closed){v=u}u=u.parent}while(v.parent&&v.userData.skipIt){v=v.parent}if(v.visible&&!v.isBillboard&&!v.isDetailView){c.object=v;n=c;break}}}}}var f=null;if(n){var _;switch(this.getIdMode()){case i.VEsID:_=this._viewport._scene.nodeRefToPersistentId(n.object);break;case i.ThreeJS:_=n.object.id;break;default:_=n.object.id;break}f={id:_,object:n.object,point:n.point,clickType:o};this.fireHit(f)}return f}};return r});
//# sourceMappingURL=HitTestTool.js.map