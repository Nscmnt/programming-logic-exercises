/*Faça um programa para calcular o juros simples segundo a fórmula abaixo.

J = C.i.n */

var assert = require('assert');
const { Console } = require('console');

function calculoJuros(capital, taxa, periodo) {
    let juros = capital * taxa * periodo;
    return juros;
}

try {
    assert.equal(2560, calculoJuros(16000, 0.04, 4))
} catch (error) {

}

console.log('Juros '+ calculoJuros(16000, 0.04, 4))