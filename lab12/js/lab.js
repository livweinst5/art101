/*
  index.js - This simple JavaScript/jQuery script get a value from an input field and output
  Requirements: jQuery must be loaded for this script to work.
  Author: Liv Weinstein <osweinst@ucsc.edu>
  Date: 14 novemeber
*/

// Return Gyffindor, Ravenclaw, Slytherin, and Hufflepuff
// depending on length mod 4
function sortingHat(str) {
  len = str.length;
  mod = len % 4;

  if (mod == 0) {
      return "Gryffindor";
  }
  else if (mod == 1) {
      return "Ravenclaw";
  }
  else if (mod == 2) {
      return "Slytherin";
  }
  else if (mod == 3) {
    return "Hufflepuff";
  }
}

// attach click handler to submit button
$("#button").click(function() {
  console.log("Button clicked");

  //get the value in the #input text box, asign to a variable name
  var name = $("#input").val();
  // get the house
  var house = sortingHate(name);

  newText = "<p>The Sorting Hat has sorted you into " + house + "</p";
  console.log("House: " + house);
  $("#output").html("<h1>" + house + "</h1>");
})