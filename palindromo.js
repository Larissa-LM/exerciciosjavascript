// Escreva um método que determina se uma palavra ou frase é um palindromo, ou seja, a palavra pode ser lida de da esquerda para a direita ou ao contrário, ignorando pontuação, números e qualquer outro caracter que não seja uma letra. Considere também que não há diferenças entre letras maiúsculas e minúsculas. Resolva o problema usando apenas expressões regulares.


// Dicas:
// Use o site https://regexr.com/ para testar expressões regulares.
// Alguns métodos que podem ser úteis são: String#replace, String#toLowerCase e String#split.
// Exemplo de utilização:
// console.log(palindrome('ana')); => trueconsole.log(palindrome('maam')); => trueconsole.log(palindrome('abracadabra')); => falseconsole.log(palindrome("Madam, I'm Adam"));  => true

function limparPalavra(palavraOuFrase){
    let palavraCheck = palavraOuFrase;
    palavraCheck = palavraCheck.replace(/\s/g, ''); // tira espaços
    palavraCheck = palavraCheck.toUpperCase(); // deixa tudo em letra maíuscula e tira case sensitive
    palavraCheck = palavraCheck.replace(/[0-9]/g, ''); // tira números
    palavraCheck = palavraCheck.normalize("NFD").replace(/\p{Diacritic}/gu, ""); // tira acentos
    palavraCheck = palavraCheck.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""); // tira pontuação

    return palavraCheck;
}


function palindromo(palavraOuFrase){
    let novaPalavra = limparPalavra(palavraOuFrase); // guarda o valor da variável palavraOuFrase para manipulação 
    let splitPalavraOuFrase = novaPalavra.split(""); // transforma palavraOuFrase em um array 
    let reverterPalavraOuFrase = splitPalavraOuFrase.reverse(); //reverte o array 
    let joinPalavraOuFrase = reverterPalavraOuFrase.join(""); // junta novamente o array invertido 

    if (novaPalavra == joinPalavraOuFrase){
        console.log(palavraOuFrase + " é um palíndromo");
        
        return true;
    }else{
        console.log(palavraOuFrase + " não é um palindromo");

        return false;
    }
}


console.log(palindromo("Roma amor"));

