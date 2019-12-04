const pessoa = {
    saudacao : 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() //não possui a saudacao

const falarPessoa = pessoa.falar.bind(pessoa)

falarPessoa()