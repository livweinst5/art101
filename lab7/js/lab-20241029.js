// index.js - Lab 7: Functions
// Author: Liv Weinstein <osweinst@ucsc.edu>
// Date: 24 october


// get a string from the user, sort it, return the sorted string
function sortStr() {
    let userName = window.prompt("Enter a name; ");
    return userName.split("").sort().join("");
}

// call the function and print the results to the html doc
document.writeln(sortStr());

