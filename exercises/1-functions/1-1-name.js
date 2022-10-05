"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawName();

function drawName() {
    ///RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
    context.beginPath();
    context.strokeStyle = "red";
    context.moveTo(200, 50);
    context.lineTo(200, 150);
   
    context.moveTo(200, 50);
    context.lineTo(300, 50);

    context.lineTo(300, 100);

    context.lineTo(200, 100);

    context.lineTo(300, 150);
    context.stroke();

    //EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
    context.beginPath()
    context.strokeStyle = "blue";
    context.moveTo(350, 50);
    context.lineTo(350, 150);

    context.moveTo(350, 50);
    context.lineTo(450, 50);

    context.moveTo(350, 100);
    context.lineTo(450, 100);

    context.moveTo(350, 150);
    context.lineTo(450, 150);
    context.stroke();

    //MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
    context.beginPath()
    context.strokeStyle = "green";
    context.moveTo(500, 50);
    context.lineTo(500, 150);
 
    context.moveTo(500, 50);
    context.lineTo(550, 100);
    
    context.lineTo(600, 50);

    context.lineTo(600, 150);
    context.stroke();

    //YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
    context.beginPath()
    context.strokeStyle = "purple";
    context.moveTo(650, 50);
    context.lineTo(700, 85);
 
    context.moveTo(750, 50);
    context.lineTo(700, 85);
  
    context.lineTo(700, 150);
    context.stroke();

}