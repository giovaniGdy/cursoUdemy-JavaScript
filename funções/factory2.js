function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: (preco * (20/100)).toFixed(2)
    }
}
console.log(criarProduto('Notebook', 2500))
console.log(criarProduto('Celular', 599))
