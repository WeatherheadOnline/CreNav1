const menu = document.getElementById("menu");
const closeButton = document.getElementById("closeMenu");
const hamburger = document.getElementById("hamburger");
const main = document.getElementsByTagName("main")[0];
const footer = document.getElementsByTagName("footer")[0];
let toggle = false;

hamburger.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (toggle) {
        turnOff();
        dimmerOff();
        toggle = false;
    }
    else {
        turnOn();
        dimmerOn();
        toggle = true;
    }
}

function dimmerOff() {
    document.body.style.animation = "brightenBkgdColor 1s 1";
    main.style.animation = "brightenFilter 1s 1";
    footer.style.animation = "brightenFilter 1s 1";
    document.body.style.backgroundColor = "var(--aquaLt)";
    main.style.filter = "brightness(1)";
    footer.style.filter = "brightness(1)";
}

function dimmerOn() {
    document.body.style.animation = "dimBkgdColor 1s 1";
    main.style.animation = "dimFilter 1s 1";
    footer.style.animation = "dimFilter 1s 1";
    document.body.style.backgroundColor = "#6ecacf";
    main.style.filter = "brightness(0.6)";
    footer.style.filter = "brightness(0.6)";
}

let id = null;

function turnOn() {
    let pos = -270;
    clearInterval(id);
    id = setInterval(frameOn, 8);

    function frameOn() {
        if (pos == 0) {
            clearInterval(id);
        } else {
            pos += 10;
            menu.style.right = `${pos}px`;
        }
    }
}

function turnOff() {
    let pos = 0;
    id = setInterval(frameOff, 8);
    
    function frameOff() {
        if (pos == -270) {
            clearInterval(id);
        } else {
            pos -= 10;
            menu.style.right = `${pos}px`;
        }
    }
}


