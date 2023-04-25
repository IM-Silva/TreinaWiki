// O que é estrutura de repetição?

// Dentro da lógica de programação é uma estrutura que permite executar mais de uma vez o mesmo comando ou conjunto de comandos, de acordo com uma condição ou com um contador.

// São utilizadas, por exemplo, para repetir ações semelhantes que são executadas para todos os elementos de uma lista de dados, ou simplesmente para repetir um mesmo processamento até que a condição seja satisfeita.

for (let i = 1; i <= 10; i = i + 1) {
    console.log(i);
}

// O For é utilizado para executar um conjunto de comandos executado por um número X de vezes.
// É passada uma situação inicial, uma condição e uma ação a ser executada a cada repetição.
// Uma variável é inicializada com uma valor inicial.
// Essa variável é utilizada para controlar a quantidade de vezes em que o conjunto de comandos será executado.
// E ao final do conjunto de comandos a variável sempre sofrerá uma alteração, aumentando ou diminuindo de acordo com a lógica utilizada.

for (let o = 10; o >= 1; o = o - 1) {
    console.log(o);
}

for (let u = 1; u <= 10; u = u + 1) {
// aqui só estou pedindo números pares
    if (u % 2 == 0) {
        console.log(u);
    }
}

// ou ímpares

for (let g = 1; g <= 10; g = g + 1) {
    if (g % 2 != 0) {
        console.log(g);
    }
}