function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 29.99
const precoParcela = 11.00
console.log(real `1x de ${preco} ou 3x de ${precoParcela}`)

//console.log(`1x de R$${preco} ou 3x de R$${precoParcela}`)
