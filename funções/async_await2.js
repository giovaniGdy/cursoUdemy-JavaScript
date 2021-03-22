function gerarNumerosEntre(min, max, numerosProibidos) {
  if (min > max) [max, min] = [min, max];
  return new Promise((resolve, reject) => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator) + min;
    if (numerosProibidos.includes(aleatorio)) {
      reject("Número Repetido!");
    } else {
      resolve(aleatorio);
    }
  });
}

async function gerarMegaSena(qtNumeros, tentativas = 1) {
  try {
    const num = [];
    for (let _ of Array(10).fill()) {
      num.push(await gerarNumerosEntre(1, 60, num));
    }
    return num;
  } catch (e) {
    if (tentativas > 10) {
      throw "Que Terrível!";
    } else {
      return gerarMegaSena(qtNumeros, tentativas + 1);
    }
  }
}

gerarMegaSena(25).then(console.log).catch(console.log);

// gerarNumerosEntre(1, 5 [1, 2, 4])
// .then(console.log)
// .catch(console.log)
