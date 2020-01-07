/*
3) Create a node.js module that will respond to a browser request with 
“hello world” in a json response.
The raw json response must be viewable by the browser. 
Also respond with a json formatted error if the url contains an invalid path. 
Use any available npm libraries and provide a list of npm install commands if needed 
to allow the module to run. 
Set up the server to respond to localhost:3009.
*/

// AJAX requests With jQuery.

// Wait for DOM to load before running script.
window.onload = function() {
    // Grab the content div (where the AJAX response will be displayed) and set equal to a variable.
    const content = document.getElementById("content")
    // Listen for click on the JSON Hello Button.
    $(document).on("click", "#getJSON", function (e) {
        // Make sure the page doesn't reload, losing the response.
        e.preventDefault();
        // Standard jQuery/AJAX declaration:
        $.ajax({
          method: "GET",
          // The path /home/ does not exist
          url: "assets/info.json"
        }).then(function(res) {
            content.innerHTML = JSON.stringify(res);
        }).catch((err) => content.innerHTML = JSON.stringify(err));
      });  

    $(document).on("click", "#getError", function (e) {
        e.preventDefault();
        $.ajax({
          method: "GET",
          // The path /home/ does not exist
          url: "/home/"
        }).then(function(res) {
            content.innerHTML = JSON.stringify(res);
        }).catch((err) => content.innerHTML = JSON.stringify(err));
      });  
}