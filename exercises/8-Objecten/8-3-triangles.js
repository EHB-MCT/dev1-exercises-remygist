"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let triangles = [];

//setup();
//drawTriangles();

setup();
drawTriangles();
function setup() {
	for (let i = 0; i < 200; i++) {
		let centerpuntX = Utils.randomInt(0, width);
		let centerpuntY = Utils.randomInt(0, height);
		let triangle = {
			x1: centerpuntX + Utils.randomInt(30, 70),
			y1: centerpuntY + Utils.randomInt(30, 70),
			x2: centerpuntX + Utils.randomInt(30, 70),
			y2: centerpuntY + Utils.randomInt(30, 70),
			x3: centerpuntX + Utils.randomInt(30, 70),
			y3: centerpuntY + Utils.randomInt(30, 70),
            hue: Utils.randomInt(110,190)
		};
		triangles.push(triangle);
	}
	console.log(triangles);
}

function drawTriangles() {context.fillStyle = "#178282";
Utils.FillRectangle(0, 0, width, height);
	for (let i = 0; i < triangles.length; i++) {
		let triangle = triangles[i];
            triangle.x1 += Utils.randomInt(-2, 2);
            triangle.y1 += Utils.randomInt(-2, 2);
            triangle.x2 += Utils.randomInt(-2, 2);
            triangle.y2 += Utils.randomInt(-2, 2);
            triangle.x3 += Utils.randomInt(-2, 2);
            triangle.y3 += Utils.randomInt(-2, 2);
   
            
        

		context.beginPath();
		context.fillStyle = Utils.hsla(triangle.hue,100,50,80)
		context.moveTo(triangle.x1, triangle.y1);
		context.lineTo(triangle.x2, triangle.y2);
		context.lineTo(triangle.x3, triangle.y3);
		context.lineTo(triangle.x1, triangle.y1);
		context.fill();
		context.closePath();
	}
	requestAnimationFrame(drawTriangles);
}
