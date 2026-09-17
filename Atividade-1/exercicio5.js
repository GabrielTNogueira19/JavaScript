const entrada = require('readline-sync');

const pecasPorCiclo = entrada.questionInt("Informe a quantidade de pecas produzidas por ciclo: ")

for(let ciclo = 1; ciclo <= 10; ciclo++){
    console.log(`Ciclo ${ciclo} = ${pecasPorCiclo*(ciclo)}pcs`)
}