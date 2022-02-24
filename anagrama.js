// Um anagrama é uma palavra obtida por meio do rearranjo das letras de outras palavras. Por exemplo, "rats", "tars" e "star" são um grupo de anagramas pois são compostos pelas mesmas letras.
// Dado um Array de Strings, escreva um método que agrupa as Strings em grupos de anagramas e retorna esses grupos. 
// Letras maiúsculas e minúsculas podem ser tratadas como se fossem iguais, mas o retorno deve manter as letras maiúsculas e minúsculas. A ordem dos grupos ou das Strings não importa.
// Exemplo de utilização:

// console.log(combineAnagrams(words));=>[ [ 'CaRs', 'racs', 'scar' ],  [ 'foR' ],  [ 'poTatos' ],  [ 'four' ],  [ 'creams', 'scream' ] ]


function confereListas(conjuntoPalavrasAnagramas, novaPalavrasAnagramas){
    for(let i = 0; i < novaPalavrasAnagramas.length; i++){
        if(JSON.stringify(conjuntoPalavrasAnagramas) == JSON.stringify(novaPalavrasAnagramas[i])){
            return false;
        }
    }
    return true;
}


function anagrama(palavras){
    let novaPalavrasAnagramas = [];

    for(let i = 0; i< palavras.length; i++ ){
        let conjuntoPalavrasAnagramas = [];

        for(let j = 0; j < palavras.length; j++ ){ 
            if(palavras[i].length == palavras[j].length){
                
                if(palavras[i].toUpperCase().split("").sort().join("") == palavras[j].toUpperCase().split("").sort().join("")){
                    conjuntoPalavrasAnagramas.push(palavras[j]);
                }
            }  
        }
        if(confereListas(conjuntoPalavrasAnagramas, novaPalavrasAnagramas)){
            novaPalavrasAnagramas.push(conjuntoPalavrasAnagramas);
        }
    }
    
    return novaPalavrasAnagramas;
}
console.log(anagrama([ 'CaRs', 'racs', 'scar' ,   'foR' ,   'poTatos' ,  'four' ,   'creams', 'scream' ]));


//if(palavras[i].toUpperCase().split("").sort().join("") == palavras[j].toUpperCase().split("").sort().join("")){
    //conjuntoPalavrasAnagramas.push(palavras[j]);
