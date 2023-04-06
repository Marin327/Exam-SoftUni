function solve(line) {
    let health = 100;
    let bitcoins = 0;
    //1. split rooms from input;
    let rooms = line.split('|');
    //1.5. Iterate rooms;
    for (let i = 0; i < rooms.length; i++) {
        //2. split input for each room; 
        let room = rooms[i];
        let tokens = room.split(' ');
        let command = tokens[0];
        let value = Number(tokens[1]);
        //3. execute rooms logic;
        if (command === 'potion') {
            let missingHealth = 100 - health;
            let restoredHealth = Math.min(missingHealth, value);
            health += restoredHealth;
            console.log(`You healed for ${restoredHealth} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command === 'chest') {
            bitcoins += value;
            console.log(`You found ${value} bitcoins.`);
        } else {
            health -= value;
            if (health <= 0) {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i + 1}`);
                return;
            }
            console.log(`You slayed ${command}.`);
        }
    }
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}
solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])