const menu = document.getElementById("menu");
const closeButton = document.getElementById("closeMenu");
const hamburger = document.getElementById("hamburger");
const main = document.getElementsByTagName("main")[0];
let toggle = false;

hamburger.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (toggle) {
        menu.style.display = "none";
        toggle = false;
        main.style.filter = "brightness(1)";
        document.body.style.backgroundColor = "var(--aquaLt)";
    }
    else {
        menu.style.display = "block";
        toggle = true;
        main.style.filter = "brightness(0.6)";
        document.body.style.backgroundColor = "#6ecacf";
    }
}