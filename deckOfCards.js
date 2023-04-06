function deckOfCards(input) {

    let cards = input.shift().split(", ");
    let numCommands = Number(input.shift());

    for (let i = 0; i < numCommands; i++) {
        let command = input[i].split(", ");
        let args = command.slice(1);

        switch (command[0]) {
            case "Add":
                if (!cards.includes(args[0])) {
                    cards.push(args[0]);
                    console.log('Card successfully added');
                } else {
                    console.log('Card is already in the deck');
                }
                break;

            case "Insert":
                let index = Number(args[0]);
                if (index < 0 || index >= cards.length) {
                    console.log('Index out of range');
                } else {
                    cards.splice(index, 0, args[1]);
                    console.log('Card successfully added');
                }
                break;
                
            case "Remove":
                if (cards.includes(args[0])) {
                    cards.splice(cards.indexOf(args[0]), 1);
                    console.log('Card successfully removed');
                } else {
                    console.log('Card not found');
                }
                break;
        }
    }
    console.log(cards.join(" "));
}

deckOfCards(["Ace of Diamonds, Queen of Hearts, King of Clubs", "3", "Add, King of Diamonds", "Insert, 2, Jack of Spades", "Remove, Ace of Diamonds"]);