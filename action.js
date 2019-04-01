alert( 'Hello, world!' );


/* Hide all content once at the beginning */
document.getElementById("inside-parakomp-title").style.display = "none";
document.getElementById("inside-parakomp").style.display = "none";

document.getElementById("1.1").style.display = "none";
document.getElementById("1.1").style.display = "none";


/* Display the hidden content by clicking */

document.getElementById("list-h2").onclick = function() { 
  
    document.getElementById("inside-parakomp-title").style.display = "block";
    document.getElementById("inside-parakomp").style.display = "block";
    document.getElementById("inside-parakomp-link").style.display = "block";
    alert( 'You clicked on the list and the content appeared!' );
  
} 
