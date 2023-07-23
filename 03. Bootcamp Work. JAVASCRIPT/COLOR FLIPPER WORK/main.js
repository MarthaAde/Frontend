function changeBackgroundColor() {
    let hexColor = generateRandomHexColor();
    document.body.style.backgroundColor = hexColor;
    document.getElementById("colorCode").textContent = hexColor;
  //  document.getElementsByClassName("maincontainer").textContent = hexColor;
}

function generateRandomHexColor() {
    let hexValues = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hexValues[Math.floor(Math.random() * 16)];
    }
    return color;
}
