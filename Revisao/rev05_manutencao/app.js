// EXERCÍCIO 05 - Funções e modularização Parâmetros, return, require()
// e module.exports
// Crie um pequeno sistema modular para calcular o custo de manutenção de uma máquina usando dois
// arquivos.
// O programa deve:
// ☐ Criar a pasta rev05_manutencao.
// ☐ Criar funcoesManutencao.js com calcularMaoDeObra(horas), usando R$ 80,00 por hora.
// ☐ Criar calcularTotal(valorPecas, horas), somando peças e mão de obra.
// ☐ Criar verificarGarantia(meses), retornando EM GARANTIA quando meses <= 6 e FORA DA GARANTIA nos
// demais casos.
// ☐ Exportar as três funções com module.exports.
// ☐ Criar app.js e importar o módulo completo com require('./funcoesManutencao').
// ☐ Solicitar nome da máquina, valor das peças, horas e meses desde a última manutenção.
// ☐ Chamar as funções pelo objeto importado e exibir relatório final completo.

const entrada = require('readline-sync');
const manutencao = require('./funcoesManutencao.js');

const nomeMaquina =  entrada.question("Insira o nome da maquina: ");
const valorPecas =  entrada.questionFloat("Insira o valor das pecas usadas na manutencao: ");
const horasTrabalho =  entrada.questionInt("Insira as horas gastas com a manutencao: ");
const mesesUltimaManutencao =  entrada.questionInt("Insira a quantidade de meses desde a ultima manutencao: ");

const valorObra = manutencao.calcularMaoDeObra(horasTrabalho);
const valorTotal = manutencao.calcularTotal(valorPecas, valorObra);
const estadoGarantia = manutencao.verificarGarantia(mesesUltimaManutencao);

console.log("\n=== RELATORIO FINAL ===\n");

console.log(`Nome: ${nomeMaquina}`);
console.log(`Valor Gasto com Pecas: R$${valorPecas.toFixed(2)}`);
console.log(`Horas Gastas na Manutencao: ${horasTrabalho}`);
console.log(`Valor Mao de Obra: ${valorObra}`);
console.log(`Valor Total: R$${valorTotal}`);
console.log(`Estado da Garantia: ${estadoGarantia}\n`);
