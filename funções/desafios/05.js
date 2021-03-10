// Desenvolva uma função JavaScript paraque ela receba um 
// valor como 0.30000000000000004 e retorne R$0,30 
// (observe a vírgula e o ponto).

function reais(valor) {
    real = valor.toLocaleString('pt-br', {style: 'currency', currency: "BRL"})

    return real
}

console.log(reais(0.30000000000000004))