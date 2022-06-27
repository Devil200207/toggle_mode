import "./styles.css";

var main = document.getElementById("body");
var outer = document.getElementById("outer1");
var text = document.getElementById("text");

var count = 0;

function change() {
  count++;

  if (count % 2 != 0) {
    main.style.backgroundColor = "black";
    text.style.color = "white";
  } else {
    main.style.backgroundColor = "white";
    text.style.color = "black";
  }
}

outer.addEventListener("click", change);
