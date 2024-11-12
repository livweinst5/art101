/*
   index.js - This simple JavaScript/jQuery script get a value from an input field and output

    Requirements: jQuery must be loaded for this script to work.

    index.js - Lab 11: JavaScript Events and Forms
    Author: Liv Weinstein <osweinst@ucsc.edu>
    Date: 11 November
*/

// Sorts the characters of a string in alphebetical order.
function sortsSring(inputstring) {
 // We have to convery out string to an array and back again to sort it
 return inputstring.split('').sort().join('');
}

// click listener for button
$("#submit").click(function() {
  // get value of input feild
  const text = $("#userInput").val();

  // now let's sort it
  userNameSorted = sortString(text);

  // append a new div to our output div
  $("#output").html('<div class="userText"><p>' + userNameSorted + '</p></div>');
  // <== also chnaged 'input to 'userNameSorted'});
});