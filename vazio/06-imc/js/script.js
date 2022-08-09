function start(){
    var botaoCalcularIMC = document.querySelector('#botao-calcular')
    botaoCalcularIMC.addEventListener('click',botaoClique)
    
}


function calcularIMC(peso,altura){
    return peso/(altura*altura)
}

function botaoClique(){
    var peso = document.querySelector('#input-peso');
    var altura = document.querySelector('#input-altura');
    var resultadoimc =  document.querySelector('#imc-resultado')

    var imc = calcularIMC(Number(peso.value),Number(altura.value))

    resultadoimc.textContent= imc.toFixed(2)
    
}

start();