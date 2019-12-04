const saudacao = 'Olá' // contexto léxico 1

function exec() {
    const saudacao = 'Eaeeeewww' // contexto léxico 2
    return saudacao
}

// ***********************
const Cliente = {
    nome: 'Pedro',
    idade: 24,
    peso: 110,
    endereco: {
        logradouro: 'Rua jailson',
        numero: 102
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)