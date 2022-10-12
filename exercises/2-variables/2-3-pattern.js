"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;

drawPattern();

function drawPattern() {
    //donker blauw
    context.beginPath();
    context.rect(0, 0, width / 3, height * 2/3);
    context.rect(width * 2 / 3, 0, width / 3, height *2/3);
    context.fillStyle = "#2c3d50";
    context.fill();
    
    //grijs
    context.beginPath();
    context.rect(width / 3, 0, width / 3, height);
    context.fillStyle = "#ecf0f1";
    context.fill();

    //lichtblauw        
    context.beginPath();
    context.rect(0, height*2/3, width / 3, height*2 /3);
    context.rect(width * 2 / 3, height*2/3, width / 3, height*2 /3);
    context.fillStyle = "#3498db";
    context.fill();

    //rood
    context.beginPath();
    context.rect(0, height*1/6, width , height*1/3);
    
    context.fillStyle = "#e74b3c";
    context.fill();

}