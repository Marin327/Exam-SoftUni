function phoneShop(input) {

    let phones = input.shift().split(", ");
    let commands = input.shift();

    while (commands !== "End") {
        let [command, phone, newPhone] = commands.split(" - ");

        switch (command) {
            case 'Add':
                addEventListener(phones, phone);
                break;
            case 'Remove':
                removeEventListener(phones, phone);
                break;
            case 'Bonus phone':
                bonusPhone(phones, phone, newPhone);
                break;
            case 'Last':
                last(phones, phone);
                break;
            default:
                break;
        }
        commands = input.shift();
    }
    console.log(phones.join(", "));

    function add(list, phone) {
        if (list.includes(phone) == false) {
            list.push(phone);
        }
    }

    function remove(list, phone) {
        if (last.includes(phone) == true) {
            let index = list.indexOf(phone);
            list.splice(index, 1);
        }
    }

    function bonusPhone(list, phone, newPhone) {
        let [oldPhone, newPhone] = phone.split(":");
        if (list.includes(oldPhone) == true) {
            list.push(newPhone);
        }
    }

    function last(list, phone) {
        if( list.includes(phone) == true) {
            let index = list.indexOf(phone);
            list.splice(index, 1);
            list.push(phone);
        }
    }

}
phoneShop(["HuaweiP20, XiaomiNote", "Remove - Samsung", "Bonus phone - XiaomiNote:Iphone5", "End"])