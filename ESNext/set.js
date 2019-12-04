// não aceita repetição/não indexada

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco') //Ignora pois já existe

console.log(times)
console.log(times.size)
console.log(times.has('vasco')) // retorna Falso, pois Vasco é com maiúscula
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)