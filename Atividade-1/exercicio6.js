const entrada = require('readline-sync');

let soma = 0;

for(let i = 1; i <= 5; i++){
    const valor = entrada.questionFloat(`Informe o valor da medicao ${i}: `)
    soma += valor;
}

const media = soma / 5

console.log(`A soma foi de ${soma} com uma media de ${media.toFixed(2)}.`);