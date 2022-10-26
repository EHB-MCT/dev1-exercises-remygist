"use strict";

import context from "./context.js";

export function drawLine(x1,y1,x2,y2){
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke();
}

export function strokeCircle(x,y,radius){
    context.beginPath();
    context.ellipse(x,y,radius,radius,0,0,2*Math.PI,false);
    context.stroke();
}

export function fillCircle(x,y,radius){
    context.beginPath();
    context.ellipse(x,y,radius,radius,0,0,2*Math.PI,false);
    context.fill();
}

export function rgb(r, g, b){
    let rgb = "rgb(" + r + "," + g + "," + b + ")";
    return rgb;
}

export function rgba(r, g, b, a){
    let rgba = "rgba(" + r + "," + g + "," + b + "," + a + ")";
    return rgba;
}

export function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}