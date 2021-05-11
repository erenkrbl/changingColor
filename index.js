const colors = ["red", "yellow", "purple", "blue", "green"];

const randomColorButton = document.querySelector("#randomColorButton");
const addColorButton = document.querySelector("#setColorButton");

randomColorButton.addEventListener("click", changeColors);
addColorButton.addEventListener("click", addColor)

function changeColors(){
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.querySelector("#colorName").innerText = colors[randomIndex];
    document.querySelector("body").style.backgroundColor = colors[randomIndex];


    console.log(colors[randomIndex]);
}

function addColor () {
    const userInput = document.querySelector(".colorInput");
    if(colors.indexOf(userInput.value) === -1) {
        document.querySelector("body").style.backgroundColor = userInput.value;
        colors.push(userInput.value);
        userInput.value = "";
        userInput.focus();
        
    } else {
        alert("The color is already there");
    }

}



