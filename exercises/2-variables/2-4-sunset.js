"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;

drawSunset();

function drawSunset() {
    context.beginPath();
    context.fillStyle = "#ea9e25";
    context.rect(0, 0, width, height * 1 / 4);
    context.fill();

    context.beginPath();
    context.fillStyle = "#fc701b";
    context.rect(0, height * 1 / 4, width, height * 1 / 4);
    context.fill();

    context.beginPath();
    context.fillStyle = "#a52002";
    context.rect(0, height * 2 / 4, width, height * 1 / 4);
    context.fill();

    context.beginPath();
    context.fillStyle = "#01198c";
    context.rect(0, height * 3 / 4, width, height * 1 / 4);
    context.fill();

    context.beginPath();
    context.fillStyle = "#ffffc8"
    context.ellipse(width / 2, height * 3 / 4, width * 1 / 4, width * 1 / 4, 0, 0 * Math.PI, 1 * Math.PI, true);
    context.fill();

}