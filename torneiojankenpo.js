//Um torneio de Pedra-Papel-Tesoura é representado por chaves. Cada chave pode ser composta por duas outras chaves ou um jogo. 
// Nesse torneio exemplo, na primeira chave mais externa, Armando ganha de Dave, Michael ganha de Richard, sendo assim, Armando joga contra Michael e, por fim, Armando é o vencedor.
// Da mesma forma, Allen ganha de Arthur, David ganha de Omer. Depois Allen ganha de David.
// Finalmente, Armando ganha de Allen.
// Escreva um método que aceita um torneio encodado como no exemplo acima e retorna o vencedor (No caso do exemplo, o retorno seria ["Armando", "PE"]). Você pode assumir que a entrada do método será bem formatada, ou seja, teremos sempre 2^n players.
// Exemplo:
// function tournamentGameWinner(tournament) {  // your code goes here...}let tournament = [  [    [      ['Armando', 'PE'], ['Dave', 'TE']    ],    [      ['Richard', 'PA'], ['Michael', 'TE']    ],  ],  [    [      ['Allen', 'TE'], ['Arthur', 'TE']    ],    [      ['David', 'PA'], ['Omer', 'PE']    ],  ],];console.log(tournamentGameWinner(tournament))

function verificaJogo(jogo){
    let jogadasAceitas = ["PA","PE","TE"]

    if(jogo.length != 2){
        throw new Error("WrongNumberOfPlayers");
    } else if (!jogadasAceitas.includes(jogo[0][1].toUpperCase()) || !jogadasAceitas.includes(jogo[1][1].toUpperCase())){
        throw new Error("NoSuchStrategyError");
    }
    return true;
}

function jogar(jogada1,jogada2){
    //Jogador 1 ganha
    if(jogada1[1].toUpperCase() == jogada2[1].toUpperCase()){
        console.log(jogada1[0] + " ganhou!");
        return jogada1;
    }
    else if((jogada1[1].toUpperCase() == 'TE') && (jogada2[1].toUpperCase() =='PA')){
        console.log(jogada1[0] + " ganhou!");
        return jogada1;
    }
    else if ((jogada1[1].toUpperCase() == 'PE') && (jogada2[1].toUpperCase() =='TE')){
        console.log(jogada1[0] + " ganhou!");
        return jogada1;
    } 
    else if ((jogada1[1].toUpperCase() == 'PA') && (jogada2[1].toUpperCase() =='PE')){
        console.log(jogada1[0] + " ganhou!");
        return jogada1;
    }

    //jogador 2 ganha
    else if((jogada1[1].toUpperCase() == 'PA') && (jogada2[1].toUpperCase() =='TE')){
        console.log(jogada2[0] + " ganhou!");
        return jogada2
    }
    else if ((jogada1[1].toUpperCase() == 'TE') && (jogada2[1].toUpperCase() =='PE')){
        console.log(jogada2[0] + " ganhou!");
        return jogada2
    } 
    else if ((jogada1[1].toUpperCase() == 'PE') && (jogada2[1].toUpperCase() =='PA')){
        console.log(jogada2[0] + " ganhou!");
        return jogada2
    }

}
// [
    //['Armando', 'PE'],['Dave','TE']
//],
function jankepo(jogo){
    let vencedoresPrimeiraRodada = [];
    let vencedoresSegundaRodada = [];


    for(let i = 0; i < jogo.length; i++){
        for(let j = 0; j < jogo[i].length; j++){
            if(verificaJogo(jogo[i][j])){
               let vencedor = jogar(jogo[i][j][0], jogo[i][j][1]);
               vencedoresPrimeiraRodada.push(vencedor);
            }
        }
    }
    let vencedoresSegundoRound1 = jogar(vencedoresPrimeiraRodada[0],vencedoresPrimeiraRodada[1]);
    vencedoresSegundaRodada.push(vencedoresSegundoRound1);

    let vencedoresSegundoRound2 = jogar(vencedoresPrimeiraRodada[2], vencedoresPrimeiraRodada[3]);
    vencedoresSegundaRodada.push(vencedoresSegundoRound2);

    let vencedorTorneio = jogar(vencedoresSegundaRodada[0],vencedoresSegundaRodada[1]);
    
    
    return vencedorTorneio[0];



}

let torneio = [
    [
      [
        ['Armando', 'PE'],['Dave','TE']
      ],
      [
        ['Richard','PA'],['Michael','TE']
      ]
  
    ],
    [
      [
        ['Allen','TE'],['Arthur','TE']
  
      ],
      [
        ['David','PA'],['Omer','PE']
      ],
    ],
  ];

console.log("O vencendor é " + jankepo(torneio));


