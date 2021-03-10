// #labore uma função cujo objetivo é resolver a
// fórmula de Bhaskara.
// Para isso, sua função deve receber três parâmetros:
// “ax2”, “bx” e “c”
// de tal modo que na equação:
// 3x² - 5x + 12
// os valores seriam respectivamente:
// 3,-5, 12.
// Como retorno deve ser passado um vetor que tem 2
// valores um para cada possível resultado, mesmo que
// os resultados sejam iguais. Caso o delta seja
// negativo, retorne, ao invés do vetor, um string
// com a frase:
// “Delta é negativo”.

function bhaskara(ax, bx, c) {
  valoresDelta = [];

  delta = (bx ** 2) - (4 * ax * c);
  raiz = Math.sqrt(delta);
  base = 2 * ax;

  if (delta < 0) {
    return "Delta é negativo";
  } else {
    result1 = ((-bx + raiz) / base).toFixed(2);
    result2 = ((-bx - raiz) / base).toFixed(2);

    valoresDelta.push(result1, result2);

    return valoresDelta;
  }
}

console.log(bhaskara(1, 25, 3))