/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
- Preço do Etanol
- Preço da Gasolina
- O tipo de combustível a ser utilizado.
- Gasto médio de combustível do carro por KM;
- Distância em Km da viagem;

Imprima no console o valor que será gasto para realizar a viagem. */


const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoDoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKm / kmPorLitros

if (tipoDoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {(tipoDoCombustivel === 'Gasolina')
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}
