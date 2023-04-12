
/*Faça um programa para calcular o valor gasto de combustível em uma viagem.

Você terá três variáveis. Sendo elas:
- Preço do combustível;
- Gasto médio de combustivel do carro por KM;
- Distância percorrida em KM;

Imprima no console o valor que será gasto de combustível para realizar esta viagem. */





const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 1580;

const litrosConsumidos = distanciaEmKm / kmPorLitros
const valorGasto = litrosConsumidos * precoCombustivel
console.log(valorGasto.toFixed(2));



