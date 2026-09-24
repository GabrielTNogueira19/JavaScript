// EXERCÍCIO 02 - Média com laço e acumulador for, acumulador e média
// Uma linha de produção registrou a quantidade de peças com defeito em 6 inspeções. O programa deve ler
// os valores e calcular o total e a média.
// O programa deve:
// ☐ Criar um acumulador iniciado em zero.
// ☐ Usar um laço for para solicitar exatamente 6 valores.
// ☐ Somar cada valor ao acumulador.
// ☐ Ao final, calcular a média.
// ☐ Exibir total e média.
// ☐ Não repetir manualmente seis comandos de entrada.

const entrada = require('readline-sync');

let somaValores = 0;
let i = 1
for(i = 1; i <= 6; i++){
    let valorInspecao = entrada.questionFloat(`Informe o valor da inspecao ${i}: `);

    somaValores += valorInspecao;
}

const media = somaValores/i

console.log("\n=== RELATORIO FINAL ===");
console.log(`Soma Total: ${somaValores}`);
console.log(`Media: ${media.toFixed(2)}\n`);