"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawRandomColors(50,50,750);
drawRandomColors(100,100,650);
drawRandomColors(150,150,550);
drawRandomColors(200,200,450);
drawRandomColors(250,250,350);
drawRandomColors(300,300,250);
drawRandomColors(350,350,150);
drawRandomColors(400,400,50);

function drawRandomColors(x,y,size){
    context.beginPath();
    context.fillStyle = "rgb(" + Math.floor(Math.random()*255 + 1) + "," + Math.floor(Math.random()*255 + 1) + "," +  Math.floor(Math.random()*255 + 1) + ")";
    context.rect(x,y,size,size);
    context.fill();
}
    
    
    
    
    
    
    
  

