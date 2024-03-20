
let randomNumber = Math.floor(Math.random()*100+1)
const userInput = document.querySelector('input');
const submitButton = document.querySelector('.submit');
const res = document.querySelector('.result');
const prevGuessSlot = document.querySelector('.prev-guesses');
const guessesRem = document.querySelector('.guesses-rem');
let prevGuesses = [];
let guesses = 1;
let playGame = true;
const h3=document.createElement('h3');
const original = prevGuessSlot.innerText;
const lowOrHigh = document.createElement('p');



if(playGame){
    submitButton.addEventListener('click',function(e){
     e.preventDefault();
     const guess = parseInt(userInput.value); 
     validateGuess(guess); 
    })
}
function validateGuess(guess){
    if(isNaN(guess)){alert('please enter a number only!')}
    else if(guess<1 || guess>100){alert('please enter a number between 1 and 100(both inclusive).')}
    else{
       if(guesses === 11 ){
       displayMessage(`Game Over. Random number was ${randomNumber}`);
       endGame();
       }
       else{
        displayGuess(guess);
        checkGuess(guess);
       }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right!`);
        
    }
    else if(guess < randomNumber){
        displayMessage('Guessed Number is Low');
    }
    else{
        displayMessage('Guessed Number is High');
    }
}


function displayGuess(guess){
prevGuessSlot.innerText += `${ guess},   `;
userInput.value = '';
guesses++;
guessesRem.innerText = `${11-guesses}`;

}

function displayMessage(message){

    lowOrHigh.innerText = message;
    lowOrHigh.style.fontSize = '20px';
    lowOrHigh.style.fontWeight = '500';
    lowOrHigh.style.color = 'yellow';
    res.appendChild(lowOrHigh);
    if(message === 'You guessed it right!'){
       endGame();
    }
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    h3.innerText = 'Start a New Game';
    h3.id = 'newGame';
    h3.style.backgroundColor = 'rgba(25, 23, 23, 0.842)';
    h3.style.padding = '8px 20px';
    h3.style.width = 'fit-content';
    h3.style.margin='auto';
    
    
h3.addEventListener('mouseenter', function() {
    this.style.cursor = 'pointer';
  });
  
  h3.addEventListener('mouseleave', function() {
    this.style.cursor = 'auto';
  });
    h3.style.borderRadius = '12px';
    res.appendChild(h3);
    playGame=false;
    newGame();
}

function newGame(){
const newGameButton = document.querySelector('#newGame');
newGameButton.addEventListener('click',e=>{
     res.removeChild(lowOrHigh);
    randomNumber =  Math.floor(Math.random()*100+1);
    prevGuesses = [];
    guesses = 1;
    prevGuessSlot.innerText = original;
    guessesRem.innerText = `${11-guesses}`;
    userInput.removeAttribute('disabled');
    res.removeChild(h3);
    playGame = true;
})
}
