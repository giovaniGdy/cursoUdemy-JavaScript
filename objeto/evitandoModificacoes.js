// Object.preventExtensions - não pode adicionar novos atributos

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal //Não pode modificar ou excluir atributos, pode modifica-los
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)

console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = 'Congela' o objeto, não é possível modifica-lo de nenhuma maneira
