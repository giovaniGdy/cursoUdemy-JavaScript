class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log("meu nome é", this.nome);
  }
}

const p1 = new Pessoa("João");
p1.falar();

function criarPessoa(nome) {
  this.nome = nome;

  this.falar = function() {
    console.log("olá! meu nome é", nome);
  };
}

const pessoa = new criarPessoa("Pedro");
pessoa.falar()
