const deck = require("./deck");

deck.addFront(7);
console.log(deck);
const deck = new deck();
console.log(deck.isEmpty()); // exibe true
deck.addBack("John");
deck.addBack("Jack");
console.log(deck.toString()); // John,Jack
deck.addBack("Camila");
console.log(deck.toString()); // John,Jack,Camila
console.log(deck.size()); // exibe 3
console.log(deck.isEmpty()); // exibe false
deck.removeFront(); // remove John
console.log(deck.toString()); // Jack,Camila
deck.removeBack(); // Camila decide sair
console.log(deck.toString()); // Jack
deck.addFront("John"); // John retorna para pedir uma informação
console.log(deck.toString()); // John,Jack
