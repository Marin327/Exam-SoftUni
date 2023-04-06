function solve(input) {
    let array = input.split("|");
 
    let initialHealth = 100;
    let totalBitcoins = 0;
    let roomCounter = 0;
    let monster = "";
 
    for (let i = 0; i < array.length; i++) {
        let tokens = array[i].split(" ");
 
        if (tokens[0] == "potion") {
            roomCounter++;
          
            let healingPart = Number.parseInt(tokens[1]);
            let currentHealth = initialHealth + healingPart;
          
            if (currentHealth < 100) {
                initialHealth += healingPart;
                console.log(`You healed for ${healingPart} hp.`);
                console.log(`Current health: ${currentHealth} hp.`);
            } else {
                let potionOfHealingPart = (100 + healingPart) - currentHealth;
                initialHealth += potionOfHealingPart;
                console.log(`You healed for ${potionOfHealingPart} hp.`);
                console.log(`Current health: ${initialHealth} hp.`);
            }
        } else if (tokens[0] == "chest") {
            roomCounter++;
          
            let numberOfBitcoins = Number.parseInt(tokens[1]);
            console.log(`You found ${numberOfBitcoins} bitcoins.`);
          
            totalBitcoins += numberOfBitcoins;
        } else {
            roomCounter++;
 
            monster = tokens[0];
            let attack = Number.parseInt(tokens[1]);
            initialHealth -= attack;
            if (initialHealth > 0) {
                console.log(`You slayed ${monster}.`);
            } else {
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${roomCounter}`);
                return;
            }
        }
    }
  
    console.log(`You've made it!\nBitcoins: ${totalBitcoins}\nHealth: ${initialHealth}`);
}
solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])