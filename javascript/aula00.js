var a = 10
var b = 20
var idade = 19

//operador ternario
console.log(idade < 18 ? "não pode dirigir" : "pode dirigir")

//conatenação
var c = "10"
var soma = a + c
console.log(soma)
soma = a + b
console.log(soma)

//declaração convencional de função
var num = 2
//declaração de função
function somar(num){
    return num + 3;
}
//chamada de função e atribuição de valor retornado
var resultado = somar(num)
//impressão de resultado
console.log(resultado)

var quadrado = function(num){
    return num * num;
}
console.log(quadrado(9))

//declaração com arrow function
var aoquadrado = (num) => num * num
console.log(aoquadrado(9))

//declaração de função que retorna objeto
var pessoa = function(){
    return {
        nome: "Dan Vi",
        genero: "nb",
        idade: 29
    };    
}
console.log(pessoa())

//declaração de função de seta que retorna objeto
var pessoa2 = () => ({
    nome: "Daniele Vitorino",
    genero: "não binárie",
    idade: 92
});    
console.log(pessoa2())

