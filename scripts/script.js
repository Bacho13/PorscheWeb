// >>>>>>>>>>>>>>>>js for top button for resp design>>>>>>>>>>>>>>>>>>>>>


function respMenuDrop(){
    arrowToggle();
    heightChange();
    showMenu();
}

console.log("Hello");


function arrowToggle() {
    var element = document.getElementById("longLineArrow");
    element.classList.toggle("rotate");
 }

 function heightChange() {
    var element = document.getElementById("logLine");
    element.classList.toggle("makeHeightLonger");
 }

 function showMenu(){
    var element = document.getElementById("dropDownMenu");
    element.classList.toggle("showContent");
 }



// ................model slider.........................









