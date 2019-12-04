let Ativo = false
console.log(Ativo)

Ativo = true
console.log(Ativo)

Ativo = 1
console.log(!!Ativo)


console.log("Os verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(Ativo = Infinity))

console.log("Os falsos...")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(Ativo = false))
