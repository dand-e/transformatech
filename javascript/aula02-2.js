// Estruturas de repetição

// While
let numero = 0;
// let por ter seu valor alterado, mas não redeclarado
// var pode ser redeclarado e ter ser valor alterado 

while (numero < 11){
    numero ++;
    console.log(numero);
    
}

//Do While
// Ao contrário do While, Do-While primeiro executa e depois avalia a condição
let contador=0;

do {
    contador++;
    console.log("Loop número: ", contador)    
}while (contador<11)