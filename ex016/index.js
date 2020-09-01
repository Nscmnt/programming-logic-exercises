//Escreva um algoritmo para carregar um vetor com os números de 1 (inclusive) a 5 (inclusive) em ordem crescente.


function prenncheVetor(){
    const arr = []

    for(i = 1; i < 6; i++){

        arr.push(i)
    }

    return arr;
}

console.log(prenncheVetor())