for (let i = 2; i <= 10; i += 2) {
    console.log(i)
}

for (let i = 50; i >= 1; i -= 10) {
    console.log(i)
}

let animals = ['cat', 'bear', 'dog', 'dog', 'cat', 'horse']
/*Loop from beginning */
for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i])
}
/*Loop from end */
for (let i = animals.length - 1; i >= 0; i--) {
    console.log(i, animals[i])
}
/* nested loop*/
for (let i = 1; i <= 5; i++) {
    console.log(`i is : ${i}`)
    for (let j = 1; j <= 3; j++) {
        console.log(`   j is : ${j}`)
    }
}
/* Loop over array element*/
let ans = [['cat', 'bear', 'dog', 'dog', 'cat', 'horse'], [1, 2, 3, 4, 5], ['aa', 'bb', 'cc', 'dd']]
for (let i = 0; i < ans.length; i++) {
    const rows = ans[i];
    console.log(`Row is: ${i + 1}`)
    for (let j = 0; j < rows.length; j++) {
        console.log(rows[j])
    }
}

/*While Loop*/
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}
/* loop over a array*/
let c = 0;
while (c < animals.length) {
    console.log(animals[c])
    c++;
}

// const secretCode = 'Tim';
// let guess = prompt('Enter your secret code')
// while (guess != secretCode) {
//     guess = prompt('Enter your secret code')
// }
// console.log('Congrat! You got it!')

// let input = prompt('Say somthing:')
// while (true) {
//     input = prompt(input)
//     if (input.toLowerCase() === 'stop copying me') break;
// }
// console.log('You win!')

// Basic loop: Loop ...of
// for (sub of animals) {
//     console.log(`Visit reddit.com/r/${sub}`)
// }
// Nested loop over a array element: Loop ...of
// for (let row of ans) {
//     for (let element of row) {
//         console.log(element)
//     }
// }
//loop over a string
// for (let str of 'hello world') {
//     console.log(str)
// }

//Loop over a object using For ..in
const testScores = {
    Dav: 80,
    Tim: 20,
    Chris: 90,
    Amy: 100,
    Joe: 90,
    Jay: 89
}
for (let ele in testScores) {
    console.log(`${ele} scored is ${testScores[ele]}`)
}

//sum of the key value
let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}
console.log(`Total scores is ${total}`)
console.log(`Average scores is ${Math.floor(total / scores.length)}`)
