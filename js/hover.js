const marketing = document.getElementById("f-marketing");
marketing.addEventListener("mouseover", mHoverEffect);
marketing.addEventListener("mouseout", mUnHover);

function mHoverEffect() {
    marketing.children[0].children[0].style.opacity = "0.18";
    marketing.children[0].children[1].children[0].style.textShadow = "2px 2px 3px var(--aquaLt)";
    marketing.children[0].children[1].children[1].style.opacity = "0.8";
    marketing.children[1].style.filter = "brightness(150%) contrast(75%)";
    marketing.children[2].style.filter = "brightness(150%) contrast(75%)";
    marketing.children[3].style.filter = "brightness(150%) contrast(75%)";
}
function mUnHover(e) {
    marketing.children[0].children[0].style.opacity = "0.1";
    marketing.children[0].children[1].children[0].style.textShadow = "unset";
    marketing.children[0].children[1].children[1].style.opacity = "0.4";
    marketing.children[1].style.filter = "unset";
    marketing.children[2].style.filter = "unset";
    marketing.children[3].style.filter = "unset";
}


const approach = document.getElementById("f-approach");
approach.addEventListener("mouseover", aHoverEffect);
approach.addEventListener("mouseout", aUnHover);

function aHoverEffect() {
    approach.children[1].style.filter = "brightness(150%) contrast(75%)";
    approach.children[0].children[1].style.opacity = "1";
    approach.children[0].children[0].children[0].style.textShadow = "2px 2px 5px black";
}
function aUnHover() {
    approach.children[1].style.filter = "unset";
    approach.children[0].children[1].style.opacity = "0.5";
    approach.children[0].children[0].children[0].style.textShadow = "unset";
}


const portfolio = document.getElementById("f-portfolio");
portfolio.addEventListener("mouseover", portHoverEffect);
portfolio.addEventListener("mouseout", portUnHover);

function portHoverEffect() {
    portfolio.children[0].children[0].children[1].style.textShadow = "2px 2px 5px var(--aquaMd)";
    portfolio.children[0].children[0].children[0].style.opacity = "0.3";
    portfolio.children[1].style.filter = "contrast(50%) brightness(150%)";
}
function portUnHover() {
    portfolio.children[0].children[0].children[1].style.textShadow = "unset";
    portfolio.children[0].children[0].children[0].style.opacity = "0.1";
    portfolio.children[1].style.filter = "unset";
}


const photos = document.getElementById("f-photos");
photos.addEventListener("mouseover", phHoverEffect);
photos.addEventListener("mouseout", phUnHover);

function phHoverEffect() {
    photos.children[0].children[0].children[1].style.textShadow = "2px 2px 5px var(--aquaMd)";
    photos.children[0].children[0].children[0].style.opacity = "0.3";
    photos.children[1].style.filter = "contrast(50%) brightness(150%)";
}
function phUnHover() {
    photos.children[0].children[0].children[1].style.textShadow = "unset";
    photos.children[0].children[0].children[0].style.opacity = "0.1";
    photos.children[1].style.filter = "unset";
}