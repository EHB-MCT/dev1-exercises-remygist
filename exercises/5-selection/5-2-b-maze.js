"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;


Utils.drawBackground(0,0,width,height);
drawMaze();


function drawMaze() {
	context.lineWidth = 5;
	context.lineCap = "square";
	for (let j = 0; j < height / 10; j++) {
		for (let i = 0; i < width / 10; i++) {
			context.strokeStyle = Utils.rgb(Math.random() * 255, Math.random() * 255, Math.random() * 255);
			if (Math.round(Math.random()) == 1) {
				Utils.drawLine(0 + i * 10, 0 + j * 10, 10 + i * 10, 10 + j * 10);
			} else {
				Utils.drawLine(10 + i * 10, 0 + j * 10, 0 + i * 10, 10 + j * 10);
			}
		}
	}
}
