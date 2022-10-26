"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let margin = 200;

draw();

function draw() {
    context.lineWidth = 2;
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
    drawBubbles();
}

function drawBubbles() {
    for (let i = 0; i < 100; i++) {
        Utils.fillCircle(Utils.randomInt(margin, width - 200), Utils.randomInt(margin, height - 200), 50);
        context.fillStyle = Utils.rgba(Math.floor(Math.random() * 255 + 1), Math.floor(Math.random() * 255 + 1), Math.floor(Math.random() * 255 + 1), Math.random());
    }



}

rrr