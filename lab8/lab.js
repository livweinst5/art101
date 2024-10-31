// index.js - Lab 8: Anon Functions and Callbacks
// Author: Liv Weinstein <osweinst@ucsc.edu>
// Date: 31 october



function oddWay(x){
 return (x-2 == 0);
    
}

//test function
console.log("Is 1 even? ", oddWay(1));
console.log("Is 2 even? ", oddWay(2));

array = [100, 27, 14, 26, 400]
console.log("My array", array);

var result = array.map(oddWay);
//should return [false, false, false, false, false, false]
console.log("Test of evenness of array;", result);

var result = array.map(function(x){
    return x ** 0.13;

})

// should return [1.8197008586099834, 1.534890115649325, 1.5196102039986283, 1.4092779102900412, 1.5273780154814814824, 2.1790530269622352]
console.log("squareroot of array:", result);
