// Faça um programa que identifique se em um determinado vetor, existem ou não valores repetidos.

function nRepetido(vetor) {

    let repetido = 0;

    for (i = 0; i < vetor.length; i++) {

        for (j = 0; j <= i; j++) {
            
            if (vetor[i] == vetor[j]) {
                repetido = vetor[i];
                break; 
            }
        }
    }

    return console.log(`O vetor [${vetor}]possui o valor ${repetido} mais de uma vez !! `)
}

const vet = [1, 1 , 2, 3, 2]

console.log(nRepetido(vet))