//inital background image fixed in position- low z score
//bottom images set display to none(only 2 images loaded at first)
//text with transparent background scrolls up on screen followed immediately by new image (higher z scores)
var x = window.matchMedia("(max-width: 1080px)");

function myFunction(x) {
  var y = window.outerHeight;
  pics=[];
    pics.push(document.getElementsByClassName("parallax"));
    pics.push(document.getElementsByClassName("parallax2"));
    pics.push(document.getElementsByClassName("parallax3"));
  console.log(pics);
    for (let i=0;i<pics.length;i++){
      pics[i].style.height="y";
    }

}
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
