function randomNumber() {
    let num = Math.random() * 100;
    num = Math.floor(num) + 1;
    document.getElementById("randomPercentage").innerHTML = num  + "%";
}

function resetButton() {
    document.getElementById("randomPercentage").innerHTML = 0 + "%";
}