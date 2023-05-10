/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["sap/base/Log","sap/ui/core/Core","sap/ui/base/ManagedObject","../getResourceBundle","../threejs/SceneBuilder","../svg/SceneBuilder","../helpers/WorkerScriptLoader","../DownloadManager"],function(e,r,t,a,n,o,s,i){"use strict";var u={FinishedTree:a().getText("SCENE_CONTEXT_FINISHED_TREE"),LoadingGeometries:a().getText("SCENE_CONTEXT_LOADING_GEOMETRIES"),LoadingTextures:a().getText("SCENE_CONTEXT_LOADING_TEXTURES"),LoadingModelViews:a().getText("SCENE_CONTEXT_LOADING_MODEL_VIEWS")};var c=t.extend("sap.ui.vk.matai.MataiLoader",{metadata:{library:"sap.ui.vk",events:{contentChangesProgress:{parameters:{source:"any",phase:"string",percent:"float"}},contentLoadingFinished:{parameters:{source:"any",node:"any"}}}}});var d=c.getMetadata().getName();function g(e,r,t){var a=e._progress;a.phase=r;a.count=t;var n=40+60*(a.totalCount?a.count/a.totalCount:1);e._loader.fireContentChangesProgress({source:e._contentResource&&e._contentResource.getSource(),phase:r,percentage:Math.min(n,100)})}var l=1;var E=new Map;var f=function(){var r;return function(){return r||(r=new Promise(function(r,t){var n=s.loadScript("sap/ui/vk/matai/MataiLoaderWorker.js",["sap/ui/vk/ve/matai.js"]);var o=0;var i=-1;var c=-2;var l=-3;var f=-4;var v=-5;var R=-6;var _=-7;var L=-8;function p(e){var r=a();switch(e){case i:return r.getText("LOADER_FILENOTFOUND");case c:return r.getText("LOADER_WRONGFILEFORMAT");case l:return r.getText("LOADER_WRONGPASSWORD");case f:return r.getText("LOADER_ERRORREADINGFILE");case v:return r.getText("LOADER_FILECONTENT");case R:return r.getText("LOADER_NODEFAULTVIEW");case _:return r.getText("LOADER_FILECONTENT");case L:return r.getText("LOADER_ERRORREADINGREFERENCEDFILE");default:return r.getText("LOADER_UNKNOWNERROR")}}function T(r,t,a){var n=p(t);r._reject({status:t,errorText:n});e.error(n,a,d);O(r,t)}function O(r,t){e.info("Matai loading finished");r.loadingFinished({result:t});r._loader.fireContentLoadingFinished({source:r._contentResource,node:r._rootNode});r._loader=null;var a=r._id;n.postMessage({method:"destroyContext",args:{sceneBuilderId:a}});E.delete(a)}n.onmessage=function(t){var s=t.data;if(s.event==="runtimeCreated"){r(this);return}var i=s.sceneBuilderId;var c=E.get(i);var l=c.sceneBuilder;if("event"in s){switch(s.event){case"contextCreated":if(s.result===o){n.postMessage({method:"loadFile",args:{sceneBuilderId:i}})}else{T(l,s.result)}break;case"fileLoaded":if(s.result===o){if(c.waitingCount===0){n.postMessage({method:"buildScene",args:{sceneBuilderId:i}})}}else{T(l,s.result)}break;case"referencedFileLoaded":c.waitingCount-=1;if(s.result!==o){e.error(p(s.result),s.fileName,d)}if(c.waitingCount===0){n.postMessage({method:"buildScene",args:{sceneBuilderId:i}})}break;case"referencedFileRequested":var f=c.dependencyLoader;if(f==null){e.error(a().getText("LOADER_NODEPENDENCYLOADER"),null,d)}else{var v=s.fileName;var R=s.veId;var _=s.veVersion;var L=c.files;var m=L.get(v);if(m==null){m=f.load(v);L.set(v,m)}c.waitingCount+=1;m.then(function(e){var r=e.buffer;e.buffer=null;n.postMessage({method:"loadReferencedFile",args:{sceneBuilderId:i,buffer:r,fileName:v,veId:R,veVersion:_}},r==null?[]:[r])},function(){c.waitingCount-=1;e.error(a().getText("LOADER_ERRORREADINGREFERENCEDFILE"),v,d);if(c.waitingCount===0){n.postMessage({method:"buildScene",args:{sceneBuilderId:i}})}})}break;case"sceneBuilt":O(l,s.result);break;default:break}}else{try{l[s.method].apply(l,s.args)}catch(r){e.error("SceneBuilder."+s.method+"()",r)}switch(s.method){case"setScene":var N=s.args[0];l._progress.totalCount=N.meshCount+N.imageCount+N.modelViewCount;g(l,u.FinishedTree,0);break;case"setGeometry":g(l,u.LoadingGeometries,l._progress.count+1);break;case"createImage":g(l,u.LoadingTextures,l._progress.count+1);break;case"createThumbnail":g(l,u.LoadingModelViews,l._progress.count+1);break;default:break}}};n.onerror=function(e){t(e)};var m=s.absoluteUri("sap/ui/vk/ve/").toString();n.postMessage({method:"createRuntime",args:{scriptDirectory:m}})}))}}();function v(t,s,i,u,c,d,g){var v=c.getDependencyLoader();f().then(function(f){f.onerror=function(r){e.error("Error in WebWorker",r);g(a().getText("LOADER_ERRORREADINGFILE"))};var R=new(u.isObject3D?n:o)(u,c,d,g);R._loader=t;R._progress={};R._id=l++;E.set(R._id,{sceneBuilder:R,dependencyLoader:v,files:new Map,waitingCount:0});f.postMessage({method:"createContext",args:{sceneBuilderId:R._id,buffer:s,fileName:i,locale:r.getConfiguration().getLanguageTag()}},[s])},function(e){g(e)})}c.prototype.load=function(e,r,t,n){var o=this;return new Promise(function(s,u){if(typeof r.getSource()==="string"){var c=r.getSource();new i([c],undefined,t,n).attachItemSucceeded(function(t){var a=t.getParameter("source");var n=t.getParameter("response");v(o,n,a,e,r,s,u)},this).attachItemFailed(function(e){var r=e.getParameter("statusText");if(r===""){r=a().getText("VIEWER_SOURCE_FAILED_TO_DOWNLOAD_CAUSE")}u(r)},this).start()}else if(r.getSource()instanceof File){var d=new FileReader;d.onload=function(t){v(o,t.target.result,r.getSource().name,e,r,s,u)};d.onerror=function(e){u(e)};d.readAsArrayBuffer(r.getSource())}})};return c});
//# sourceMappingURL=MataiLoader.js.map