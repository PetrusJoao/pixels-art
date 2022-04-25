const elementoPreto = document.getElementById("black");
const elementoVermelho = document.getElementById("red");
const elementoAzul = document.getElementById("blue");
const elementoVerde = document.getElementById("green");


elementoPreto.classList.add("selected");

function colorSelected(event){
    if(event.target == elementoVermelho){
        elementoVermelho.classList.add("selected");
        elementoAzul.classList.replace("selected", "color");
        elementoVerde.classList.replace("selected", "color");
        elementoPreto.classList.replace("selected", "color");
    }
    else if(event.target == elementoAzul){
        elementoAzul.classList.add("selected");
        elementoVermelho.classList.replace("selected", "color");
        elementoVerde.classList.replace("selected", "color");
        elementoPreto.classList.replace("selected", "color");
    }
    else if(event.target == elementoVerde){
        elementoVerde.classList.add("selected");
        elementoAzul.classList.replace("selected", "color");
        elementoVermelho.classList.replace("selected", "color");
        elementoPreto.classList.replace("selected", "color");
    }
    else if(event.target == elementoPreto){
        elementoPreto.classList.add("selected");
        elementoAzul.classList.replace("selected", "color");
        elementoVerde.classList.replace("selected", "color");
        elementoVermelho.classList.replace("selected", "color");
    }
}

let colorSelection = document.getElementById("color-palette");
colorSelection.addEventListener("click", colorSelected);

const elementoSelected = document.getElementById("pixel-board");
elementoSelected.addEventListener("click", pixelSelected);

function pixelSelected(event){
    console.log(event.target);
    let pixels = document.querySelectorAll(".board");
    let colorSelect = document.querySelector(".selected");
    console.log(colorSelect.id);
    for(let pixel of pixels){
        event.target.style.backgroundColor = colorSelect.id;
    }
}
