/*!
* SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
*/
sap.ui.define(["sap/base/Log","../Core","../ViewStateManagerBase","../cssColorToColor","../colorToCSSColor","../abgrToColor","../colorToABGR","../AnimationTrackType","../NodeContentType","./Scene","./Element","sap/ui/core/Core"],function(t,e,i,r,s,a,n,o,h,l,c,f){"use strict";var u;var d=i.extend("sap.ui.vk.svg.ViewStateManager",{metadata:{library:"sap.ui.vk"}});var p=d.getMetadata().getParent().getClass().prototype;d.prototype.init=function(){if(p.init){p.init.call(this)}this._mask=1|0;this._nodeHierarchy=null;this._selectedNodes=new Set;this._visibilityTracker=new u;this.setHighlightColor(3204448443);e.getEventBus().subscribe("sap.ui.vk","activateView",this._onActivateView,this)};d.prototype.exit=function(){e.getEventBus().unsubscribe("sap.ui.vk","activateView",this._onActivateView,this)};d.prototype._setContent=function(t){if(t===this._scene){return this}var e=null;if(t&&t instanceof l){e=t}this._setScene(e);if(e){var i=e.getInitialView();if(i){this._currentView=i;this._resetNodesStatusByCurrentView(this._currentView)}}return this};d.prototype._setScene=function(t){this._setNodeHierarchy(t?t.getDefaultNodeHierarchy():null);if(t){t.setViewStateManager(this)}this._scene=t;return this};d.prototype._setNodeHierarchy=function(t){var e=this._nodeHierarchy;if(this._nodeHierarchy){this._nodeHierarchy=null;this._selectedNodes.clear();this._visibilityTracker.clear()}if(t){this._nodeHierarchy=t;this._nodeHierarchy.attachNodeReplaced(this._handleNodeReplaced,this);this._nodeHierarchy.attachNodeUpdated(this._handleNodeUpdated,this);this._nodeHierarchy.attachNodeRemoving(this._handleNodeRemoving,this);this._initialState={visible:[],hidden:[]};var i=this;var r=t.findNodesByName();r.forEach(function(t){(t.isVisible(i._mask)?i._initialState.visible:i._initialState.hidden).push(t)});this.fireVisibilityChanged({visible:this._initialState.visible,hidden:this._initialState.hidden})}if(t!==e){this.fireNodeHierarchyReplaced({oldNodeHierarchy:e,newNodeHierarchy:t})}return this};d.prototype._handleNodeReplaced=function(t){var e=t.getParameter("ReplacedNodeRef");var i=t.getParameter("ReplacementNodeRef");if(this.getSelectionState(e)){this.setSelectionState(i,true);this.setSelectionState(e,false)}};d.prototype._handleNodeUpdated=function(t){var e=t.getParameter("nodeRef");if(this.getSelectionState(e)){this.setSelectionState(e,false);this.setSelectionState(e,true)}};d.prototype._handleNodeRemoving=function(t){var e=t.getParameter("nodeRef");if(this.getSelectionState(e)){this.setSelectionState(e,false,true,true)}};d.prototype.getNodeHierarchy=function(){return this._nodeHierarchy};d.prototype.getVisibilityChanges=function(){return this.getShouldTrackVisibilityChanges()?this._visibilityTracker.getInfo(this.getNodeHierarchy()):null};d.prototype.getCurrentView=function(){var t=f.byId(this.getViewManager());if(!t){return null}var e=t.getActiveView();return e};d.prototype.getVisibilityComplete=function(){var t=this.getNodeHierarchy(),e=t.findNodesByName(),i=[],r=[];e.forEach(function(e){var s=t.createNodeProxy(e);var a=s.getVeId();t.destroyNodeProxy(s);if(a){if(this.getVisibilityState(e)){i.push(a)}else{r.push(a)}}},this);return{visible:i,hidden:r}};d.prototype.resetVisibility=function(){this.setVisibilityState(this._initialState.visible,true,false);this.setVisibilityState(this._initialState.hidden,false,false);this._visibilityTracker.clear()};d.prototype.getVisibilityState=function(t){var e=this._mask;if(Array.isArray(t)){return t.map(function(t){return t?t.isVisible(e):false})}return t?t.isVisible(e):false};d.prototype.setVisibilityState=function(t,e,i,r){if(!Array.isArray(t)){t=[t]}var s=Array.isArray(e);var a=[];var n=t;if(i){n=[];t.forEach(function(t,i){var r=this._collectNodesRecursively(t);n=n.concat(r);var o=a.length;a.length=o+r.length;a.fill(s?e[i]:e,o)},this)}else if(!s){a.length=n.length;a.fill(e)}else{a=e}var o=[];var h=new Set;var l=this._mask;var c=n.filter(function(t,e){if(h.has(t)){return false}h.add(t);var i=t?t.isVisible(l)!=a[e]:false;if(i){o.push(a[e])}return i},this);if(c.length>0){var f={visible:[],hidden:[]};c.forEach(function(t,e){if(o[e]){t.setVisible(l,true);f.visible.push(t);if(r){var i=t.parent;while(i){i.visible=true;i=i.parent}}}else{t.setVisible(l,false);f.hidden.push(t)}},this);if(this.getShouldTrackVisibilityChanges()){c.forEach(this._visibilityTracker.trackNodeRef,this._visibilityTracker)}this.fireVisibilityChanged(f)}return this};d.prototype.enumerateSelection=function(t){this._selectedNodes.forEach(t);return this};d.prototype.getSelectionState=function(t){var e=this._selectedNodes;function i(t){return e.has(t)}return Array.isArray(t)?t.map(i):i(t)};d.prototype._getSelectionComplete=function(){var t=this.getNodeHierarchy(),e=[];function i(e){var i=t.createNodeProxy(e);var r=i.getVeId();t.destroyNodeProxy(i);return r}this._selectedNodes.forEach(function(t){var r=i(t);if(r){e.push(r)}});return{selected:e}};d.prototype._isAncestorSelected=function(t){t=t.parent;while(t){if(this._selectedNodes.has(t)){return true}t=t.parent}return false};d.prototype._updateHighlightColor=function(t,e){var i=e||this._selectedNodes.has(t);t.setSelected(this._mask,i,this._highlightColorABGR);if(t.nodeContentType!==h.Hotspot){var r=t.children;for(var s=0,a=r.length;s<a;s++){this._updateHighlightColor(r[s],i)}}};d.prototype.setSelectionState=function(t,e,i,r){if(!Array.isArray(t)){t=[t]}t=(i||this.getRecursiveSelection()?this._collectNodesRecursively(t):t).filter(function(t,e,i){return i.indexOf(t)===e});if(this.getRecursiveSelection()&&!e){t=this._nodeHierarchy._appendAncestors(t)}var s=t.filter(function(t){return this._selectedNodes.has(t)!==e},this);if(s.length>0){s.forEach(function(t){if(t){this._selectedNodes[e?"add":"delete"](t)}},this);s.forEach(function(t){if(t){this._updateHighlightColor(t,e||this._isAncestorSelected(t))}},this);if(!r){this.fireSelectionChanged({selected:e?s:[],unselected:e?[]:s})}}return this};d.prototype.setSelectionStates=function(t,e,i,r){if(!Array.isArray(t)){t=[t]}if(!Array.isArray(e)){e=[e]}t=i||this.getRecursiveSelection()?this._collectNodesRecursively(t):t;e=i||this.getRecursiveSelection()?this._collectNodesRecursively(e):e;if(this.getRecursiveSelection()){e=this._nodeHierarchy._appendAncestors(e,t)}var s=t.filter(function(t){return t&&this._selectedNodes.has(t)===false},this);var a=e.filter(function(t){return t&&this._selectedNodes.has(t)===true},this);if(s.length>0||a.length>0){s.forEach(function(t){this._selectedNodes.add(t);this._updateHighlightColor(t,true)},this);a.forEach(function(t){this._selectedNodes.delete(t)},this);a.forEach(function(t){this._updateHighlightColor(t,this._isAncestorSelected(t))},this);if(!r){this.fireSelectionChanged({selected:s,unselected:a})}}return this};d.prototype._collectNodesRecursively=function(t){var e=[],i=this;if(!Array.isArray(t)){t=[t]}t.forEach(function t(r){e.push(r);i._nodeHierarchy.enumerateChildren(r,t,false,true)});return e};d.prototype._getOpacity=function(t){return t.opacity!==undefined?t.opacity:null};d.prototype.getOpacity=function(t){if(Array.isArray(t)){return t.map(this._getOpacity,this)}else{return this._getOpacity(t)}};d.prototype.setTotalOpacity=function(t,e){this.setOpacity(t,e);return{opacity:e,totalOpacity:e}};d.prototype.setOpacity=function(t,e,i){if(!Array.isArray(t)){t=[t]}var r=Array.isArray(e);if(e===null){e=undefined}else if(r){e.forEach(function(t,i){if(t===null){e[i]=undefined}})}var s=[];var a=t;if(!r){s.length=a.length;s.fill(e)}else{s=e}var n=[];var o=new Set;var h=a.filter(function(t,e){if(o.has(t)){return false}o.add(t);var i=t?t.opacity!==s[e]:false;if(i){n.push(s[e])}return i},this);if(h.length>0){h.forEach(function(t,e){t.setOpacity(n[e])},this);this.fireOpacityChanged({changed:h,opacity:r?n:n[0]})}return this};d.prototype._getTintColorABGR=function(t){return t.tintColor!==undefined?t.tintColor:null};d.prototype._getTintColor=function(t){return t.tintColor!==undefined?s(a(t.tintColor)):null};d.prototype.getTintColor=function(t,e){var i=e?"_getTintColorABGR":"_getTintColor";if(Array.isArray(t)){return t.map(this[i],this)}else{return this[i](t)}};function y(t){switch(typeof t){case"number":return t>>>0;case"string":return sap.ui.core.CSSColor.isValid(t)?n(r(t)):undefined;default:return undefined}}d.prototype.setTintColor=function(t,e,i){if(!Array.isArray(t)){t=[t]}var r=Array.isArray(e);var s=[];var a=t;if(i){a=[];t.forEach(function(t,i){var n=this._collectNodesRecursively(t);a=a.concat(n);var o=s.length;s.length=o+n.length;s.fill(r?e[i]:e,o)},this)}else if(!r){s.length=a.length;s.fill(e)}else{s=e}var n=[];var o=new Set;var h=a.filter(function(t,e){if(o.has(t)){return false}o.add(t);var i=t?t.tintColor!==y(s[e]):false;if(i){n.push(s[e])}return i},this);if(h.length>0){var l=this._mask;var c=[];h.forEach(function(t,e){var i=y(n[e]);t.setTintColor(l,i);c.push(i)},this);var f={changed:h,tintColor:r?n:n[0],tintColorABGR:r?c:c[0]};this.fireTintColorChanged(f)}return this};d.prototype.setHighlightColor=function(t){t=y(t);if(t===undefined){return this}this._highlightColorABGR=t;if(this._selectedNodes.size>0){this._selectedNodes.forEach(function(t){this._updateHighlightColor(t,true)},this)}this.fireHighlightColorChanged({highlightColor:s(a(t)),highlightColorABGR:t});return this};d.prototype.getHighlightColor=function(t){return t?this._highlightColorABGR:s(a(this._highlightColorABGR))};d.prototype.getTransformationWorld=function(t){function e(t){return c._decompose(t._matrixWorld())}if(!Array.isArray(t)){return e(t)}var i=[];t.forEach(function(t){i.push(e(t))});return i};d.prototype.getTransformation=function(t){function e(t){var e=c._decompose(t.matrix);return{translation:e.position,quaternion:e.quaternion,scale:e.scale}}if(!Array.isArray(t)){return e(t)}var i=[];t.forEach(function(t){i.push(e(t))});return i};function g(t){return new Float32Array([t[0],t[4],t[1],t[5],t[3],t[7]])}d.prototype.setTransformation=function(e,i){var r=Array.isArray(e);if(!Array.isArray(e)){e=[e]}var s={changed:[],transformation:[]};var a=function(t){return c._decompose(t.matrix)};if(!i){e.forEach(function(t){if(t.userData.matrix){t.setMatrix(t.userData.matrix);delete t.userData.matrix}s.changed.push(t);s.transformation.push(a(t))},this)}else{if(!Array.isArray(i)){i=[i]}e.forEach(function(e,r){if(!e.userData.matrix){e.userData.matrix=e.matrix.slice()}var n=i[r];if(n.transform){e.setMatrix(g(n.transform))}else{var o;if(n.quaternion){o=n.quaternion}else if(n.angleAxis){var h=n.angleAxis;var l=h[3]/2,f=Math.sin(l);o=[h[0]*f,h[1]*f,h[2]*f,Math.cos(l)]}else if(n.euler){t.warning("svg.ViewStateManager.setTransformation: Euler angles are not yet supported");o=[0,0,0,1]}var u=c._compose(n.translation,o,n.scale);e.setMatrix(u)}s.changed.push(e);s.transformation.push(a(e))},this)}if(!r){s.changed=s.changed[0];s.transformation=s.transformation[0]}this.fireTransformationChanged(s);return this};d.prototype._resetNodesStatusByCurrentView=function(t){var e=this.getNodeHierarchy();var i=t.getNodeInfos();if(!e||!i){return}var r=[];var s=[];i.forEach(function(t){if(t.target){if(t.transform){r.push(t.target);s.push({transform:t.transform})}else if(t[o.Translate]&&t[o.Rotate]&&t[o.Scale]){r.push(t.target);s.push({translation:t[o.Translate].slice(),quaternion:t[o.Rotate].slice(),scale:t[o.Scale].slice()})}}});if(t.userData&&t.userData.nodeStartDataByAnimation){t.userData.nodeStartDataByAnimation.forEach(function(t,e){if(t[o.Translate]&&t[o.Rotate]&&t[o.Scale]){r.push(e);s.push({translation:t[o.Translate].slice(),quaternion:t[o.Rotate].slice(),scale:t[o.Scale].slice()})}})}if(r.length){this.setTransformation(r,s)}var a=[];var n=[];i.forEach(function(t){if(!t.target.userData.skipIt){(t.visible?a:n).push(t.target)}});this.setVisibilityState(e.getChildren()[0].children,false,true);this.setVisibilityState(a,true,false);this.setVisibilityState(n,false,false)};d.prototype._onActivateView=function(t,e,i){var r=this.getViewManager();if(r&&i.source.getId()===r){this.activateView(i.view)}};d.prototype.activateView=function(t){this.fireViewStateApplying({view:t});this._resetNodesStatusByCurrentView(t);this.fireViewStateApplied({view:t});e.getEventBus().publish("sap.ui.vk","viewStateApplied",{source:this,view:t});return this};d.prototype.setJoints=function(t,e){return this};d.prototype._propagateOpacityToJointChildren=function(t,e){return this};d.prototype._setJointNodeMatrix=function(){return this};u=function(){this._visibilityChanges=new Set};u.prototype.getInfo=function(t){var e=[];this._visibilityChanges.forEach(function(i){var r=t.createNodeProxy(i);var s=r.getVeId();t.destroyNodeProxy(r);if(s){e.push(s)}else{e.push(t.getScene().nodeRefToPersistentId(i))}});return e};u.prototype.clear=function(){this._visibilityChanges.clear()};u.prototype.trackNodeRef=function(t){if(this._visibilityChanges.has(t)){this._visibilityChanges.delete(t)}else{this._visibilityChanges.add(t)}};return d});
//# sourceMappingURL=ViewStateManager.js.map