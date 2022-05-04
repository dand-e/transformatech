var numero = 10;

console.log(numero);
console.log(typeof(numero));

var numero = 'dez'

console.log(numero);
console.log(typeof(numero));


// let numero = 11;
// let não permite a redeclaração de numero
// console.log(numero);
// console.log(typeof(numero));

function imprimeDez(){
  // varivável declarada dentro do escopo de uma função
  let numero = 'onze'

  console.log(numero);
  console.log(typeof(numero));
  
  // varivável declarada dentro do escopo de bloco
  for (let numero = 0 ; numero <= 10 ; numero++){
    console.log(numero);
  }
}

imprimeDez() ;
console.log('Fora do loop')