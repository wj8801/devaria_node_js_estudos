const readline = require ('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const myFirstConst = 'My first const';
console.log(myFirstConst);

let fieldReading;
readline.question('Inform your age:', input => {
    fieldReading = input;
    console.log(`The user typed: ${fieldReading}`)
});
