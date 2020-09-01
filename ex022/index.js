//Faça um programa que descubra a quantidade de vogais de uma determinada string.

function contarVogais(str){
    let count = 0;

    const arr = str.split('')
    
    const array = arr.map(p => p.toUpperCase());
    
    const vogais = ['A', 'E', 'I', 'O', 'U']

    for(i = 0; i < array.length; i++){

        for (const chave in vogais) { // chave = tamanho do array ( loop ) - vogais = array a ser interado

            if (array[i] == vogais[chave]) {

                count += 1;                              
            }            
        }        
    } 
    console.log(count)
}



contarVogais("JorgeAna")