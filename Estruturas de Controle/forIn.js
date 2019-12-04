const notas = [6, 7, 9, 8, 7]

for(let i in notas) {
    console.log(i,'-', notas[i])
}

const pessoa = {
    nome: 'Ana',
    idade: 20,
    peso: 80
}

pessoa.altura = 50

for (let atributo in pessoa) {
    console.log(atributo, '->', pessoa[atributo])
}