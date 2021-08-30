// TODO Reverse a string
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
// Compress a string of characters
// For example, an input of "aaabbbbbccccaacccbbbaaabbbaaa" would compress to "3a5b4c2a3c3b3a3b3a"



// TODO BONUS CHALLENGE: Palindrome
// A word, phrase, or sequence that reads the same backward as forward i.e. madam
// Write code that takes a user input and checks to see if it is a Palindrome and reports the result
