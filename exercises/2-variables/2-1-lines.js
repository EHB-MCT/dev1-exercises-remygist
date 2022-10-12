"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let margin = 150;

drawLines();

function drawLines(){
    context.beginPath();
    context.moveTo(margin, 50);
    context.lineTo(width - margin, 50);
    context.lineTo(margin, 150);
    context.lineTo(width - margin, 150);
    context.lineTo(margin, 250);
    context.lineTo(width - margin, 250);
    context.lineTo(margin, 350);
    context.lineTo(width - margin, 350);
    context.lineTo(margin, 450);
    context.lineTo(width - margin, 450);
    context.lineTo(margin, 550);
    context.lineTo(width - margin, 550);
    context.lineTo(margin, 50);
    context.stroke();
}