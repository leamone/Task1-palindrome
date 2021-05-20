import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Please enter a word: ', function (answer) {
    const cleanedUpString = answer.replace(/ /g, '').toLowerCase();
    const invertedString = cleanedUpString.split('').reverse().join('');

    if (invertedString === cleanedUpString) {
        console.log(`${answer} is palindrome`);
    } else {
        console.log(`${answer} is NOT a palindrome`);
    }
    rl.close();
});