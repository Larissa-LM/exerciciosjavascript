//Dado uma String como entrada, retorne um Dicionário/Objeto no qual as chaves são as palavras da string e os valores são o número de vezes que cada palavra aparece. Não use loops do tipo 'for/while'. Novamente, apenas letras devem ser consideradas como palavras, sem diferença entre maiúsculas e minúsculas. Exemplo de utilização:
//console.log(countWords('Doo bee doo bee doo')) => { doo: 3, bee: 2 }Z

function tratarString (palavras){
    let palavrasTratadas = palavras; // recebe valor de entrada
    palavrasTratadas = palavrasTratadas.toUpperCase(); // tudo em letra maíscula tirando case sensitive
    palavrasTratadas = palavrasTratadas.replace(/[0-9]/g, ''); // tira números
    palavrasTratadas = palavrasTratadas.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");// tira pontuações

    return palavrasTratadas;
}

function contarPalavras (palavras){
    let listaPalavras = tratarString(palavras); // recebe o valor da entrada
    listaPalavras = listaPalavras.split(" "); // cria uma lista de palavras a partir do espaço (" ")

    let dicionario = {}; // variável para receber o valor da nova lista

    listaPalavras.forEach((palavra) => { // pega a variável de entrada (listaPalavras) para cada item (forEach) depois cria uma função que espera um item (palavra)
        dicionario[palavra] = (dicionario[palavra] || 0) + 1; // dicionario[palavra] || 0) + 1 verifica se palavra existe dentro de dicionário, se sim soma +1 se não soma 0 + 1 que adiciona a plavra em dicionario 
    });
    
    return dicionario;

}

console.log(contarPalavras("doo bee doo bee doo"));
