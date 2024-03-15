function fibonacciSequence(n) {
    var fibSequence = [0, 1]; // Inicializando a sequência com os dois primeiros números de Fibonacci

    // Gerando a sequência até o número desejado
    for (var i = 2; i < n; i++) {
        fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
    }

    return fibSequence;
}

// Solicita ao usuário o número até onde gerar a sequência
var num = parseInt(prompt("Digite um número para gerar a sequência de Fibonacci até esse número:"));

// Verifica se o número é válido
if (!isNaN(num) && num > 0) {
    // Chama a função e exibe a sequência gerada
    var sequence = fibonacciSequence(num);
    console.log("Sequência de Fibonacci até " + num + ":");
    console.log(sequence.join(", "));
} else {
    console.log("Por favor, insira um número válido maior que zero.");
}
