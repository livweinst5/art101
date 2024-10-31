// index.js - Lab 6: Arrays and Objects
// Author: Liv Weinstein <osweinst@ucsc.edu>
// Date: 24 october

// Define Variables
myTransport = ["Toyata Prius Three, Train, Bike"];

// create an object for my main ride
myMainRide = { 
    make: "Prius",
    model: "Toyata Prius Three",
    color: "Grey",
    year: 2016,
    // we can define a function within our object (called a method)
    // that uses the value of year above (using this.year)
    age : function () {
      return 2023 - this.year;
    }
  }

// output
document.writeln("Kinds of transportation I use: ", myTransport,"</br>");
// this little trick allows us to write an object to the document
document.writeln("My Main Ride: <pre>",
     JSON.stringify(myMainRide, null, '\t'), "</pre>");
//Constanta

//Functions
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
