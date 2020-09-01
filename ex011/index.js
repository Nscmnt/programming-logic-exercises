//Crie uma função que descubra se um valor é par ou ímpar.

var assert = require('assert')

function isEven(number){

   return (number % 2 == 0)?  "Número Par" : " Número impar"
}

try {
    assert.equal("Número Par", isEven(4))

    console.log(isEven(5))
} catch (error) {
    console.log(error)
}

