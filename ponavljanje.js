// This is an in-line comment.

/* This is a
multi-line comment */

var imeVarijable; // Ne smiju imati razmake niti pocinjati s brojem.

imeVarijable=5;

var assigmentOperator = 5; 



var prva;

prva = 3;

var druga;

druga = prva; //mora ici druga pa prva

var myFirstName = "Qrsars";
var myLastName = "Asfsfs";

var a;
var b;
var c;

a= 5;
b= 10;
c= "I am a";
a = a + 1;
b = b + 5;
c = c + " String!"; // varijable imaju pocetnu vrijednost undefined

let nepromjenjiva = "s"; // za razliku od var,let se ne moze overwriteati

const READONLY = 2; //read only-pisemo velikim slovima

const sum = 10 + 5 + 5;

const difference = 45 - 33;

const product = 8 * 10;

const quotient = 66 / 33;

i++ ; // isto kao   i= i+1

i-- ; // isto kao   i= i-1

var myDecimal = 5.7;

const product = 2.0 * 2.5;

const quotient = 4.4 / 2.0;

var remainder = 11 % 3;

myVar = myVar + 5; // los nacin

let myVar = 1;
myVar += 5;        // istovremeno izvodi matematicku operaciju i jednakost
console.log(myVar);
myVar -= 5;        // -||-
myVar *= 5;        // -||-
myVar /= 5;        // -||-

const primjer = "Alan said, \"Peter is learning JavaScript\"."; // \ koristimo kako javascript ne bi prepoznao navodnike kao kraj navoda 

const myStr = " I am a \"double quoted\" string inside \"double quotes\".";

const doubleQuoteStr = "This is a string"; 

const singleQuoteStr = 'This is also a string';

const conversation = 'Finn exclaims to Jake, "Algebraic!"';

const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 

const badStr = 'Finn responds, "Let's go!"';

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';  // ako imamo kombinaciju ' i ",ne trebamo \
 
//Escape znakovi unutar stringa

\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; 

const myStr = "This is the start." + "This is the end.";

let myStr = "This is the first sentence."
myStr +=" This is the second sentence."

const myName = "Kristijan";
const myStr = "My name is" + myName +"and I am well!";

const someAdjective = "fun!";
let myStr = "Learning to code is ";

myStr += someAdjective;
 
let lastNameLength = 0;
const lastName = "Hsgdsg";

lastNameLength = lastName.length;


let firstLetterOfLastName = "";
const lastName = "Hsgdsg";

firstLetterOfLastName = lastName[0]; 

let myStr = "Jello World";

myStr = "Hello World"; //moramo promjeniti cijeli string,ne mozemo promjeniti samo jedno slovo

const lastName = "Hsgdsg";

const thirdLetterOfLastName = lastName[2];

const lastName = "Hsgdsg";

const lastLetterOfLastName = lastName[lastName.length - 1]; 

const lastName = "Hsgdsg";

const secondToLastLetterOfLastName = lastName[lastName.length -2]; 

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";

const myArray = ["rijec" , "druga rijec" ,4];

const myArray = [["prvi array" ,1],["drugi array",2]]; //nesting

const myArray = [50, 60, 70];
var myData  = myArray[0];

const myArray = [18, 64, 99];

myArray[0] = 45;

const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
const myData = myArray[2][1];

const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog",3]); //dodavanje na kraj varijable 

const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop(); // pop-brisanje zadnje stavke iz varijable

const myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift(); // shift-brisanje prve stavke iz varijable

const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

myArray.unshift(["Paul", 35]);           // unshift-dodavanje na pocetak varijable

const myList = [
    ["Cokolada" ,1],
    ["Mlijeko"  ,2],
    ["Ulje"     ,3],
    ["Brasno"   ,4],
    ["Maslac"   ,5]
    ];

function reusableFunction(){
        console.log("Hi World");
      }

reusableFunction();    

function functionWithArgs (arg1,arg2){
    console.log(arg1 + arg2);
  }
  functionWithArgs (1,2);
  
  function timesFive(arg){
    return arg * 5;
  }
  var rijesenje = timesFive(2);

  function fun1() {
    oopsGlobal =+ 5;
  }
  
  let myGlobal = 10;
  
  function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
      output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
      output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output); // varijabla je lokalna ako je unutar funckije,a globalna ako je izvan
  }

  function myLocalScope() {
    var myVar ="sfagas";
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  console.log('outside myLocalScope', myVar);

  const outerWear = "T-Shirt";

function myOutfit() {
  var outerWear ="sweater";
  return outerWear;
}

myOutfit();

let sum = 0;

function addThree() {
  sum = sum + 3;
}
function addFive(){
  sum = sum + 5;
}
addThree();
addFive();

let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);

function nextInLine(arr, item) {
    arr.push(item);
    var arr2 = arr.shift();
    return arr2;
  
  }
  
  const testArr = [1, 2, 3, 4, 5];
  
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

  function welcomeToBooleans() {

    return true; 
  
  }

  function trueOrFalse(wasThatTrue) {
    if (wasThatTrue){
      return "Yes, that was true"
    }
    return "No, that was false"
    } 

    function testEqual(val) {
      if (val == 12) { 
        return "Equal";
      }
      return "Not Equal";
    }
    
    testEqual(10);

    function testStrict(val) {
      if (val === 7) { 
        return "Equal";
      }
      return "Not Equal";
    }
    
    testStrict(10);

    function compareEquality(a, b) {
      if (a === b) {
        return "Equal";
      }
      return "Not Equal";
    }
    
    compareEquality(10, "10");

    
function testNotEqual(val) {
  if (val !=99) {
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);


function testStrictNotEqual(val) {
  if (val !== 17) { 
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

function testGreaterThan(val) {
  if (val >100) {  
    return "Over 100";
  }

  if (val >10) { 
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

function testGreaterOrEqual(val) {
  if (val >=20) {  
    return "20 or Over";
  }

  if (val >= 10) {  
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

function testLessThan(val) {
  if (val <25) {  
    return "Under 25";
  }

  if (val <55) {  
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

function testLessOrEqual(val) {
  if (val <=12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <=24) { 
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);