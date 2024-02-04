// Exercício (15) - Separando numeros impares e numeros pares;

// Array do exercício;
const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumber = [];
const oddNumber = [];

for (const search of original) {
    if (search % 2 === 0) {
        evenNumber.push(search);
    } else {
        oddNumber.push(search);
    }
}

console.log(evenNumber,oddNumber)