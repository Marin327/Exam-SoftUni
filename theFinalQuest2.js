function theFinal(input) {
    let sentence = input.shift().split(' ');
 
    for (let i = 0; i < input.length; i++) {
        let cmd = input[i].split(' ')[0];
        let wordOne = input[i].split(' ')[1];
        let wordTwo = input[i].split(' ')[2];
        if (cmd === 'Delete') {
            //Delete {index} – removes the word after the given index if it is valid.
            let index = +wordOne + 1;
            if (index >= 0 && index < sentence.length) {
                sentence.splice(index, 1);
            }
        } else if (cmd === 'Swap') {
            //Swap {word1} {word2} – find the given words in the collections if they exist and swap their places.
            if (sentence.includes(wordOne) && sentence.includes(wordTwo)) {
                let indexOfWordOne = sentence.indexOf(wordOne);
                let indexOfWordTwo = sentence.indexOf(wordTwo);
                sentence.splice(indexOfWordOne, 1, wordTwo);
                sentence.splice(indexOfWordTwo, 1, wordOne);
            }
        } else if (cmd === 'Put') {
            //Put {word} {index} – add a word at the previous place {index} before the given one, if it exists.
            let index = +wordTwo - 1;
            if (index >= 0 && index <= sentence.length) {
                sentence.splice(index, 0, wordOne);
            }
        } else if (cmd === 'Sort') {
            //Sort – you must sort the words in descending order
            sentence.sort(function(a, b) {
                return b.localeCompare(a);
            });
        } else if (cmd === 'Replace') {
            //Replace {word1} {word2} – find the second word {word2} in the collection (if it exists) and replace it with the first word – {word1}.
            if (sentence.includes(wordTwo)) {
                sentence.splice(sentence.indexOf(wordTwo), 1, wordOne);
            }
        } else {
            break;
        }
    }
    return sentence.join(' ');
}
theFinal(['This the my quest! final',
'Put is 2',
'Swap final quest!',
'Delete 2',
'Stop'])