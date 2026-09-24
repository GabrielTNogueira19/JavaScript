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

function calcularMaoDeObra(horas) {
    const valorHora = 80;
    return horas*valorHora;
}

function calcularTotal(valorPecas, valorHoras) {
    return valorPecas+valorHoras;
}

function verificarGarantia(meses) {
    if(meses <= 6){
        return "EM GARANTIA";
    } else {
        return "FORA DA GARANTIA";
    }
}

module.exports = {
    calcularMaoDeObra,
    calcularTotal,
    verificarGarantia
}