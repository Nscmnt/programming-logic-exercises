//Crie uma função que descubra se um valor é positivo ou negativo (considere o valor zero como positivo)
var assert = require('assert')

function isPositive(number){

    if( number >= 0){
        return true;
    }else{
        return false;
    }
}
try {
    assert.ok(isPositive(5))
    assert.ok(!isPositive(-1))
    assert.ok(isPositive(10))

    console.log(isPositive(10))
} catch (error) {
    
}


