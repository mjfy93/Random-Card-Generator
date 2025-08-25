myButton.onclick = function () {
    let suits = ["♦", "♥", "♠", "♣"]
    let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

    let newSuit = suits[Math.floor(Math.random() * suits.length)];
    let newNumber = numbers[Math.floor(Math.random() * numbers.length)];

    document.getElementById("topSuit").innerHTML
     = newSuit;
    document.getElementById("cardNumber").innerHTML = newNumber;
    document.getElementById("bottomSuit").innerHTML = newSuit;

    if (newSuit ==="♠" || newSuit ==="♣"){
       document.getElementById("topSuit").style.color = "black";
        document.getElementById("bottomSuit").style.color = "black";
    
    }else {
        document.getElementById("topSuit").style.color = "red";
        document.getElementById("bottomSuit").style.color = "red";
    }
}





