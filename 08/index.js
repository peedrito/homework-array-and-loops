// Exercício (08) - Encontre o maior number;

// Array do exercício;
const numbers = [3, 24, 1, 8, 11, 7, 15];
// Variavel para armazenar maior número;
let maxNumber = numbers[0];

// Percorre todo o array;
for (let i = 0; i < numbers.length;i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i]; // Caso encontre um maior, define ele.
    }
}

// Impriome no console;
console.log(maxNumber);