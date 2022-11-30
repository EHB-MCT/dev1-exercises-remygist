"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let ballSize = 50;
let ballMove = true;
let mouseX = 0;
let mouseY = 0;
let balls = [];




setup();
bounceBall();

function setup() {
	for (let i = 0; i < 20; i++) {
		let ball = {
			size: Utils.randomInt(2, 50),
			x: Utils.randomInt(ballSize, width - ballSize),
			y: Utils.randomInt(ballSize, height - ballSize),
			speedX: Utils.randomInt(1, 10),
			speedY: Utils.randomInt(1, 10),
            hue: Utils.randomInt(0,360)
		};
		balls.push(ball);
	}
	console.log(balls);
}

window.onmousedown = stopMoving;

/*function stopMoving(eventData) {
	mouseX = eventData.pageX;
	mouseY = eventData.pageY;
	if (Utils.calculateDistance(mouseX, mouseY, balls[0].x, balls[0].y) < ball.size) {
		ballMove = false;
		context.fillStyle = "yellow";
		Utils.fillCircle(mouseX, mouseY, ball.size / 2);
	}
}*/

function bounceBall() {
	if (ballMove) {
		context.fillStyle = "white";
		Utils.FillRectangle(0, 0, width, height);
	    

		for (let i = 0; i < balls.length; i++) {
            
			let ball = balls[i];context.fillStyle = Utils.hsl(ball.hue,50,50);
			Utils.fillCircle(ball.x, ball.y, ball.size);
			ball.x += ball.speedX;
			ball.y += ball.speedY;
        
			if (ball.x > width - ball.size || ball.x < 0) {
				ball.speedX *= -1;
			}

			if (ball.y > height - ball.size || ball.y < 0) {
				ball.speedY *= -1;
			}
		}

		requestAnimationFrame(bounceBall);
	}
}
