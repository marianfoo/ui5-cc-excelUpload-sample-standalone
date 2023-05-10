/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
sap.ui.define(["sap/ui/core/IconPool","./sapvbi"],function(t){"use strict";VBI.addSceneLabelFunctions=function(i){i.InternalDrawLabelTexts=function(i,o,e,r){for(var s=0;s<o.m_Pos.length;++s){for(var l=0;l<o.m_Pos[s].length;l++){var m=Math.round(o.m_Height);var n=Math.round(o.m_Width);var a=Math.round(o.m_Pos[s][l][0]);var _=Math.round(o.m_Pos[s][l][1]);var h=o.m_Arrow?o.m_Align:0;var f=o.m_Rounded?m/2:10;var d;i.beginPath();i.lineWidth=2;i.moveTo(a+f,_);if(h==5){o.m_Pos[s][l].tri=[[a+n/2-3,_],[a+n/2,_-5],[a+n/2+3,_]];for(d=0;d<3;++d){i.lineTo(o.m_Pos[s][l].tri[d][0],o.m_Pos[s][l].tri[d][1])}}i.lineTo(a+n-f,_);i.arcTo(a+n,_,a+n,_+f,f);if(h==7&&!o.m_Rounded){o.m_Pos[s][l].tri=[[a+n,_+m/2-3],[a+n+5,_+m/2],[a+n,_+m/2+3]];for(d=0;d<3;++d){i.lineTo(o.m_Pos[s][l].tri[d][0],o.m_Pos[s][l].tri[d][1])}}i.lineTo(a+n,_+m-f);i.arcTo(a+n,_+m,a+n-f,_+m,f);if(h==1){o.m_Pos[s][l].tri=[[a+n/2+3,_+m],[a+n/2,_+m+5],[a+n/2-3,_+m]];for(d=0;d<3;++d){i.lineTo(o.m_Pos[s][l].tri[d][0],o.m_Pos[s][l].tri[d][1])}}i.lineTo(a+f,_+m);i.arcTo(a,_+m,a,_+m-f,f);if(h==3&&!o.m_Rounded){o.m_Pos[s][l].tri=[[a,_+m/2+3],[a-5,_+m/2],[a,_+m/2-3]];for(d=0;d<3;++d){i.lineTo(o.m_Pos[s][l].tri[d][0],o.m_Pos[s][l].tri[d][1])}}i.lineTo(a,_+f);i.arcTo(a,_,a+f,_,f);i.fillStyle=o.m_BgColor;i.fill();if(o.m_BrdrCol){i.strokeStyle=o.m_BrdrCol}else{i.strokeStyle=o.m_BgColor}i.stroke();var c=e.length==1?VBI.Utilities.RemToPixel(.75):VBI.Utilities.RemToPixel(.75)+1;var g=0;for(var P=0;P<e.length;++P){i.fillStyle=e[P];var I=0;for(d=0;d<r.length;d++){I=o.m_Padding[1]+c*d;i.fillText(r[d],a+o.m_Padding[0]+g,_+I+g+7)}g++}if(o.m_Icon){o.m_IcInfo=t.getIconInfo(o.m_Icon);if(o.m_IcInfo){var u=o.m_Align==7&&o.m_Arrow?a:a+n;i.fillStyle=o.m_IcBgrdCol;i.fillRect(u-7,_+m-7,14,14);o.m_Pos[s][l].rc=[u-7,_+m-7,u-7+14,_+m-7+14]}}}}};i.InternalDrawLabels=function(i,o,e,r){for(var s=0;s<o.m_Pos.length;++s){for(var l=0;l<o.m_Pos[s].length;l++){VBI.Utilities.SetTextAttributes(i,VBI.Utilities.RemToPixel(.75)+"px 'Lucida Sans Unicode',sans-serif",undefined,undefined,"start","middle");var m=Math.round(o.m_Height);var n=Math.round(o.m_Width);var a=Math.round(o.m_Pos[s][l][0]);var _=Math.round(o.m_Pos[s][l][1]);var h=o.m_Arrow?o.m_Align:0;var f=o.m_Rounded?m/2:6;var d;i.beginPath();i.lineWidth=2;i.moveTo(a+f,_);if(h==5){o.m_Pos[s][l].tri=[[a+n/2-3,_],[a+n/2,_-5],[a+n/2+3,_]];for(d=0;d<3;++d){i.lineTo(o.m_Pos[s][l].tri[d][0],o.m_Pos[s][l].tri[d][1])}}i.lineTo(a+n-f,_);i.arcTo(a+n,_,a+n,_+f,f);if(h==7&&!o.m_Rounded){o.m_Pos[s][l].tri=[[a+n,_+m/2-3],[a+n+5,_+m/2],[a+n,_+m/2+3]];for(d=0;d<3;++d){i.lineTo(o.m_Pos[s][l].tri[d][0],o.m_Pos[s][l].tri[d][1])}}i.lineTo(a+n,_+m-f);i.arcTo(a+n,_+m,a+n-f,_+m,f);if(h==1){o.m_Pos[s][l].tri=[[a+n/2+3,_+m],[a+n/2,_+m+5],[a+n/2-3,_+m]];for(d=0;d<3;++d){i.lineTo(o.m_Pos[s][l].tri[d][0],o.m_Pos[s][l].tri[d][1])}}i.lineTo(a+f,_+m);i.arcTo(a,_+m,a,_+m-f,f);if(h==3&&!o.m_Rounded){o.m_Pos[s][l].tri=[[a,_+m/2+3],[a-5,_+m/2],[a,_+m/2-3]];for(d=0;d<3;++d){i.lineTo(o.m_Pos[s][l].tri[d][0],o.m_Pos[s][l].tri[d][1])}}i.lineTo(a,_+f);i.arcTo(a,_,a+f,_,f);i.fillStyle=o.m_BgColor;i.fill();i.strokeStyle=o.m_BrdrCol?o.m_BrdrCol:o.m_BgColor;i.stroke();var c=e.length==1?VBI.Utilities.RemToPixel(.75):VBI.Utilities.RemToPixel(.75)+1;var g=0;for(var P=0;P<e.length;++P){i.fillStyle=e[P];var I=0;for(d=0;d<r.length;d++){I=o.m_Padding[1]+c*d;i.fillText(r[d],VBI.m_bIsRtl?a+n-o.m_Padding[0]+g:a+o.m_Padding[0]+g,_+I+g+7)}g++}if(o.m_Icon){o.m_IcInfo=t.getIconInfo(o.m_Icon);if(o.m_IcInfo){var u=o.m_Align==7&&o.m_Arrow?a:a+n;i.fillStyle=o.m_IcBgrdCol;i.fillRect(u-7,_+m-7,14,14);o.m_Pos[s][l].rc=[u-7,_+m-7,u-7+14,_+m-7+14];VBI.Utilities.SetTextAttributes(i,"12px SAP-icons",undefined,undefined,"center","middle");i.fillStyle=o.GetLabelIconColor();i.fillText(o.m_IcInfo.content,u,_+m)}}}}};i.InternalDrawLabelIcons=function(t,i){var o=Math.round(i.m_Height);var e=Math.round(i.m_Width);for(var r=0;r<i.m_Pos.length;++r){for(var s=0;s<i.m_Pos[r].length;s++){var l=Math.round(i.m_Pos[r][s][0]);var m=Math.round(i.m_Pos[r][s][1]);if(i.m_Icon&&i.m_IcInfo){t.fillStyle=i.GetLabelIconColor();var n=i.m_Align==7&&i.m_Arrow?l:l+e;t.fillText(i.m_IcInfo.content,n,m+o)}}}};i.InternalRenderLabels=function(t,o){var e=i.m_VOS;for(var r=0,s=e.length;r<s;++r){var l=e[r].getLabelData(true);for(var m=0;m<l.length;++m){var n=l[m];VBI.Utilities.SetTextAttributes(o,VBI.Utilities.RemToPixel(.75)+"px 'Lucida Sans Unicode',sans-serif",undefined,undefined,"start","middle");n.SetDimensions(o);n.AlignLabel();var a=n.GetLabelTextColor();var _=n.m_Text.split(/\r\n/);var h=i.GetViewport();for(var f=0;f<n.m_Pos.length;f++){for(var d=0;d<n.m_Pos[f].length;d++){var c=n.m_PosArray.pa,g=n.m_Pos[f][d];if(c.length!==3||c[0]>h[0]&&c[0]<h[2]){if(g[0]-h[0]<5){g[0]=h[0]+5}else if(g[0]+n.m_Width>h[2]-5){g[0]=h[2]-n.m_Width-5}if(g[1]-h[1]<5){g[1]=h[1]+5}else if(g[1]+n.m_Height>h[3]-5){g[1]=h[3]-n.m_Height-5}}else{if(g[0]+(n.m_aIO[1]||0)-h[0]<5){g[0]=h[0]+5}else if(g[0]+(n.m_aIO[1]||0)+n.m_Width>h[2]-5){g[0]=h[2]-n.m_Width-5}else{g[0]+=n.m_aIO[1]||0}if(g[1]-h[1]<5){g[1]=h[1]+5}else if(g[1]+n.m_Height>h[3]-5){g[1]=h[3]-n.m_Height-5}}}}i.InternalDrawLabels(o,n,a,_)}}}};VBI.Label=function(t,i,o,e,r,s){this.m_bAligned=false;this.mIndex=i;this.m_aIO=s;this.m_rcBox=r;this.m_Text=t.text;this.m_BgColor=t.bgColor;this.m_BrdrCol=t.brdrCol;this.m_Icon=t.icon;this.m_IcBgrdCol=t.icColor;this.m_IcTextCol=t.icTextColor;this.m_Arrow=t.arrow;this.m_Rounded=t.rounded;this.m_Align=t.Align;this.m_Offset=t.offset;this.m_Padding=[7,5];this.m_ArrowHeight=5;this.m_ArrowWidth=3;this.m_LineWidth=2;this.m_LabelIconColor=null;this.m_PosArray=e;this.m_Pos=[];this.m_Width=0;this.m_Height=0;this.m_LabelTextColor=[];if(!o){var l=Math.floor(this.m_PosArray.pa.length/3)*3;for(var m=0;m<s.length;m++){var n=[];for(var a=0;a<l;a+=3){var _=[this.m_PosArray.pa[a]+s[m],this.m_PosArray.pa[a+1]];n.push(_)}this.m_Pos.push(n)}}this.CalculateLabelPos=o;this.getContrastCol=function(t){var i=(299*250+587*250+114*250)/1e3;var o=(299*t[0]+587*t[1]+114*t[2])/1e3;return Math.abs(o-i)<=125?"#000000":"#FAFAFA"};this.GetLabelTextColor=function(){if(!this.m_LabelTextColor.length){var t=VBI.Types.string2rgba(this.m_BgColor);if(t[3]==0&&t[4]==1){this.m_LabelTextColor[0]="#FFFFFF";this.m_LabelTextColor[1]="#000000"}else{this.m_LabelTextColor[0]=this.getContrastCol(t)}}return this.m_LabelTextColor};this.GetLabelIconColor=function(){if(!this.m_LabelIconColor){if(this.m_IcTextCol){this.m_LabelIconColor=this.m_IcTextCol}else{var t=VBI.Types.string2rgba(this.m_IcBgrdCol);this.m_LabelIconColor=t[3]==0&&t[4]==1?"#000000":this.getContrastCol(t)}}return this.m_LabelIconColor};this.SetDimensions=function(t){if(!this.m_Width||!this.m_Height){var i=this.m_Text.split(/\r\n/);var o=0;var e=0;var r=VBI.Utilities.RemToPixel(.75);for(var s=0;s<i.length;s++){var l=i[s].length;if(l>o){o=l;e=s}}this.m_Width=t.measureText(i[e]).width+this.m_Padding[0]*2;this.m_Height=r*i.length+this.m_Padding[1]*2}};this.AlignLabel=function(){if(!this.m_bAligned){var t=[0,0,0,0];var i;var o=this.m_ArrowHeight+this.m_LineWidth;if(this.m_rcBox){t=this.m_rcBox}for(var e=0;e<this.m_Pos.length;e++){for(var r=0;r<this.m_Pos[e].length;r++){i=this.m_rcBox?[this.m_rcBox[0]+(this.m_rcBox[2]-this.m_rcBox[0])/2,this.m_rcBox[1]+(this.m_rcBox[3]-this.m_rcBox[1])/2]:this.m_Pos[e][r];switch(this.m_Align){case 0:i[0]-=this.m_Width/2;i[1]-=this.m_Height/2;break;case 1:i[0]-=this.m_Width/2;i[1]-=(t[3]-t[1])/2+this.m_Height;if(this.m_Arrow){i[1]-=o}break;case 2:i[0]+=(t[2]-t[0])/2;i[1]-=(t[3]-t[1])/2+this.m_Height;break;case 3:i[0]+=(t[2]-t[0])/2;i[1]-=this.m_Height/2;if(this.m_Arrow&&!this.m_Rounded){i[0]+=o}break;case 4:i[0]+=(t[2]-t[0])/2;i[1]+=(t[3]-t[1])/2;break;case 5:i[0]-=this.m_Width/2;i[1]+=(t[3]-t[1])/2;if(this.m_Arrow){i[1]+=o}break;case 6:i[0]-=(t[2]-t[0])/2+this.m_Width;i[1]+=(t[3]-t[1])/2;break;case 7:i[0]-=(t[2]-t[0])/2+this.m_Width;i[1]-=this.m_Height/2;if(this.m_Arrow&&!this.m_Rounded){i[0]-=o}break;case 8:i[0]-=(t[2]-t[0])/2+this.m_Width;i[1]-=(t[3]-t[1])/2+this.m_Height;break;default:if(VBI.m_bIsRtl){i[0]-=this.m_Width}i[1]+=(t[3]-t[1])/2;break}if(!this.CalculateLabelPos){i[0]+=this.m_aIO[e]}i[0]+=this.m_Offset[0];i[1]+=this.m_Offset[1];this.m_Pos[e][r]=i}}}this.m_bAligned=true};this.clear=function(){this.CalculateLabelPos=null;this.m_Pos=null;this.m_PosArray=null;this.m_rcBox=null;this.m_aIO=null;this.m_LabelTextColor=null;this.m_LabelIconColor=null};return this}});
//# sourceMappingURL=saplabels.js.map