// if...else
// A condicional if é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de else.



let idade: number = 15;

if (idade >= 18) {
    console.log('Você é maior de idade!');
} else {
    console.log('Você é menor de idade!');
}

console.log('Terminou');

// Nessa primeira variavel chamada: novaIdade, vai aparecer a mensagem do else e a mensagem "Terminou", pois a condição é falsa, por isso, executa as afirmações dentro do else.


let outraIdade = 18;

if (outraIdade >= 18) {
    console.log('Você é maior de idade!');
} else {
    console.log('Você é menor de idade!');
}

console.log('Terminou');

// Nessa segunda variavel chamada: outraIdade, vai aparecer a mensagem do if e a mensagem "Terminou", pois a condição é verdadeira, por isso, execura as afirmações dentro do if.


let novaIdade = 13;

if (novaIdade >= 18) {
    console.log('Você é maior de idade!');
} else if (novaIdade >= 16) {
        console.log('Você é menor de idade, mas já pode votar!');
} else {
        console.log('Você é menor de idade!')
}

// Outro jeito de declarar if e else