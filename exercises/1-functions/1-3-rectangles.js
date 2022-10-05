"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawRectangles()

function drawRectangles() {
    //rood linksboven
    context.beginPath();
    context.strokeStyle = "red";
    context.rect(50, 50, 150, 150);
    context.stroke();

    //rood rechtsonder
    context.beginPath();
    context.strokeStyle = "red";
    context.rect(200, 200, 150, 150);
    context.stroke();

    //zwart midden
    context.beginPath();
    context.rect(125, 125, 150, 150);
    context.fill();

    //rood rechtsboven
    context.beginPath();
    context.strokeStyle = "red";
    context.rect(275,75,50,50);
    context.stroke();

    //rood linksonder
    context.beginPath();
    context.strokeStyle = "red";
    context.rect(75,275,50,50);
    context.stroke();

    //zwart rechtboven
    context.beginPath();
    context.rect(325,50,25,25);
    context.fill();

    //zwart linksonder
    context.beginPath();
    context.rect(50,325,25,25);
    context.fill();






}