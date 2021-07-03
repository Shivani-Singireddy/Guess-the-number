'use strict';

var secretNumber = Math.trunc(Math.random() *20)+1;
const number=document.querySelector('.secret-number');

const btnCheck = document.querySelector('.btn-check');
const btnAgain = document.querySelector('.btn-again'); 
const message = document.querySelector('.p2');

var score=20;
const displayScore = document.querySelector('.score');
console.log(displayScore);
displayScore.textContent = score;

var highScore = 0;
const displayHighScore = document.querySelector('.high-score');
displayHighScore.textContent = highScore;

btnCheck.addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    if(score>0){
        if(guess>0 && guess<21){
            if(guess == secretNumber){
                message.textContent="You are correct👏✔";
                if(score > highScore){
                    highScore=score;
                    displayHighScore.textContent= score;
                }else{
                    displayScore.textContent=score;
                }
            }else if(guess > secretNumber){
                message.textContent="You are too high ⬆";
                score--;
                displayScore.textContent=score;
            }else{
                message.textContent="You are too low ⬇";
                score--;
                displayScore.textContent=score;
            }
        }else{
            message.textContent="Please provide valid input❎";
        }
    }else{
        message.textContent="You lost the game😕";
    }
});

btnAgain.addEventListener('click',function(){
    secretNumber=Math.trunc(Math.random()*20)+1;
    const number=secretNumber;
    message.textContent="Start guessing"
    document.querySelector('.guess').value="";
    score=20;
    displayScore.textContent=score;
});