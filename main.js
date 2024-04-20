//letters////////////////////////////////////////////////////////////////
const letters = "abcdefghijklmnopqrstuvwxyz1234567890";

let lettersArray = Array.from(letters);

let lettersContainer = document.querySelector (".letters");

lettersArray.forEach(letter => {
    let span = document.createElement("span");
    let theLetter = document.createTextNode(letter);
    span.appendChild(theLetter);
    span.className = 'letter-box';
    lettersContainer.appendChild(span);
});

const words = {
    programmingLanguage : ["CSS" , "Java Script" , "html" , "python"],
    names : ["medo" , "mado" , "dodo" , "lala"],
};

let allKeys = Object.keys(words);

let randomPropNumber = Math.floor(Math.random() * allKeys.length);

let randomPropName = allKeys[randomPropNumber];

let randomPropValue = words[randomPropName];

let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

let randomValueValue = randomPropValue[randomValueNumber];

document.querySelector(".game-info .category span").innerHTML = randomPropName;
console.log(randomValueValue);
let lettersGuessContainer = document.querySelector(".letters-guess");

let lettersAndSpace = Array.from(randomValueValue);

lettersAndSpace.forEach(letter => {
    let emptySpan = document.createElement("span");
    
    if (letter === ' ') {
        emptySpan.className = 'with-space';
    }

    lettersGuessContainer.appendChild(emptySpan);
});

// select guess spans
let guessSpans = document.querySelectorAll(".letters-guess span");

//set the choose status
let wrongAttempts = 0;

let theDraw = document.querySelector(".hangman-draw");

// Handle clicks on the letters
document.addEventListener("click" , (e) => {
    
    let theStatus = false;

    if (e.target.className === 'letter-box') {
        
        e.target.classList.add("clicked");

        let theClickedLetter = e.target.innerHTML.toLowerCase();

        theChosenWord = Array.from(randomValueValue.toLowerCase());
        
        theChosenWord.forEach((wordLetter, wordIndex) => {
            
            if (theClickedLetter == wordLetter) {
                
                theStatus = true;
                // console.log(theStatus);

                // console.log(`found at index number ${wordIndex}`);

                guessSpans.forEach((span , spanIndex) => {

                    if (wordIndex === spanIndex) {
                        span.innerHTML = theClickedLetter;
                }
            });
            
        }
        
    }

        )
    
        if (theStatus !== true) {
            wrongAttempts++;
            theDraw.classList.add(`wrong-${wrongAttempts}`);
            document.getElementById("fail").play();
            if (wrongAttempts === 8) {
                endGame();
                lettersContainer.classList.add("finished");
            }
        }else {
            document.getElementById("success").play();
        }
    }

});
function endGame() {
    let div = document.createElement("div");
    let divText = document.createTextNode(`Game over , The Word is ${randomValueValue}`);
    div.appendChild(divText);
    div.className = "popup";
    document.body.appendChild(div);
}