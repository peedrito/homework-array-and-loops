// Exercício (07) - somente nomes com iniciais "a";

// Array do exercício;
const names = ["Ana", "Joana", "Carlos", "amanda"];
let aPrefixdNames = [];

// percorre o array procurando nomes;
for (const search of names) {
    let namesInCaps = search.toUpperCase();
    if (namesInCaps.startsWith("A")) {
        aPrefixdNames.push(search);
    }
}

// Imprime no console;
console.log(aPrefixdNames);