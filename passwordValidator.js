function passwordValidator(input) {
    let password = input.shift();
    commands = input.shift();

    while (commands !== 'Complete') {
        let asd = commands.split(' ');
        command = asd[0];
        if (command === 'Insert') {
            let char = asd[2];
            let n = asd[1];
            if (n < password) {
                let password = password[n] + char + password[n + 1];
                console.log(password);
            }
        } else {
            if (command === 'Make') {
                let command = asd[1];
                let n = asd[2];
                if (command === 'Upper') {
                    let password = password[n] + password[n].upper() + password[n + 1];
                    console.log(password);
                }
            } else if (command === 'Lower') {
                let password = password[n] + password[n].lower() + password[n + 1];
                console.log(password);
            
        } else if (command === 'Replace') {
            let char = asd[1];
            n = asd[2];
            if (char not in password) {} else {
                let sum = ord(char) + n;
                let char1 = chr(sum);
                password = password.replace(char, char1)
                console.log(password);
            }
        } else if (command === 'Validation') {
            if (password < 8) {
                console.log('Password must be at least 8 characters long');
            } else if (password.isnum() == False && '_!' && (not in password)) {
                console.log('Password must consist only of letters, digits and _!');
            } else if (not any(x.isupper() for (x in password))) {
                console.log('Password must consist at least one uppercase letter!');
            } else if (not any(x.islower() for (x in password))) {
                print('Password must consist at least one lowercase letter!');
            } else if (not any(x.isdigit() for (x in password))) {
                console.log('Password must consist at least one digit!');
            }
            commands = input.shift();
        }
      }
    }
}
passwordValidator(['invalidpassword*',
    'Add 2 p',
    'Replace i -50',
    'Replace * 10',
    'Make Upper 2',
    'Validation',
    'Complete'])