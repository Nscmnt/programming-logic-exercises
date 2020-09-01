//Dado um vetor qualquer sem valores repetidos, descubra qual é o índice do maior valor e o índice do menor valor.


function menorMaiorValor(vetor) {
    let menor = 0, maior = 0, i = 0;


    do {
        if (vetor[i] < vetor[menor] ) {
            menor = i;
        } else if (vetor[i] >vetor[maior] ) {
            maior = i;
        }

        i++;

    } while (i < vetor.length);

    console.log(`índice com menor número é o ${menor} e o índice com maior é o ${maior}` )
}

const vet = [ 0, 0]

console.log(menorMaiorValor(vet))