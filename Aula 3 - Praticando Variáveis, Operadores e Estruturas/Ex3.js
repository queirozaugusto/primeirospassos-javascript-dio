/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta e a escolha da condição de pagamento.
Utilize códigos da tabela a seguir para ler a condição de pagamento escolhida e efetuar o cálculo adequeado.

Código Condição do Pagamento:
- À vista Débito, recebe 10% de desconto; (1)
- À vista no dinheiro ou PIX, recebe 15% de desconto; (2)
- Em duas vezes, preço normal da etiqueta sem juros; (3)
- Acima de duas vezes, preço normal de etiqueta + juros de 10%; (4)
*/

const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
} else if (formaDePagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
} else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}