// Escreva um algoritmo que armazene o valor 999 na variável a e o valor 555 na variável b e trocar os valores
var assert = require('assert');
let a = 999, b = 555, aux = 0;

aux = a;
a = b;
b = aux;

console.log("valor de a = "+a+ " Valor de B = "+b)

// teste

try {
    assert.equal(555, a);
    assert.equal(999, b);
} catch(e) {
    console.log(e);
}

