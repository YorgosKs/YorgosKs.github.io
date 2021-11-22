console.log(window.innerWidth);

var cursor = true;
var speed = 800;
setInterval(() => {
  if (cursor) {
    document.getElementById("cursor").style.opacity = 0;
    cursor = false;
  } else {
    document.getElementById("cursor").style.opacity = 1;
    cursor = true;
  }
}, speed);

let btn = document.querySelector(".btn");
let nav = document.querySelector(".nav");

nav.addEventListener("click", function () {
  nav.style.visibility = "hidden";
});

btn.addEventListener("click", function () {
  var nav = document.querySelector(".nav");
  if (nav.style.visibility === "hidden") {
    nav.style.visibility = "visible";
  } else {
    nav.style.visibility = "hidden";
  }
});

let links = document.querySelectorAll(".nav ul li a");
links.forEach(function (element) {
  element.addEventListener("click", function (e) {
    links.forEach(function (element) {
      element.classList.remove("active");
    });
    this.classList.add("active");
  });
});

// let w = window.innerWidth;
