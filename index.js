
var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomnumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice" + randomnumber1 + ".png");
document.querySelector(".img2").setAttribute("src","images/dice" + randomnumber2+ ".png");

if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerText = "🚩 Player 1 Won";
} else if (randomnumber1<randomnumber2) {
    document.querySelector("h1").innerText = "Player 2 Won 🚩";
}else{
    document.querySelector("h1").innerText = "Draw";
}  