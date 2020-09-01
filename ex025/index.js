//Faça um programa que inverta uma string, exemplo: “animal” em “lamina”.


/**function strTest(str){

   const strRev = str.split('').reverse().join('')

   console.log(strRev)

} */

function invertString(str){

    const arr = str.split('')

    console.log(arr)
    let arrInvertido = []
    let j = 0;

    for(i = arr.length - 1; i >= 0 ; i--){
        arrInvertido[j] = arr[i]
        j++
    }

    console.log(arrInvertido);
}

invertString('Judivam')
