// Exercício (10) - maior diferença;

// Array do exercício;

const number = [8, 11, 4, 1];
let numberMax = number[0];
let numberMin = number[0];

for (let i = 0; i < number.length; i++) {
    if (number[i] > numberMax) {
        numberMax = number[i];
    }
}

for (let i = 0; i < number.length; i++) {
    if (number[i] < numberMin) {
        numberMin = number[i];
    }
}

console.log(numberMax - numberMin);