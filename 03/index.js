// Exercício (03) - Encontre o 10;

// Lista disponibilizada;
const numbers = [54, 22, 14, 87, 10, 284];
// Indice da posição.
let i = 0;
// Encotrei o número 10?
let found = false;

// Sistema de repetição;
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] === 10) {
        found = true;
        break
    };
}

// Imprime no console;
if (found) {
    console.log(`Encontei o número 10, ele se encontra no indice: ${i}`);
} else {
    console.log(`-1`);
}