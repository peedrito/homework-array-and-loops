// Exercício (14) - Menor valor entre dois valores;

// Array do exercício;
const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

// Verifica o menor valor para cada posição e imprime
for (let i = 0; i < arrayA.length; i++) {
    const menorValor = Math.min(arrayA[i], arrayB[i]);
    console.log(`Menor valor na posição ${i + 1}: ${menorValor}`);
}
