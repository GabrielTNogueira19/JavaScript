// EXERCÍCIO 03 - Cadastro e segunda leitura do
// array

// Array, push(), length e
// segundo percurso
// Cadastre 5 nomes de operadores e, depois de terminar o cadastro, faça uma segunda passagem pelo
// array para exibir a lista numerada.
// O programa deve:
// ☐ Criar um array vazio.
// ☐ Usar um laço para solicitar 5 nomes.
// ☐ Usar push() dentro do laço de cadastro.
// ☐ Depois do cadastro, criar outro laço para percorrer o array.
// ☐ Usar length no segundo laço.
// ☐ Exibir no formato: 1 - Nome, 2 - Nome, etc.

const entrada = require('readline-sync');

let listaTrabalhadores = [];

for(let i = 0; i<5; i++){
    const nome = entrada.question(`Insira o nome do trabalhador ${i+1}: `)
    listaTrabalhadores.push(nome)
}

console.log("\n=== RELATORIO DE TRABALHADORES ===");

for(let i = 0; i<listaTrabalhadores.length; i++){
    console.log(`Trabalhador ${i+1}: ${listaTrabalhadores[i]}`);
}