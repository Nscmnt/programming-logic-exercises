// Escreva uma função para cada uma das quatro operações matemáticas simples:

//adição,
//subtração,
//multiplicação e
//divisão

var assert = require("assert")

function adicao(numero, operacao){

    return numero + operacao
}

function subtracao(numero, operacao){

    return numero - operacao
}

function multiplicacao(numero, operacao){

    return numero * operacao
}

function divisao(numero, operacao){

    return numero / operacao
}

try {
    assert.equal(10, adicao(5,5));
    assert.equal(0, subtracao(5,5));
    assert.equal(25, multiplicacao(5,5));
    assert.equal(1, divisao(5,5));
} catch(e) {
    console.log(e);
}

console.log(
    `A soma dos número é ${adicao(5,5)}`+ 
    `\nA subtracao dos número é ${subtracao(5,5)}`+
    `\nA multiplcaca dos número é ${multiplicacao(5,5)}`+
    `\nA divisão dos número é ${divisao(5,5)}`
)


