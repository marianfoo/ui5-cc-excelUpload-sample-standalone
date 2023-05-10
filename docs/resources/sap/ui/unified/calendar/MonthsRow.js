/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Control","sap/ui/core/LocaleData","sap/ui/core/delegate/ItemNavigation","sap/ui/unified/calendar/CalendarUtils","sap/ui/unified/calendar/CalendarDate","sap/ui/unified/library","sap/ui/core/format/DateFormat","sap/ui/core/library","sap/ui/core/Locale","./MonthsRowRenderer","sap/ui/dom/containsOrEquals","sap/ui/thirdparty/jquery","sap/ui/unified/DateRange","sap/ui/core/Configuration"],function(e,t,a,i,r,o,s,n,l,h,g,jQuery,c,p){"use strict";var u=e.extend("sap.ui.unified.calendar.MonthsRow",{metadata:{library:"sap.ui.unified",properties:{date:{type:"object",group:"Data"},startDate:{type:"object",group:"Data"},months:{type:"int",group:"Appearance",defaultValue:12},intervalSelection:{type:"boolean",group:"Behavior",defaultValue:false},singleSelection:{type:"boolean",group:"Behavior",defaultValue:true},showHeader:{type:"boolean",group:"Appearance",defaultValue:false},primaryCalendarType:{type:"sap.ui.core.CalendarType",group:"Appearance",defaultValue:null}},aggregations:{selectedDates:{type:"sap.ui.unified.DateRange",multiple:true,singularName:"selectedDate"},specialDates:{type:"sap.ui.unified.DateTypeRange",multiple:true,singularName:"specialDate"}},associations:{ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"},legend:{type:"sap.ui.unified.CalendarLegend",multiple:false}},events:{select:{},focus:{parameters:{date:{type:"object"},notVisible:{type:"boolean"}}}}},renderer:h});u.prototype.init=function(){var e=this.getProperty("primaryCalendarType");this._oFormatYyyymm=s.getInstance({pattern:"yyyyMMdd",calendarType:e});this._oFormatLong=s.getInstance({pattern:"MMMM y",calendarType:e});this._mouseMoveProxy=jQuery.proxy(this._handleMouseMove,this);this._rb=sap.ui.getCore().getLibraryResourceBundle("sap.ui.unified")};u.prototype.exit=function(){if(this._oItemNavigation){this.removeDelegate(this._oItemNavigation);this._oItemNavigation.destroy();delete this._oItemNavigation}if(this._sInvalidateMonths){clearTimeout(this._sInvalidateMonths)}};u.prototype.onAfterRendering=function(){f.call(this);C.call(this)};u.prototype.onsapfocusleave=function(e){if(!e.relatedControlId||!g(this.getDomRef(),sap.ui.getCore().byId(e.relatedControlId).getFocusDomRef())){if(this._bMouseMove){L.call(this,true);S.call(this,this._getDate());this._bMoveChange=false;this._bMousedownChange=false;b.call(this)}if(this._bMousedownChange){this._bMousedownChange=false;b.call(this)}}};u.prototype.removeAllSelectedDates=function(){this._bDateRangeChanged=true;var e=this.removeAllAggregation("selectedDates");return e};u.prototype.destroySelectedDates=function(){this._bDateRangeChanged=true;var e=this.destroyAggregation("selectedDates");return e};u.prototype.removeAllSpecialDates=function(){this._bDateRangeChanged=true;var e=this.removeAllAggregation("specialDates");return e};u.prototype.destroySpecialDates=function(){this._bDateRangeChanged=true;var e=this.destroyAggregation("specialDates");return e};u.prototype.setDate=function(e){if(e){var t=r.fromLocalJSDate(e,this.getProperty("primaryCalendarType"));this._oDate=t;v.call(this,t,false)}return this.setProperty("date",e)};u.prototype._getDate=function(){if(!this._oDate){this._oDate=r.fromLocalJSDate(new Date,this.getProperty("primaryCalendarType"))}return this._oDate};u.prototype.setStartDate=function(e){i._checkJSDateObject(e);var t,a,o;a=e.getFullYear();i._checkYearInValidRange(a);t=r.fromLocalJSDate(e,this.getProperty("primaryCalendarType"));this.setProperty("startDate",e,true);this._oStartDate=t;this._oStartDate.setDate(1);if(this.getDomRef()){o=this._getDate().toLocalJSDate();this._bNoRangeCheck=true;this.displayDate(e);this._bNoRangeCheck=false;if(o&&this.checkDateFocusable(o)){this.setDate(o)}}return this};u.prototype._getStartDate=function(){if(!this._oStartDate){this._oStartDate=r.fromLocalJSDate(new Date,this.getProperty("primaryCalendarType"));this._oStartDate.setDate(1)}return this._oStartDate};u.prototype.displayDate=function(e){v.call(this,r.fromLocalJSDate(e,this.getProperty("primaryCalendarType")),true);return this};u.prototype._getLocale=function(){var e=this.getParent();if(e&&e.getLocale){return e.getLocale()}else if(!this._sLocale){this._sLocale=p.getFormatSettings().getFormatLocale().toString()}return this._sLocale};u.prototype._getLocaleData=function(){var e=this.getParent();if(e&&e._getLocaleData){return e._getLocaleData()}else if(!this._oLocaleData){var a=this._getLocale();var i=new l(a);this._oLocaleData=t.getInstance(i)}return this._oLocaleData};u.prototype._getFormatLong=function(){var e=this._getLocale();if(this._oFormatLong.oLocale.toString()!=e){var t=new l(e);this._oFormatLong=s.getInstance({style:"long",calendarType:this.getProperty("primaryCalendarType")},t)}return this._oFormatLong};u.prototype.getIntervalSelection=function(){var e=this.getParent();if(e&&e.getIntervalSelection){return e.getIntervalSelection()}else{return this.getProperty("intervalSelection")}};u.prototype.getSingleSelection=function(){var e=this.getParent();if(e&&e.getSingleSelection){return e.getSingleSelection()}else{return this.getProperty("singleSelection")}};u.prototype.getSelectedDates=function(){var e=this.getParent();if(e&&e.getSelectedDates){return e.getSelectedDates()}else{return this.getAggregation("selectedDates",[])}};u.prototype.getSpecialDates=function(){var e=this.getParent();if(e&&e.getSpecialDates){return e.getSpecialDates()}else{return this.getAggregation("specialDates",[])}};u.prototype._getShowHeader=function(){var e=this.getParent();if(e&&e._getShowItemHeader){return e._getShowItemHeader()}else{return this.getProperty("showHeader")}};u.prototype.getAriaLabelledBy=function(){var e=this.getParent();if(e&&e.getAriaLabelledBy){return e.getAriaLabelledBy()}else{return this.getAssociation("ariaLabelledBy",[])}};u.prototype._setLegendControlOrigin=function(e){this._oLegendControlOrigin=e};u.prototype.getLegend=function(){var e=this.getParent();if(this._oLegendControlOrigin){return this._oLegendControlOrigin.getLegend()}if(e&&e.getLegend){return e.getLegend()}else{return this.getAssociation("ariaLabelledBy",[])}};u.prototype._setAriaRole=function(e){this._ariaRole=e;return this};u.prototype._getAriaRole=function(){return this._ariaRole?this._ariaRole:"gridcell"};u.prototype._checkDateSelected=function(e){var t,a,o,s,n=0,l=0,h=0,g=this.getProperty("primaryCalendarType"),c,p,u;i._checkCalendarDate(e);p=this.getSelectedDates();u=new r(e);u.setDate(1);s=u.toUTCJSDate().getTime();for(c=0;c<p.length;c++){t=p[c];a=t.getStartDate();n=0;if(a){a=r.fromLocalJSDate(a,g);a.setDate(1);n=a.toUTCJSDate().getTime()}o=t.getEndDate();l=0;if(o){o=r.fromLocalJSDate(o,g);o.setDate(1);l=o.toUTCJSDate().getTime()}if(s==n&&!o){h=1;break}else if(s==n&&o){h=2;if(o&&s==l){h=5}break}else if(o&&s==l){h=3;break}else if(o&&s>n&&s<l){h=4;break}if(this.getSingleSelection()){break}}return h};u.prototype._getDateType=function(e){i._checkCalendarDate(e);var t,a,o,s,n=0,l,h=0,g,c=this.getSpecialDates(),p=new r(e),u=this.getProperty("primaryCalendarType");p.setDate(1);g=p.toUTCJSDate().getTime();for(o=0;o<c.length;o++){a=c[o];s=a.getStartDate();n=0;if(s){s=r.fromLocalJSDate(s,u);s.setDate(1);n=s.toUTCJSDate().getTime()}l=a.getEndDate();h=0;if(l){l=r.fromLocalJSDate(l,u);l.setDate(i._daysInMonth(l));h=l.toUTCJSDate().getTime()}if(g==n&&!l||g>=n&&g<=h){t={type:a.getType(),tooltip:a.getTooltip_AsString()};break}}return t};u.prototype._checkMonthEnabled=function(e){i._checkCalendarDate(e);var t=this.getParent();if(t&&t._oMinDate&&t._oMaxDate){if(i._isOutside(e,t._oMinDate,t._oMaxDate)){return false}}return true};u.prototype._handleMouseMove=function(e){if(!this.$().is(":visible")){L.call(this,true)}var t=jQuery(e.target);if(t.hasClass("sapUiCalItemText")){t=t.parent()}if(t.hasClass("sapUiCalItem")){var a=this._getDate();var i=r.fromLocalJSDate(this._oFormatYyyymm.parse(t.attr("data-sap-month"),this.getProperty("primaryCalendarType")));i.setDate(1);if(!i.isSame(a)){this.setDate(i.toLocalJSDate());S.call(this,i,true);this._bMoveChange=true}}};u.prototype.onmouseup=function(e){if(this._bMouseMove){L.call(this,true);var t=this._getDate();var a=this._oItemNavigation.getItemDomRefs();for(var i=0;i<a.length;i++){var o=jQuery(a[i]);if(o.attr("data-sap-month")==this._oFormatYyyymm.format(t.toUTCJSDate(),true)){o.trigger("focus");break}}if(this._bMoveChange){var s=jQuery(e.target);if(s.hasClass("sapUiCalItemText")){s=s.parent()}if(s.hasClass("sapUiCalItem")){t=r.fromLocalJSDate(this._oFormatYyyymm.parse(s.attr("data-sap-month")));t.setDate(1)}S.call(this,t);this._bMoveChange=false;this._bMousedownChange=false;b.call(this)}}if(this._bMousedownChange){this._bMousedownChange=false;b.call(this)}};u.prototype.onsapselect=function(e){var t=S.call(this,this._getDate());if(t){b.call(this)}e.stopPropagation();e.preventDefault()};u.prototype.onsapselectmodifiers=function(e){this.onsapselect(e)};u.prototype.onsappageupmodifiers=function(e){var t=new r(this._getDate());var a=t.getYear();if(e.metaKey||e.ctrlKey){t.setYear(a-10)}else{var i=this.getMonths();if(i<=12){t.setYear(a-1)}else{t.setMonth(t.getMonth()-i)}}this.fireFocus({date:t.toLocalJSDate(),notVisible:true});e.preventDefault()};u.prototype.onsappagedownmodifiers=function(e){var t=new r(this._getDate());var a=t.getYear();if(e.metaKey||e.ctrlKey){t.setYear(a+10)}else{var i=this.getMonths();if(i<=12){t.setYear(a+1)}else{t.setMonth(t.getMonth()+i)}}this.fireFocus({date:t.toLocalJSDate(),notVisible:true});e.preventDefault()};u.prototype.onThemeChanged=function(){if(this._bNoThemeChange){return}this._bNamesLengthChecked=undefined;this._bLongWeekDays=undefined;var e=this._getLocaleData();var t=e.getMonthsStandAlone("wide",this.getProperty("primaryCalendarType"));var a=this.$("months").children();var i=this._getStartDate().getMonth();for(var r=0;r<a.length;r++){var o=jQuery(jQuery(a[r]).children(".sapUiCalItemText"));o.text(t[(r+i)%12])}C.call(this)};u.prototype.checkDateFocusable=function(e){i._checkJSDateObject(e);if(this._bNoRangeCheck){return false}var t=this._getStartDate();var a=new r(t);a.setDate(1);a.setMonth(a.getMonth()+this.getMonths());var o=r.fromLocalJSDate(e,this.getProperty("primaryCalendarType"));return o.isSameOrAfter(t)&&o.isBefore(a)};u.prototype.applyFocusInfo=function(e){this._oItemNavigation.focusItem(this._oItemNavigation.getFocusedIndex());return this};function f(){var e=this._getDate();var t=this._oFormatYyyymm.format(e.toUTCJSDate(),true);var i=0;var r=this.$("months").get(0);var o=this.$("months").children(".sapUiCalItem");for(var s=0;s<o.length;s++){var n=jQuery(o[s]);if(n.attr("data-sap-month")===t){i=s;break}}if(!this._oItemNavigation){this._oItemNavigation=new a;this._oItemNavigation.attachEvent(a.Events.AfterFocus,d,this);this._oItemNavigation.attachEvent(a.Events.FocusAgain,m,this);this._oItemNavigation.attachEvent(a.Events.BorderReached,D,this);this.addDelegate(this._oItemNavigation);this._oItemNavigation.setDisabledModifiers({sapnext:["alt"],sapprevious:["alt"],saphome:["alt"],sapend:["alt"]});this._oItemNavigation.setCycling(false);this._oItemNavigation.setColumns(1,true)}this._oItemNavigation.setRootDomRef(r);this._oItemNavigation.setItemDomRefs(o);this._oItemNavigation.setFocusedIndex(i);this._oItemNavigation.setPageSize(o.length)}function d(e){var t=e.getParameter("index");var a=e.getParameter("event");if(!a){return}var i=this._getDate();var o=new r(i);var s=this._oItemNavigation.getItemDomRefs();var n=jQuery(s[t]);o=r.fromLocalJSDate(this._oFormatYyyymm.parse(n.attr("data-sap-month")));o.setDate(1);this.setDate(o.toLocalJSDate());this.fireFocus({date:o.toLocalJSDate(),notVisible:false});if(a.type=="mousedown"){y.call(this,a,o,t)}}function m(e){var t=e.getParameter("index");var a=e.getParameter("event");if(!a){return}if(a.type=="mousedown"){var i=this._getDate();y.call(this,a,i,t)}}function D(e){var t=e.getParameter("event");var a=this.getMonths();var i=this._getDate();var o=new r(i);if(t.type){switch(t.type){case"sapnext":case"sapnextmodifiers":o.setMonth(o.getMonth()+1);break;case"sapprevious":case"sappreviousmodifiers":o.setMonth(o.getMonth()-1);break;case"sappagedown":o.setMonth(o.getMonth()+a);break;case"sappageup":o.setMonth(o.getMonth()-a);break;default:break}this.fireFocus({date:o.toLocalJSDate(),notVisible:true})}}function y(e,t,a){if(e.button){return}var i=S.call(this,t);if(i){this._bMousedownChange=true}if(this._bMouseMove){L.call(this,true);this._bMoveChange=false}else if(i&&this.getIntervalSelection()&&this.$().is(":visible")){M.call(this,true)}e.preventDefault();e.setMark("cancelAutoClose")}function v(e,t){i._checkCalendarDate(e);var a=e.getYear();i._checkYearInValidRange(a);var o=true;if(!this.getDate()||!e.isSame(r.fromLocalJSDate(this.getDate(),this.getProperty("primaryCalendarType")))){var s=new r(e);s.setDate(1);o=this.checkDateFocusable(e.toLocalJSDate());if(!this._bNoRangeCheck&&!o){throw new Error("Date must be in visible date range; "+this)}this.setProperty("date",e.toLocalJSDate());this._oDate=s}if(this.getDomRef()){if(o){_.call(this,this._oDate,t)}}}function _(e,t){var a=this._oFormatYyyymm.format(e.toUTCJSDate(),true);var i=this._oItemNavigation.getItemDomRefs();var r;for(var o=0;o<i.length;o++){r=jQuery(i[o]);if(r.attr("data-sap-month")==a){if(document.activeElement!=i[o]){if(t){this._oItemNavigation.setFocusedIndex(o)}else{this._oItemNavigation.focusItem(o)}}break}}}function S(e,t){if(!this._checkMonthEnabled(e)){return false}var a=this.getSelectedDates();var i;var o=0;var s=this.getParent();var n=this;var l;if(s&&s.getSelectedDates){n=s}if(this.getSingleSelection()){if(a.length>0){i=a[0];l=i.getStartDate();if(l){l=r.fromLocalJSDate(l,this.getProperty("primaryCalendarType"));l.setDate(1)}}else{i=new c;n.addAggregation("selectedDates",i)}if(this.getIntervalSelection()&&(!i.getEndDate()||t)&&l){var h;if(e.isBefore(l)){h=l;l=e;if(!t){i.setProperty("startDate",l.toLocalJSDate());i.setProperty("endDate",h.toLocalJSDate())}}else if(e.isSameOrAfter(l)){h=e;if(!t){i.setProperty("endDate",h.toLocalJSDate())}}}else{i.setProperty("startDate",e.toLocalJSDate());i.setProperty("endDate",undefined)}}else{if(this.getIntervalSelection()){throw new Error("Calender don't support multiple interval selection")}else{var g=this._checkDateSelected(e);if(g>0){for(o=0;o<a.length;o++){l=a[o].getStartDate();if(l){l=r.fromLocalJSDate(l,this.getProperty("primaryCalendarType"));l.setDate(1);if(e.isSame(l)){n.removeAggregation("selectedDates",o);break}}}}else{i=new c({startDate:e.toLocalJSDate()});n.addAggregation("selectedDates",i)}}}return true}function b(){if(this._bMouseMove){L.call(this,true)}this.fireSelect()}function C(){if(!this._bNamesLengthChecked){var e=0;var t=this.$("months").children();var a=false;var i=this.getMonths();var r=Math.ceil(12/i);var o=0;var s=this._getLocaleData();var n=s.getMonthsStandAlone("wide",this.getProperty("primaryCalendarType"));var l;for(var h=0;h<r;h++){if(i<12){for(e=0;e<t.length;e++){l=jQuery(jQuery(t[e]).children(".sapUiCalItemText"));l.text(n[(e+o)%12])}o=o+i;if(o>11){o=11}}for(e=0;e<t.length;e++){var g=t[e];if(Math.abs(g.clientWidth-g.scrollWidth)>1){a=true;break}}if(a){break}}if(i<12){o=this._getStartDate().getMonth();for(e=0;e<t.length;e++){l=jQuery(jQuery(t[e]).children(".sapUiCalItemText"));l.text(n[(e+o)%12])}}if(a){this._bLongMonth=false;var c=s.getMonthsStandAlone("abbreviated",this.getProperty("primaryCalendarType"));o=this._getStartDate().getMonth();for(e=0;e<t.length;e++){l=jQuery(jQuery(t[e]).children(".sapUiCalItemText"));l.text(c[(e+o)%12])}}else{this._bLongMonth=true}this._bNamesLengthChecked=true}}function M(){jQuery(window.document).on("mousemove",this._mouseMoveProxy);this._bMouseMove=true}function L(){jQuery(window.document).off("mousemove",this._mouseMoveProxy);this._bMouseMove=undefined}return u});
//# sourceMappingURL=MonthsRow.js.map