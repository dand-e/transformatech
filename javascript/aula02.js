// Estruturas de repetição

// While
let numero = 0;
// let por ter seu valor alterado, mas não redeclarado
// var pode ser redeclarado e ter ser valor alterado 

while (numero < 11){
    console.log(numero, "x", 2, "= ", numero*2);
    numero ++;
}

//Do While
// Ao contrário do While, Do-While primeiro executa e depois avalia a condição
let contador=0;

do {
    console.log("Loop número: ", contador)
    console.log(contador, "x", 2, "= ", contador*2);
    contador++;
}while (contador<11)

//For in
let carro = {
    marca: 'ford',
    modelo: 'fiesta',
    cor: 'prata',
}
console.log(carro);

for (elemento in carro){
    console.log(elemento,":",carro[elemento]);
}

//For of
let carros = ['fiesta','onix','fusca','saveiro'];

console.log(carros);
for (let car of carros){
    console.log(car);
}

let carrosObj = [
    {
        marca: 'ford',
        modelo: 'fiesta',
        cor: 'prata',
    },
    {
        marca: 'chevrolet',
        modelo: 'onix',
        cor: 'preto',
    },
    {
        marca: 'volkwagen',
        modelo: 'fusca',
        cor: 'azul',
    },
    {
        marca: 'fiat',
        modelo: 'saveiro',
        cor: 'vermelho',
    },
];
for(elemento of carrosObj){
    console.log(elemento);
    for (propriedade in elemento){
        console.log(propriedade+':'+elemento[propriedade]);
    }
}
for (elemento of carrosObj.entries()){
    console.log(elemento)
}