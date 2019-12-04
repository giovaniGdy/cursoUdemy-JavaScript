const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        rua: 'teste',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { rua, numero } } = pessoa
console.log(rua, numero)

const { conta: {ag, num } } = pessoa // erro v
console.log(ag, num)