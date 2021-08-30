// Reverse a string
// Write code that takes a string as input and returns the string reversed
// i.e. “Hello” will be returned as “olleH”

function reverseAString (string) {
    let reversed = ""
    for(let i = string.length - 1; i >= 0; i--) {
        reversed = reversed + string[i];
    }
    return reversed;
}

console.log(reverseAString("hello"));

// TODO Capitalize letter
// Write code that takes a string as input and capitalize the first letter of each word. Words will be separated by only one space. i.e. “hello world” should be outputted as “Hello World”

function capitalizeEveryWordOfAString (string) {
    let firstLetterCapitalizedString = "";
    
    for(let j = 0; j < string.length; j++) {
        if (j == 0) {
            firstLetterCapitalizedString += string[j].toUpperCase();   
        } else if (j > 0) {
            if (string[j - 1] == " ") {
                firstLetterCapitalizedString += string[j].toUpperCase();
            } else {
                firstLetterCapitalizedString += string[j];
            }
            
        } 
    }
    return firstLetterCapitalizedString;
}

console.log(capitalizeEveryWordOfAString("hello this is a test"));

// ! Done with built in functions

function capitalizeEveryWordOfAStringLib (string) {
    let words = string.split(" ");

    for (let i = 0; i < words.length; i++) {

        words[i] = words[i][0].toUpperCase() + words[i].substr(1);

    }

    return words.join(" ");
}


console.log(capitalizeEveryWordOfAStringLib("hello this is a test"));

// TODO Compress a string of characters
// For example, an input of "aaabbbbbccccaacccbbbaaabbbaaa" would compress to "3a5b4c2a3c3b3a3b3a"

function compressAString (string) {
    
    let tempArray = string.split("");
    let letters = [];
    let counter = 1;
    let compressedString = "";

    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i] == tempArray[i+1]) {
            counter++
        } else {
            let value = `${counter}${tempArray[i]}`;
            letters.push(value);
            counter = 1;
        }
    }
    compressedString = letters.toString();
    return compressedString.split(",").join("");
    
}

console.log(compressAString("aaabbbbbccccaacccbbbaaabbbaaa"));


// TODO BONUS CHALLENGE: Palindrome
// A word, phrase, or sequence that reads the same backward as forward i.e. madam
// Write code that takes a user input and checks to see if it is a Palindrome and reports the result
