/*O custo de um carro novo ao consumidor é obtido com a seguinte fórmula:

custo final = custo de fábrica +
              (custo de fábrica * percentual do distribuidor) +
              (custo de fábrica * percentual de impostos)

Considerando os valores abaixo, faça um programa para calcular o custo final.

Custo de fábrica = 10.000,00
Percentual do distribuidor = 28%
Percentual dos Impostos  = 45%
*/ 
var assert = require('assert');

//var custoFabrica =10000
//var percDistribuidor = 28
// var percImpostos = 45

function custoFinal(custoFabrica, percDistribuidor, percImpostos ){
    let custoFinal = custoFabrica + ((custoFabrica * percDistribuidor) / 100 ) + ((custoFabrica * percImpostos ) / 100)

    return custoFinal;
}

//  teste
//
try {
    assert.equal(17300, custoFinal(10000));
} catch(e) {
    console.log(e);
}

console.log("Custo final do carro "+custoFinal(10000,28,45))
