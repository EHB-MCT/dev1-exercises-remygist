"use strict";
import context from "../../scripts/context.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalSquares();
}

function drawDiagonalSquares() {
    let i = 0;
    let margin = 25;
    while (i < 7) {
        context.strokeRect(75 + (margin * i),75 + (margin * i),100,100);
        i++;
    }
}