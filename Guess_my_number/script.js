"use strict";

let againBtn = document.querySelector(".again");
let bigNumber = document.querySelector(".number");
let bodyEle = document.querySelector("body");

//left section
let inputBox = document.querySelector(".guess");
let checkBtn = document.querySelector(".check");


//right section
let message = document.querySelector(".message");
let score = document.querySelector(".score");
let highScoreEle = document.querySelector(".highscore");

let secretNumber = Math.floor(Math.random() * 20 + 1); //secretNUmber will be between 0 -> 0.99999 -> 1
console.log(secretNumber);
let currentScore = 20;
let highScore = 0;

checkBtn.addEventListener("click", function(event){
    let inputNum = Number(inputBox.value);
    if(inputNum === secretNumber){
            bigNumber.textContent = secretNumber;
            if(currentScore > highScore){
                highScore = currentScore;
                highScoreEle.textContent = currentScore;
            }
            message.textContent = "Correct Number!!"
            bodyEle.style.backgroundColor = "green";
    }
    if(inputNum > secretNumber){
        message.textContent = "Too High!!"
        currentScore--;
        score.textContent = currentScore;
    }
    if(inputNum < secretNumber){
        message.textContent = "Too Low!!"
        currentScore--;
        score.textContent = currentScore;
    }

});

againBtn.addEventListener("click", function(event){
    currentScore = 20;
    score.textContent = currentScore;
    message.textContent = "Start guessing...";
    inputBox.value = "  ";
    bodyEle.style.backgroundColor = "#222";
    secretNumber = Math.floor(Math.random() * 20 + 1);
    bigNumber.textContent = "?";
    console.log(secretNumber);
    });
