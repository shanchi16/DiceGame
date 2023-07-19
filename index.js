var num1 = Math.floor(Math.random() * 5) + 1;
var num2 = Math.floor(Math.random() * 5) + 1;

var diceImage1 = "images/" + "dice" + num1 + ".png";
var diceImage2 = "images/" + "dice" + num2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", diceImage1 );
document.querySelectorAll("img")[1].setAttribute("src", diceImage2 );

if (num1 > num2) {
    document.querySelector("h1").innerHTML = " Player 1 wins";
}else if (num1 < num2) {
    document.querySelector("h1").innerHTML = " Player 2 wins";
}else {
    document.querySelector("h1").innerHTML = " Draw !";
}