//Faça um programa para identificar se um número é primo.

var assert = require('assert')

function numeroPrimo(num) {
    var i, quantDivisores = 0;

    for(i = 1; i <= num; i++) {

        if (divisaoExata(num, i)) {
            quantDivisores++;
        }
    }

    if (quantDivisores == 2) {
        return 1;
    } else {
        return 0;
    }
}

function divisaoExata(dividendo, divisor) {
    return (dividendo % divisor) == 0;
}

