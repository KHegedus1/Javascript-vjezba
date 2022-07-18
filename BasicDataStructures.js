let yourArray = ['one', 2, 'three', true, false, undefined, null];
console.log(yourArray.length);

let myArray = ["a", "b", "c", "d"];
myArray[1] = "Nova vrijednost";
console.log(myArray);


function mixedNumbers(arr) {
    arr.unshift('I',2,'three');
    arr.push(7,'VIII',9);
    return arr;
  }
   
  
  console.log(mixedNumbers(['IV', 5, 'six']));


  function popShift(arr) {
    let popped = arr.pop(); 
    let shifted =arr.shift(); 
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));


const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1,4); //drugi parametar odlucuje do koliko ide splice,ukljucuje i pocetni parametar
console.log(arr);


function htmlColorNames(arr) {
    arr.splice(0,2,'DarkSalmon','BlanchedAlmond'); //treci + parametar= dodavanje
     return arr;
   }
   
   console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick'])); 


   function forecast(arr) {

    return arr.slice(2,4);
  }
  
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


  function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
    newArr.push([...arr]);
    num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));


  function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning',...fragment,'is','fun']; 
    return sentence;
  }
  

  
  function quickCheck(arr, elem) {
    if (arr.indexOf(elem) >= 0)  {
      return true;
    }
    return false;
  }
  console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));


  function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(elem) == -1) {
        newArr.push(arr[i]);
      }
    }
  
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


  let myNestedArray = [
    ["unshift", false, 1, 2, 3, "complex", "nested"],
  ["loop", "shift", 6, 7, 1000, "method"],
  ["concat", false, true, "spread", "array", ["deep"]],
  ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
  ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]]
];


let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

foods["bananas"] = 13;
foods["grapes"] = 35;
foods["strawberries"] = 27;

console.log(foods);


