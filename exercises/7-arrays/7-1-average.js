"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

createList();


function createList(){
    let numbers = [];
    //1000 random getalllen maken
    for (let i = 0; i < 1000; i++) {
        let rand = Utils.randomInt(0,100);
        numbers.push(rand);
    }
    
    console.log(calcAverage(numbers));



}

function calcAverage(List){
    
    let sum = 0;
    
    for (let j = 0; j < List.length; j++) {
        sum += List[j];
    }

    let avg = sum/List.length;
    return avg;
    

    
}