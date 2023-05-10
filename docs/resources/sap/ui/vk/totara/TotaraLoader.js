/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["sap/base/Log","./SceneContext","./CallbackHandler","./Command","./TotaraUtils","../IncludeUsageIdType","../helpers/WorkerScriptLoader"],function(e,t,i,n,a,s,r){"use strict";var o=a.mark;var c=function(){this._performanceTimingMsg=[];this._isPostable=true;this._suppressSendRequests=false;this._loadingFinishedSent=false;this.currentSceneInfo={};this.contextMap=new Map;this.tokenContextMap=new Map;this._skipLowLODRendering=true;this._maxUrlLength=2048;this._maxActiveRequests=4;this._meshesBatchSize=1024;this._materialsBatchSize=128;this._geometriesBatchSize=1024;this._geometriesMaxBatchDataSize=10*1024*1024;this._geomMeshesBatchSize=1024;this._parametricsBatchSize=1024;this._geomMeshesMaxBatchDataSize=10*1024*1024;this._annotationsBatchSize=128;this._tracksBatchSize=128;this._sequencesBatchSize=128;this._voxelThreshold=.03;this.onErrorCallbacks=new i;this.onImageFinishedCallbacks=new i;this.onImageDetailsFinishedCallbacks=new i;this.onMaterialFinishedCallbacks=new i;this.onAnnotationFinishedCallbacks=new i;this.onSetGeometryCallbacks=new i;this.onSetSequenceCallbacks=new i;this.onSetTrackCallbacks=new i;this.onViewGroupUpdatedCallbacks=new i;this.onLoadingFinishedCallbacks=new i};c.prototype.running=function(){return this._worker!==null&&this._worker!==undefined};c.prototype.run=function(){if(!this._worker){this._worker=r.loadScript("sap/ui/vk/totara/TotaraLoaderWorker.js");var e=this;this._worker.onmessage=function(t){var i=t.data;i.jsonContent=i.jsonContent||{};if(i.jsonString){var n=JSON.parse(i.jsonString);delete i.jsonString;i.jsonContent=Object.assign(n,i.jsonContent)}var a=e.processCommand(i.name,i.jsonContent,i.binaryContent,i.isInitial);if(a){e.sendRequest(a.requestQueue)}};this._worker.onerror=function(e){}}return Promise.resolve("TotaraLoader is ready")};c.prototype.getUrl=function(){return this._url};c.prototype.setUrl=function(e){this._url=e;if(!this._url.endsWith("/")){this._url+="/"}return this};c.prototype.getCorrelationId=function(){return this._correlationId};c.prototype.setCorrelationId=function(e){this._correlationId=e;return this};c.prototype.getSkipLowLODRendering=function(){return this._skipLowLODRendering};c.prototype.setSkipLowLODRendering=function(e){this._skipLowLODRendering=e;return this};c.prototype.getMaxUrlLength=function(){return this._maxUrlLength};c.prototype.setMaxUrlLength=function(e){this._maxUrlLength=e;return this};c.prototype.getMaxActiveRequests=function(){return this._maxActiveRequests};c.prototype.setMaxActiveRequests=function(e){this._maxActiveRequests=e;this.postMessage({method:n.setMaxActiveRequests,maxActiveRequests:e})};c.prototype.getMeshesBatchSize=function(){return this._meshesBatchSize};c.prototype.setMeshesBatchSize=function(e){this._meshesBatchSize=e;return this};c.prototype.getMaterialsBatchSize=function(){return this._materialsBatchSize};c.prototype.setMaterialsBatchSize=function(e){this._materialsBatchSize=e;return this};c.prototype.getGeometriesBatchSize=function(){return this._geometriesBatchSize};c.prototype.setGeometriesBatchSize=function(e){this._geometriesBatchSize=e;return this};c.prototype.getGeometriesMaxBatchDataSize=function(){return this._geometriesMaxBatchDataSize};c.prototype.setGeometriesMaxBatchDataSize=function(e){this._geometriesMaxBatchDataSize=e;return this};c.prototype.getGeomMeshesBatchSize=function(){return this._geomMeshesBatchSize};c.prototype.setGeomMeshesBatchSize=function(e){this._geomMeshesBatchSize=e;return this};c.prototype.getParametricsBatchSize=function(){return this._parametricsBatchSize};c.prototype.setParametricsBatchSize=function(e){this._parametricsBatchSize=e;return this};c.prototype.getGeomMeshesMaxBatchDataSize=function(){return this._geomMeshesMaxBatchDataSize};c.prototype.setGeomMeshesMaxBatchDataSize=function(e){this._geomMeshesMaxBatchDataSize=e;return this};c.prototype.getAnnotationsBatchSize=function(){return this._annotationsBatchSize};c.prototype.setAnnotationsBatchSize=function(e){this._annotationsBatchSize=e;return this};c.prototype.getTracksBatchSize=function(){return this._tracksBatchSize};c.prototype.setTracksBatchSize=function(e){this._tracksBatchSize=e;return this};c.prototype.getSequencesBatchSize=function(){return this._sequencesBatchSize};c.prototype.setSequencesBatchSize=function(e){this._sequencesBatchSize=e;return this};c.prototype.getVoxelThreshold=function(){return this._voxelThreshold};c.prototype.setVoxelThreshold=function(e){this._voxelThreshold=e;if(this.sceneBuilder){this.sceneBuilder.setVoxelThreshold(e)}return this};c.prototype.setSceneBuilder=function(e){this.sceneBuilder=e;this.sceneBuilder.setVoxelThreshold(this.getVoxelThreshold())};c.prototype.removeContext=function(e){this.contextMap.delete(e);return this};c.prototype.dispose=function(){this.contextMap.forEach(function(e){e.dispose()});this.contextMap.clear();this.tokenContextMap.clear();this.postMessage({method:"close"});this._worker=undefined;this.currentSceneInfo=null;if(this.sceneBuilder){this.sceneBuilder.cleanup();this.sceneBuilder=null}this.onErrorCallbacks=null;this.onMaterialFinishedCallbacks=null;this.onImageFinishedCallbacks=null;this.onImageDetailsFinishedCallbacks=null;this.onSetGeometryCallbacks=null;this.onSetTrackCallbacks=null;this.onSetSequenceCallbacks=null;this.onAnnotationFinishedCallbacks=null};c.prototype.cleanup=function(){this.currentSceneInfo={};this.contextMap.clear();this.tokenContextMap.clear();this.sceneBuilder.cleanup()};c.prototype.getSceneBuilder=function(){return this.sceneBuilder};c.prototype.getContext=function(e){return this.contextMap.get(e)};c.prototype.createContext=function(e,i){var n=new t(e,i,this);this.contextMap.set(e,n);this.tokenContextMap.set(n.requestQueue.token,n);if(n.onActiveCamera){n.onActiveCameraCallbacks.attach(n.onActiveCamera);delete n.onActiveCamera}if(n.onInitialSceneFinished){n.onInitialSceneFinishedCallbacks.attach(n.onInitialSceneFinished);delete n.onInitialSceneFinished}if(n.onPartialRetrievalFinished){n.onPartialRetrievalFinishedCallbacks.attach(n.onPartialRetrievalFinished);delete n.onPartialRetrievalFinished}if(n.onViewFinished){n.onViewFinishedCallbacks.attach(n.onViewFinished);delete n.onViewFinished}if(n.onSceneCompleted){n.onSceneCompletedCallbacks.attach(n.onSceneCompleted);delete n.onSceneCompleted}if(n.onProgressChanged){n.setOnProgressChanged(n.onProgressChanged);delete n.onProgressChanged}if(n.onLoadingFinished){this.onLoadingFinishedCallbacks.detachAll();this.onLoadingFinishedCallbacks.attach(n.onLoadingFinished);delete n.onLoadingFinished}if(n.onContentChangesProgress){n.onContentChangesProgressCallbacks.attach(n.onContentChangesProgress);delete n.onContentChangesProgress}if(n.onInitialViewCompleted){n.onInitialViewCompletedCallbacks.attach(n.onInitialViewCompleted);delete n.onInitialViewCompleted}return n};c.prototype.isLoadingFinished=function(){var e=this.contextMap.values();var t=e.next();while(!t.done){if(!t.value.isLoadingFinished()){return false}t=e.next()}return true};c.prototype.decrementResourceCountersForDeletedTreeNode=function(e,t){if(e){this.sceneBuilder.decrementResourceCountersForDeletedTreeNode(t,e.sceneId)}};function l(e,t){if(e.progressLogger){e.progressLogger.logPerformance(t,e.token)}}c.prototype.request=function(e,i,s){if(!i.root){throw"Context must include root where loaded objects are attached to"}var r=this.createContext(e,i);r.token=r.requestQueue.token;this.currentSceneInfo.id=e;r.retrievalType=t.RetrievalType.Initial;r.authorizationHandler=s;r.initialRequestTime=Date.now();if(r.enableLogger){a.createLogger(e,r,this)}var c;if(sap.ui.Device.browser.msie||sap.ui.Device.browser.edge){c=Math.min(2*1024,this.getMaxUrlLength())}else if(sap.ui.Device.browser.mobile){c=Math.min(8*1024,this.getMaxUrlLength())}else{c=Math.min(64*1024,this.getMaxUrlLength())}var h=d(this.getUrl()+"streaming-http",this.getUrl(),e,this.getCorrelationId(),c);var u=r.requestQueue;u.meshes.setBatchSizeInfo(h[n.getMesh]);u.materials.setBatchSizeInfo(h[n.getMaterial]);u.geometries.setBatchSizeInfo(h[n.getGeometry]);u.geomMeshes.setBatchSizeInfo(h[n.getGeomMesh]);u.annotations.setBatchSizeInfo(h[n.getAnnotation]);u.tracks.setBatchSizeInfo(h[n.getTrack]);u.sequences.setBatchSizeInfo(h[n.getSequence]);u.parametric.setBatchSizeInfo(h[n.getParametric]);var p=this;(s&&s(this.getUrl())||Promise.resolve()).then(function(t){l(r,"modelRequested");o("modelRequested");p.postMessage({method:"useAccessTokenResponse",accessTokenResponse:t});p.postMessage({method:"initializeConnection",url:p.getUrl(),cid:p.getCorrelationId(),maxActiveRequests:p.getMaxActiveRequests()});p.postMessage({method:n.getScene,sceneId:e})})};c.prototype.postMessage=function(e){if(this._worker){this._worker.postMessage(e)}};c.prototype.processSetSceneCommand=function(e){var t=this.getContext(e.veid);if(t){t.defaultViewId=e.defaultViewId;t.defaultViewGroupId=e.defaultViewGroupId;t.sceneThumbnailId=e.imageId;t.dimension=e.dimension;t.defaultRootEntityId=e.defaultRootEntityId;if(t.defaultViewGroupId){t.currentViewGroupId=t.defaultViewGroupId}var i;if(t.activateView){i=t.activateView}else if(t.defaultViewId){i=t.defaultViewId}if(i){t.initialViewId=t.currentViewId=i;t.initialViewDecided=true}this.postMessage({method:n.getView,parameters:{sceneId:t.sceneId,viewId:i,query:a.configureSceneViewQuery(t)},pushViewGroups:t.pushViewGroups,isInitial:true})}};c.prototype.update=function(e,i,s){this.currentSceneInfo.id=e;var r=this.getContext(e);if(!r){return Promise.reject("no context for ${sceneVeId}")}var o=this;return new Promise(function(c,h){r.nodeSidsForPartialTree=new Set(i);r.retrievalType=t.RetrievalType.Partial;var u=function(){r.onPartialRetrievalFinishedCallbacks.detach(u);l(r,"updateFinished(mesh)");var t=[];var n=[];r.replacedNodes.forEach(function(e,i){n.push(e);t.push(i)});var a=t;var s=n;c({sceneVeId:e,sids:i,replacedNodeRefs:a,replacementNodeRefs:s})};r.onPartialRetrievalFinishedCallbacks.attach(u);l(r,"updateRequested");o.postMessage({method:n.getView,parameters:{sceneId:e,viewId:s,query:Object.assign(a.configureSceneViewQuery(r),{breadcrumbs:true}),sids:i},isPartialTree:true})})};c.prototype.requestViewGroup=function(e,t,i){if(!t){return Promise.reject("invalid arg: viewGroupId undefined")}var n=this.getContext(e);if(!n){return Promise.reject("no context for ${sceneVeId}")}if(i!==undefined){n.includeAnimation=i}var a=this;var s=new Promise(function(i,s){var r=a.sceneBuilder.getViewGroup(t,e);if(r&&r.length){i(r);return}var o=function(){n.onViewGroupFinishedCallbacks.detach(o);l(n,"onViewGroupFinished");var r=a.sceneBuilder.getViewGroup(t,e);if(r&&r.length){i(r)}else{s("no view ground data")}};n.onViewGroupFinishedCallbacks.attach(o);n.currentViewGroupId=t;a.postMessage({method:"getViewGroups",parameters:{sceneId:e,viewGroupId:t}})});return s};c.prototype.requestView=function(e,t,i,s,r){this.currentSceneInfo.id=e;if(t!=="static"){return Promise.reject("invalid arg: supported type - static")}if(!i){return Promise.reject("invalid arg: viewId undefined")}var o=this.getContext(e);if(!o){return Promise.reject("no context for ${sceneVeId}")}o.currentViewId=i;var c;var h;if(s&&s.length>0){h=n.getViewAnimations;c={$expand:[]};o.playbackIds=s}else{h=n.getView;c=a.configureSceneViewQuery(o)}this.hasAnimation=false;var u=this;var d=new Promise(function(e,t){o.onSetPlaybackCallbacks.detachAll();var n=function(i){o.onSetPlaybackCallbacks.detach(n);l(o,"onSetPlayback");if(i){e(i)}else{t("no view data")}};o.onSetPlaybackCallbacks.attach(n);o.onViewFinishedCallbacks.detachAll();var a=function(i){o.onViewFinishedCallbacks.detach(a);l(o,"onViewFinished");if(!u.hasAnimation){if(i){e(i)}else{t("no view data")}}else{o.currentView=i}};o.onViewFinishedCallbacks.attach(a);u.onSetSequenceCallbacks.detachAll();var s=function(){u.onSetSequenceCallbacks.detach(s);l(o,"onSetSequence");if(o.currentView){e(o.currentView)}};u.onSetSequenceCallbacks.attach(s);u.onSetTrackCallbacks.detachAll();var r=function(t){u.onSetTrackCallbacks.detach(r);l(o,"onSetTrack");if(o.currentView){e(o.currentView)}};u.onSetTrackCallbacks.attach(r);l(o,"viewRequested");u.postMessage({method:h,parameters:{sceneId:o.sceneId,viewId:i,query:c}})});return d};c.prototype.requestMaterial=function(e,t){if(!t){return Promise.reject("invalid arg: requestedMaterial undefined")}var i=this.getContext(e);if(!i){return Promise.reject("no context for ${sceneVeId}")}var n=this;var a=new Promise(function(e,a){var s="";if(typeof t=="string"){s=t}else if(typeof t=="object"){if(typeof t.getMaterialRef==="function"){e(t.getMaterialRef());return}else if(t.id){s=t.id}else if(t.veId){s=t.veId}else{a("invalid arg: invalid requestedMaterial object");return}}else{a("invalid arg: requestedMaterial must be an object or a string");return}var r=i.sceneBuilder.getMaterial(s);if(r){e(r);return}i.requestQueue.materials.push(s);var o=function(t){if(s!==t.materialId){return}var i=n.sceneBuilder.getMaterial(s);if(i&&!i.userData.imageIdsToAddAsTexture){n.sceneBuilder.detachImageAddedToMaterial(o);e(i)}};var c=function(t){if(s!=t){return}n.onMaterialFinishedCallbacks.detach(c);var i=n.sceneBuilder.getMaterial(s);if(!i){n.sceneBuilder.detachImageAddedToMaterial(o);a("no material data")}if(i.userData.imageIdsToAddAsTexture){return}n.sceneBuilder.detachImageAddedToMaterial(o);e(i)};n.onMaterialFinishedCallbacks.attach(c);n.sceneBuilder.attachImageAddedToMaterial(o);n.sendRequest(i.requestQueue)});return a};c.prototype.requestAnnotation=function(e,t){if(!t){return Promise.reject("invalid arg: annotationId undefined")}var i=this.getContext(e);if(!i){return Promise.reject("no context for ${sceneVeId}")}var n=this;var a=new Promise(function(e,a){var s=function(e){return i.sceneBuilder.getAnnotation?i.sceneBuilder.getAnnotation(e):null};var r=s(t);if(r){e(r);return}i.requestQueue.annotations.push(t);var o;var c;var l=function(i){n.onAnnotationFinishedCallbacks.detach(o);var a=s(t);var r=n.sceneBuilder._getMaterial(a.label.materialId);if(r&&r.userData.imageDetailsToLoad&&!r.userData.imageDetailsToLoad.size){n.onImageDetailsFinishedCallbacks.detach(l);if(r.userData.imageIdsToLoad&&r.userData.imageIdsToLoad.size){return}e(a)}};var h=function(i){n.onAnnotationFinishedCallbacks.detach(o);var a=s(t);var r=n.sceneBuilder._getMaterial(a.label.materialId);if(r&&r.userData.imageIdsToLoad&&!r.userData.imageIdsToLoad.size){n.onImageFinishedCallbacks.detach(h);if(r.userData.imageDetailsToLoad&&r.userData.imageDetailsToLoad.size){return}e(a)}};c=function(i){n.onAnnotationFinishedCallbacks.detach(o);var r=s(t);if(r.label.materialId!=i){return}n.onMaterialFinishedCallbacks.detach(c);if(!n.sceneBuilder.checkMaterialExists(i,false)){n.onImageFinishedCallbacks.detach(h);a("no material data")}var u=n.sceneBuilder._getMaterial(i);if(u.userData.imageIdsToLoad&&u.userData.imageIdsToLoad.size||u.userData.imageDetailsToLoad&&u.userData.imageDetailsToLoad.size){return}n.onImageFinishedCallbacks.detach(h);n.onImageDetailsFinishedCallbacks.detach(l);e(r)};o=function(i){if(t!==i){return}n.onAnnotationFinishedCallbacks.detach(o);var s=n.sceneBuilder.getAnnotation?n.sceneBuilder.getAnnotation(t):null;if(!s){n.onMaterialFinishedCallbacks.detach(c);n.onImageFinishedCallbacks.detach(h);n.onImageDetailsFinishedCallbacks.detach(l);a("no annotation data")}n.onMaterialFinishedCallbacks.detach(c);n.onImageFinishedCallbacks.detach(h);n.onImageDetailsFinishedCallbacks.detach(l);e(s)};n.onAnnotationFinishedCallbacks.attach(o);n.onMaterialFinishedCallbacks.attach(c);n.onImageFinishedCallbacks.attach(h);n.onImageDetailsFinishedCallbacks.attach(l);n.sendRequest(i.requestQueue)});return a};c.prototype.setSuppressSendRequests=function(e){this._suppressSendRequests=e};c.prototype.sendRequest=function(e){if(!this._worker||this._suppressSendRequests){return false}var t=false;while(!e.isEmpty()){var i=e.generateRequestCommand();this.postMessage(i);t=true}return t};c.prototype.timestamp=function(e){};c.prototype.performanceTiming=function(e){};c.prototype.checkError=function(e){if(!e){return true}var t=e.result==="failure";if(t){if(e.message){e.error=e.message;delete e.message}else{e.error="Unknown error"}}return t};c.prototype.reportError=function(e,t){this.onErrorCallbacks.execute({error:t,context:e})};c.prototype.processContextCommand=function(e,t,i,n,a){if(!e){var s=t+" error: unknown context - "+JSON.stringify(i);this.contextMap.forEach(function(e){e[t].call(e,i,n)});return{error:s}}var r;try{r=e[t].call(e,i,n,a)}catch(e){r={error:e}}return r};c.prototype.processCommand=function(t,i,a,s){if(this.checkError(i)){if(t===n.setTree){if(i.events&&i.events.length){var r=i.events[0];if(r.values&&r.values.id){this.contextMap.delete(r.values.id)}}}this.onErrorCallbacks.execute(i);return null}var o=null;if(i.sceneId!==undefined){o=this.getContext(i.sceneId)}else if(i.token!==undefined){o=this.tokenContextMap.get(i.token)}if(o){this.currentSceneInfo.id=o.sceneId}this.setPerformance(t,i,o?o.sceneId:null);var c;switch(t){case n.setScene:this.processSetSceneCommand(i);break;case n.setTree:case n.setTreeNode:case n.notifyFinishedTree:case n.setView:case n.setViewNode:case n.setViewGroup:case n.notifyFinishedView:case n.setCamera:case n.setMesh:case n.setMaterial:case n.setGeometry:case n.setImage:case n.setAnnotation:case n.setLineStyle:case n.setFillStyle:case n.setTextStyle:case n.setParametric:case n.setPlayback:case n.setHighlightStyle:case n.setSequence:case n.setTrack:case n.suppressSendRequests:case n.unsuppressSendRequests:c=this.processContextCommand(o,t,i,a,s);break;case n.notifyError:c={error:i.errorText};break;case n.timestamp:c=this.timestamp(i);break;case n.performanceTiming:c=this.performanceTiming(i);break;default:c={error:"Unknown command: "+t};break}if(this.isLoadingFinished()){if(t!==n.setScene&&t!==n.setView&&t!==n.setViewNode&&t!==n.timestamp&&t!==n.performanceTiming&&t!==n.suppressSendRequests&&t!==n.unsuppressSendRequests&&this._loadingFinishedSent===false){this.onLoadingFinishedCallbacks.execute();this._loadingFinishedSent=true;e.info("Loading is finished - all streaming requests are fulfilled.")}}else if(this._loadingFinishedSent){this._loadingFinishedSent=false}if(c&&c.error){e.error(c.error);this.onErrorCallbacks.execute(c)}return o};c.prototype.setPerformance=function(e,t,i){var a;switch(e){case n.setGeometry:a=t.id;o("setGeometry-"+a);break;case n.setImage:a=t.id;o("setImage-"+a);break;case n.setView:a=t.viewId;o("setView-"+a);break;case n.setViewGroup:a=t.id;o("setViewGroup-"+a);break;case n.setMesh:o("setMesh-"+i);break;case n.setMaterial:o("setMaterial-"+i);break;case n.setTree:o("setTree-"+i);break;case n.performanceTiming:this._isPostable=true;this.postPerformanceTiming();break;default:break}};c.prototype.postPerformanceTiming=function(e){if(e){this._performanceTimingMsg.push(e)}if(this._isPostable&&this._performanceTimingMsg.length>0){this.postMessage(this._performanceTimingMsg.shift());this._isPostable=false}};c.prototype.printLogTokens=function(){this.contextMap.forEach(function(t,i){e.info("log tokens for scene => "+i);e.info("---------------------------------------");if(t.progressLogger){t.progressLogger.getTokens().forEach(function(t){e.info(t)})}e.info("---------------------------------------")})};function h(e,t,i,n,a,s){var r;var o;switch(e){case"getGeometry":o=s-(i+"geometry?id=").length;break;case"getGeomMesh":o=s-(i+"scenes/"+n+"/meshes?ids="+r).length;break;default:r="?request="+encodeURI(e+"["+s+"]"+JSON.stringify({sceneId:n,ids:[],token:a}));o=s-(t+r).length;break}return o}function u(e){switch(e){case"getGeometry":return"&id=".length;default:return",".length}}function d(e,t,i,n,a){e=e.indexOf("?")===-1?e:e.substring(0,e.indexOf("?"));var s=["getAnnotation","getGeometry","getGeomMesh","getMaterial","getMesh","getParametric","getSequence","getTrack"];var r={};s.forEach(function(s){r[s]={maxBatchStringLength:h(s,e,t,i,n,a),separatorLength:u(s)}});return r}return c});
//# sourceMappingURL=TotaraLoader.js.map