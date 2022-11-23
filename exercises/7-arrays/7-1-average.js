"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

calcAverage();

function calcAverage(){
    let numbers = [];
    let sum = 0;
    //1000 random getalllen maken
    for (let i = 0; i < 1000; i++) {
        let rand = Utils.randomInt(0,100);
        numbers.push(rand);
        
    }

    for (let j = 0; j < numbers.length; j++) {
        sum += numbers[j];
    }

    let avg = sum/numbers.length;
    
console.log(numbers);
console.log(sum);
console.log(avg);
    
}