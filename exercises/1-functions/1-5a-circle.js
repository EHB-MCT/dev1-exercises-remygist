"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawSunset();

function drawSunset(){
    //oranje vierkant
    context.beginPath();
    context.fillStyle = "orange"
    context.rect(50, 50, 300, 200);
    context.fill();

    //blauw vierkant
    context.beginPath();
    context.fillStyle = "blue"
    context.rect(50, 250, 300, 100);
    context.fill();

    //halve cirkel
    context.beginPath();
    context.fillStyle = "yellow";
    context.arc(200,250,100,0*Math.PI,1*Math.PI,true);
    context.fill();
    
}