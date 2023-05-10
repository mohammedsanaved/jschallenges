// Booleans

//TODO A boolean data type represents one of the two values:_true_ or _false_. Boolean value is either true or false. The use of these data types will be clear when you start the comparison operator. Any comparisons return a boolean value which is either true or false.

// 'Droid Sans Mono', 'monospace', monospace

// Level: 1

let firstName = 'Mohaaa';
let lastName = 'Aladdin';
let country = 'United States';
let city = 'Washington';
let age = '23';
let isMarried = false;
let year = '2009';

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age)
console.log(typeof isMarried);
console.log(typeof year);

console.log('10' === 10);
console.log(parseInt('9.8') === 10);


// Write three JavaScript statement which provide truthy value.

// Truthy values
let num = 1;
let value = true;
let isRaining = false;
let isRuning = 'we are running';

// Write three JavaScript statement which provide falsy value.

// Falsy values

let isQuiz;
let stringer = '';
let zero = 0;
let one = null;

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log( 4 <= 3);
console.log(4 == 4);
console.log( 4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log( 4 == '4');
console.log('4' === 4);
let p = 'python';
let q = 'jargon';
console.log( p === q)


// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 === '4'))

const now = new Date()
const yearly = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
console.log(now)
console.log(yearly)
console.log(month);
console.log(date);
console.log(hours);

// let b = Number(prompt(`Enter Base`));
// let h = Number(prompt(`Enter Height`));
// let area = (0.5 * b * h)
// console.log(`Area of traingle ${area}`);

// let a = Number(prompt(`Enter A`));
// let x = Number(prompt(`Enter B`));
// let c = Number(prompt(`Enter C`));
// let perimeter = a + x + c;
// console.log(perimeter);


// let length = Number(prompt(`Enter length`));
// let width = Number(prompt(`Enter width`));
// let area = (length * width);
// console.log(`Area of rectangle ${area}`);

// let perimeter = length + width;
// console.log(`perimeter of rectangle ${perimeter}`);



// const pi = 3.14;
// let radius = Number(prompt(`radius`));
// let circumference = 2 * pi * radius;
// console.log(+(circumference.toFixed(2)));

// let hour = Number(prompt(`Enter hour`));
// let rateperhour = Number(prompt(`enter rate per hour `));
// let weeklyearnning = hour * rateperhour;
// console.log(`Your weekly earning is ${weeklyearnning}`);
// let firstname = prompt(`Enter your Firstname`);
// let lastname = prompt(`Enter your last name`);

// if (firstname.length > lastname.length) {
//     console.log(`Your first name is ${firstname} is longer than your last name, ${lastname}`)
// } else {
//     console.log(`Your first name is ${firstname} is shorter than your last name, ${lastname}`)
// }


let birthyear = Number(prompt('Enter your birth year'));
let ifage = 2023 - birthyear;
(ifage >= 18) ? console.log(`You are ${ifage} You are old enough to drive`) : console.log(`You are ${ifage} You are just a kid `);

window.confirm("your are my bestty");


