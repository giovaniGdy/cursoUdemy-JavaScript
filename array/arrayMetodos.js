const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

console.log(pilotos)

pilotos.pop() // remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona novo elemento
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // add novo elemento na 1° posição
console.log(pilotos)

// splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // criando novo array
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4) // o indice 4 não entra no novo array
console.log(algunsPilotos2)

