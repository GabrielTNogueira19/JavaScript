const entrada = require('readline-sync');

const pesoPeca = entrada.questionFloat("Informe o peso da peca em gramas: ");

if (pesoPeca >= 95 && pesoPeca <= 105){
    console.log(`Com o peso ${pesoPeca}g a peca esta APROVADA!`);
} else {
    console.log(`Com o peso ${pesoPeca}g a peca esta REPROVADA!`);
}
