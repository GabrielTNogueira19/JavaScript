// EXERCÍCIO 04 - Array de objetos com decisão Objetos, array e condição
// integrada

// Um almoxarifado precisa cadastrar 4 materiais. Cada material possui nome, quantidade atual e estoque
// mínimo. Ao final, o programa deve indicar quais precisam de reposição.
// O programa deve:
// ☐ Criar um array vazio.
// ☐ Usar um laço para cadastrar 4 materiais.
// ☐ Criar um objeto em cada repetição com nome, quantidade e estoqueMinimo.
// ☐ Adicionar cada objeto ao array com push().
// ☐ Depois do cadastro, percorrer o array.
// ☐ Se quantidade < estoqueMinimo, exibir REPOR ESTOQUE; caso contrário, ESTOQUE OK.
// ☐ Exibir nome, quantidade, estoque mínimo e situação.

const entrada = require('readline-sync');

let estoque = []

for(let i = 1; i <= 4; i++){
    const nomeMaterial = entrada.question(`Informe o nome do material ${i}: `)
    const quantidadeAtual = entrada.questionInt(`Informe a quantidade atual do material ${i}: `)
    const estoqueMinimo = entrada.question(`Informe o estoque minimo para o material ${i}: `)
    console.log("========================================================");
    
    estoque.push({nome: nomeMaterial, quantidade: quantidadeAtual, minimo: estoqueMinimo})
}

console.log("\n=== REVISAO DO ESTOQUE ===\n");

for(let i = 0; i < estoque.length; i++){
    console.log(`Nome do Material: ${estoque[i].nome}`);
    console.log(`Quantidade Atual de Material: ${estoque[i].quantidade}`);
    console.log(`Estoque Minimo do Material: ${estoque[i].minimo}`);
    if(estoque[i].quantidade < estoque[i].minimo){
        console.log(`Material ${estoque[i].nome.toUpperCase()} precisa REPOR ESTOQUE!\n`);
    } else{
        console.log(`Material ${estoque[i].nome.toUpperCase()} está com ESTOQUE OK!\n`);
    }
}