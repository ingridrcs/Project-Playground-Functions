// Desafio 10 Source : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function techList(tech, name) {
  // seu código aqui
  tech.sort();
  let listaNova=[];
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
return(listaNova);
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12 - Source: Math.abs https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function triangleCheck(lineA,lineB,lineC) {
  // seu código aqui
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineB + lineC)
  return true;
  if (lineA> Math.abs(lineB-lineC) && lineB> Math.abs(lineA-lineC) && lineC>Math.abs(lineA-lineB))
    return true;
  else 
    return false;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
