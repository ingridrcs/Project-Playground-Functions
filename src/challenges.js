// Desafio 1
function compareTrue() {
  // seu código aqui

}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}


// Desafio 3 //*Source: https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254 */
function splitSentence(frase) {
  // seu código aqui
  let resultado = frase.split(' ');
  return resultado;
}

// Desafio 4 //*Source: estava com dúvida de como escrever o resultado e consegui solucionar através do slack https://trybecourse.slack.com/archives/C02HY11SPJP/p1636663927349400?thread_ts=1636663852.348500&cid=C02HY11SPJP*/
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
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
