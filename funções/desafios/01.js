// Crie uma função que dado dois valores 
// (passados como parâmetros) mostre no console
// a soma, subtração,multiplicação e divisão desses valores.

function calcular(v1, v2) {
  soma = v1 + v2;
  sub = v1 - v2;
  mult = v1 * v2;
  divi = v1 / v2;

  return [soma, sub, mult, divi];
}

res = calcular(10, 2)

res.forEach(element => {
   console.log(element) 
});