//var jsos = '[{ "x": "10", "y": "10","w": "50","h": "50","color": "#4530E3"}]';
var canvas;
var ctx;
var x = 50;
var y = 50;
var lives = 3;
var myPics = new Array();
var s1, s2, s3, s4, s5;

var myXs = [];
for (let i = 1; i < 4; i++) {
    myXs.push(50 * i);
}
//setInterval(update, 1000);
//get ready

$(document).ready(function () {

    setup();

    $(this).keypress(function (event) {
        getKey(event);
    });
});




function setup() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
   
/*    s1 = new Square(x, y, 50, 50, "#4530E3")
    s2 = new Square(x, y, 20, 20, "#4530E3")
    s3 = new Square(x, y, 0, 50, "#4530E3")
    s4 = new Square(x, y, 50, 50, "#4530E3")
*/
// the function was closed when the ")" was after the .json" part.  In jQuery
// the function isn't closed until the end.
    $.getJSON("Json.json", function(data) {
        console.log(data);
            for (var i = 0; i < data.squares.length; i++) {
                // the width and height is "w" and "h" in your json file
                myPics.push(new Square(data.squares[i].x, data.squares[i].y, data.squares[i].w, data.squares[i].h, data.squares[i].color));
            }
            drawSquare();
        });
        
    
}

function drawSquare() {
    for (var i = 0; i < myPics.length; i++) {
        ctx.fillStyle = myPics[i].mainColor;
        ctx.fillRect(myPics[i].x, myPics[i].y, myPics[i].width, myPics[i].height);
    }
    ctx.font = "24px Arial";
    ctx.fillText("lives:" + lives, 50, 50);
}




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

function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}