const elementoPreto = document.getElementById("color-palette-1");
const elementoVermelho = document.getElementById("color-palette-2");
const elementoAzul = document.getElementById("color-palette-3");
const elementoVerde = document.getElementById("color-palette-4");


elementoPreto.classList.add("selected");

function colorSelected(event){
    if(event.target == elementoVermelho){
        elementoVermelho.classList.add("selected");
            /*let verificaElementos = document.getElementsByClassName("color-palette");
            console.log(verificaElementos);
            for(let i=0; i<verificaElementos.length; i++){
                if(verificaElementos[i] != "elementoVermelho"){
                    verificaElementos.classList.toggle("selected");
                }
                if(verificaElementos[i] == "elementoVermelho"){
                }
            }*/
    }
    else if(event.target == elementoAzul){
        elementoAzul.classList.add("selected");
        let verificaElementos = document.getElementsByClassName("selected");
            for(let i=0; i<verificaElementos.length; i++){
                if(verificaElementos[i] != "elementoAzul"){
                    verificaElementos[i].classList.remove("selected")
                }
            }
    }
    else if(event.target == elementoVerde){
        elementoVerde.classList.add("selected");
        let verificaElementos = document.getElementsByClassName("selected");
            for(let i=0; i<verificaElementos.length; i++){
                if(verificaElementos[i] != "elementoVerde"){
                    verificaElementos[i].classList.remove("selected")
                }
            }
    }
    else if(event.target == elementoPreto){
        elementoPreto.classList.add("selected");
        let verificaElementos = document.getElementsByClassName("selected");
            for(let i=0; i<verificaElementos.length; i++){
                if(verificaElementos[i] != "elementoPreto"){
                    verificaElementos[i].classList.remove("selected")
                }
            }
        }
}
let elementoSelected = document.getElementById("color-palette");
elementoSelected.addEventListener("click", colorSelected);