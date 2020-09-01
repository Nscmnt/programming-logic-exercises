//Faça um programa que calcule a média simples (aritmética) de 3 valores quaisquer.
var assert = require('assert')

function media( firstNumber, secondNumber, thirthNumber){
    let media = (firstNumber + secondNumber + thirthNumber) / 3
    return media;
}

try {
    assert.equal(7, media(6, 7, 8), "deve retornar a média");
} catch(e) {
    console.log(e);
}

console.log(media(6, 7, 8))