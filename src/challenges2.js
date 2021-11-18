// Desafio 10 Source : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function techList(tech, name) {
  // seu código aqui
  tech.sort();
  let listaNova = [];
  if (tech.length === 0) {
    return ('Vazio!');
  }
  for (let i = 0; i < tech.length; i += 1) {
    let lista = {
      tech: tech[i],
      name: name,
    };
    listaNova.push(lista);
  }
  return (listaNova);
}

// Desafio 11
function generatePhoneNumber(telefone) {
  // seu código aqui
}

// Desafio 12 - Source: Math.abs https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineB + lineC) {
    return true;
  }
  if (lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB)) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 13 Tirar os números de dentro de uma string:https://stackoverflow.com/questions/10003683/how-can-i-extract-a-number-from-a-string-in-javascript    
// Transformar string em array:https://pt.stackoverflow.com/questions/172749/como-transformar-string-em-array-de-caracteres
// Uso do parseInt: https://pt.stackoverflow.com/questions/90841/somar-array-javascript e https://www.youtube.com/watch?v=w14BIa5fOuU
function hydrate(string) {
  // seu código aqui
  let final=0;
  let novo = string.replace(/[^0-9]/g,'');
  let array = novo.split ("");
for (let i = 0; i < array.length; i += 1) {
final += parseInt(array[i]);
}
if (final === 1) {
    return (final+" "+ 'copo de água');
}
else {
    return (final+" "+ 'copos de água');
}
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
