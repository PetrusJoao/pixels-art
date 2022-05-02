const elementoPreto = document.getElementById("black");
const elementoVermelho = document.getElementById("red");
const elementoAzul = document.getElementById("blue");
const elementoVerde = document.getElementById("green");


elementoPreto.classList.add("selected");

let tamanhoInit = 5;
window.onload = criaBoard(tamanhoInit)

function criaBoard(tamanho){
    for(let i=0; i<tamanho; i++){
        let criaColuna = document.createElement("div");
        let pixelBoard = document.getElementById("pixel-board");
        pixelBoard.appendChild(criaColuna);
        criaColuna.className = "board"
    }   
    for(let i=0; i<tamanho; i++){
        for(let j=0; j<tamanho; j++){
            let criaLinha = document.createElement("div");
            let boardChild = document.getElementsByClassName("board");
            boardChild[j].appendChild(criaLinha);
            criaLinha.className = "pixel"
        }
        }
}

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
    let pixels = document.querySelectorAll(".board");
    let colorSelect = document.querySelector(".selected");
    for(let pixel of pixels){
        event.target.style.backgroundColor = colorSelect.id;
    }
}

const botaoLimpar = document.getElementById("clear-board");
botaoLimpar.addEventListener("click", limpar);

function limpar(event){
    let pixels = document.querySelectorAll(".pixel");
    for(let pixel of pixels){
        pixel.style.backgroundColor = "white";
    }
}

const botaoGerar = document.getElementById("generate-board");
botaoGerar.addEventListener("click", gerar);

function gerar(event){
    let input = document.querySelector("#board-size");
    let size = input.value; 
    if(size === ""){        
        window.alert("Board inválido!");
        return 0;
    }
    let pixelBoard = document.getElementById("pixel-board");
    while(pixelBoard.firstChild){
        pixelBoard.removeChild(pixelBoard.firstChild);
    }
    if(size < 5){
        size = 5;
    }else if(size > 50){
        size = 50;
    }
    criaBoard(size);
}

const gerarCorAleatoria = document.getElementById("board-ramdom");
gerarCorAleatoria.addEventListener("click", corAleatoria);
if(location.reload){
    corAleatoria();
}
function corAleatoria(){
    elementoVermelho.style.backgroundColor = gerarCor();
    elementoAzul.style.backgroundColor = gerarCor();
    elementoVerde.style.backgroundColor = gerarCor();

}
//Obs.: Função tirada do tutorial encontrado na página: https://wallacemaxters.com.br/blog/48/como-gerar-cores-aleatorias-no-javascript
//Obs.2: Não sei se caracteriza como violação da propriedade intelectual, mas utilizei porque eu entendi o que o código faz.
function gerarCor(opacidade = 1) {
    let r = parseInt(Math.random() * 255); 
    let g = parseInt(Math.random() * 255); 
    let b = parseInt(Math.random() * 255);
 
    return `rgba(${r}, ${g}, ${b}, ${opacidade})`;     
 }
function corOriginal(){
    elementoVermelho.style.backgroundColor = 'red';
    elementoAzul.style.backgroundColor = 'blue';
    elementoVerde.style.backgroundColor = 'green';
}