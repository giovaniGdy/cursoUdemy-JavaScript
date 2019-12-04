const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const pegarChines = funcionario => funcionario.pais === 'China'
const pegarMulher = funcionario => funcionario.genero === 'F'
const pegarMenorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}


axios.get(url).then(reponse => {
    const funcionarios = reponse.data
    const dados = funcionarios
    .filter(pegarChines)
    .filter(pegarMulher)
    .reduce(pegarMenorSalario)
    console.log(dados)    
})
