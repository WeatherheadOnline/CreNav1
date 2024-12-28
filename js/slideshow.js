const lowerLeftImgs = Array.from(document.getElementsByClassName("f-m-lower-left"));
const upperRightImgs = Array.from(document.getElementsByClassName("f-m-upper-right"));
const lowerRightImgs = Array.from(document.getElementsByClassName("f-m-lower-right"));


let i = 0;
function changeImageLowerLeft() {
    i++;
    if (i == lowerLeftImgs.length) {i = 0}; 
    lowerLeftImgs[i].style.opacity = "1";
    setTimeout(() => {
        if (i != 0) {lowerLeftImgs[0].style.opacity = "0"};
        if (i != 1) {lowerLeftImgs[1].style.opacity = "0"};
        if (i != 2) {lowerLeftImgs[2].style.opacity = "0"};
    }, 300);
}
setTimeout(() => {setInterval(changeImageLowerLeft, 5000)}, 1000);

let j = 0;
function changeImageUpperRight() {
    j++;
    if (j == upperRightImgs.length) {j = 0}; 
    upperRightImgs[j].style.opacity = "1";
    setTimeout(() => {
        if (j != 0) {upperRightImgs[0].style.opacity = "0"};
        if (j != 1) {upperRightImgs[1].style.opacity = "0"};
        if (j != 2) {upperRightImgs[2].style.opacity = "0"};
    }, 300);
}
setInterval(changeImageUpperRight, 5000);

let k = 0;
function changeImageLowerRight() {
    k++;
    if (k == lowerRightImgs.length) {k = 0}; 
    lowerRightImgs[k].style.opacity = "1";
    setTimeout(() => {
        if (k != 0) {lowerRightImgs[0].style.opacity = "0"};
        if (k != 1) {lowerRightImgs[1].style.opacity = "0"};
        if (k != 2) {lowerRightImgs[2].style.opacity = "0"};
    }, 300);
}
setTimeout(() => {setInterval(changeImageLowerRight, 5000)}, 2000);