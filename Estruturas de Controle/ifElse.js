const imprimiresultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado')
    }
}

imprimiresultado(10)
imprimiresultado(4)
imprimiresultado('teste') //tipagem String