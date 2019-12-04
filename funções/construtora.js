function Carro(velMaxima = 200, delta = 5) {
    //privado
    let velAtual = 0

    this.acelerar = function () {
        if (velAtual + delta <= velMaxima) {
            velAtual += delta
        } else {
            velAtual = velMaxima
        }
    }

    //publico

    this.getVelAtual = function () {
        return velAtual
    }
}

const uno = new Carro

uno.acelerar()
console.log(uno.getVelAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelAtual())

console.log(typeof Carro)
console.log(typeof ferrari)