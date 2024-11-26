/*
  index.js - This simple JavaScript/jQuery script get a value from an input field and output
  Requirements: jQuery must be loaded for this script to work.
  Author: Liv Weinstein <osweinst@ucsc.edu>
  Date: 14 novemeber
*/
// pretend we got this from our api
// for testing only
// let data = {
// "answer": "no",
// "forced": false,
// "image": "http://yesno.wtf/assets/no/12-dafd576be23d376864130f76658ddfe.gif"
// }
// attach click action to buton
$("#Activate").click(function(){
})
    // get data via ajax from numberspai
    // Using the core $.ajac() method
    $.ajac({
      // The URL for the request
      url: "https://yesno.wtf/api",
    // The data to send (will be conerted to a query string)
       data: { id: 123},
       // Whether this is a POST or GET request
       type: "GET",
       // The typre of data we expect back
       dataType : "json",
    })
 // If the request succeeds
 .done(function( data ) {
  console.log(data);
 $("#output").append("<h1>" + data.answer);
 $("#output").append("<img src='" + data.image + "'>")
})
// If the request fails
.fail(function( xhr, status, errorThrown) {
  console.log(errorThrown + " Status:" + status );
})