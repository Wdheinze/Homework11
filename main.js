var canvas =
    document.getElementsById("myCanvas");
var ctx = canvas.getContext("2d");
var myPics = new Array();
var myPics = ["pics/1.jpg", "pics/2.jpg", "pics/2.jpg", "pics/4.jpg"];

var s1;
var s2;
var s3;
var s4;
var s5;

myPics.push("5.jpg");

var myXs = [];
for (let i = 1; i < 4; i++) {
    myXs.push(50 * i);
}



setInterval(update, 1000);


function setup() {
    canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    s1 = new Square(x, y, 50, 50, "#4530E3")
    s2 = new Square(x, y, 50, 50, "#4530E3")
    s3 = new Square(x, y, 50, 50, "#4530E3")
    s4 = new Square(x, y, 50, 50, "#4530E3")

    drawSquare()

}

function drawSquare() {
    ctx.fillRect(0, 0, 20, 20);
    ctx.fillStyle = s1.mainColor;
    ctx.fillRect(s1.x, s1.y, s1.width, s1.height);
    ctx.fillStyle = s2.mainColor;
    ctx.fillRect(s2.x, s2.y, s2.width, s2.height);
    ctx.fillStyle = s3.mainColor;
    ctx.fillRect(s3.x, s3.y, s3.width, s3.height);
    ctx.fillStyle = s4.mainColor;
    ctx.fillRect(s4.x, s4.y, s4.width, s4.height); ctx.fillStyle = s5.mainColor;
    ctx.fillRect(s5.x, s5.y, s5.width, s5.height);
}


$(document).ready(function () {

    setup();

    $(this).keypress(function (event) {
        getKey(event);
    });
});

function getKey(event) {
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if (actualLetter == "w") {
        moveUp();
    }
    if (actualLetter == "s") {
        moveDown();
    }
    if (actualLetter == "a") {
        moveLeft();
    }
    if (actualLetter == "d") {
        moveRight();
    }
    drawSquare();
}


function moveUp() {
    square1.setY(square1.theY - 10);
}
function moveDown() {
    square1.setY(square1.theY + 10);
}
function moveLeft() {
    square1.setX(square1.theX - 10);
}
function moveRight() {
    square1.setX(square1.theX + 10);
}
drawSquare()

function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}