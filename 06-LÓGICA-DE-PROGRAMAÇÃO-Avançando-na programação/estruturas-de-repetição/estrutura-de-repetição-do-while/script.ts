// Muito parecido com o while, porém tem uma diferença crucial: condição é verificada após executar o bloco de comandos.
// Há uma bloco de comandos e logo depois uma verificação. Assim caso a variável condicional for alterada dentro do bloco de comandos, isso afetará a validação da condição.
// A escolha entre while e do while é mínima, então dependerá do bom senso do programador, que optará pela estrutura que deixar o algoritmo mais simples e legível.

console.log('Início');
let i = 10;
// nota-se que a condição verificou false mas, mesmo assim ele exibe na tela o número 10.
do {
    console.log(i);
    i = i + 1;
} while (i < 10);
console.log('Fim')


console.log('Início');
let o = 1;
// aqui a condição é true, então vai exibir na tela de 1 até 9.
do {
    console.log(o);
    o = o + 1;
} while (o < 10);
console.log('Fim');