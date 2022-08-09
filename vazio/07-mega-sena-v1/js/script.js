var state =  {board:[], currentGame:[], savedGame:[]};

function start(){
    addNumberToGame(1)
    addNumberToGame(1)
    addNumberToGame(1)
    addNumberToGame(1)
    addNumberToGame(62)
    
    console.log(state.currentGame);
}

function addNumberToGame(numberToAdd){
    if (numberToAdd < 1 || numberToAdd > 60){
        console.error("Numero Invalido")
        return;
    }
    if(state.currentGame.length >= 6){
        console.error("Jogo completo")
    }
    if (isNumberInGame(numberToAdd){
        console.error("Numero ja esta em jogo")
    }
    state.currentGame.push(numberToAdd);
}

function isNumberInGame(numberToAdd){
    return state.currentGame.includes(numberToAdd)


start()