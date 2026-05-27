
let carga = 0;
const limite = 400;


const displayPeso = document.getElementById('peso-atual');
const alerta = document.getElementById('alerta-sobrecarga');
const btnAdicionar = document.getElementById('btn-adicionar');


function adicionarPeso() {
    if (carga >= limite) return;

    carga += 100;
    atualizarPainel();
}


function resetarElevador() {
    carga = 0;
    atualizarPainel();
}

function atualizarPainel() {
    
    displayPeso.innerText = carga;

    
    if (carga >= limite) {
        alerta.classList.remove('escondido');    
        btnAdicionar.disabled = true;            
        btnAdicionar.classList.add('bloqueado'); 
    } else {
        alerta.classList.add('escondido');        
        btnAdicionar.disabled = false;           
        btnAdicionar.classList.remove('bloqueado');
    }
}