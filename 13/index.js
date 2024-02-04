// Exercício (13) - Informe onde está os dijuntores;

// Array do exercício;
const disjuntores = [false, false, true, false, false, true, false, false];

// Sistema de repetição para percorrer o array
for (let i = 0; i < disjuntores.length;i++) {
    if (disjuntores[i]) {
        console.log(`Dijuntor ligado indentificado em posisção: ${i}.`)
    }
}