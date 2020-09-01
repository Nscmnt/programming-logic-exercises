//Crie uma função que retorna a soma de um vetor qualquer

/**
 function somaVetor(vetor){

    let somatoria = 0 ;

    for(i = 0; i < vetor.length; i++){
        somatoria += vetor[i] 
    }

    return somatoria;
}
 */

 function somaVetor (lista){
     let soma = 0;

     for (chave in lista) {
         soma+= lista[chave]        
     }

     return soma;
 }


arr = [1, 2, 3]
console.log(somaVetor(arr))