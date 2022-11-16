"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let mouseX = 0;
let mouseY = 0;

window.onmousemove = drawCrosshair;

/**
 *
 * @param {MouseEvent} eventData
 */
function drawCrosshair(eventData) {
	context.fillStyle = "white";
	Utils.FillRectangle(0, 0, width, height);

	mouseX = eventData.pageX;
	mouseY = eventData.pageY;

    context.lineWidth = 5;
	context.strokeStyle = "red";
	Utils.drawLine(0, mouseY, width, mouseY);
	Utils.drawLine(mouseX, 0, mouseX, height);
}
