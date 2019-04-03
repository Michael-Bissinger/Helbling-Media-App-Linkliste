alert( 'Hello, world!' );


/* Hide all content once at the beginning */
document.getElementsByClassName("inside-parakomp-title").style.display = "none";
document.getElementsByClassName("inside-parakomp").style.display = "none";
document.getElementsByClassName("content-inside").style.visibility = "hidden";

document.getElementsByClassName("list-h2").style.visibility = "hidden";

document.getElementById("1.1").style.display = "none";
document.getElementById("1.1").style.display = "none";

var myClasses = document.querySelectorAll('content-inside'),
    i = 0,
    l = myClasses.length;

for (i; i < l; i++) {
    myClasses[i].style.display = 'none';
}



/* Display the hidden content by clicking */



document.getElementById("list-h2").onclick = function() { 
  
    document.getElementById("inside-parakomp-title").style.display = "block";
    document.getElementById("inside-parakomp").style.display = "block";
    document.getElementById("inside-parakomp-link").style.display = "block";
    alert( 'You clicked on the list and the content appeared!' );
  
} 
