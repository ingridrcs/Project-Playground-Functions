// Desafio 1
// Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators
function compareTrue(a, b) {
  // seu código aqui
  let final = false;
  if (a && b) {
    final = true;
  }
  return final;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
// Source: https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254
function splitSentence(frase) {
  // seu código aqui
  let resultado = frase.split(' ');
  return resultado;
}

// Desafio 4
// Source: estava com dúvida de como escrever o resultado e consegui solucionar através do slack https://trybecourse.slack.com/archives/C02HY11SPJP/p1636663927349400?thread_ts=1636663852.348500&cid=C02HY11SPJP
function concatName(lista) {
  // seu código aqui
  let num = lista.length - 1;
  let resultado = `${lista[num]}, ${lista[0]}`;
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  let num = numeros[0];
  let resultado = 0;
  for (let i = 1; i < numeros.length; i += 1) {
    if (numeros[i] >= num) {
      num = numeros[i];
    }
  }
  for (let index = 0; index < numeros.length; index += 1) {
    if (num === numeros[index]) {
      resultado += 1;
    }
  }
  return resultado;
}

// Desafio 7
// Source: Explicação do Math.abs: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
// Source:https://www.youtube.com/watch?v=4cznE_iFv6s
// Source: Dúvida de alunos no Slack :https://trybecourse.slack.com/archives/C02HY11SPJP/p1636730359399000
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let dif1 = Math.abs(mouse - cat1);
  let dif2 = Math.abs(mouse - cat2);
  if (dif1 < dif2) {
    return 'cat1';
  }
  if (dif1 > dif2) {
    return 'cat2';
  }
  if (dif1 === dif2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let final = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      final.push('fizzBuzz');
    }
    else if (array[i] % 3 === 0) {
      final.push('fizz');
    }
    else if (array[i] % 5 === 0) {
      final.push('buzz');
    }
    else {
      final.push('bug!');
    }
  }
  return final;
}

// Desafio 9 
// Source://https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176
// Source: https://blog.betrybe.com/javascript/javascript-replace/
function encode(troca) {
  // seu código aqui
  let final;
  troca = troca.replace(/a/g, '1');
  troca = troca.replace(/e/g, '2');
  troca = troca.replace(/i/g, '3');
  troca = troca.replace(/o/g, '4');
  troca = troca.replace(/u/g, '5');
  final = troca;
  return final;
}
function decode(troca2) {
  // seu código aqui
  let final2;
  troca2 = troca2.replace(/1/g, 'a');
  troca2 = troca2.replace(/2/g, 'e');
  troca2 = troca2.replace(/3/g, 'i');
  troca2 = troca2.replace(/4/g, 'o');
  troca2 = troca2.replace(/5/g, 'u');
  final2 = troca2;
  return final2;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
