"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawLayers();

function drawLayers(){
    //omtrek
    context.beginPath();
    context.fillStyle = "lightblue"
    context.rect(50, 50, 300, 300);
    context.fill();
    context.stroke();

    //rechtsonderaan
    context.beginPath();
    context.moveTo(50,300);
    context.lineTo(300,300);
    context.lineTo(300,50);
    context.stroke();

    //linksonderaan
    context.beginPath();
    context.moveTo(100,50);
    context.lineTo(100,250);
    context.lineTo(300,250);
    context.stroke();

    //linksboven
    context.beginPath();
    context.moveTo(150,250);
    context.lineTo(150,100);
    context.lineTo(300,100);
    context.stroke();

    //rechtsboven
    context.beginPath();
    context.moveTo(150,150);
    context.lineTo(250,150);
    context.lineTo(250,250);
    context.stroke();
}