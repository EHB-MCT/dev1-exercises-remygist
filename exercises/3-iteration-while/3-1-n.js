"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawBlockyGradient();
    context.strokeRect(50, 50, 300, 300);

}

function drawBlockyGradient() {
    let i = 0;
    let margin = 50;
    let gradient = 50
    while (i < 6) {
        context.fillStyle = Utils.rgb(0 + (gradient * i), 0 + (gradient * i), 0 + (gradient * i));
        context.fillRect(50 + (margin * i), 50, 50, 300);
        i++;
    }
}