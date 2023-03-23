"use strict"


//element

const check = document.querySelector(".check");
const input = document.querySelector(".input-number");
const gussingText =document.querySelector(".guessing-text");
const correctAns = document.querySelector(".game-correct-ans");
const score = document.querySelector(".score");
const highScore = document.querySelector(".high-score");
const playAgain = document.querySelector(".play-again");

// variables

let SECRET_NUMBER = Math.trunc(Math.random() * 20 + 1);
let SCORE =20;
let HIGH_SCORE = 0;

// display text

function displayGuessingText(text){
    gussingText.textContent = text;
}

//checking

check.addEventListener("click",()=>{
  const inputNumber = Number(input.value);
  
  // when there is no input

  if(!inputNumber) displayGuessingText("Input a valid number 😊")
  //when player Win
  else if(inputNumber === SECRET_NUMBER){
       displayGuessingText("Correct Ans.Congratulations 🎉🎉.you are win")
       correctAns.textContent = SECRET_NUMBER;
       
       correctAns.getElementsByClassName.backgroundColor = "#222";
       document.body.style.backgroundColor = "teal";

       if(SCORE > HIGH_SCORE) {
        HIGH_SCORE = SCORE;
        highScore.textContent = HIGH_SCORE;
       }
    }

    else if(inputNumber !== SECRET_NUMBER){
             if (SCORE > 1) {
                displayGuessingText(
                    inputNumber > SECRET_NUMBER ? 'Too High' : 'Too Low'
                );
                SCORE --;  
                score.textContent = SCORE; 
             }
             else{
                displayGuessingText("Game Over");
                score.textContent = 0 
             }
    }
});

playAgain.addEventListener('click', ()=>{
    SCORE = 20;
    SECRET_NUMBER = Math.trunc(Math.random() * 20 + 1);

    displayGuessingText("Start guessing.....");
    document.body.style.backgroundColor = "#222";
    correctAns.style.backgroundColor = "teal";
    correctAns.textContent = "?" 
    score.textContent = SCORE;
    input.value = "";
})