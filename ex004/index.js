//Exercício de lógica de programação para calcular o sucessor e o antecessor de um número qualquer.
var assert = require('assert');
var sucessor;
var antecessor;

function sucessorAntecessor(numero){
     sucessor = ++numero
     antecessor = numero - 2

    console.log('Número sucessor '+ sucessor+ " número antecessor "+antecessor)
 
}

try {
    sucessorAntecessor(10)
    assert.equal(9, antecessor, "deve retornar o antecessor");
    assert.equal(11, sucessor, "deve retornar o sucessor");
    
} catch(e) {
    console.log(e);
}

    