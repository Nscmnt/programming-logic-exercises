//Considerando que todos os meses tenham 30 dias, calcular o total de dias de n meses.

var assert = require('assert')

function numberDaysMonths(nMeses){

    return nMeses * 30;
}

try {
    assert.equal(150, numberDaysMonths(5),"deve retornar o valor esperado 150")
    
} catch (error) {
    console.log(error)
}

console.log(numberDaysMonths(5))