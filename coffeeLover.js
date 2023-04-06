function coffeeLover(input) {
    let coffeeBrands = input.shift().split(" ");
    let numCommands = Number(input.shift());

    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
        for (let i = 0; i < numCommands.length; i++) {
            let command = input[i].split(" ");
            let args = command.slice(1);

            switch (command[0]) {
                case "Include":
                    coffeeBrands.push(args[0]);
                    break;
                case "Remove":
                    let numRemove = args[0] === "first" ?
                        parseInt(args[1]) : 0;
                    coffeeBrands.splice(0, numRemove);
                    break;
                case "Prefer":
                    let index1 = parseInt(args[0]);
                    let index2 = parseInt(args[1]);
                    swap(coffeeBrands, index1, index2);
                    break;
                case "Reverse":
                    coffeeBrands.reverse();
                    break;

            }
            console.log("Coffees:\n " +
             coffeeBrands.join(" "));
        }
    }

coffeeLover([
    "Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",
    "5",
    "Include OrdinaryCoffee",
    "Remove first 1",
    "Prefer 0 1",
    "Prefer 3 1",
    "Reverse"
])