function pirates(data) {
    let target = [];

    for (let line of data) {
        if (line === "Sail") {
            break;
        }

        let tokens = line.split("||");
        let town = tokens[0];
        let population = Number(tokens[1]);
        let gold = Number(tokens[2]);
        let currentTownIndex = -1;
        let currentTown = target.filter((obj, i) => {
            if (obj.town === town) {
                currentTownIndex = i
            }
            return obj.town === town;
        });
        if (currentTown.length === 0) {
            target.push({
                town,
                population,
                gold
            })
        } else {
            target[currentTownIndex].population += population;
            target[currentTownIndex].gold += gold;
        }
    }

    let nextPart = data.indexOf("Sail") + 1;

    for (let i = nextPart; i < data.length; i++) {
        let line = data[i];
        if (line === "End") {
            break;
        }
        let tokens = line.split("=>");
        let action = tokens[0];
        let town;
        let people;
        let gold;
        switch(action) {
            case "Plunder":  
           town = tokens[1];
           people = Number(tokens[2]);
           gold = Number(tokens[3]);

           for(let x = 0; x < target.length; x++) {
            let currentTown = target[x];
            if(currentTown.town === town) {
                currentTown.population -= people;
                currentTown.gold -= gold;
                console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            }
            if(currentTown.town === town && (currentTown.population <= 0 || currentTown.gold <= 0)) {
           console.log(`${town} has been wiped off the map!`);
           target.splice(x,1);
            }
           }
            break;
            case "Prosper":
                town = tokens[1];
                gold = Number(tokens[2]);
                if(gold < 0) {
                    console.log("Gold added cannot be a negative number!");
                    break;
                }
                for(let x = 0; x <target.length; x++) {
                    let currentTown = target[x];
                    if(currentTown.town === town) {
                        currentTown.gold += gold;
                        console.log(`${gold} gold added to the city treasury. ${town} now has ${currentTown.gold} gold.`);
                    }
                }
            break;
        }
    }
    if(target.length > 0) {
        let buff = `Ahoy, Captain! There are ${target.length} wealthy settlements to go to:\n`;

        for(let obj of target) {
            buff += `${obj.town} -> Population: ${obj.population} citizens, Gold: ${obj.gold} kg\n`;

        }
        console.log(buff);
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}
pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])