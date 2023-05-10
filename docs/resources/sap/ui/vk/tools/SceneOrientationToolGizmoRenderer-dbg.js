/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */

sap.ui.define([
], function() {
	"use strict";

	/**
	 * SceneOrientationToolGizmoRenderer renderer.
	 * @namespace
	 */
	var SceneOrientationToolGizmoRenderer = {
		apiVersion: 2
	};

	/**
	 * Renders the HTML for the given control, using the provided
	 * {@link sap.ui.core.RenderManager}.
	 *
	 * @param {sap.ui.core.RenderManager} rm 	the RenderManager that can be used for writing to the Render-Output-Buffer
	 * @param {sap.ui.core.Control} control 	the control to be rendered
	 */
	SceneOrientationToolGizmoRenderer.render = function(rm, control) {
		rm.openStart("div", control);
		rm.class("sapUiVizKitSceneOrientationGizmo");
		rm.openEnd();
		if (control.getParent().getEnablePredefinedViews()) {
			rm.renderControl(control._button);
		}
		rm.close("div");
	};

	return SceneOrientationToolGizmoRenderer;

}, /* bExport= */ true);
