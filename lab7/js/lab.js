// index.js - Lab 7: Functions
// Author: Liv Weinstein <osweinst@ucsc.edu>
// Date: 24 october


//Constants

//Functions

//sortUserName- a function tht takes user input and sorts the letters
// of their name
function sortUserName() {
  var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  console.log("userName =", nameArray);
  //sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameSorted =", nameSorted);
  //Note that I could have done the above lines as a single line:
  //  userName. toLower(. split ("").sort()join("")
  return nameSorted;

}

// output
document.writeln("oh hey,I've fixed your name: ",
      sortUserName(), "</br>");
function myFunction(param1,param2) {
  // some code here
  // return results;
}

function Main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
