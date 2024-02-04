// Exercício (12) - fila do banco;

// Array do exercício;

const innerQueue = ["Jose", "Maria", "Joao"];
const outerQueue = ["Joana", "Roberta", "Marcos", "Felipe"];

// Define o limite de pessoas na fila de dentro
const innerQueueLimit = 5;

// Enquanto houver pessoas na fila de fora e espaço na fila de dentro
while (innerQueue.length > 0 && outerQueue.length < innerQueueLimit) {
    // Remove a primeira pessoa da fila de fora
    const transferredPerson = filaDeFora.shift();
    
    // Adiciona a pessoa transferida para o final da fila de dentro
    filaDeDentro.push(transferredPerson);
}

// Imprime a fila de dentro
console.log(innerQueue);

// Imprime a fila de fora
console.log(outerQueue);
