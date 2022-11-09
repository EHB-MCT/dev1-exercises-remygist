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

/** function that formats an hsla value based on parameters
 * @param {number} h the hue in degrees
 * @param {number} s the saturation in percentage
 * @param {number} l the lightness in percentage
 */
 export function hsl(h, s, l, ) {
    return "hsl(" + h + "," + s + "%," + l + "%,)";
}



export function hsla(h, s, l, a){
    let hsla = "hsla(" + h + "," + s + "%," + l + "%," + a + ")";
    return hsla;
}

export function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function strokeRectangle(x,y,w,h){
    context.beginPath();
    context.rect(x,y,w,h,)
    context.stroke();
}

export function FillRectangle(x,y,w,h){
    context.beginPath();
    context.rect(x,y,w,h,)
    context.fill();
}

/** function that converts an angle in degrees to radians
 * @param {number} degrees 
 */
 export function degrees(degrees) {
    return degrees * (Math.PI / 180);
}

/**
 * function that calculates the distance between 2 coordinates
 * @param {number} x1 x coordinate of the first point
 * @param {number} y1 y coordinate of the first point
 * @param {number} x2 x coordinate of the second point
 * @param {number} y2 y coordinate of the second point
 */
 export function calculateDistance(x1, y1, x2, y2) {
    return Math.hypot(x2 - x1, y2 - y1);
}

/**
 * function that returns a structured random decimal number based on a Gaussian curve
 * Adapted from stackoverflow answer by Dorian: https://stackoverflow.com/a/39187274
 */
 export function randomGaussian() {
    var rand = 0;

    for (var i = 0; i < 6; i += 1) {
        rand += Math.random() * 2 - 1;
    }

    return rand / 6;
}

