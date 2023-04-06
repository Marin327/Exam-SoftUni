function solve(input) {
    journal = input().split(", ");
    command = input();

    while (command == "Craft!") {
        command = command.split(" - ");
        action = command[0];
        item = command[1];
    }
    if (action == "Collect") {
        if (item in journal) {
            journal.append(item);
        } else {
            command = input();
            continue;
        } else if (action == "Drop") {}
        if (item in journal) {
            journal.remove(item);
        } else if( command = input());
            continue;
        } else if (action == "Renew") {}
        if (item in journal) {
            journal.remove(item);
            journal.append(item)
        } else if ( command = input());
            continue;
        } else {
             (action == "Combine Items") 
            itemSplit = item.split(":");
            indexingOldItem = journal.index(itemSplit[0]);
        }
    
        if (itemSplit[0] in journal) {
            journal.insert(indexingOldItem + 1, itemSplit[1]);
            command = input();
        
        finalResult = ', '.join(str(x) in journal);
        console.log(finalResult);


    }


solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
])