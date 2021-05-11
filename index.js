const colors = ["red", "yellow", "purple", "blue", "gray"];

const buttonElement = document.querySelector("#randomColorButton");

buttonElement.addEventListener("click", changeColors)

function changeColors(){
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.querySelector("body").style.backgroundColor = colors[randomIndex];
    console.log(randomIndex);
}

