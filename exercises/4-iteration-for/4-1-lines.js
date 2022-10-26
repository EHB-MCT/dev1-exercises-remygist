"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let horizontalLines = 60;
let verticalLines = 30;
let width = 600;
let height = 300;

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "orange";
    context.fillRect(0, 0, 600, 300);
    drawLines()
}

function drawLines() {
    let stepHorizontal = width / horizontalLines;
    let stepVertical = height / verticalLines;

    for (let i = 0; i <= horizontalLines; i++) {
        Utils.drawLine(0 + (stepHorizontal * i), 0, width - (stepHorizontal * i), height);

    }

    for (let i = 0; i <= verticalLines; i++) {
        Utils.drawLine(0, 0 + (stepVertical * i), width, height - (stepVertical * i));

    }


}