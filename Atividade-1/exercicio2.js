const entrada = require('readline-sync');

const nomeMaterial = entrada.question("Informe o nome do material: ");
const quantidadeAdiquirida = entrada.questionInt("Informe a quantidade adquirida do material: ");
const precoUnitario = entrada.questionFloat("Informe o preco por unidade do material: ");

const totalCompra = quantidadeAdiquirida*precoUnitario;

console.log("=== NOTA DE COMPRA ===");
console.log(`Nome do Material: ${nomeMaterial}`);
console.log(`Quantidade Adiquirida: ${quantidadeAdiquirida}`);
console.log(`Preco Unitario: R$${precoUnitario.toFixed(2)}`);
console.log(`Valor Total: R$${totalCompra.toFixed(2)}`);
