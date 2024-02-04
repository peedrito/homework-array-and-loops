// Exercício (02) - Encontre a letra "E" ou "e";

// Lista de letras diponibilizadas no próprio exercício;
const letters = ["A", "a", "B", "C", "E", "e"];
// Saber quantos "e" ou "E" foram encontrados;
let systemFoundCount = 0;

// Sistema de repetição para percorrer o array.
for (const search of letters) {
    if (search === "e" || search === "E") {
        systemFoundCount += 1; // Soma o número guardado + 1 a cada pesquisa encontrada.
    }
}

// Se o sistema de repetição encontrar mais que 0...
if (systemFoundCount > 0) {
    console.log(`Encontrei ${systemFoundCount} referente a sua pesquisa "E" ou "e".`)
} else {
    console.log('Não há nenhuma letra "e" ou "E" na lista.')
}