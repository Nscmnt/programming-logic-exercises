//Sabendo que a área quadrada é dada pela multiplicação dos lados, escreva um algoritmo que mostre a área quadrada de um espaço qualquer
var assert = require('assert');

var area = function( lado1, lado2){
    return lado1 * lado2;
}

try {
    assert.equal(27, area(3, 9), "deve retornar o área");
} catch(e) {
    console.log(e);
}



console.log(area(3,9))