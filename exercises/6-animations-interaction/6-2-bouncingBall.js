"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let ballX = 0;
let ballY = 0;
let ballSize = 50;

let speedX = 10;
let speedY = 10;
let ballMove = true;

let mouseX = 0;
let mouseY = 0;

window.onmousedown = stopMoving;
bounceBall();

function stopMoving(eventData){
    mouseX = eventData.pageX;
	mouseY = eventData.pageY;
    if (Utils.calculateDistance(mouseX,mouseY,ballX,ballY) < ballSize) {
        ballMove = false;
        context.fillStyle = "yellow";
	    Utils.fillCircle(mouseX, mouseY, ballSize/2);
    }
    
}

function bounceBall() {
    if(ballMove){
	context.fillStyle = "white";
	Utils.FillRectangle(0, 0, width, height);
	context.fillStyle = "black";
	Utils.fillCircle(ballX, ballY, ballSize);
	ballX += speedX;
	ballY += speedY;

	if (ballX > width - ballSize || ballX < 0) {
		speedX *= -1;
	}

	if (ballY > height - ballSize || ballY < 0) {
		speedY *= -1;
	}
	requestAnimationFrame(bounceBall);
}
}
