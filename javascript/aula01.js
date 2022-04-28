// Estruturas condicionais
// If/Else/ElseIf
var valorDaConta;

valorDaConta=100;

if (valorDaConta >= 100){
    console.log("Saldo suficiente")
}else if (valorDaConta >= 0 && valorDaConta <100){
    console.log("Saldo insuficiente")
}else{
    console.log("Saldo negativo")
}

// Switch-case
var opcao = 'a'

switch(opcao) {
    case 'A':
        console.log("Opcao A");
        break;
    case 'B':
        console.log("Opcao B");
        break;
    default:
        console.log("Opcao invalida");
        break;
}

// Operador ternário
var idade = 17
var maior;
var menor;

maior = (idade >= 18 ? true : false)

if (maior){
    console.log("pode dirigir")
}else{
    console.log("não pode dirigir")
}

menor = (idade < 18 ? true : false)

if (!menor){
    console.log("pode dirigir")
}else{
    console.log("não pode dirigir")
}

maior == true ? console.log("Pode dirigir") : console.log("Não pode dirigir")