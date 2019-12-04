function tratarErro(erro) {
//    throw new Error('...')
    return (
        console.log('Opa, ocorreu algo de errado...'),
        console.log(erro)
    );
}

function imprimirNome(obj) {
    try {

        console.log(obj.name.toUpperCase()) + "!!!";

    } catch (erro) {
    
        tratarErro(erro)
    
    } finally {
        console.log("Fim do processo")
    }
}

const obj = { name: 'Roberto' }
imprimirNome(obj)