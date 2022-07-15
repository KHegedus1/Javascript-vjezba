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
    arr.splice(0,2,'DarkSalmon','BlanchedAlmond');
     return arr;
   }
   
   console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));


   