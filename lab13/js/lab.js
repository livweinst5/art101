/*
  index.js - This simple JavaScript/jQuery script get a value from an input field and output
  Requirements: jQuery must be loaded for this script to work.
  Author: Liv Weinstein <osweinst@ucsc.edu>
  Date: 18 novemeber
*/


// Loop through numbers 1 to 200, listing them as you go
// If the number is a multiple of 3, if should print "Fizz!"
// If the number is a multiple of 5, it should print "Buzz!"
// If the number is a multiple of more than one (like both 3 and //5)it should combine Fizz and Buzz. For example, if the number is a multiple of 3 AND 5, it should print "FizzBuzz!" and so on.
// If the number is a multiple of BOTH (both) it will print //Boom "7"7, "FizzBuzz!"
function FizzBuzz() {
  var oneLongString = "";

  for (var num = 1; num <= 200; num++) {
    // create an empty string
    var str = "";

    if ((num %3)== 0) str += "Fizz!";
    if ((num %5)== 0) str += "Buzz!";
    if ((num %7)== 0) str += "Boom!";
    // Add number 

    if (!str.length) str =num;

    // Append to our long string with a line break after each entry
      oneLongString += "<p>" +str+ "</p>"
}
$("#output").html(oneLongString);
}

FizzBuzz();

