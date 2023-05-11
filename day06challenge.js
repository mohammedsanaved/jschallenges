function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    return sum
  }
  console.log(sumTwoNumbers(12,12));


function sumall () {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum;
}
console.log(sumall(1,2,3,4,5,6,7,8,9,10));

function evensandOdds (num) {
    let sum = 0;
    let arr = [];
    for (let i = 1; i <= num  ; i++) {
        if(i % 2 === 0){
            arr.push(i)
        } 
    }
    console.log(`the even number are ${arr.length}`);
}
console.log(evensandOdds(25));


function ajay() {
    let jmaa = 0;
    for (let i = 0; i < arguments.length; i++) {
        jmaa += arguments[i]
    }
    console.log(jmaa)
}
console.log(ajay(1,2,3,4));

function rgb() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.trunc(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`
}
console.log(rgb());


function getRandomHexColor() {
    // Generate three random numbers between 0 and 255
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
  
    // Convert the RGB values to a hex string
    const hex = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  
    return hex;
  }
  console.log(getRandomHexColor());

