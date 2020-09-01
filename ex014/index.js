/*
    Crie duas funções para conversão de temperaturas.

    Uma converterá celsius em fahrenheit e a outra fará o inverso.

    (0 °C × 9/5) + 32 = 32 °F

    (32 °F − 32) × 5/9 = 0 °C


*/

function celsiusToFahrenheit(temperatura){
    let celsius = (temperatura * 9 / 5) + 32;

    return celsius;
}

function FahrenheitToCelsius(temperatura){
    let fahrenheit = (temperatura - 32) * 5 /9; 

    return fahrenheit;
}

console.log(celsiusToFahrenheit(100))

console.log(FahrenheitToCelsius(100))

