/*Ask user to input a maxinum number*/
let maxNum = parseInt(prompt('Enter a maximum number: '));
while (!maxNum) {
    maxNum = parseInt(prompt('Enter a valid number! '));
}
// creat a random number 
const tarNum = Math.floor(Math.random() * maxNum) + 1;
// create a counter to count how many times of attempts
let counter = 1;
let guess = parseInt(prompt('Enter your first guess: '))

while (parseInt(guess) !== tarNum) {
    if (guess == 'q') break;
    counter++;
    if (guess > tarNum) {
        guess = prompt('Too high, please enter agian.');
    } else {
        guess = prompt('Too low, please enter it again.');
    }
}

if (guess === 'q') {
    console.log('Ok, you quit!')
}
else {
    console.log(`Congrat, you got it! It took you ${counter} guesses`)
}


