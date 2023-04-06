function chatLogger(input) {
    let chat = [];
    let numCommand = input.shift().split(" ");

    for(let i = 0; i < numCommand.length; i++) {
       while(numCommand !== "end") {
        numCommand++;
          switch(numCommand) { 
             case "Chat": `${Hello}`; break;
                case "Chat": `${darling}`;  break;
                     case "Edit": `${darling} ${Darling}`; break; 
                          case "Spam": `${how} ${are} ${you}`;  break;
                            case "Delete": `${Darling}`;  break;
                            default: break;
               }     
               break;
           }
        command = input.shift();
    }
    console.log(chat.join(" "));
}
chatLogger([
"Chat Hello",
"Chat darling",
"Edit darling Darling",
"Spam how are you",
"Delete Darling",
"end"])