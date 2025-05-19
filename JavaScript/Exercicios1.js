/*
---------------------------------------------------- Exercicio 1 
let n
function parouimpar(n){
    if (n % 2 === 0){
        return("par")
    }
    else{
        return("ímpar")
    }
}

console.log(n)

---------------------------------------------------- Exercicio 2

let idade = user(prompt("digite sua idade: "))

if(idade <= 11){
    console.log("Você é uma criança!")
}else if(idade <= 17){
    console.log("Você é um adolescente!")
}else if(idade <= 59){
    console.log("Você é um adulto!")
}else{
    console.log("Você é um idoso!")
}

---------------------------------------------------- Exercício 3

let nota = number(prompt("digite a nota para saber seu resultado: "))

if(nota >= 7){
    console.log("Você foi aprovado!")
}else if(nota >= 5){
    console.log("Você está de recuperação!")
}else{
    console.log("Você foi reprovado!")
}

---------------------------------------------------- Exercício 4

let escolha = Number(prompt("Faça sua escolha: Correr = 1;  Lutar = 2; Esconder-se = 3; Chamar ajuda = 4"))

switch(escolha){
    case 1:
        console.log("Você correu, mas tropeçou e foi pego...")
        break;
        case 2:
            console.log("Você decidiu lutar, atingiu o inimigo e ele fugiu! Yeee")
            break;
            case 3:
                console.log("Você se escondeu e o inimigo não te encontrou e foi embora! Ufa")
                break;
                case 4:
                    console.log("Você decidiu chamar ajuda e alguém te escutou! Será que chegaram a tempo?")
                    break;
}

---------------------------------------------------- Exercicio 5

let peso = Number(prompt("Digite seu peso (em kg) e descubra seu IMC: "))

if(peso <= 18,5){
    console.log("Você está abaixo do peso! Cuide-se.")
} else if ( peso <= 24,9){
    console.log("Você está no peso normal! Parabéns!")
} else if (peso <= 29,9){
    console.log ("Você está sobrepeso! Cuide-se.")
} else {
    console.log("Você está no nível de obesidade! Cuide-se.")
}

---------------------------------------------------- Exercicio 6

let A = Number(prompt("Digite o lado A: "));
let B = Number(prompt("Digite o lado B: "));
let C = Number(prompt("Digite o lado C: "));

if (A === B && B === C) {
    console.log("Triângulo Equilátero");
} else if (A === B || A === C || B === C) {
    console.log("Triângulo Isósceles");
} else if (A !== B && B !== C && A !== C) {
    console.log("Triângulo Escaleno");
} else {
    console.log("Os lados fornecidos NÃO formam um triângulo");
}


---------------------------------------------------- Exercicio 7 

let macas = Number(prompt("Quantas maçãs você deseja comprar? "))
let resultado;

if(macas <= 11){
    resultado = macas * 0,3 
    console.log(`O valor total da compra foi ${resultado} reais!`)
} else {
    resultado = macas * 0,25 
    console.log(`O valor total da compra foi ${resultado} reais`)
}

---------------------------------------------------- Exercicio 8

let valor1 = Number(prompt("Digite o primeiro valor: "));
let valor2 = Number(prompt("Digite o segundo valor que não seja igual ao primeiro: "));

if (valor1 === valor2) {
    console.log("Os valores são iguais. Digite novamnete");
} else {
    if (valor1 < valor2) {
        console.log(`Os valores em ordem crescente são: ${valor1}, ${valor2}`);
    } else {
        console.log(`Os valores em ordem crescente são: ${valor2}, ${valor1}`);
    }
}

---------------------------------------------------- Exercicio 9

for (let i = 10; i >= 1; i--) {
   console.log(i);
 }

---------------------------------------------------- Exercicio 10

let numero = Number(prompt("Digite um número inteiro:"));

for (let i = 1; i <= 10; i++) {
    console.log(`${i}: ${numero}`);
}

---------------------------------------------------- Exercio 11

let soma = 0

for (let i = 1; i <= 5; i++) {
    let numero = Number(prompt(`Digite o ${i}º número:`)) 
    soma += numero
}

console.log(`A soma total dos números é: ${soma}`);

---------------------------------------------------- Exercicio 12

let numero = Number(prompt(`Digite o ${i} para saber a tabuada dele: `))

for (let i = 1; i <= 10; i++){
    console.log(`${numero} x ${i} = ${numero * i}`);
}

---------------------------------------------------- Exercicio 13

let soma = 0
let contador = 0

while (true) {
    let numero = Number(prompt("Digite um número decimal (ou 0 para encerrar):"));

    if (numero === 0) {
        break;
    }

    soma += numero;
    contador++;
}

if (contador > 0) {
    let media = soma / contador
    console.log(`A média aritmética dos números digitados é: ${media.toFixed(2)}`);
} else {
    console.log("Nenhum número foi digitado.");
}

---------------------------------------------------- Exercicio 14

let numero = Number(prompt("Digite um número inteiro para calcular o fatorial:"))

if (numero < 0) {
    console.log("Fatorial não é definido para números negativos.")
} else {
    let fatorial = 1

    for (let i = 1; i <= numero; i++) {
        fatorial *= i
    }

    console.log(`O fatorial de ${numero} é: ${fatorial}`)
}

---------------------------------------------------- Exercicio 15

let n1 = 0
let n2 = 1

console.log("Sequência de Fibonacci:")
console.log(n1)
console.log(n2)

for (let i = 3; i <= 10; i++) {
    let proximo = n1 + n2
    console.log(proximo)
    n1 = n2
    n2 = proximo
}

*/

















