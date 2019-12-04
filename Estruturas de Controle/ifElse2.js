Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResult = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro Honra')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota Inválida')
    }
}

imprimirResult(10)
imprimirResult(8)
imprimirResult(6)
imprimirResult(2)
imprimirResult(-1)