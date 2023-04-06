function theImitationGame(arr) {
  arr = arr.slice(0, arr.indexOf("Decode"))
  let msg = arr.shift()
  const actions = {
    Move: move,
    Insert: insert,
    ChangeAll: changeAll,
  }

  function getParts(i) {
    return [msg.substring(0, i), msg.substring(i)]
  }

  function move(n) {
    const [a, b] = getParts(n)
    msg = b + a
  }

  function insert(i, v) {
    const [a, b] = getParts(i)
    msg = `${a}${v}${b}`
  }

  function changeAll(s, r) {
    s = s.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
    const regx = new RegExp(s, "g")
    msg = msg.replace(regx, r)
  }

  arr.forEach(x => {
    const [command, i, i1] = x.split("|")
    actions[command](i, i1)
  })
  console.log(`The decrypted message is: ${msg}`)
}
theImitationGame([
  'zzHe',
  'ChangeAll|z|l',
  'Insert|2|o',
  'Move|3',
  'Decode',
])

//
console.log("--------")
//

function game(data) {

  let text = data.shift();
  for (let line of data) {
    if (line === "Decode") {
      break;
    }
    let tokens = line.split("|");
    let action = tokens[0];

    switch (action) {
      case "Move":
        let n = Number(tokens[1]);
        for (let i = 0; i < n; i++) {
          let firstLetter = text.substring(0, 1);
          let anotherLetters = text.substring(1);
          text = anotherLetters + firstLetter;
        }
        break;
      case "Insert":
        let index = Number(tokens[1]);
        let value = tokens[2];
        text = text.substring(0, index) + value + text.substring(index);
        break;
      case "ChangeAll":
        let old = tokens[1];
        let newLetters = tokens[2];
        while (text.includes(old)) {
       text = text.replace(old, newLetters);
        }
        break;
    }
  }
  console.log(`The decrypted message is: ${text}`);
}
game(['zzHe',
  'ChangeAll|z|l',
  'Insert|2|o',
  'Move|3',
  'Decode',])