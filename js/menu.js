const menu = document.getElementById("menu");
const closeButton = document.getElementById("closeMenu");
const hamburger = document.getElementById("hamburger");
let toggle = false;

hamburger.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (toggle) {
        menu.style.display = "none";
        toggle = false;
    }
    else {
        menu.style.display = "block";
        toggle = true;
    }
}