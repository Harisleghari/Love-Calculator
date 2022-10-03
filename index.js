//function of RandomNumber

function randomNumber() {
    let num = Math.random() * 100;
    num = Math.floor(num) + 1;
    document.getElementById("randomPercentage").innerHTML = num  + "%";
}

//Function of reset button
function resetButton() {
    document.getElementById("randomPercentage").innerHTML = 0 + "%";
}