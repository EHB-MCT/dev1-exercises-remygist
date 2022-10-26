"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let x = 50;
let y = 50;

for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 3; j++) {
        context.fillStyle = "#8b0000";
        Utils.FillRectangle(x + (160 * i), y + (120 * j), 150, 50);
        for (let k = 0; k < 3; k++) {
            context.fillStyle = "#8b0000";
            Utils.FillRectangle((x + 50) + (160 * i), (y + 60) + (120 * j), 150, 50);
        }
    }
}