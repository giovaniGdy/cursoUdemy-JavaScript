const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)

const ChavesVariadas = new Map([
    [function() {}, 'função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

ChavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(ChavesVariadas.has(123))
ChavesVariadas.delete(123)
console.log(ChavesVariadas.has(123))
console.log(ChavesVariadas.size)

ChavesVariadas.set(123, 'a')
ChavesVariadas.set(123, 'b')
ChavesVariadas.set(456, 'b')
console.log(ChavesVariadas)