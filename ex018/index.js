//Crie um algoritmo para copiar um vetor (utilize laço de repetição).

//Use a nomenclatura vetor1 para o vetor original e vetor2 para o vetor copiado

function copyArray(vetor1){
    let vetor2 = []

    for (chave in vetor1) {
       vetor2[chave] = vetor1[chave]
    }

    return vetor2;
}

const vetor1 = [1, 5, 9]

console.log(copyArray(vetor1))