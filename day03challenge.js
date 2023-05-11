let age =  Number(prompt("enter your age: "));
console.log(`Your Age is ${age} `);

if(age > 18) {
    console.log('You are old enough to drive');
} else {
    console.log(`wait for the number of ${18 - age} years he needs to turn 18. `)
}

let myAge = 25;
let yourAge = Number(prompt('enter your age: '));

if (myAge > yourAge) {
    console.log(`you are ${myAge - yourAge} year older then me`);
}
let a = 12;
let b = 1;

(a > b) ? console.log('a is greater then b') : console.log('a is less then b');

let number = Number(prompt('enter a number '));
if (number % 2 == 0) {
    console.log(`${number} is divisible by 2`)
} else {
    console.log(`${number} is not divisible by 2`)
}



let num = Number(prompt('enter a number'));

if (num % 2 == 0 && num < 15) {
    console.log('print A');
} else if (num % 2 == 0 && num > 15) {
    console.log('print B');
} else if (num % 2 != 0 && num < 10) {
    console.log('print C');
} else if (num % 2 != 0 && num > 10) {
    console.log('print D');
}
let myName = 'Sanaved';
myName = 'Mr'+" "+myName
console.log(myName);

let sum = 0;
let multiple = 1;

for (let i = 10; i <= 20; i++) {
    sum = sum + i;
    multiple = multiple * i;
}
console.log(sum);
console.log(multiple);

let user = prompt('Check the Current Season');
console.log(user);
if (user === 'September') {
    console.log(`the ${user} month is Autumn`);
} else if (user === 'Octuber') {
    console.log(`the ${user} month is Autumn`);
}  else if (user === 'November') {
    console.log(`the ${user} month is Autumn`);
}  else if (user === 'January') {
    console.log(`the ${user} month is Winter`);
}  else if (user === 'February') {
    console.log(`the ${user} month is Winter`);
}  else if (user === 'December') {
    console.log(`the ${user} month is Winter`);
}  else if (user === 'June') {
    console.log(`the ${user} month is Summer`);
}  else if (user === 'July') {
    console.log(`the ${user} month is Summer`);
}  else if (user === 'August') {
    console.log(`the ${user} month is Summer`);
}  else if (user === 'March') {
    console.log(`the ${user} month is Spring`);
}  else if (user === 'April') {
    console.log(`the ${user} month is Spring`);
}  else if (user === 'May') {
    console.log(`the ${user} month is Spring`);
}

