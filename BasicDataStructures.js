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


  