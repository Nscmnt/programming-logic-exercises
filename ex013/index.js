//Crie uma função que descubra se um valor é maior ou menor que 10.
var assert = require('assert')

function greaterThanTen(number){

   return (number > 10 )? `O número ${number} é maior que 10` : `O n´mero ${number} é menor do que 10`
}

try {
    console.log(greaterThanTen(8))
} catch (error) {
    
}