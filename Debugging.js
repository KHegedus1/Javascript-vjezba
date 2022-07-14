let a = 5;
let b = 1;
a++;
console.log(a);

let sumAB = a + b;
console.log(sumAB);


let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output);
console.clear();


//Note that in JavaScript, arrays are technically a type of object.
let seven = 7;
let three = "3";
console.log(seven + three);
console.log(typeof seven);
console.log(typeof three);


let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);


let myArray = [1, 2, 3];
let arraySum = myArray.reduce(((previous, current) =>  previous + current));
console.log(`Sum of array values is: ${arraySum}`);