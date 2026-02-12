function findCube(num) {
    if (typeof num !== 'number' || !Number.isInteger(num) || num <= 0) {
        return null;
    }
    return num * num * num;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Please enter a positive integer:');
readline.question('', (answer) => {
    const num = Number(answer);
    const cube = findCube(num);
    if (cube === null) {
        console.log('Please provide a positive integer');
    } else {
        console.log(cube);
    }
    readline.close();
});