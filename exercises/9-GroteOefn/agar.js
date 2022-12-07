"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let playerBall = {
	size: 25,
	x: 0,
	y: 0,
}
let botBalls = [];
let gameStart = false;
let gameOver = false;
let gameWon = false;

setup();
bounceBotBalls();
window.onmousemove = mouseBall;
window.onmousedown = startGame;


function setup() {
	context.fillStyle = "white";
	Utils.FillRectangle(0, 0, width, height);
	for (let i = 0; i < 20; i++) {
		let botBall = {
			size: Utils.randomInt(10, 50),
			x: Utils.randomInt(0, width),
			y: Utils.randomInt(0, height),
			speedX: Utils.randomInt(-2.5, 2.5),
			speedY: Utils.randomInt(-2.5, 2.5),
			hue: Utils.randomInt(0, 360),
		};
		botBalls.push(botBall);
	}
	console.log(botBalls);
}

function bounceBotBalls() {
	context.fillStyle = "white";
	Utils.FillRectangle(0, 0, width, height);

	if (gameStart == false) {
		context.fillStyle = "black";
		context.font = "80px Arial";
		context.fillText("START", width / 2 - 150, height / 5);
	}

	for (let i = 0; i < botBalls.length; i++) {
		let botBall = botBalls[i];
		context.fillStyle = Utils.hsl(botBall.hue, 50, 50);
		Utils.fillCircle(botBall.x, botBall.y, botBall.size);

		if (gameStart == true) {
			botBall.x += botBall.speedX;
			botBall.y += botBall.speedY;

			if (botBall.x > width - botBall.size || botBall.x < 0) {
				botBall.speedX *= -1;
			}
			if (botBall.y > height - botBall.size || botBall.y < 0) {
				botBall.speedY *= -1;
			}

			if (Utils.calculateDistance(playerBall.x, playerBall.y, botBall.x, botBall.y) < playerBall.size) {
				if (playerBall.size > botBall.size) {
					playerBall.size += 5;
					botBalls.splice(i, 1);
				} else if (playerBall.size < botBall.size) {
					gameOver = true;
					gameStart = false;
				}
			}

			if (botBalls.length <= 0) {
				gameWon = true;
				gameStart = false;
			}
		}


	}
	Utils.fillCircle(playerBall.x, playerBall.y, playerBall.size);
	if (gameOver == false) {
		requestAnimationFrame(bounceBotBalls);
	}
	if(gameOver == true){
		cancelAnimationFrame(bounceBotBalls);
		context.fillStyle = "white";
					Utils.FillRectangle(0, 0, width, height);
					context.fillStyle = "black";
					context.fillText("Game Over", width / 2 - 300, height / 5);
					context.fillText("Klik om opnieuw te starten", width / 2 - 300, height / 5 + 100);
					window.onmousedown = restartGame;
	}
	if(gameWon == true){
		cancelAnimationFrame(bounceBotBalls);
		context.fillStyle = "white";
					Utils.FillRectangle(0, 0, width, height);
					context.fillStyle = "black";
					context.fillText("Proficiat", width / 2 - 300, height / 5);
					context.fillText("Klik om opnieuw te starten", width / 2 - 300, height / 5 + 100);
					window.onmousedown = restartGame;
	}

}

function mouseBall(eventData) {
	playerBall.x = eventData.pageX;
	playerBall.y = eventData.pageY;
}

function startGame(eventData) {
	gameStart = true;
}

function restartGame(eventData) {
	location.reload();
	
	
}
