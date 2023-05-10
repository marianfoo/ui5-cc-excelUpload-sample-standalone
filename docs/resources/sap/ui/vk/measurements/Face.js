/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["sap/base/assert","./Feature","./FeatureType","./Utils"],function(e,n,t,r){"use strict";var a={vertices:[0,0,0],triangles:null,boundingSpheres:null,edges:null,planeEquation:null};var s=function(e){n.apply(this,arguments);this._face={};this.setValue(e&&e.face||a)};s.prototype=Object.create(n.prototype);s.prototype.constructor=s;s.prototype.isFace=true;n._classMap.set(t.Face,s);s.prototype.isClosedContour=function(){return!this._face.triangles};s.prototype.setValue=function(n){e(n.vertices.length%3===0,"Vertices array must have 3x elements");var t=this._face;t.vertices=new Float64Array(n.vertices);if(!n.triangles){t.triangles=null;t.boundingSpheres=null;t.edges=null;t.planeEquation=null;return this}var a=t.vertices;e(n.triangles.length%3===0,"Triangles array must have 3x elements");t.triangles=new Int32Array(n.triangles);var s=t.triangles;var i,l,o,u;var g,p,h;if(n.boundingSpheres){e(n.boundingSpheres.length%4===0,"Bounding spheres must have 4x elements");e(n.boundingSpheres.length/4===n.triangles.length/3,"Number of triangles and bounding spheres must match");t.boundingSpheres=new Float64Array(n.boundingSpheres)}else{t.boundingSpheres=new Float64Array(4*(s.length/3));var c=0;for(g=0,h=s.length;g<h;g+=3){i=s[g]*3;l=[a[i],a[i+1],a[i+2]];i=s[g+1]*3;o=[a[i],a[i+1],a[i+2]];i=s[g+2]*3;u=[a[i],a[i+1],a[i+2]];r.computeTriangleBoundingSphere(l,o,u,t.boundingSpheres,c);c+=4}}if(n.edges){e(n.edges.length%2===0,"Edges array must have 2x elements");t.edges=new Int32Array(n.edges)}else{var f=new Set;for(g=0,h=s.length;g<h;g+=3){for(p=0;p<3;++p){l=s[g+p];o=s[g+(p+1)%3];if(l<o){i=l+":"+o}else{i=o+":"+l}if(f.has(i)){f.delete(i)}else{f.add(i)}}}g=0;t.edges=new Int32Array(f.size*2);f.forEach(function(e){i=e.split(":");t.edges[g]=Number(i[0]);t.edges[g+1]=Number(i[1]);g+=2})}if(n.planeEquation){e(n.planeEquation.length===4,"Plane equation have 4 elements");t.planeEquation=new Float64Array(n.planeEquation)}else{e(s.length>=3,"Expecting at least one triangle");t.planeEquation=new Float64Array(r.computePlaneEquation(a,s[0]*3,s[1]*3,s[2]*3))}return this};s.prototype.getValue=function(){return this._face};s.prototype.toJSON=function(e){var n=this._face;var r={type:t.Face,face:{vertices:Array.from(n.vertices)}};if(n.triangles){r.face.triangles=Array.from(n.triangles)}if(e){if(n.boundingSpheres){r.face.boundingSpheres=Array.from(n.boundingSpheres)}if(n.edges){r.face.edges=Array.from(n.edges)}if(n.planeEquation){r.face.planeEquation=Array.from(n.planeEquation)}}return r};return s});
//# sourceMappingURL=Face.js.map