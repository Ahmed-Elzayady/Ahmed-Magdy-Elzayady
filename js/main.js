icon = document.querySelector(".icon");
icon.onclick = function () {
  navBar = document.querySelector(".bar");
  navBar.classList.toggle("active");
};

var text = "I'm Ahmed Elzayady , I work as Embedded System Engineer ..... ";
var speed = 160; // milliseconds
var i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("type-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, speed);
  }
}
type();

var texttwo = "Aliens idea , Human Code";
var speed2 = 160; // milliseconds
var x = 0;

function typetwo() {
  if (x < texttwo.length) {
    document.getElementById("type-text2").innerHTML += texttwo.charAt(x);
    x++;
    setTimeout(typetwo, speed2);
  }
}

typetwo();
