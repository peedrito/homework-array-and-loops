// Exercício (06) - Some somente os pares;

// Array do exercício;
const source = [3, 4, 7, 8, 1, 6, 5, 10];
// Variavel para somar todos os pares;
let sum = 0;

// Percorre o array;
for (const search of source) {
    // Verifica se é par ou não;
    if (search % 2 === 0) {
        sum += search;
    };
}

// Imprime no console;
console.log(sum);