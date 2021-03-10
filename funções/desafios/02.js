// Os triângulos podem ser classificados em
// 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais.
// Isósceles:  Dois lados iguais.
// Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três
// lados de um triângulo e retorne sua classificação quantoao
// tamanho de seus lados.
// (Neste exemplo deve-se abstrair as condições
// matemáticas de existência de umtriângulo).

function triangle(l1, l2, l3) {
  if (l1 === l2 && l1 === l3) {
    return "Equilátero";
  } else if (l1 === l2 || l1 === l3 || l2 === l3) {
    return "Isóceles";
  } else if (l1 != l2 && l1 != l3 && l2 != l3) {
    return "Escaleno";
  }
}

console.log(triangle(1, 1, 1));
console.log(triangle(1, 2, 1));
console.log(triangle(1, 2, 3));
