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

