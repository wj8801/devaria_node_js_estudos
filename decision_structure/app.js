const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

console.log("This program will verify that you are over 18 years of age and have a license to enter the kart.");
console.log("In addition to your age and driver's license, we need to check if you are on the attendance list for the time.");

readLine.question("What is the year of your birth", year => {
    if (year > 2004) {
        console.log("you are not over 18");
    } else {
        readLine.question("Do you have a license? Yes or No", license => {
            if (!(license.toUpperCase() === 'YES')) {
                console.log("You do not have a license to enter the kart");
            } else {
                readLine.question("What is your name?", name => {
                    switch (name) {
                        case 'Douglas':
                            console.log("welcome to kart Douglas.");
                            break;
                            case 'Rafael':
                                console.log("welcome to kart Rafael.");
                                break;
                                 default:
                                console.log("Your name was not found..");
                    }
                });
            }
        })
    }
})