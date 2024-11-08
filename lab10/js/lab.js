/*
    lab.js - This simple JavaScript/jQuery script appends new elements to an output div

    Requirements: jQuery must be loaded for this script to work.

    index.js - Lab 10: JavaScript for the Web 
    Author: Liv Weinstein <osweinst@ucsc.edu>
    Date: 7 November 
*/

function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur apipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(math.random() * (max - min +1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen +1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
}
// click listener for button
$("#make-convo").click(function(){
    // Get new fake dialogue
    const newText= generateRandomText();

    // append a new div to out output div
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});

// click listener for submit button
$("#submitButton").click(function(){
    // get userInput value
    var input = $("#userInput").val();

    // append a new div to our output div
    $("#output").append('<div class="userText"><p>' + input + '</p></div>');
});