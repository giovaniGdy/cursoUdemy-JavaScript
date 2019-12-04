// operador ... rest(juntar/spread(espalhar))
// usar rest com parâmeto de função

//usar Spread com objeto
const funcionario = { nome: 'Maria', salário: 12348.99 }
const clone = { ativo: true, ...funcionario } // irá 'Adicionar' os atributos do funcionário nesse novo objeto
console.log(clone)

//usar spread com array
const grupoA = [ 'João', 'Pedro', 'Glória']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)