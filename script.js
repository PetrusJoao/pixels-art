const elementoPreto = document.getElementById("color-palette-1");
const elementoVermelho = document.getElementById("color-palette-2");
const elementoAzul = document.getElementById("color-palette-3");
const elementoVerde = document.getElementById("color-palette-4");


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
let elementoSelected = document.getElementById("color-palette");
elementoSelected.addEventListener("click", colorSelected);