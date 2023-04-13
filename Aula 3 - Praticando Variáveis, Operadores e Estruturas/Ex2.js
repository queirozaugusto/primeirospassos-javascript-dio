/*
O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula IMC:
IMC = peso / (altura * altura)

Elabora um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos:
- Abaixo de 18.5 --> Abaixo do Peso;
- Entre 18.5 e 25 --> Peso Normal
- Entre 25 e 30 --> Acima do Peso
- Entre 30 e 40 -- > Obesidade
- Acima de 40 --> Obesidade Grave
*/

const peso = 80;
const altura = 1.75;
const imc = peso / Math.pow(altura, 2);
console.log(imc);

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc <= 25) {
    console.log('Peso Normal');
} else if (imc >= 25 && imc <= 30) {
    console.log('Acima do Peso');
} else if (imc >= 30 && imc <= 40) {
    console.log('Obesidade');
} else {
    console.log('Obesidade Grave')
}

