messageEncrypter = (input = []) => {
        const limit = Number(input.shift());
        const patternMessage = /([*@])(?<tag>[A-Z][a-z]{2,})\1: (?<letters>(\[[a-zA-Z]]\|){3})$/;
        const patternLetters = /[a-zA-Z]/g;
    
        for(let i = 0; i < limit; i++) {
            if((result = input.shift().match(patternMessage))) {
                const tag = result.groups.tag;
                let msg = result.groups.letters.match(patternLetters).map(l => l.charCodeAt());
                console.log(`${tag}: ${msg.join(' ')}`);
            } else {
                console.log('Valid message not found!');
            }
    
        }
        };
    

    messageEncrypter([
        '3',
        '*Request*: [I]|[s]|[i]|',
        '*Taggy@: [73]|[73]|[73]|',
        'Should be valid @Taggy@: [v]|[a]|[l]|'
      ]);
