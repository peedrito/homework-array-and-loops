// Exercício (05) - Fazendo um array apenas de numbers pares;

// Array do exercício;
const source = [1, 4, 12, 21, 53, 88, 112];
// Nova array para armazenar números pares;
let evenNumbers = [];

// Percorre o array
for (const search of source) {
    // Verifica se é par ou não;
    if (search % 2 === 0) {
        evenNumbers.push(search);
    };
}

console.log(evenNumbers);


