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
    const colorData = userInput.value.split(":");

    const colorObject = {
        name: colorData[0],
        motto: colorData[1], 
    };
    // indexOf sadece flat array (["red", "green", "blue"]) geçerlidir.
    // findIndex object arraylede geçerli
    if(colors.findIndex((color) => color.name === colorObject.name) === -1) {
        document.querySelector("body").style.backgroundColor = colorObject.name;
        document.querySelector("#colorName").innerText = colorObject.name;
        document.querySelector("#colorDesc").innerText = colorObject.motto;
        console.log(colorObject.motto);
        
        
        colors.push(colorObject);
        userInput.value = "";
        userInput.focus();
        
    } else {
        alert("The color is already there");
    }

}



