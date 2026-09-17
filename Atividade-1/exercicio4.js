const entrada = require('readline-sync');

const temperaturaAtual = entrada.questionFloat("Informe a temperatura atual da maquina: ")

if (temperaturaAtual <= 60) {
    console.log("Temperatura em condicao NORMAL");
} else if (temperaturaAtual > 60 && temperaturaAtual <= 80) {
    console.log("Temperatura em condicao de ATENCAO");
} else {
    console.log("Temperatura em condicao CRITICA");
}