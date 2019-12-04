require('./global')

console.log(meuApp.saudacao())

meuApp.nome = 'Cacetada!' //Object.freeze no global.js para não deixar modificar
console.log(meuApp.nome)