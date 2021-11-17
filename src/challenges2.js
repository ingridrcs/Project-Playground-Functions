// Desafio 10
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

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
