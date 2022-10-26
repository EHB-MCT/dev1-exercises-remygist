"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let stepWidth = width/9;
let stepHeight = height/9
//change window width and height to 450px

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        context.fillStyle = "#7dc4e8";
        Utils.fillCircle(0 + (i * stepWidth), 0 + (j *stepHeight), 55);
    }
    
}