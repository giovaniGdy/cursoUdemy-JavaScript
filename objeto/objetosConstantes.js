// pessoa -> endereço de memória -> objeto
const pessoa = { nome: "João" };
pessoa.nome = "Pedro";
console.log(pessoa);

//pessoa -> novo endereço -> objeto
//pessoa = { nome: "Ana" }; //erro

Object.freeze(pessoa) //'Congela' o objeto dps desse método, n é possível muda-lo

pessoa.nome = 'Maria'
pessoa.end = 'Rua 123'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante.nome)