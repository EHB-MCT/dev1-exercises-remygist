"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let speed = 0;
let positions = [0, 0, 0, 0, 0];
let gameover = false;
let winnaar = 0;

drawLanes();
setup();
draw();


function setup() {
    context.textAlign = "center";
    context.fillStyle = "white";
}

function draw() {
    let space = height / 5;
    let offstep = space;

    drawLanes();
    for (let i = 0; i < 5; i++) {
        speed = Utils.randomInt(0, 1);
        drawSnail((space / 2) + positions[i], (space / 2) + space * i, space, 1 + i);
        positions[i] += speed;
        console.log(positions);

        if (positions[i] > width - 200) {
            gameover = true;
            winnaar = i +1;
        }

    }

    console.log(gameover);
    if (!gameover) {
        requestAnimationFrame(draw);
    } else {
        context.font = "30px Arial";
        context.fillText("Slak " + winnaar + " is de Winnaar", 150, 50);
    }

}


function drawSnail(x, y, sizeY, number) {

    let sizeDiff = sizeY / 4 / 5;
    context.beginPath();
    context.fillStyle = "green";
    context.ellipse(x + sizeY / 24, y + sizeY / 4, sizeY / 2, sizeY / 8, 0, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.ellipse(x + sizeY / 2, y + sizeY / 8, sizeY / 4, sizeY / 8, Math.PI / 4 * 3, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.ellipse(x + sizeY / 2 + sizeY / 16, y - sizeY / 8, sizeY / 16, sizeY / 8, 0, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = "orange";
    context.fillStyle = "darkorange";
    for (let i = 0; i < 5; i++) {
        context.beginPath();
        context.arc(x, y, sizeY / 3 - sizeDiff * i, 0, Math.PI * 2);
        context.fill();
        context.stroke();
    }
    context.fillStyle = "black";
    context.font = "bold " + sizeY / 5 + "pt Arial";
    context.fillText(number, x, y + sizeY / 8);
}

function drawLanes() {
    context.fillStyle = "#80807f"
    Utils.drawRectangle(0, 0, width, height);
    context.fillStyle = "#d3d3d3";
    Utils.drawRectangle(0, height / 5, width, height / 5);
    Utils.drawRectangle(0, height / 5 * 3, width, height / 5);

}