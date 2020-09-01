//Mostra o dobro de um valor qualquer

var assert = require('assert')

function showDouble(valor){
    return valor * 2;
}
//
// Testes
//
try {
    assert.equal(10, showDouble(5));
} catch(e) {
    console.log(e);
}

console.log(showDouble(9))