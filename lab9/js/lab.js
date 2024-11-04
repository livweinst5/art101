/*
    lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

    Requirements: jQuery must be loaded for this script to work.

    index.js - Lab 9: Libraries & jQuery
    Author: Liv Weinstein <osweinst@ucsc.edu>
    Date: 31 october
*/

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
// add a click listener to the challenge button
$("button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});
// add button to problem section
$("#problem").append("<button id='button-problem'>Make Special</button>");
// add a click listener to the problem button
$("button-problem").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#problem").toggleClass("special");
});
 // add button to results section
$("#results").append("<button id='button-results'>Make Special</button>");
// add a click listener to the results button
$("button-results").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#results").toggleClass("special");
});
 