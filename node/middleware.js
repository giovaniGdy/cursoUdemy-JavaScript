// middleware pattern (chain of responsability)

const passo1 = (dados, next) => {
    dados.valor1 = 'mid1'
    next()
}

const passo2 = (dados, next) => {
    dados.valor2 = 'mid2'
    next()
}

const passo3 = dados => dados.valor3 = 'mid3'

const exec = (dados, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
        middlewares[indice](dados, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const dados = {}

exec(dados, passo1, passo2, passo3)
console.log(dados)