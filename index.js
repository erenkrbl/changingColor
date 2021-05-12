const colors = [
    {
        name:"red",
        motto:"Rose Red",
    }, 
    {
        name:"gray",
        motto:"Smoke Gray",
    }, 
    {
        name:"purple",
        motto:"Deep Purple",
    }, 
    {
        name:"blue",
        motto:"Ocean Blue",
    }, 
    {
        name:"green",
        motto:"Grass Green",
    }
];

const randomColorButton = document.querySelector("#randomColorButton");
const addColorButton = document.querySelector("#setColorButton");

randomColorButton.addEventListener("click", changeColors);
addColorButton.addEventListener("click", addColor)

function changeColors(){
    const randomIndex = Math.floor(Math.random() * colors.length);

    console.log(randomIndex);
    document.querySelector("#colorName").innerText = colors[randomIndex].name;
    document.querySelector("#colorDesc").innerText = colors[randomIndex].motto;
    document.querySelector("body").style.backgroundColor = colors[randomIndex].name;


    console.log(colors[randomIndex].motto);
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



