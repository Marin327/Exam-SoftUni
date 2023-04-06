function contactList(array) {
 
    let conList = array.shift().split(' ');
 
    let exportArr = [];
    let exportArr2 = [];
 
    while (true) {
        let command = array.shift().split(' ');
 
        let firstWord = command.shift();
        let secondWord = command.shift();
 
        if (firstWord === 'Add') {
            let num = command.shift();
            if (conList.includes(secondWord)) {
                if (num >= 0 && num <= conList.length) {
                    conList.splice(Number(num), 0, secondWord)
                }
            } else {
                conList.push(secondWord);
            }
 
        } else if (firstWord === 'Remove') {
            let num = Number(secondWord);
            if (num >= 0 && num <= conList.length) {
                conList.splice(num, 1)
            }
        } else if (firstWord === 'Export') {
            if (Number(command) >= conList.length && Number(command) > 0) {
                exportArr2 = conList.slice(Number(secondWord), conList.length);
                console.log(exportArr2.join(' '));
 
            } else if (Number(command) <= conList.length && Number(command) > 0) {
                exportArr = conList.slice(Number(secondWord), Number(command));
                console.log(exportArr.join(' '));
            }
        } else if (secondWord === 'Normal') {
            console.log(`Contacts: ${conList.join(' ')}`);
            break;
        } else if (secondWord === 'Reversed') {
            console.log(`Contacts: ${conList.reverse().join(' ')}`);
            break;
        }
    }
}