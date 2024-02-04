// Exercício (11) - numeros entre 10 a 20;

// Array do exercício;
const original = [5, 7, 13, 17, 26, 34, 118, 245];
let numbersLimited = [];

for (const search of original) {
    if (search >= 10 && search <= 20) {
        numbersLimited.push(search);
    }
}

console.log(numbersLimited);