//Faça um algoritmo que calcule o reajuste de um salário, utilize os seguintes dados:
var assert = require('assert')

const reajuste = 0.15;
const salario = 10000;


function reajusteSalario(){
   let salariorejustado = salario + (salario*reajuste)

    return salariorejustado 
}

try {
    assert.equal(11500, reajusteSalario())
} catch (error) {
    console.log(error)
}

console.log("Novo salário :"+reajusteSalario())