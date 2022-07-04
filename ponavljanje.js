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

function testLogicalAnd(val) {

  if (val <= 50 && val >= 25 ){  // &&-samo true
   
      return "Yes";
    }
  return "No";
}

testLogicalAnd(10);

function testLogicalOr(val) {

  if (val >20 || val <10) {      // ||-samo false
    return "Outside";
  }



  return "Inside";
}

testLogicalOr(15);

function testElse(val) {
  let result = "";

  if (val > 5) {
    result = "Bigger than 5";
  }else{
    result = "5 or Smaller";
  }

  return result;
}

testElse(4);

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }else if (val < 5) {
    return "Smaller than 5";
  }else{
  return "Between 5 and 10";
  }
}

testElseIf(7);

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

function testSize(num) {
  if(num <5){
    return "Tiny";
  }else if(num <10){
    return "Small";
  }else if(num <15){
    return "Medium";
  }else if(num <20){
    return "Large";
  }else
  return "Huge";
}

testSize(7);
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {

if (strokes < 2) {
return "Hole-in-one!";
} else if (par == par && strokes <= par-2) {
return "Eagle";
} else if (par == par && strokes <= par-1) {
return "Birdie";
} else if (par == par && strokes === par) {
return "Par";
} else if (par == par && strokes === par+1) {
return "Bogey";
} else if (par == par && strokes === par+2) {
return "Double Bogey";
} else if (par == par && strokes >= par+3) {
return "Go Home!";
} 
}

golfScore(5, 4);

function caseInSwitch(val) {
  let answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}
caseInSwitch(1);

function switchOfStuff(val) {
  var answer = "";

  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
  }

  return answer;
}

function sequentialSizes(val) {
  let answer = "";
  switch(val){
    case 1:
    case 2:
    case 3:
    answer = "Low";
    break;
    case 4:
    case 5:
    case 6:
    answer = "Mid";
    break;
    case 7:
    case 8:
    case 9:
    answer = "High";
  }
  return answer;
}

sequentialSizes(1);

function chainToSwitch(val) {
  let answer = "";

  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42: 
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
    case "John":
      answer = "";
      break;
    case 156:
      answer = "";
  }
  return answer;
}

chainToSwitch(7);

function isLess(a, b) {
  return a < b;
} 

isLess(10, 15);

function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

var count = 0;

function cc(card) {
  
  if (card == 2 || card == 3 || card == 4 || card ==5 || card ==6) {
    count += 1;
  }
  else if (card == 7 || card == 8 || card == 9) {
      count += 0;
  }
  else if (card == 10 || card == "J" || card == "Q" || card == "K" || card == "A") {
      count -= 1;
  }
  if (count <= 0) {
  	return String(count) + " Hold";
  }
  else {
  	return String(count) + " Bet";
  }
  
}
cc(2); cc(3); cc(7); cc('K'); cc('A');
  
const myDog = {
  name: "sgasga",
  legs: 4,
  tails:1,
  friends:[2]  // ne ide nista na kraj
};

const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

const hatValue = testObj.hat;      
const shirtValue = testObj.shirt;    

+const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

const entreeValue = testObj["an entree"];   
const drinkValue = testObj["the drink"];    

const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

const playerNumber = 16;  
const player = testObj[playerNumber];   

const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.name = "Happy Coder";

const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "woof";


const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

delete myDog.tails;


function phoneticLookup(val) {
  let result = "";

  var lookup = {
    "alpha":"Adams",
    "bravo":"Boston",
    "charlie":"Chicago",
    "delta":"Denver",
    "echo":"Easy",
    "foxtrot":"Frank"
  };
  result = lookup[val];

  return result;
}

phoneticLookup("charlie"); 

function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [ "CD","8T", "LP" ],
    "gold": true
  },
  {
    "artist": "sgs sgs",
    "title": "safs safasf",
    "release_year": 2000,
    "formats": [ "CD","8T", "LP" ],
  }
];

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
const gloveBoxContents = myStorage.car.inside["glove box"];

const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}


updateRecords(recordCollection, 5439, 'artist', 'ABBA');

const myArray = [];

let i = 5;
while(i >= 0) {
  myArray.push(i);
  i--;
}

const myArray = [];

for(var i=1;i<6;i++){
myArray.push(i);
}

const myArray = [];

for (var i=1;i<10;i+=2){
    myArray.push(i);
  }

  const myArray = [];

for(var i=9;i>0;i-=2){
  myArray.push(i);
}

const myArr = [2, 3, 4, 5, 6];

var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

function multiplyAll(arr) {
  let product = 1;
  for (var i=0; i < arr.length; i++) {
for (var a=0; j < arr[i].length; a++) {
  product *= arr[i][a];
}}
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

const myArray = [];
let i = 10;

do {
  myArray.push(i);
  i++;
}while (i<11);

function sum(arr, n) {
  if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}

  // Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(firstName, prop){
  for (var c =0; c<contacts.length; c++){
    if (contacts[c]["firstName"] === firstName){
      if (contacts[c].hasOwnProperty(prop)){
        return contacts[c][prop];
      } else {
      return "No such property";
      }
    }
    
  }
return "No such contact";
}


lookUpProfile("Akira", "likes");

function randomFraction() {


  return Math.random();

}

function randomWholeNum() {

  Math.floor(Math.random() * 10);
  
    return Math.floor(Math.random() * 10);
  }

  function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  }

  function convertToInteger(str) {
    return parseInt(str);
  }
  
  convertToInteger("56");

  function convertToInteger(str) {
    return parseInt(str, 2);
  }
  convertToInteger("10011");

  function checkEqual(a, b) {
    return a == b ? "Equal" : "Not Equal";
  
  }
  
  checkEqual(1, 2);

  function checkSign(num) {
    return (num > 0) ? "positive"
    :      (num < 0) ? "negative"
    :       "zero";
   }
   
   checkSign(10);