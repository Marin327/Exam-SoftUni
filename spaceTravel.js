function spaceTravel(input) {

    let travelRoute = input.shift().split('||');
    let startingFuel = Number(input.shift());
    let ammunition = Number(input.shift());

    for (let i = 0; i < travelRoute.length; i++) {
        let commands = travelRoute[i];
        let tokens = commands.split(" ");
        let command = tokens[0];
        let value = Number(tokens[1]);

        if (command === 'Travel') {
            if (startingFuel >= value) {
                startingFuel -= value;
                console.log(`The spaceship travelled ${value} light-years.`);
            } else {
                console.log(`Mission failed.`);
                break;
            }
        } else if (command === `Enemy`) {
            if (ammunition >= value) {
                ammunition -= value;
                console.log(`An enemy with ${value} armour is defeated.`);

            } else if (startingFuel >= value * 2) {
                console.log(`An enemy with ${value} armour is outmaneuvered.`);
            } else {
                console.log(`Mission failed.`);
                break;
            }
        } else if (command === `Repair`) {
            let addedAmmunition = value * 2;
            let addedFuel = value;
            startingFuel += addedFuel;
            ammunition += addedAmmunition;
            console.log(`Ammunitions added: ${addedAmmunition}.`);
            console.log(`Fuel added: ${addedFuel}.`);
        } else if (command === `Titan`) {
            console.log(`You have reached Titan, all passengers are safe.`);
            break;
        }
    }
}
spaceTravel(["Travel 10||Enemy 30||Reapir 15|| Titan", '50', '80']);


//
console.log("-----------");
//

spaceTravel(["Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50|| TItan", '60', '100'])