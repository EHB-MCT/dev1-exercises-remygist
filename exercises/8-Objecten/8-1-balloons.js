"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let x = Utils.randomInt(0, width);
let balloons = [];

setup();
drawBallons();


function setup() {
	for (let i = 0; i < 100; i++) {
		let balloon = {
			x: Utils.randomInt(0, width),
			y: Utils.randomInt(height / 2, height),
			radius: 50,
			speedY: Utils.randomInt(1, 10),
            hue: Utils.randomInt(0,60),
			startsStreepX: 0,
            startStreepY: 0,
			eindStreepY: 0
		};
        balloons.push(balloon);
	}
    console.log(balloons)
}


function drawBallons() {
	context.fillStyle = "white";
	Utils.FillRectangle(0, 0, width, height);
	
	for (let i = 0; i < balloons.length; i++) {
let wiggle = Utils.randomInt(1,2);
        let balloon = balloons[i];	
        balloon.startsStreepX= balloon.x ;
        balloon.startStreepY = balloon.y + balloon.radius;
		balloon.eindStreepY = balloon.startStreepY + 50;

        context.strokeStyle = "black";
        Utils.drawLine(balloon.startsStreepX,balloon.startStreepY,balloon.startsStreepX,balloon.eindStreepY);

        context.fillStyle = Utils.hsl(balloon.hue,100,50);
		Utils.fillCircle(balloon.x, balloon.y, balloon.radius);
		if (wiggle == 1) {
			balloon.x += 0.25;
		}else{
			balloon.x -= 0.25;
		}

        balloon.y -= balloon.speedY;
	}

	requestAnimationFrame(drawBallons);
}
