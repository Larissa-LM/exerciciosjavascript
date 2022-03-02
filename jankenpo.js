// No jogo Pedra-Papel-Tesoura (Jan-Ken-Po), cada jogador escolhe a estratégia que irá usar: Pedra(PE); Papel(PA) ou Tesoura(TE).
// As regras são que Pedra ganha de Tesoura, Tesoura ganha de Papel e Papel ganha de Pedra.

// Jogo entre 2 pessoas
// A entrada chamada JOGO é na forma de lista (Array), no qual cada elemento é outra lista (JOGADA) formada por 2 elementos: [<nome_do_jogador>, <estrategia_do_jogador>]
// Escreva um método que aceita uma lista com duas JOGADAS e se comporta da seguinte maneira:
// Se o número de jogadores não for igual a 2, lança o erro WrongNumberOfPlayersError
// Se algum jogador escolher uma estratégia que não seja "PE", "PA" ou "TE", ignorando se as letras são maiúsculas ou minúsculas, lança o erro NoSuchStrategyError
// Caso contrário, retorna a lista formada pelo jogador e sua estratégia. Se os dois jogadores usarem a mesma estratégia, o primeiro jogador vence
// Siga o modelo:
// function rpsGameWinner(game) {  if (game.length != 2) {    throw 'WrongNumberOfPlayers';  }  // your code here...}console.log(rpsGameWinner(game)) => [ 'Dave', 'TE' ]

function verificaJogo(jogo){
    let jogadasAceitas = ["PA","PE","TE"]

    if(jogo.length != 2){
        throw new Error("WrongNumberOfPlayers");
    } else if (!jogadasAceitas.includes(jogo[0][1].toUpperCase()) || !jogadasAceitas.includes(jogo[1][1].toUpperCase())){
        throw new Error("NoSuchStrategyError");
    }
    return true;
}
//["Isabela", "PE" ]
function jogar(jogada1,jogada2){
    //Jogador 1 ganha
    if(jogada1[1].toUpperCase() == jogada2[1].toUpperCase()){
        console.log(jogada1[0] + " ganhou!");
    }
    else if((jogada1[1].toUpperCase() == 'TE') && (jogada2[1].toUpperCase() =='PA')){
        console.log(jogada1[0] + " ganhou!");
    }
    else if ((jogada1[1].toUpperCase() == 'PE') && (jogada2[1].toUpperCase() =='TE')){
        console.log(jogada1[0] + " ganhou!");
    } 
    else if ((jogada1[1].toUpperCase() == 'PA') && (jogada2[1].toUpperCase() =='PE')){
        console.log(jogada1[0] + " ganhou!");
    }

    //jogador 2 ganha
    else if((jogada1[1].toUpperCase() == 'PA') && (jogada2[1].toUpperCase() =='TE')){
        console.log(jogada2[0] + " ganhou!");
    }
    else if ((jogada1[1].toUpperCase() == 'TE') && (jogada2[1].toUpperCase() =='PE')){
        console.log(jogada2[0] + " ganhou!");
    } 
    else if ((jogada1[1].toUpperCase() == 'PE') && (jogada2[1].toUpperCase() =='PA')){
        console.log(jogada2[0] + " ganhou!");
    }

}

function jankepo(jogo){

    if(verificaJogo(jogo)){
        jogar(jogo[0],jogo[1])      
    }
    
}


jankepo([["Isabela", "PE" ],["Maribel","PA"]]);





