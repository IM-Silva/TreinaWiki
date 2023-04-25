// É dentre as 3 a mais simples.
// Repete um bloco de código enquanto uma condição permanecer verdadeira
// Caso a condição seja falsa, os comandos dentro do while não serão executados e a execução continuará  com os comandos após o while
// A repetição do while é controlada por uma condição que verifica alguma variável. Porém para que o while funcione corretamente é importante que essa variável sofra alteração dentro do while. Ex: um contador.
// Após entrar dentro da repetição, o bloco de comandos sempre será executado, mesmo que dentro do bloco a variável que está controlando a execução seja alterada.

let i = 1;
while (i <= 10) {
    console.log(i);
    i = i + 1; // isso é uma variável de controle, sem essa variável trava tudo se tornando infinito.
}

// números ímpares

let qtdImpares = 0;
let o = 1;
while (qtdImpares < 5) {
    if (o % 2 != 0) {
        console.log(o);
        qtdImpares = qtdImpares + 1;
    }
    o = o + 1;
}

// números pares

let qtdPares = 0;
let u = 1;
while (qtdPares < 5) {
    if (u % 2 == 0) {
        console.log(u);
        qtdPares = qtdPares + 1;
    }
    u = u + 1;
}