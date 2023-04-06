function solve(array){
    let initialLoot = array.shift().split('|');
    let stolen = [];
    let average = 0;
 
    for ( let i = 0; i < array.length - 1; i++){
        let tokens = array[i].split(' ')
        let command = tokens[0];
        if ( command === 'Loot'){
            for ( let i = 1; i < tokens.length; i++){
                let element = tokens[i];
                if (!initialLoot.includes(element)){
                    initialLoot.unshift(element);
                }
            }
        } else if (command === 'Drop'){
            let num = Number(tokens[1]);
            if ( num >= 0 && num < initialLoot.length){
                let element = initialLoot[num];
            initialLoot.splice(num, 1,)
            initialLoot.push(element);
        }
        } else if (command === 'Steal'){
            let newNum = Number(tokens[1]);
            if ( initialLoot.length < newNum){
                newNum = initialLoot.length;
            }
            for ( let i = initialLoot.length - newNum; i < initialLoot.length; i++){
                let lastItems = initialLoot[i];
                stolen.push(lastItems);
            }
            initialLoot.splice(-newNum);
        }
    }     
    console.log(stolen.join(', '));
    if ( initialLoot.length > 0){
        for ( let i = 0; i < initialLoot.length; i++){
        let element = initialLoot[i].length;
        average += element;
    }
    console.log(`Average treasure gain: ${(average / initialLoot.length).toFixed(2)} pirate credits.`)
} else {
    console.log('Failed treasure hunt.')
 }
}
solve((["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"]))