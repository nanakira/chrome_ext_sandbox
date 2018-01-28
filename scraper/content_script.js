console.log("Hello from content_script.js");
var matches = document.querySelectorAll("p.js-tweet-text");
matches.forEach(function(node){
    console.log(node);
});
