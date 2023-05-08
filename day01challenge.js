let challenge = '30 Days Of Javascript';
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(3,));
console.log(challenge.includes('Script'));
console.log(challenge.split(' '));
let mncs = 'Facebook, Google, Twitter, Amazon, LinkedIn';
console.log(mncs.split(','))
console.log(challenge.replace('Javascript', 'Python'));
console.log(challenge.replace( 'Python','Javascript'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt('J'))
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));
console.log(challenge.indexOf('Of'));
console.log(challenge.search('30'));
console.log(challenge.trim(','));
console.log(challenge.match('a'));
let add = '30 Days of';
let add1 = 'Javascript';
let challenge1 = add.concat(add1);
console.log(challenge1);
console.log(challenge1.repeat(2));

// Level 2:

let sh = 'There is no exercise better for the heart than reaching down and lifting people up by John Holmes teaches us to help one another'
console.log(sh);
let mother = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(mother)


let num = 10;
console.log(typeof num);

let fl = 9.8;
console.log(fl === 10);
let check = 'python';
console.log(check.includes('on'));
let jargon = '_I hope this course is not full of jargon_. Check if _jargon_ is in the sentence'
console.log(jargon.includes('Jargon'));
let ranDom = Math.trunc(Math.random() * 100);
console.log(ranDom);

let ranDombetween = Math.trunc(Math.random() * 50) + 50;
console.log(ranDombetween);


let between255 = Math.trunc(Math.random() * 255);
console.log(between255);

const str = "JavaScript";
const randomNumber = Math.floor(Math.random() * str.length); // Generate a random number between 0 and the length of the string
const randomCharacter = str[randomNumber]; // Access the character at the randomly generated index
console.log(randomCharacter); // Print the randomly selected character

// let numb = prompt('');
// let s = Number(numb)
// let i = 1;
// while (i <= s) {
//     let j = 1;
//     while (j <= s) {
//         console.log(j*i);
//         j++;
//     }
//     console.log(`\n`); 
//     i++;
// }
console.log(`1 1 1 1 1 \n 2 1 2 4 16 \n 3 1 3 9 27 \n 4 1 4 16 64 \n 5 1 5 25 125`)

let sentenceof = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentenceof.indexOf('b'));
console.log(sentenceof.lastIndexOf('e'));
console.log(sentenceof.substring(31,54));
// Level 3:


let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love';


let count = 0;
let strtoarr = love.split(' ');
console.log(strtoarr);

for(let i = 0; i < strtoarr.length; i++){
    if(strtoarr[i] === 'love'){
        count++;
    }
}

console.log(count);
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence);
console.log(sentence.replace(/[^a-zA-Z0-9 ]/g,''));


let monthofsalary = 5000;
let annual = 10000;
let monthly = annual / 12;
console.log(monthly);
let courses = 15000;
let overallmonthlyincome = monthofsalary + courses;
let yearly = (overallmonthlyincome * 12) + annual;
console.log(yearly);

