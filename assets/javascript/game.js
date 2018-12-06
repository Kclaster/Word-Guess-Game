
//Pick a Random Word
var wordChoice = ['Narnia', 'Hogwarts', 'Westeros', 'Redwall', 'Hyrule', 'Middle Earth'];
var randomWord = wordChoice[Math.floor(Math.random()*wordChoice.length)];
var guessLeft = randomWord.length;
var  cycle = 0; 
var guessedLetters = [];
console.log(randomWord);

var guessIncluded = function(guess) {
    if (randomWord.includes(guess)) {
        return true;
    } else {
        return false;
    } 
}

var initialSetup = function() {
    count = [];
    for (i = 0; i < randomWord.length; i++) {
        count.push('-');
        
    }
    return count;
}

var correctGuess = function(guess, count) {
    for (i = 0; i < randomWord.length; i++) {
        if (randomWord[i] == guess) {
            count.splice(i, 1, guess);
        }  
    }
    return count;
}



//Event Listener
document.onkeyup = function (event) {
    var userchoice = event.key;
    //Correct Initial Display
    cycle ++
    if (cycle <= 1) {
    initialSetup();
    stringInit = count.join('');
    document.getElementById("hyphens").innerHTML = stringInit;
    document.getElementById("guess-counter").innerHTML = guessLeft;

    //Update UI on Guess
    } else {
        guessedLetters.push(" " + userchoice + " ");
        document.getElementById("guessedLetters").innerHTML = guessedLetters;
        if (guessIncluded(userchoice)){
            correctGuess(userchoice, count);
            stringInit = count.join('');
            document.getElementById("hyphens").innerHTML = stringInit;
        
        } else {
            guessLeft--
            document.getElementById("guess-counter").innerHTML = guessLeft;
        }
    }

    console.log(guessLeft, count)
    return [guessLeft, count]
}










