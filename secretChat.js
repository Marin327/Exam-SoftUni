function secretChat(arr) {
    arr = arr.slice(0, arr.indexOf('Reveal'))
    let msg = arr.shift()
    const actions = {
        InsertSpace: insertSpace,
        Reverse: reverse,
        ChangeAll: changeAll,
    }

    function insertSpace(i) {
        msg = `${msg.substring(0, i)} ${msg.substring(i)}`
    }

    function reverse(a) {
        if (!msg.includes(a)) {
            console.log("error")
            return null
        }

        msg = msg.replace(a, "")
        msg = `${msg}${a.split("").reverse().join("")}`
    }

    function changeAll(a, b) {
        b = b.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
        const r = new RegExp(a, "g")
        msg = msg.replace(r, b)
    }

    arr.forEach(x => {
        const [command, y, z] = x.split(":|:")
        if (actions[command](y, z) !== null) console.log(msg)
    })
    console.log(`You have a new text message: ${msg}`)
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
])

//
console.log("---------");
//

function secret(arr) {
    let secretMessage = arr.shift();

    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(':|:');
        let command = tokens[0];
        let values = tokens.slice(1);

        switch (command) {
            case "ChangeAll": {
                let substring = values[0];
                let replacement = values[1];
                while (secretMessage.includes(substring)) {
                    secretMessage = secretMessage.replace(substring, replacement);
                };
                console.log(secretMessage);
                break;
            }
            case "Reverse": {
                let substring = values[0];
                if(secretMessage.includes(substring)) {
                    secretMessage = secretMessage.replace(substring, '');
                    let reversed = reverseStr(substring);
                    secretMessage += reversed;
                    console.log(secretMessage);
                } else {
                    console.log('error');
                }
                break;
            }
            case "InsertSpace": {
                let index = values[0];
                let leftSide = secretMessage.substring(0, index);
                let rightSide = secretMessage.substring(index);
                secretMessage = leftSide + ' ' + rightSide;
                console.log(secretMessage);
                break;
            }
            case "Reveal": {
                console.log(`You have a new text message: ${secretMessage}`);
                return;
            };
        }
    }
    function reverseStr(text) {
        let arr = text.split('');
        arr = arr.reverse();
        let str = arr.join('');
        return str
    }
}

secret(['heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
])