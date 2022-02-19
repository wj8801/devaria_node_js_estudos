const argumentList = process.argv.slice(2);


console.log('----------- running a "while" ------------');

let controllerWhile = 0;
while(controllerWhile < argumentList.length){
    console.log(`position ${controllerWhile} read value = ${argumentList[controllerWhile]}`);
    controllerWhile++;
}


console.log('----------- running a "do while" ------------');

let controllerDoWhile = 0;
do{
    console.log(`position ${controllerDoWhile} read value = ${argumentList[controllerDoWhile]}`);
    controllerDoWhile++;
}
while(controllerDoWhile < argumentList.length);


console.log('----------- running a "FOR" ------------');

for(let controllerFor = 0; controllerFor < argumentList.length; controllerFor++){
    console.log(`position  ${controllerFor} read value = ${argumentList[controllerFor]}`);
}


console.log('----------- running a "FOR OF 01" ------------');

for(const argument1 of argumentList){
    console.log(`read value = ${argument1}`);
    
}

console.log('----------- running a "FOR OF" ------------');

for(const argument of argumentList){
    let controllerForOf = 0;
    console.log(`position ${controllerForOf} read value = ${argument}`);
    controllerForOf++
}

