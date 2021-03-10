// Crie uma função que irá receber dois valores,
// o dividendo e o divisor. 
// A função deverá imprimir o resultadoe o resto
// da divisão destes dois valores.

function dividir(dividendo, divisor) {
    resultado = dividendo / divisor
    resto = dividendo % divisor

    console.log(`Resultado: ${resultado}`)
    console.log(`Resto: ${resto}`)
}

dividir(8, 3)