function boaNoticia(nota) {
    if( nota >=7 ) {
        console.log('Aprovado com: ', nota)
    }
}

boaNoticia(8.1)
boaNoticia(6.1)

function forVerdade(valor) {
    if(valor) {
        console.log('É verdade...', valor)
    }
}

forVerdade()
forVerdade(null)
forVerdade('')
forVerdade(0)
forVerdade(-1)
forVerdade(' ')
forVerdade('?')
forVerdade([])
forVerdade([1, 2])
forVerdade({})